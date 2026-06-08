
export default function FormsPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Lead form builder</p>
        <h1>Capture the right details up front.</h1>
        <p className="lead">Ask for the fields that matter: job type, location, urgency, photos, and preferred contact method.</p>
      </section>
      <section className="grid cols-2">
        <article className="card">
          <p className="kicker">Form fields</p>
          <ul className="list">
            <li>Full name</li>
            <li>Service requested</li>
            <li>Address or service area</li>
            <li>Budget range</li>
            <li>Upload photos</li>
            <li>Preferred contact method</li>
          </ul>
        </article>
        <article className="card">
          <p className="kicker">Why it matters</p>
          <ul className="list">
            <li>Higher-quality leads</li>
            <li>Less back-and-forth</li>
            <li>Better quote accuracy</li>
            <li>More booked jobs</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
