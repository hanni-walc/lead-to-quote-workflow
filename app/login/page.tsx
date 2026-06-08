
export default function LoginPage() {
  return (
    <main className="shell">
      <section className="frame hero" style={{ maxWidth: 760 }}>
        <p className="eyebrow">Sign in</p>
        <h1>Welcome back.</h1>
        <p className="lead">Use the same clean experience on desktop or mobile while you manage leads from the field or the office.</p>
        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <article className="card"><h3>Email</h3><p className="muted">you@company.com</p></article>
          <article className="card"><h3>Password</h3><p className="muted">••••••••</p></article>
        </div>
      </section>
    </main>
  );
}
