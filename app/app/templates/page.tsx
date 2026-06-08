
import { followUpSchedule } from '@/lib/lead-quote';

const schedule = followUpSchedule('roofing');

export default function TemplatesPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Templates</p>
        <h1>Follow-up that feels human.</h1>
        <p className="lead">Use an opinionated sequence so hot leads hear from you fast without the awkward manual chasing.</p>
      </section>
      <section className="card">
        <ul className="list">
          {schedule.map((step) => <li key={step}>{step}</li>)}
        </ul>
      </section>
    </main>
  );
}
