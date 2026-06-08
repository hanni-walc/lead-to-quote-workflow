export const TITLE = "Lead-to-Quote Workflow";
export const PROMISE = "Capture a lead, estimate the job, and send a quote fast.";
export const BUYER = "contractors, cleaners, roofers, remodelers, photographers, local agencies";
export const PAIN = "Leads arrive inconsistently and quotes take too long.";
export const PRICING = "Subscription per location or brand.";
export const WEDGE = "Vertical templates for lead capture, quote language, and follow-up that close more jobs.";
export const DEPLOY = "Vercel, Postgres, Stripe, email/SMS providers, optional serverless cron for follow-up automation.";
export const MVP = [
  "Embedded lead form",
  "Quote template editor",
  "Auto follow-up",
  "Status pipeline",
  "Mobile-first lead review",
  "Booking handoff"
];
export const SCREENS = [
  "Lead form builder",
  "Lead inbox",
  "Quote builder",
  "Pipeline board",
  "Template library",
  "Follow-up automation"
];
export const ROUTES = [
  "/",
  "/login",
  "/app",
  "/app/leads",
  "/app/quotes",
  "/app/forms",
  "/app/templates",
  "/f/[slug]"
];
export const LAUNCH = [
  "Pick one vertical first, not all trades",
  "Write quote examples that sound real",
  "Focus on turning leads into booked jobs"
];
export const V2 = [
  "Photo upload estimate flow",
  "SMS quoting",
  "Deposits",
  "Calendar dispatch"
];
export const product = {
  title: TITLE,
  promise: PROMISE,
  buyer: BUYER,
  pain: PAIN,
  pricing: PRICING,
  wedge: WEDGE,
  deploy: DEPLOY,
  mvp: MVP,
  screens: SCREENS,
  routes: ROUTES,
  launch: LAUNCH,
  v2: V2,
  stack: ["Next.js", "TypeScript", "Postgres", "Stripe", "Vercel"],
};
