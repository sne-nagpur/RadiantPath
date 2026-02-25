import { Section, SectionHead } from "../components/SECTION";
import { FEATURES } from "../components/FEATURES";
export function FeaturesPage({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg,#1e1b4b,#0f2040,#070e1c)", padding: "140px 32px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "rgba(99,102,241,0.18)", filter: "blur(120px)", top: "-300px", left: "50%", transform: "translateX(-50%)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="section-tag light">Platform Features</div>
          <h1 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,5vw,3.5rem)", color: "#fff", margin: "12px auto", maxWidth: 680, lineHeight: 1.15 }}>
            Enterprise Power, <span className="gradient-text">Zero Complexity</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", maxWidth: 520, margin: "0 auto" }}>
            Every RadiantPath product is built on a shared foundation of security, scalability, and intelligence.
          </p>
        </div>
      </div>

      <Section style={{ background: "#fff" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 28 }}>
          {FEATURES.map((f, i) => (
            <div key={i} className="feature-card anim-fade-up" style={{ animationDelay: `${i * 0.09}s`, textAlign: "left", padding: "40px 32px" }}>
              <div style={{ width: 72, height: 72, borderRadius: 20, background: f.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, marginBottom: 22 }}>{f.icon}</div>
              <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#0f172a", marginBottom: 12 }}>{f.title}</h3>
              <p style={{ color: "#64748b", fontSize: "0.93rem", lineHeight: 1.75 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section style={{ background: "#f8fafc" }} className="grid-bg">
        <SectionHead tag="How We Compare" title="RadiantPath vs. Off-the-Shelf Software" sub="See why businesses choose a customized approach over generic products." />
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
            <thead>
              <tr style={{ background: "linear-gradient(135deg,#1d6af5,#6366f1)" }}>
                <th style={{ padding: "20px 24px", textAlign: "left", color: "#fff", fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>Feature</th>
                <th style={{ padding: "20px 24px", textAlign: "center", color: "#fff", fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>RadiantPath</th>
                <th style={{ padding: "20px 24px", textAlign: "center", color: "rgba(255,255,255,0.7)", fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>Generic Software</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Fully Customizable", "✅ 100% tailored", "❌ Fixed features"],
                ["Hardware Integration", "✅ Native & seamless", "⚠️ Third-party plugins"],
                ["24/7 Dedicated Support", "✅ Direct line to devs", "❌ Ticket queues"],
                ["Local Language Support", "✅ On request", "❌ Rarely available"],
                ["Cloud & On-Premise", "✅ Both options", "⚠️ Usually cloud-only"],
                ["Pricing", "✅ Transparent, fair", "❌ Hidden module fees"],
              ].map(([feat, us, them], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f8fafc" : "#fff", borderBottom: "1px solid #e8f0fe" }}>
                  <td style={{ padding: "18px 24px", fontWeight: 600, color: "#374151", fontSize: "0.93rem" }}>{feat}</td>
                  <td style={{ padding: "18px 24px", textAlign: "center", color: "#16a34a", fontWeight: 600, fontSize: "0.9rem" }}>{us}</td>
                  <td style={{ padding: "18px 24px", textAlign: "center", color: "#6b7280", fontSize: "0.9rem" }}>{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Tech stack */}
      <Section style={{ background: "linear-gradient(135deg,#070e1c,#0f2040)" }}>
        <SectionHead tag="Our Technology" title="Built on Modern, Proven Tech" light sub="We use battle-tested technologies to ensure reliability, security, and performance." />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
          {["React.js", "Node.js", "Python", "MySQL", "MongoDB", "REST APIs", "Cloud AWS", "Docker", "Linux", "SSL/TLS"].map((t) => (
            <div key={t} className="glass-card" style={{ padding: "12px 24px", color: "#93c5fd", fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.04em", cursor: "default", transition: "all 0.25s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(59,130,246,0.15)"; e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            >{t}</div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <button className="btn-primary" onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }}>
            Get a Technical Consultation
          </button>
        </div>
      </Section>
    </div>
  );
}
