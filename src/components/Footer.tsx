export function Footer() {
  return (
    <footer>
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}
      >
        <div><strong>SOMA</strong> • Linhas editoriais, Podcasts e Performance</div>
        <div style={{ color: 'var(--muted)', fontSize: '14px' }}>
          Instagram: @soma.mktbr • <a href="mailto:soma.mktbr@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>soma.mktbr@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}