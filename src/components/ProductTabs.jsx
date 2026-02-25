import React, { useState } from "react";
import "./ProductTabs.css";

const softwareList = [
  {
    icon: "👥",
    title: "Paywell HRMS Software",
    desc: "Complete HR & payroll automation for modern businesses.",
  },
  {
    icon: "⏱️",
    title: "Attendance Management Software",
    desc: "Smart, real-time attendance with biometric & geo-integration.",
  },
  {
    icon: "🍽️",
    title: "Canteen Management Software",
    desc: "Automate canteen operations, meal tracking, and reporting.",
  },
  {
    icon: "🪪",
    title: "Visitor Management Software",
    desc: "Digital visitor registration, QR badges, and host notifications.",
  },
  {
    icon: "🤝",
    title: "Contractor & Payroll Management Software",
    desc: "Manage contractors, compliance, and payroll in one place.",
  },
  {
    icon: "🏢",
    title: "Headcount Management Software",
    desc: "Real-time workforce analytics and strength monitoring.",
  },
  {
    icon: "💡",
    title: "Customized Software Solutions",
    desc: "Tailored business applications for unique workflows.",
  },
  {
    icon: "⚖️",
    title: "Software Solutions for Weigh Bridge",
    desc: "Automate weigh bridge operations and reporting.",
  },
];

const hardwareList = [
  { icon: "🕹️", title: "Computerised Attendance Recording System" },
  { icon: "🔒", title: "Access Control System" },
  { icon: "🚦", title: "Tripod Turnstile" },
  { icon: "🚪", title: "Flap Barrier / Swing Gate" },
  { icon: "🏢", title: "Full Height Turnstile" },
  { icon: "🍽️", title: "Canteen Management Devices" },
  { icon: "🪪", title: "Visitor Management System" },
  { icon: "📊", title: "MIS & Payroll Package" },
  { icon: "🚗", title: "Vehicle Tracking System" },
  { icon: "🛡️", title: "Security Patrolling System" },
  { icon: "🚧", title: "Boom Barrier" },
  { icon: "🧲", title: "Metal Detector (Door Frame & Hand Held)" },
  { icon: "⚙️", title: "Customized Security Solutions" },
];

export default function ProductTabs() {
  const [tab, setTab] = useState("software");
  return (
    <div className="product-tabs-wrap">
      <div className="tabs-bar">
        <button className={tab === "software" ? "active" : ""} onClick={() => setTab("software")}>Software Products</button>
        <button className={tab === "hardware" ? "active" : ""} onClick={() => setTab("hardware")}>Hardware / Product Solutions</button>
      </div>
      <div className="tabs-content">
        {tab === "software" ? (
          <div className="product-grid">
            {softwareList.map((s, i) => (
              <div className="product-card" key={i}>
                <div className="icon">{s.icon}</div>
                <div className="title">{s.title}</div>
                {s.desc && <div className="desc">{s.desc}</div>}
              </div>
            ))}
          </div>
        ) : (
          <div className="product-grid">
            {hardwareList.map((h, i) => (
              <div className="product-card" key={i}>
                <div className="icon">{h.icon}</div>
                <div className="title">{h.title}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
