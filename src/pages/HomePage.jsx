import { HeroSlider } from "../components/TeamSlider";
import { Section, SectionHead } from "../components/SECTION";
import { SOLUTIONS } from "../components/SOLUTIONS";

import { StatsBar } from "../components/STATS";
import { FEATURES } from "../components/FEATURES";
export function HomePage({ setPage }) {
  return (
    <div>
      <HeroSlider setPage={setPage} />

      {/* Services Quick Strip */}
      <div style={{ background: "#0f2040", padding: "24px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
          {["HRMS", "Web Attendance", "Visitor Mgmt", "Headcount", "Custom Software", "Hardware Integration"].map((s) => (
            <div key={s} style={{
              display: "flex", alignItems: "center", gap: 8,
              color: "#93c5fd", fontSize: "0.85rem", fontFamily: "'Outfit',sans-serif", fontWeight: 600,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b82f6", display: "inline-block" }} />
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* Solutions Preview */}
      <Section style={{ background: "#f8fafc" }} className="grid-bg">
        <SectionHead tag="Our Core Solutions" title="Technology That Works For You" sub="Six flagship products designed to automate, integrate, and accelerate your business operations." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 28 }}>
          {SOLUTIONS.slice(0, 3).map((s, i) => (
            <div key={i} className="solution-card anim-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="icon-badge" style={{ background: s.color, marginBottom: 20 }}>{s.icon}</div>
              <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#0f172a", marginBottom: 8 }}>{s.title}</h3>
              <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.7 }}>{s.desc.slice(0, 110)}...</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
                {s.tags.map((t) => <span key={t} style={{ background: "#eff6ff", color: "#1d4ed8", fontSize: "0.72rem", fontWeight: 600, padding: "3px 10px", borderRadius: 100 }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <button className="btn-primary" onClick={() => { setPage("solutions"); window.scrollTo({ top: 0 }); }}>
            View All Solutions
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>
      </Section>

      {/* Stats */}
      <StatsBar />

      {/* Features Teaser */}
      <Section style={{ background: "#fff" }}>
        <SectionHead tag="Why Choose Us" title="Built for Reliability & Scale" sub="Every product we deliver is engineered with security, performance, and longevity at its core." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
          {FEATURES.map((f, i) => (
            <div key={i} className="feature-card anim-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div style={{ width: 68, height: 68, borderRadius: "50%", background: f.color, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", fontSize: 28 }}>{f.icon}</div>
              <h4 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0f172a", marginBottom: 8 }}>{f.title}</h4>
              <p style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: 1.65 }}>{f.desc.slice(0, 90)}...</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <div style={{ background: "linear-gradient(135deg,#0f2040,#1e1b4b,#0f2040)", backgroundSize: "200% 200%", animation: "gradientShift 6s ease infinite", padding: "80px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: 400, height: 400, borderRadius: "50%", background: "rgba(29,106,245,0.2)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "-100px", left: "-100px", width: 350, height: 350, borderRadius: "50%", background: "rgba(99,102,241,0.15)", filter: "blur(70px)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="section-tag light">Start Today</div>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#fff", margin: "16px auto", maxWidth: 600 }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", marginBottom: 36, maxWidth: 500, margin: "0 auto 36px" }}>
            Schedule a free demo and see how RadiantPath can automate your operations in days, not months.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16 }}>
            <button className="btn-primary" onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }}>Get Free Demo</button>
            <button className="btn-green" onClick={() => window.open("https://wa.me/919822226482?text=" + encodeURIComponent("Hi! I'd like a demo of RadiantPath solutions."), "_blank")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.143.564 4.148 1.55 5.887L.057 23.55l5.817-1.485A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.649-.49-5.186-1.346l-.371-.217-3.449.881.9-3.357-.232-.381A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}