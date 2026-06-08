
import Link from 'next/link';
import { withBasePath } from "@/lib/site-path";

const stats = [
  { value: '14 min', label: 'Average quote time after intake' },
  { value: '+23%', label: 'More leads converted to booked jobs' },
  { value: '3 workflows', label: 'Lead capture, quote, follow-up' },
  { value: 'Mobile-first', label: 'Works in the field on any device' },
];

const verticals = [
  {
    name: 'Roofing',
    pain: 'Fast leads need instant quotes and a clear deposit path.',
    win: 'Photo uploads, rush pricing, and same-day follow-up.',
  },
  {
    name: 'Cleaning',
    pain: 'Jobs are small but frequent and easy to lose in text threads.',
    win: 'Simple packages, repeat scheduling, and reminder automation.',
  },
  {
    name: 'Photography',
    pain: 'Potential clients ask for package detail before they book.',
    win: 'Portfolio-led quotes with quick turnaround and date hold deposits.',
  },
];

export default function HomePage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Lead-to-Quote Workflow</p>
        <h1>Turn every inquiry into a quote fast.</h1>
        <p className="lead">
          A polished, mobile-first SaaS for contractors and local service businesses.
          Capture a lead, qualify it, send a quote, and follow up automatically so more inquiries become paid jobs.
        </p>
        <div className="row">
          <Link className="button" href={withBasePath('/app')}>Open demo dashboard</Link>
          <a className="ghost" href="#workflow">See the workflow</a>
        </div>
      </section>

      <section className="stats">
        {stats.map((item) => (
          <div className="stat" key={item.label}>
            <strong>{item.value}</strong>
            <span className="muted">{item.label}</span>
          </div>
        ))}
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Who it is for</p>
          <h2>Built for non-technical operators</h2>
          <p className="muted">
            This product is designed for owners and office managers who need a clean system,
            not a bloated CRM. It feels like a modern app, but it behaves like a revenue tool.
          </p>
          <ul className="list">
            <li>Lead forms embedded on your website</li>
            <li>Quote templates tailored to one vertical</li>
            <li>Auto-follow-up that keeps warm leads moving</li>
            <li>Mobile dashboard for fast replies in the field</li>
          </ul>
        </article>
        <article className="card">
          <p className="kicker">Why people pay</p>
          <h2>It directly improves cash flow</h2>
          <p className="muted">
            Every feature maps to a paid outcome: faster response times, fewer dropped leads,
            better quote quality, and fewer awkward manual follow-ups.
          </p>
          <div className="row">
            <span className="pill">Subscription per location</span>
            <span className="pill">Vertical-specific templates</span>
            <span className="pill">Deposit collection</span>
            <span className="pill">SMS/email follow-up</span>
          </div>
        </article>
      </section>

      <section id="workflow" className="grid cols-3" style={{ marginTop: 16 }}>
        {verticals.map((item) => (
          <article className="card" key={item.name}>
            <p className="kicker">Vertical</p>
            <h3>{item.name}</h3>
            <p className="muted"><strong>Pain:</strong> {item.pain}</p>
            <p className="muted"><strong>Win:</strong> {item.win}</p>
          </article>
        ))}
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Workflow</p>
          <h2>Three steps, no clutter</h2>
          <ol className="list">
            <li>Capture the lead with a clean form or embedded widget.</li>
            <li>Qualify it with a score and generate a quote from a template.</li>
            <li>Send the quote, request a deposit, and keep following up automatically.</li>
          </ol>
        </article>
        <article className="card">
          <p className="kicker">Deployment</p>
          <h2>Ready for production</h2>
          <ul className="list">
            <li>Next.js App Router</li>
            <li>Responsive layout for desktop, tablet, and phone</li>
            <li>Health endpoint for hosting checks</li>
            <li>CI, tests, and a clean repo structure</li>
          </ul>
        </article>
      </section>

      <section className="card" style={{ marginTop: 16 }}>
        <p className="kicker">Call to action</p>
        <h2>Ship the first vertical, then expand.</h2>
        <p className="footer-note">
          Start with one niche, one promise, one quote style, and one follow-up cadence.
          That is how this becomes a product people actually use.
        </p>
      </section>
    </main>
  );
}
