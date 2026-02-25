import { useState, useEffect } from "react";
import radiantLogo from "../assets/radinatpath.png";
export function NavBar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = ["Home", "About", "Solutions", "Features", "Contact"];
  

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (p) => { setPage(p.toLowerCase()); setMobileOpen(false); window.scrollTo({ top: 0 }); };

  return (
    <>
      <style>{`
        #navbar { transition:box-shadow 0.4s ease,background 0.4s ease; }
        #navbar.scrolled { box-shadow:0 4px 40px rgba(0,0,0,0.5); }
      `}</style>
      <nav
        id="navbar"
        className={scrolled ? "scrolled" : ""}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? "rgba(7,14,28,0.97)" : "rgba(7,14,28,0.88)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          padding: "0 24px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          {/* Logo */}
          <div onClick={() => go("Home")} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
            <div style={{
            
            }}>
              <img src={radiantLogo} style={{ height: 70, width: 80 }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, color: "#fff", fontSize: "1.25rem", lineHeight: 1, letterSpacing: "0.01em" }}>RadiantPath</div>
              <div style={{ color: "#60a5fa", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 2 }}>Software Solution</div>
            </div>
          </div>
          {/* Desktop Links */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
            {links.map((l) => (
              <button key={l} className={`nav-pill ${page === l.toLowerCase() ? "active" : ""}`} onClick={() => go(l)}>{l}</button>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button className="btn-primary hidden-mobile" style={{ padding: "10px 22px", fontSize: "0.82rem" }} onClick={() => go("Contact")}>
              Get In Touch
            </button>
            <button onClick={() => setMobileOpen(true)} className="show-mobile" style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 8 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-overlay">
          <button onClick={() => setMobileOpen(false)} style={{ position: "absolute", top: 24, right: 24, background: "none", border: "none", color: "#fff", cursor: "pointer" }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          {links.map((l, i) => (
            <button key={l} className="nav-pill" style={{ fontSize: "1.5rem", padding: "12px 28px", animationDelay: `${i * 0.06}s` }} onClick={() => go(l)}>{l}</button>
          ))}
          <button className="btn-primary" style={{ marginTop: 16 }} onClick={() => go("Contact")}>Get In Touch</button>
        </div>
      )}

      <style>{`
        @media (max-width:768px) { .hidden-mobile{display:none!important;} }
        @media (min-width:769px) { .show-mobile{display:none!important;} }
      `}</style>
    </>
  );
}