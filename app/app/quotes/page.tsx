
import { buildQuote, recommendedDepositPercent } from '@/lib/lead-quote';

const quote = buildQuote({
  basePrice: 2400,
  addOns: [
    { label: 'Drone inspection', price: 300 },
    { label: 'Rush turnaround', price: 200 },
  ],
  taxRate: 0.0825,
  depositRate: recommendedDepositPercent('hot'),
});

export default function QuotesPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Quote builder</p>
        <h1>Fast, repeatable quotes.</h1>
        <p className="lead">Template pricing, add-ons, tax, and deposit all calculate automatically so the team can send a polished quote in minutes.</p>
      </section>

      <section className="grid cols-2">
        <article className="card">
          <p className="kicker">Line items</p>
          <table className="table">
            <tbody>
              {quote.lines.map((line) => (
                <tr key={line.label}><td>{line.label}</td><td>${line.price.toFixed(2)}</td></tr>
              ))}
            </tbody>
          </table>
        </article>
        <article className="card">
          <p className="kicker">Totals</p>
          <table className="table">
            <tbody>
              <tr><td>Subtotal</td><td>${quote.subtotal.toFixed(2)}</td></tr>
              <tr><td>Tax</td><td>${quote.tax.toFixed(2)}</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>${quote.total.toFixed(2)}</strong></td></tr>
              <tr><td>Deposit due</td><td>${quote.depositDue.toFixed(2)}</td></tr>
            </tbody>
          </table>
        </article>
      </section>
    </main>
  );
}
