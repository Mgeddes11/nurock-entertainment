/**
 * HubSpot config – values from env (VITE_*). Fill .env when account is ready.
 */
export const hubspot = {
  meetingUrlSessions: import.meta.env.VITE_HUBSPOT_MEETING_URL_SESSIONS ?? "",
  meetingUrlLessons: import.meta.env.VITE_HUBSPOT_MEETING_URL_LESSONS ?? "",
  portalId: import.meta.env.VITE_HUBSPOT_PORTAL_ID ?? "",
  formGuid: import.meta.env.VITE_HUBSPOT_FORM_GUID ?? "",
} as const;

/** Contact form submissions go to Hollynurock@nurockentertainment.com via FormSubmit. Override with VITE_CONTACT_FORM_ENDPOINT if using Formspree/etc. */
export const contactFormEndpoint =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT ??
  "https://formsubmit.co/ajax/Hollynurock@nurockentertainment.com";
