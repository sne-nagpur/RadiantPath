import { useState, useEffect, useRef } from "react";
import { SOLUTIONS } from "./components/SOLUTIONS";
import { FEATURES } from "./components/FEATURES";
/* ─── GLOBAL STYLES injected once ─── */
import { GLOBAL_CSS } from "./components/GLOBALCSS";
import { StatsBar } from "./components/STATS";


import { SLIDES } from "./components/SLIDES";
import { NavBar } from "./pages/NavbarPage";
import { HeroSlider } from "./components/TeamSlider";
import { Footer } from "./components/FOOTER";
import { HomePage } from "./pages/HomePage";
import { SolutionsPage } from "./pages/SolutionsPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
/* ─── HELPER COMPONENTS ─── */



/* ─── HERO SLIDER ─── */


/* ─── SECTION WRAPPER ─── */
import { Section,SectionHead } from "./components/SECTION";



/* ─── STATS BAR ─── */



/* ─── FOOTER ─── */

/* ═══════════════════════════════════════
   PAGE: HOME
═══════════════════════════════════════ */


/* ═══════════════════════════════════════
   PAGE: ABOUT
═══════════════════════════════════════ */


/* ═══════════════════════════════════════
   PAGE: SOLUTIONS
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   PAGE: FEATURES
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   PAGE: CONTACT
═══════════════════════════════════════ */


/* ═══════════════════════════════════════
   ROOT APP
═══════════════════════════════════════ */
export default function App() {
  const [page, setPage] = useState("home");

  const changePage = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const renderPage = () => {
    switch (page) {
      case "home":      return <HomePage setPage={changePage} />;
      case "about":     return <AboutPage setPage={changePage} />;
      case "solutions": return <SolutionsPage setPage={changePage} />;
      case "features":  return <FeaturesPage setPage={changePage} />;
      case "contact":   return <ContactPage />;
      default:          return <HomePage setPage={changePage} />;
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <NavBar page={page} setPage={changePage} />
      <main style={{ paddingTop: 72, animation: "fadeIn 0.45s ease" }} key={page}>
        {renderPage()}
      </main>
      <Footer setPage={changePage} />

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => window.open("https://wa.me/919822226482?text=" + encodeURIComponent("Hello RadiantPath! I'm interested in your solutions."), "_blank")}
        title="Chat on WhatsApp"
        style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 200,
          width: 58, height: 58, borderRadius: "50%",
          background: "linear-gradient(135deg,#16a34a,#15803d)",
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 28px rgba(22,163,74,0.45)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.12)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.143.564 4.148 1.55 5.887L.057 23.55l5.817-1.485A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.649-.49-5.186-1.346l-.371-.217-3.449.881.9-3.357-.232-.381A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        {/* Pulse ring */}
        <span style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          border: "2px solid rgba(22,163,74,0.5)",
          animation: "pulse-ring 2s linear infinite",
        }} />
      </button>
    </>
  );
}