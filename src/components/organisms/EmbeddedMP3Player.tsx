import { useRef, useState, useEffect, useCallback } from "react";

export type PlayerTrack = {
  id: string;
  title: string;
  artist?: string;
  src: string;
  imageUrl?: string;
};

type Props = {
  tracks: PlayerTrack[];
  /** Optional: play a watermark/overlay audio while a track is playing */
  onPlayPauseChange?: (isPlaying: boolean) => void;
  className?: string;
};

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function EmbeddedMP3Player({
  tracks,
  onPlayPauseChange,
  className = "",
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentIndexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  currentIndexRef.current = currentIndex;
  const currentTrack = tracks[currentIndex];

  // Set initial source when tracks load or currentIndex changes from external load
  useEffect(() => {
    if (!audioRef.current || !currentTrack) return;
    audioRef.current.src = currentTrack.src;
    audioRef.current.load();
    setCurrentTime(0);
    setDuration(0);
    if (isPlaying) audioRef.current.play().catch(() => {});
  }, [currentTrack?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadTrack = useCallback((index: number) => {
    if (index < 0 || index >= tracks.length) return;
    setCurrentIndex(index);
  }, [tracks.length]);

  useEffect(() => {
    if (!audioRef.current || tracks.length === 0) return;
    const audio = audioRef.current;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      const idx = currentIndexRef.current;
      if (idx < tracks.length - 1) {
        setCurrentIndex(idx + 1);
      } else {
        setIsPlaying(false);
        setCurrentTime(0);
        onPlayPauseChange?.(false);
      }
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, [tracks.length, onPlayPauseChange]);

  useEffect(() => {
    if (!audioRef.current || tracks.length === 0) return;
    audioRef.current.volume = volume;
  }, [volume]);

  const togglePlayPause = () => {
    if (!audioRef.current || !currentTrack) return;
    if (isPlaying) {
      audioRef.current.pause();
      onPlayPauseChange?.(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        onPlayPauseChange?.(true);
      }).catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, x / rect.width));
    audioRef.current.currentTime = pct * duration;
    setCurrentTime(pct * duration);
  };

  const goPrev = () => {
    if (currentTime > 2) {
      audioRef.current!.currentTime = 0;
      setCurrentTime(0);
    } else if (currentIndex > 0) {
      loadTrack(currentIndex - 1);
    }
  };

  const goNext = () => {
    if (currentIndex < tracks.length - 1) {
      loadTrack(currentIndex + 1);
    } else if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentTime(0);
      onPlayPauseChange?.(false);
    }
  };

  if (tracks.length === 0) {
    return (
      <div
        className={`rounded-2xl bg-base-200/95 border border-base-content/10 p-8 text-center text-base-content/60 ${className}`}
      >
        <p>No tracks to play. Add MP3s and refresh.</p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl bg-base-200/95 border border-base-content/10 overflow-hidden shadow-xl ${className}`}
    >
      <audio ref={audioRef} preload="metadata" />
      <div className="flex flex-col md:flex-row">
        {/* Art + now playing */}
        <div className="flex items-center gap-4 p-6 md:w-72 shrink-0">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-base-300 shrink-0 overflow-hidden">
            {currentTrack?.imageUrl ? (
              <img
                src={currentTrack.imageUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-5xl">music_note</span>
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-base-content truncate">
              {currentTrack?.title ?? "—"}
            </p>
            <p className="text-sm text-base-content/60 truncate">
              {currentTrack?.artist ?? "NuRock"}
            </p>
          </div>
        </div>
        {/* Controls + progress */}
        <div className="flex-1 p-6 pt-0 md:pt-6 md:pl-0 flex flex-col justify-center">
          <div className="flex items-center justify-center gap-4 mb-3">
            <button
              type="button"
              onClick={goPrev}
              className="w-10 h-10 rounded-full bg-base-300 hover:bg-base-content/20 flex items-center justify-center text-base-content transition-colors"
              aria-label="Previous"
            >
              <span className="material-symbols-outlined">skip_previous</span>
            </button>
            <button
              type="button"
              onClick={togglePlayPause}
              className="w-14 h-14 rounded-full bg-primary text-primary-content hover:opacity-90 flex items-center justify-center transition-opacity"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              <span className="material-symbols-outlined text-3xl">
                {isPlaying ? "pause" : "play_arrow"}
              </span>
            </button>
            <button
              type="button"
              onClick={goNext}
              className="w-10 h-10 rounded-full bg-base-300 hover:bg-base-content/20 flex items-center justify-center text-base-content transition-colors"
              aria-label="Next"
            >
              <span className="material-symbols-outlined">skip_next</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-base-content/60 w-10 text-right">
              {formatTime(currentTime)}
            </span>
            <div
              role="slider"
              tabIndex={0}
              aria-valuemin={0}
              aria-valuemax={duration}
              aria-valuenow={currentTime}
              className="flex-1 h-2 rounded-full bg-base-content/20 cursor-pointer group"
              onClick={seek}
            >
              <div
                className="h-full rounded-full bg-primary transition-all group-hover:bg-primary/90"
                style={{ width: duration ? `${(currentTime / duration) * 100}%` : "0%" }}
              />
            </div>
            <span className="text-xs text-base-content/60 w-10">
              {formatTime(duration)}
            </span>
          </div>
          {/* Volume */}
          <div className="flex items-center gap-2 mt-3">
            <span className="material-symbols-outlined text-base-content/60 text-lg">
              volume_up
            </span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="flex-1 h-1.5 rounded-full appearance-none bg-base-content/20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
            />
          </div>
        </div>
      </div>
      {/* Track list */}
      {tracks.length > 1 && (
        <div className="border-t border-base-content/10 max-h-48 overflow-y-auto">
          {tracks.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => loadTrack(i)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ${
                i === currentIndex
                  ? "bg-primary/20 text-primary"
                  : "hover:bg-base-content/5 text-base-content/80"
              }`}
            >
              <span className="text-sm w-6">{i + 1}</span>
              <div className="min-w-0 flex-1">
                <p className="font-medium truncate">{t.title}</p>
                <p className="text-xs text-base-content/60 truncate">
                  {t.artist ?? "NuRock"}
                </p>
              </div>
              {i === currentIndex && isPlaying && (
                <span className="material-symbols-outlined text-primary">graphic_eq</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
