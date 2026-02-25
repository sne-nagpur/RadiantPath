import { useState, useEffect, useRef } from "react";
import { SLIDES } from "./SLIDES";
export function HeroSlider({ setPage }) {
  const [cur, setCur] = useState(0);
  const [typed, setTyped] = useState("");
  const words = ["HRMS Solutions", "Smart Attendance", "Visitor Management", "Custom Software", "Hardware Integration"];
  const wordIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const t = setInterval(() => setCur((c) => (c + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const typeStep = () => {
      const w = words[wordIdx.current];
      if (deleting.current) {
        charIdx.current--;
        setTyped(w.slice(0, charIdx.current));
        if (charIdx.current === 0) {
          deleting.current = false;
          wordIdx.current = (wordIdx.current + 1) % words.length;
        }
      } else {
        charIdx.current++;
        setTyped(w.slice(0, charIdx.current));
        if (charIdx.current === w.length) {
          deleting.current = true;
          setTimeout(() => {}, 1500);
        }
      }
    };
    const t = setInterval(typeStep, deleting.current ? 55 : 90);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", minHeight: 640, overflow: "hidden" }}>
      {SLIDES.map((s, i) => (
        <div key={i} className={`slide ${cur === i ? "active" : ""}`} style={{ background: s.bg }}>
          {/* Animated blobs */}
          <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
            <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: s.accent, filter: "blur(100px)", top: "-200px", right: "-150px" }} />
            <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "rgba(99,102,241,0.15)", filter: "blur(80px)", bottom: "-100px", left: "-100px" }} />
            <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "rgba(6,214,240,0.1)", filter: "blur(60px)", top: "40%", left: "40%" }} />
            {/* Grid lines */}
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }}>
              {Array.from({ length: 20 }).map((_, j) => (
                <line key={j} x1={`${j * 5.5}%`} y1="0" x2={`${j * 5.5}%`} y2="100%" stroke="#60a5fa" strokeWidth="1" />
              ))}
              {Array.from({ length: 15 }).map((_, j) => (
                <line key={j} x1="0" y1={`${j * 7}%`} x2="100%" y2={`${j * 7}%`} stroke="#60a5fa" strokeWidth="1" />
              ))}
            </svg>
          </div>
        </div>
      ))}

      {/* Hero Content */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", zIndex: 10 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", width: "100%" }}>
          <div className="anim-fade-up">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: 100, padding: "6px 18px", marginBottom: 28,
              color: "#93c5fd", fontFamily: "'Outfit',sans-serif",
              fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#60a5fa", display: "inline-block", boxShadow: "0 0 0 3px rgba(96,165,250,0.25)", animation: "pulse-ring 2s linear infinite" }} />
              Nagpur's Trusted Tech Partner
            </div>
          </div>

          <h1 className="anim-fade-up delay-1" style={{ fontSize: "clamp(2.4rem,6vw,4.5rem)", fontFamily: "'Outfit',sans-serif", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 24 }}>
            Customized<br />
            <span className="gradient-text" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <img src="/radiantpath.svg" alt="RadiantPath Icon" style={{ height: 36, verticalAlign: 'middle' }} />
              Software & Hardware
            </span><br />
            Solutions
          </h1>

          <p className="anim-fade-up delay-2" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", marginBottom: 8, maxWidth: 560 }}>
            We Build{" "}
            <span style={{ color: "#60a5fa", fontWeight: 600 }}>
              {typed}<span style={{ animation: "blink 1s step-end infinite", borderRight: "2px solid #60a5fa" }}>&nbsp;</span>
            </span>
          </p>
          <p className="anim-fade-up delay-2" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", marginBottom: 40, maxWidth: 560 }}>
            RadiantPath & Shee Nithya Enterprises — your end-to-end technology partner for smarter, faster, better business.
          </p>

          <div className="anim-fade-up delay-3" style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <button className="btn-primary" onClick={() => setPage("solutions")}>
              Explore Solutions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <button className="btn-ghost" onClick={() => setPage("contact")}>Contact Us</button>
            <button
              className="btn-green"
              onClick={() => window.open("https://wa.me/919822226482?text=" + encodeURIComponent("Hello RadiantPath! I'm interested in your solutions. Please share more details."), "_blank")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.143.564 4.148 1.55 5.887L.057 23.55l5.817-1.485A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.649-.49-5.186-1.346l-.371-.217-3.449.881.9-3.357-.232-.381A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 10, zIndex: 20 }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{
            width: cur === i ? 28 : 10, height: 10,
            borderRadius: 5, border: "none", cursor: "pointer",
            background: cur === i ? "#3b82f6" : "rgba(255,255,255,0.3)",
            transition: "all 0.35s ease",
          }} />
        ))}
      </div>

      {/* Scroll cue */}
      <div style={{ position: "absolute", bottom: 36, right: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, zIndex: 20, animation: "dotBounce 2.5s ease infinite" }}>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem", fontFamily: "'Outfit',sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", writingMode: "vertical-rl" }}>Scroll</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"><path d="M19 9l-7 7-7-7" /></svg>
      </div>
    </div>
  );
}