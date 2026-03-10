import { Section, SectionHead } from "../components/SECTION";
export function AboutPage({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg,#070e1c,#0f2040,#1e1b4b)", padding: "140px 32px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
          <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "rgba(29,106,245,0.18)", filter: "blur(100px)", top: "-200px", right: "-100px" }} />
          <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "rgba(99,102,241,0.12)", filter: "blur(90px)", bottom: "-150px", left: "-100px" }} />
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="section-tag light anim-fade-up">About Us</div>
            <h1 className="anim-fade-up delay-1" style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,5vw,3.5rem)", color: "#fff", margin: "12px auto", maxWidth: 700, lineHeight: 1.15 }}>
              One Group, <span className="gradient-text">One Mission</span>
            </h1>
            <p className="anim-fade-up delay-2" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", maxWidth: 540, margin: "0 auto" }}>
              Shree Nithya Enterprises is the main company, with RadiantPath as its subsidiary. Together, we deliver complete technology solutions to businesses across India.
            </p>
        </div>
      </div>

      {/* Group Badge */}
      <Section style={{ background: "#f8fafc" }} className="grid-bg">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "linear-gradient(135deg,#eff6ff,#eef2ff)", border: "1.5px solid rgba(99,102,241,0.2)", borderRadius: 14, padding: "12px 28px" }}>
            <span style={{ fontSize: 22 }}>🤝</span>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, color: "#4f46e5", fontSize: "0.95rem" }}>Part of the Same Business Group — Owned & Operated Together</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 36 }}>
          {/* RadiantPath Card */}
          <div className="about-card card-hover anim-slide-r">
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
              <div style={{ width: 64, height: 64, borderRadius: 18, background: "linear-gradient(135deg,#1d6af5,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(29,106,245,0.35)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#0f172a" }}>RadiantPath</h3>
                <div style={{ color: "#3b82f6", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em" }}>SOFTWARE SOLUTIONS</div>
              </div>
            </div>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 24 }}>
              RadiantPath is a Nagpur-based software company specializing in customized enterprise applications. We design, develop, and deploy intelligent software solutions that solve real business problems — with precision, reliability, and speed.
            </p>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 28 }}>
              From HR automation and attendance tracking to complete ERP systems, our products are built with the end-user in mind — intuitive, powerful, and scalable across industries.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {["HRMS", "Web Attendance", "Visitor Mgmt", "Custom Dev", "Headcount Mgmt", "Cloud Solutions"].map((s) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, color: "#374151", fontSize: "0.88rem", fontWeight: 500 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(135deg,#3b82f6,#6366f1)", flexShrink: 0 }} />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Shee Nithya Card */}
          <div className="about-card card-hover anim-slide-l" style={{ "--before-bg": "linear-gradient(90deg,#06d6f0,#3b82f6,#06b6d4)" }}>
            <style>{`.about-card:nth-child(2)::before{background:linear-gradient(90deg,#06d6f0,#3b82f6,#06b6d4)!important;}`}</style>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
              <div style={{ width: 64, height: 64, borderRadius: 18, background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(6,182,212,0.35)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#0f172a" }}>Shee Nithya Enterprises</h3>
                <div style={{ color: "#0891b2", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em" }}>HARDWARE SOLUTIONS</div>
              </div>
            </div>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 24 }}>
              Shee Nithya Enterprises is our sister company and hardware partner, providing complete physical infrastructure for businesses. Together, we deliver unified technology ecosystems — removing the need to coordinate multiple vendors.
            </p>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 28 }}>
              From biometric devices tightly integrated with our HRMS software to CCTV systems linked with visitor management — hardware and software that communicate perfectly, because they were designed together.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {["Biometric Devices", "CCTV Systems", "Access Control",  "Server Setup", "Hardware AMC"].map((s) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, color: "#374151", fontSize: "0.88rem", fontWeight: 500 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", flexShrink: 0 }} />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>


      {/* Dealership / Authorized Partnership */}
      <Section style={{ background: "#fff" }}>
        <SectionHead tag="Dealership / Authorized Partnership" title="Trusted by Leading Global Brands" sub="Shree Nithya Enterprises is an Authorized Distributor & Partner for the following brands:" />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32, margin: "36px 0 0 0" }}>
          {/* Brand Cards */}
          {[
            { name: "ZKTeco", icon: "🔒", color: "#1d6af5" },
            { name: "eSSL", icon: "🔑", color: "#6366f1" },
            { name: "Paywell", icon: "💳", color: "#0891b2" },
            { name: "Hikvision", icon: "📷", color: "#ef4444" },
            { name: "Mantra", icon: "🖐️", color: "#16a34a" },
            { name: "Greythr", icon: "📊", color: "#db2777" },
          ].map((b, i) => (
            <div key={b.name} style={{
              background: "linear-gradient(135deg,#f8fafc,#e0e7ef 80%)",
              borderRadius: 14,
              boxShadow: "0 2px 12px rgba(99,102,241,0.07)",
              padding: "28px 32px",
              minWidth: 160,
              maxWidth: 220,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              border: `2.5px solid ${b.color}`,
              transition: "transform 0.18s, box-shadow 0.18s",
              cursor: "pointer",
            }}
            className="brand-card anim-fade-up"
            >
              <div style={{ fontSize: 38, color: b.color, marginBottom: 8 }}>{b.icon}</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "1.18rem", color: b.color, letterSpacing: "0.04em", textAlign: "center" }}>{b.name}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Trust Us */}
      <Section style={{ background: "#fff" }}>
        <SectionHead tag="Our Values" title="What Drives Us Every Day" sub="Principles that shape how we build, deliver, and support our solutions." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 28 }}>
          {[
            { icon: "🎯", title: "Customer-First", desc: "Every feature we build starts with a real customer problem. We never develop for the sake of it." },
            { icon: "⚡", title: "Speed of Delivery", desc: "We move fast without breaking quality. Our deployment timelines are the benchmark in the industry." },
            { icon: "🤝", title: "Long-Term Partnership", desc: "We don't just deploy and disappear. We grow with your business through continuous support and updates." },
            { icon: "🔬", title: "Technical Excellence", desc: "Built on robust tech stacks, our solutions are engineered to last — not just to demo well." },
          ].map((v, i) => (
            <div key={i} className="feature-card anim-fade-up" style={{ animationDelay: `${i * 0.1}s`, textAlign: "left" }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{v.icon}</div>
              <h4 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#0f172a", marginBottom: 10 }}>{v.title}</h4>
              <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.7 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <div style={{ background: "linear-gradient(135deg,#0f2040,#1e1b4b)", padding: "72px 32px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "clamp(1.6rem,3.5vw,2.4rem)", color: "#fff", marginBottom: 20 }}>
          Let's Build Something Great Together
        </h2>
        <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 36, fontSize: "1rem" }}>Reach out to us — we'd love to understand your requirements.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <button className="btn-primary" onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }}>Contact Us</button>
          <button className="btn-ghost" onClick={() => { setPage("solutions"); window.scrollTo({ top: 0 }); }}>View Solutions</button>
        </div>
      </div>
    </div>
  );
}