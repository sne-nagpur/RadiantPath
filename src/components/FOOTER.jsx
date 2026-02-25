

export function Footer({ setPage }) {

  const links = ["Home", "About", "Solutions", "Features", "Contact"];
  return (

    <footer style={{ background: "#070e1c", padding: "72px 32px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg,#1d6af5,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, color: "#fff", fontSize: "1.15rem" }}>RadiantPath</div>
                <div style={{ color: "#60a5fa", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em" }}>SOFTWARE SOLUTIONS</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 260 }}>Customized software and hardware solutions for modern businesses. Part of the Shee Nithya Group.</p>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Quick Links</div>
            {links.map((l) => (
              <a key={l} className="footer-link" onClick={() => { setPage(l.toLowerCase()); window.scrollTo({ top: 0 }); }}>{l}</a>
            ))}
          </div>

          {/* Solutions */}
          <div>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Our Solutions</div>
            {["HRMS", "Web Attendance", "Headcount Mgmt", "Visitor Management", "Custom Software"].map((s) => (
              <a key={s} className="footer-link" onClick={() => { setPage("solutions"); window.scrollTo({ top: 0 }); }}>{s}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Contact</div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", lineHeight: 1.8 }}>
              <div>📍 Plot 64-66, Laxmi Vihar Complex,</div>
              <div>Address: Plot 64-66, Laxmi Vihar Complex, Near Airport, Nagpur 440025</div>
              <div>Phone: 098222 26482</div>
              <div style={{ marginTop: 10 }}>Email: sales@radiantpathngp.com</div>
              <div>Near Airport, Nagpur 440025</div>
              <div style={{ marginTop: 10 }}>📞 098222 26482</div>
              <div>✉️ sales@radiantpathngp.com</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>© 2025 RadiantPath & Shee Nithya Enterprises. All rights reserved.</p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>Copyright 2025 RadiantPath & Shee Nithya Enterprises. All rights reserved.</p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>Nagpur, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
}
/*******  4baab1c3-6b62-41b2-a82b-a51edda5ef87  *******/