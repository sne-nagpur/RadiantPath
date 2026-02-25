import { Section } from "../components/SECTION";
import { SOLUTIONS } from "../components/SOLUTIONS";

export function SolutionsPage({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg,#070e1c,#0f2040)", padding: "140px 32px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
          <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "rgba(29,106,245,0.15)", filter: "blur(100px)", top: "-200px", right: 0 }} />
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="section-tag light">Solutions</div>
          <h1 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,5vw,3.5rem)", color: "#fff", margin: "12px auto", maxWidth: 680, lineHeight: 1.15 }}>
            Software That Solves <span className="gradient-text">Real Problems</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", maxWidth: 520, margin: "0 auto" }}>
            Six battle-tested products designed to replace paperwork, spreadsheets, and guesswork — with intelligent automation.
          </p>
        </div>
      </div>

      <Section style={{ background: "#f8fafc" }} className="grid-bg">
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          {SOLUTIONS.map((s, i) => (
            <div key={i} className="about-card card-hover anim-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 28, alignItems: "start" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, minWidth: 80 }}>
                  <div className="sol-num">{i + 1}</div>
                  <div style={{ width: 72, height: 72, borderRadius: 20, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>{s.icon}</div>
                </div>
                <div>
                  <div style={{ marginBottom: 4 }}>
                    <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "#0f172a" }}>{s.title}</span>
                    <span style={{ marginLeft: 12, color: "#64748b", fontSize: "0.9rem" }}>{s.subtitle}</span>
                  </div>
                  <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 20, maxWidth: 740 }}>{s.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                    {s.tags.map((t) => (
                      <span key={t} style={{ background: "#eff6ff", color: "#1d4ed8", fontSize: "0.75rem", fontWeight: 700, padding: "5px 14px", borderRadius: 100, border: "1px solid #bfdbfe" }}>{t}</span>
                    ))}
                  </div>
                  <button className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.83rem" }} onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }}>
                    Request Demo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Hardware Partner */}
      <div style={{ background: "linear-gradient(135deg,#0ea5e9,#0891b2,#0c4a6e)", padding: "72px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🖥️</div>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "2rem", color: "#fff", marginBottom: 16 }}>
            Need Hardware Too?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 32 }}>
            Our sister company <strong>Shee Nithya Enterprises</strong> provides biometric devices, CCTV, networking, and complete IT infrastructure — seamlessly integrated with all our software products.
          </p>
          <button className="btn-primary" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", border: "1.5px solid rgba(255,255,255,0.3)", boxShadow: "none" }} onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }}>
            Enquire About Hardware
          </button>
        </div>
      </div>
    </div>
  );
}
