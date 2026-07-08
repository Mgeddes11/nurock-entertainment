declare module "react-pro-audio-player" {
  import type { FC } from "react";
  interface CustomAudioPlayerProps {
    initialSongs?: Array<{ src: string; name?: string; singer?: string; thumbnail?: string }>;
    songUrlKey?: string;
    songNameKey?: string;
    songSingerKey?: string;
    songThumbnailKey?: string;
    onPlayPauseChange?: (isPlaying: boolean) => void;
    onSongChange?: (index: number | null) => void;
  }
  const CustomAudioPlayer: FC<CustomAudioPlayerProps>;
  export default CustomAudioPlayer;
}
