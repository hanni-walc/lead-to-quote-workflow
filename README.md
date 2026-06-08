# Lead-to-Quote Workflow

Repo: `lead-to-quote-workflow`

## One-line pitch
Capture a lead, estimate the job, and send a quote fast.

## Buyer
contractors, cleaners, roofers, remodelers, photographers, local agencies

## Pain
Leads arrive inconsistently and quotes take too long.

## Monetization
Subscription per location or brand.

## Differentiator
Vertical templates for lead capture, quote language, and follow-up that close more jobs.

## What ships in v1
- Embedded lead form
- Quote template editor
- Auto follow-up
- Status pipeline
- Mobile-first lead review
- Booking handoff

## Screens
- Lead form builder
- Lead inbox
- Quote builder
- Pipeline board
- Template library
- Follow-up automation

## Routes
- `/`
- `/login`
- `/app`
- `/app/leads`
- `/app/quotes`
- `/app/forms`
- `/app/templates`
- `/f/[slug]`

## Deployment
Vercel, Postgres, Stripe, email/SMS providers, optional serverless cron for follow-up automation.

## Launch checklist
- Pick one vertical first, not all trades
- Write quote examples that sound real
- Focus on turning leads into booked jobs

## v2
- Photo upload estimate flow
- SMS quoting
- Deposits
- Calendar dispatch

## Local development
```bash
pnpm install
pnpm dev
```

## Environment variables
Copy `.env.example` and fill in the provider keys for auth, storage, email, and billing.

## Files that matter
- `app/page.tsx`
- `app/app/page.tsx`
- `app/api/health/route.ts`
- `lib/product.ts`
- `.github/workflows/ci.yml`
