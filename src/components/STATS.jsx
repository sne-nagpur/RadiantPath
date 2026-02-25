import { useState, useEffect, useRef } from "react";
import { Counter } from "./Counter";
export const STATS = [
  { value: 150, suffix: "+", label: "Clients Served" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "Products Deployed" },
  { value: 99, suffix: "%", label: "Uptime SLA" },
];

export function StatsBar() {
  const [counted, setCounted] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setCounted(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ background: "linear-gradient(135deg,#0f2040,#1e1b4b)", padding: "56px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 32 }}>
        {STATS.map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <Counter target={s.value} suffix={s.suffix} active={counted} />
            <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", marginTop: 8, fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
