/**
 * HubSpot config – values from env (VITE_*). Public meeting links fall back when env is unset (e.g. CI without vars).
 */
const DEFAULT_MEETING_URL = "https://meetings-na2.hubspot.com/matthew-geddes";

export const hubspot = {
  meetingUrlSessions:
    import.meta.env.VITE_HUBSPOT_MEETING_URL_SESSIONS ?? DEFAULT_MEETING_URL,
  meetingUrlLessons:
    import.meta.env.VITE_HUBSPOT_MEETING_URL_LESSONS ?? DEFAULT_MEETING_URL,
  portalId: import.meta.env.VITE_HUBSPOT_PORTAL_ID ?? "",
  formGuid: import.meta.env.VITE_HUBSPOT_FORM_GUID ?? "",
} as const;

/** Contact form submissions go to Hollynurock@nurockentertainment.com via FormSubmit. Override with VITE_CONTACT_FORM_ENDPOINT if using Formspree/etc. */
export const contactFormEndpoint =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT ??
  "https://formsubmit.co/ajax/Hollynurock@nurockentertainment.com";
