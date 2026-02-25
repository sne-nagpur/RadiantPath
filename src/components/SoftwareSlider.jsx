import React, { useRef } from "react";
import "./SoftwareSlider.css";

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

export default function SoftwareSlider() {
  const sliderRef = useRef(null);
  let isHovered = false;

  // Pause animation on hover
  const handleMouseEnter = () => {
    isHovered = true;
    if (sliderRef.current) sliderRef.current.style.animationPlayState = "paused";
  };
  const handleMouseLeave = () => {
    isHovered = false;
    if (sliderRef.current) sliderRef.current.style.animationPlayState = "running";
  };

  // Duplicate list for seamless loop
  const cards = [...softwareList, ...softwareList];

  return (
    <div className="software-slider-wrap">
      <h2 className="slider-title">Our Software Products</h2>
      <div
        className="software-slider"
        ref={sliderRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {cards.map((s, i) => (
          <div className="software-card" key={i}>
            <div className="icon">{s.icon}</div>
            <div className="title">{s.title}</div>
            <div className="desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
