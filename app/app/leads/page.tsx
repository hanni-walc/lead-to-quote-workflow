
const rows = [
  ['Maya Chen', 'Google Ads', '92', 'hot', '$2,940 quote sent'],
  ['Jordan Diaz', 'Referral', '66', 'warm', '$1,520 quote drafted'],
  ['Alyssa Park', 'Instagram', '31', 'cold', 'Needs follow-up'],
  ['Noah Kim', 'Organic', '58', 'warm', '$3,100 quote queued'],
];

export default function LeadsPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Lead inbox</p>
        <h1>Every lead, sorted by urgency.</h1>
        <p className="lead">Prioritize hot inquiries first, keep warm leads moving, and never lose a follow-up in a text thread again.</p>
      </section>
      <section className="card">
        <table className="table">
          <thead><tr><th>Name</th><th>Source</th><th>Score</th><th>Stage</th><th>Next action</th></tr></thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                <td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td><td>{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
