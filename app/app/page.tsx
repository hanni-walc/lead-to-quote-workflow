
import { demoLeadToQuoteWorkflow, pipelineHealth } from '@/lib/lead-quote';

const leads = [
  { name: 'Maya Chen', source: 'Google Ads', score: 92, vertical: 'roofing' },
  { name: 'Jordan Diaz', source: 'Referral', score: 66, vertical: 'cleaning' },
  { name: 'Alyssa Park', source: 'Instagram', score: 31, vertical: 'photography' },
  { name: 'Noah Kim', source: 'Organic', score: 58, vertical: 'roofing' },
];

const workflow = demoLeadToQuoteWorkflow();
const metrics = pipelineHealth(leads);

export default function DashboardPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Workspace dashboard</p>
        <h1>Lead-to-Quote control center</h1>
        <p className="lead">
          See incoming leads, quote quality, and follow-up cadence in one place. This dashboard is designed to feel calm on desktop and still work on a phone in the field.
        </p>
      </section>

      <section className="stats">
        <div className="stat"><strong>{metrics.hot}</strong><span className="muted">Hot leads</span></div>
        <div className="stat"><strong>{metrics.warm}</strong><span className="muted">Warm leads</span></div>
        <div className="stat"><strong>{metrics.cold}</strong><span className="muted">Cold leads</span></div>
        <div className="stat"><strong>${workflow.quote.total.toFixed(2)}</strong><span className="muted">Example quote total</span></div>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Today’s lead</p>
          <h2>{workflow.lead.name}</h2>
          <p className="muted">{workflow.lead.requestedService} · {workflow.lead.location}</p>
          <div className="row">
            <span className="pill">Source: {workflow.lead.source}</span>
            <span className="pill">Stage: {workflow.stage}</span>
            <span className="pill">Score: {workflow.lead.score}</span>
          </div>
          <ul className="list">
            {workflow.schedule.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="card">
          <p className="kicker">Quote preview</p>
          <h2>Auto-calculated quote</h2>
          <table className="table">
            <tbody>
              {workflow.quote.lines.map((line) => (
                <tr key={line.label}>
                  <td>{line.label}</td>
                  <td>${line.price.toFixed(2)}</td>
                </tr>
              ))}
              <tr><td>Tax</td><td>${workflow.quote.tax.toFixed(2)}</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>${workflow.quote.total.toFixed(2)}</strong></td></tr>
              <tr><td>Deposit due</td><td>${workflow.quote.depositDue.toFixed(2)}</td></tr>
            </tbody>
          </table>
        </article>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Lead inbox</p>
          <h2>Pipeline view</h2>
          <table className="table">
            <thead>
              <tr><th>Name</th><th>Source</th><th>Score</th><th>Stage</th></tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.name}>
                  <td>{lead.name}</td>
                  <td>{lead.source}</td>
                  <td>{lead.score}</td>
                  <td>{lead.score >= 85 ? 'hot' : lead.score >= 55 ? 'warm' : 'cold'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
        <article className="card">
          <p className="kicker">Operational notes</p>
          <h2>What the owner sees</h2>
          <ul className="list">
            <li>Fast quotes without spreadsheet chaos</li>
            <li>Follow-up rules that prevent leads from going stale</li>
            <li>Clear deposit and booking handoff for the office team</li>
            <li>A mobile-friendly experience that works from the truck</li>
          </ul>
          <p className="footer-note">
            The first vertical can be swapped without changing the underlying workflow.
          </p>
        </article>
      </section>
    </main>
  );
}
