import { Section } from "../components/SECTION";
import { SOLUTIONS } from "../components/SOLUTIONS";
import ProductTabs from "../components/ProductTabs";
import "../components/ProductTabs.css";

export function SolutionsPage({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <div style={{ background: "linear-gradient(120deg,#070e1c 60%,#1d6af5 120%)", padding: "140px 32px 90px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Decorative SVG for industry/tech look */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0.13 }} viewBox="0 0 1440 320"><path fill="#60a5fa" fillOpacity="1" d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,197.3C840,181,960,171,1080,176C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <div style={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", background: "rgba(29,106,245,0.18)", filter: "blur(120px)", top: "-220px", right: 0, zIndex: 2 }} />
        <div style={{ position: "relative", zIndex: 3 }}>
          <div style={{ fontSize: 62, marginBottom: 18, color: "#60a5fa", filter: "drop-shadow(0 4px 24px #1d6af5cc)" }}>🛠️</div>
          <div className="section-tag light" style={{ letterSpacing: "0.13em", fontWeight: 800, fontSize: "1.18rem", color: "#60a5fa", marginBottom: 12, textTransform: 'uppercase', textShadow: '0 2px 12px #1d6af5aa' }}>Industry Solutions</div>
          <h1 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "clamp(2.4rem,5vw,3.7rem)", color: "#fff", margin: "18px auto 22px", maxWidth: 740, lineHeight: 1.11, letterSpacing: "-0.01em", textShadow: '0 2px 16px #1d6af544' }}>
            <span style={{ background: "linear-gradient(90deg,#60a5fa,#6366f1,#1d6af5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontWeight: 900 }}>Software & Hardware</span> That Power Your Business
          </h1>
          <p style={{ color: "rgba(255,255,255,0.80)", fontSize: "1.18rem", maxWidth: 600, margin: "0 auto", fontWeight: 600, letterSpacing: "0.01em", textShadow: '0 1px 8px #1d6af544' }}>
            Discover a full suite of enterprise-ready solutions—automation, security, and analytics—trusted by industry leaders for reliability, innovation, and seamless integration.
          </p>
        </div>
      </div>

      {/* Product Tabs: Software & Hardware */}
      <ProductTabs />

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
