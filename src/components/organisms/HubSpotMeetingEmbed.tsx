type Props = {
  meetingUrl: string;
  className?: string;
};

export function HubSpotMeetingEmbed({ meetingUrl, className = "" }: Props) {
  if (!meetingUrl) {
    return (
      <div className={`rounded-lg border border-white/10 bg-white/5 p-8 text-center text-white/50 ${className}`}>
        <p>Add your HubSpot meeting URL in .env (VITE_HUBSPOT_MEETING_URL_SESSIONS or VITE_HUBSPOT_MEETING_URL_LESSONS) to see the booking widget.</p>
      </div>
    );
  }

  return (
    <iframe
      src={meetingUrl}
      title="Book a session"
      className={`w-full min-h-[700px] rounded-lg border border-white/10 ${className}`}
    />
  );
}
