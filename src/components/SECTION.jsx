
 export function Section({ children, style = {}, className = "" }) {
  return (
    <section className={className} style={{ padding: "96px 32px", ...style }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

export function SectionHead({ tag, title, sub, light }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 60 }}>
      <div className={`section-tag ${light ? "light" : ""}`}>{tag}</div>
      <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontFamily: "'Outfit',sans-serif", fontWeight: 800, color: light ? "#fff" : "#0f172a", lineHeight: 1.15 }}>{title}</h2>
      {sub && <p style={{ color: light ? "rgba(255,255,255,0.6)" : "#64748b", marginTop: 14, fontSize: "1rem", maxWidth: 580, margin: "14px auto 0" }}>{sub}</p>}
    </div>
  );
}