/**
 * HubSpot + contact form config.
 * Empty CI vars must fall back with || (?? only catches null/undefined).
 *
 * HubSpot meeting notifications must also be set in HubSpot to
 * Hollynurock@nurockentertainment.com (Meetings → Edit → Notifications).
 */
const DEFAULT_MEETING_URL = "https://meetings-na2.hubspot.com/matthew-geddes";
const NUROCK_EMAIL = "Hollynurock@nurockentertainment.com";

export const hubspot = {
  meetingUrlSessions:
    import.meta.env.VITE_HUBSPOT_MEETING_URL_SESSIONS || DEFAULT_MEETING_URL,
  meetingUrlLessons:
    import.meta.env.VITE_HUBSPOT_MEETING_URL_LESSONS || DEFAULT_MEETING_URL,
  portalId: import.meta.env.VITE_HUBSPOT_PORTAL_ID || "",
  formGuid: import.meta.env.VITE_HUBSPOT_FORM_GUID || "",
} as const;

/** Contact + booking requests go to NuRock email via FormSubmit. */
export const contactFormEndpoint =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT ||
  `https://formsubmit.co/ajax/${NUROCK_EMAIL}`;

export const nurockEmail = NUROCK_EMAIL;
