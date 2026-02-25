export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --navy:   #070e1c;
    --navy2:  #0b1629;
    --navy3:  #0f2040;
    --blue:   #1d6af5;
    --blue2:  #3b82f6;
    --blue3:  #60a5fa;
    --indigo: #6366f1;
    --cyan:   #06d6f0;
    --white:  #ffffff;
    --gray:   #94a3b8;
    --light:  #f0f6ff;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: var(--white);
    overflow-x: hidden;
  }

  h1,h2,h3,h4,h5 { font-family: 'Outfit', sans-serif; }

  /* ── Animations ── */
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(30px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes slideRight {
    from { transform:translateX(-60px); opacity:0; }
    to   { transform:translateX(0); opacity:1; }
  }
  @keyframes slideLeft {
    from { transform:translateX(60px); opacity:0; }
    to   { transform:translateX(0); opacity:1; }
  }
  @keyframes floatY {
    0%,100% { transform:translateY(0); }
    50%     { transform:translateY(-14px); }
  }
  @keyframes pulse-ring {
    0%   { transform:scale(0.9); opacity:0.8; }
    100% { transform:scale(1.5); opacity:0; }
  }
  @keyframes spin-slow {
    from { transform:rotate(0deg); }
    to   { transform:rotate(360deg); }
  }
  @keyframes shimmer {
    0%   { background-position:-200% center; }
    100% { background-position:200% center; }
  }
  @keyframes blink {
    0%,100% { opacity:1; }
    50%     { opacity:0; }
  }
  @keyframes countUp {
    from { opacity:0; transform:scale(0.6); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes dotBounce {
    0%,100% { transform:translateY(0); }
    50%     { transform:translateY(8px); }
  }
  @keyframes gradientShift {
    0%   { background-position:0% 50%; }
    50%  { background-position:100% 50%; }
    100% { background-position:0% 50%; }
  }
  @keyframes borderGlow {
    0%,100% { box-shadow: 0 0 0 0 rgba(29,106,245,0); }
    50%     { box-shadow: 0 0 0 6px rgba(29,106,245,0.15); }
  }

  .anim-fade-up   { animation: fadeUp 0.65s ease both; }
  .anim-fade-in   { animation: fadeIn 0.5s ease both; }
  .anim-slide-r   { animation: slideRight 0.65s ease both; }
  .anim-slide-l   { animation: slideLeft 0.65s ease both; }
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.3s; }
  .delay-4 { animation-delay: 0.4s; }
  .delay-5 { animation-delay: 0.5s; }
  .delay-6 { animation-delay: 0.6s; }
  .delay-7 { animation-delay: 0.7s; }

  .float { animation: floatY 4s ease-in-out infinite; }

  .gradient-text {
    background: linear-gradient(135deg, #60a5fa 0%, #818cf8 45%, #06d6f0 100%);
    background-size: 200% 200%;
    animation: gradientShift 4s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .shimmer-text {
    background: linear-gradient(90deg, #60a5fa 0%, #fff 40%, #818cf8 60%, #60a5fa 100%);
    background-size: 200% auto;
    animation: shimmer 3s linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ── Slider ── */
  .slide { position:absolute; inset:0; opacity:0; transition:opacity 1.2s ease; background-size:cover; background-position:center; }
  .slide.active { opacity:1; }

  /* ── Nav ── */
  .nav-pill {
    font-family:'Outfit',sans-serif; font-weight:600; font-size:0.82rem;
    letter-spacing:0.07em; text-transform:uppercase; color:rgba(255,255,255,0.65);
    padding:7px 16px; border-radius:8px; cursor:pointer; border:none;
    background:transparent; transition:all 0.25s ease;
  }
  .nav-pill:hover { color:#fff; background:rgba(255,255,255,0.08); }
  .nav-pill.active { color:#60a5fa; background:rgba(59,130,246,0.15); }

  /* ── Cards ── */
  .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
  .card-hover:hover { transform:translateY(-7px); box-shadow:0 24px 60px rgba(29,106,245,0.18); }

  .glass-card {
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
  }

  .solution-card {
    background: #fff;
    border: 1.5px solid #e8f0fe;
    border-radius: 20px;
    padding: 36px 32px;
    transition: all 0.35s ease;
    position: relative;
    overflow: hidden;
    cursor: default;
  }
  .solution-card::after {
    content:'';
    position:absolute; top:0; left:0; right:0; height:3px;
    background: linear-gradient(90deg,#1d6af5,#6366f1,#06d6f0);
    transform: scaleX(0); transform-origin:left; transition: transform 0.4s ease;
  }
  .solution-card:hover::after { transform:scaleX(1); }
  .solution-card:hover {
    transform:translateY(-8px);
    box-shadow:0 28px 64px rgba(29,106,245,0.14);
    border-color:#93c5fd;
  }

  .feature-card {
    background:#fff;
    border:1.5px solid #e8f0fe;
    border-radius:20px; padding:36px 28px;
    text-align:center;
    transition:all 0.3s ease;
    animation: borderGlow 3s ease infinite;
  }
  .feature-card:hover {
    border-color:#3b82f6;
    transform:translateY(-6px);
    box-shadow:0 20px 50px rgba(59,130,246,0.15);
  }

  /* ── Form inputs ── */
  .form-field {
    width:100%; padding:14px 18px;
    border:1.5px solid #e2e8f0; border-radius:12px;
    font-family:'Plus Jakarta Sans',sans-serif; font-size:0.95rem;
    color:#1e293b; background:#f8fafc;
    transition:all 0.25s ease; outline:none;
  }
  .form-field:focus {
    border-color:#3b82f6; background:#fff;
    box-shadow:0 0 0 4px rgba(59,130,246,0.1);
  }
  .form-field::placeholder { color:#94a3b8; }

  /* ── Buttons ── */
  .btn-primary {
    display:inline-flex; align-items:center; gap:8px;
    background: linear-gradient(135deg,#1d6af5,#6366f1);
    color:#fff; font-family:'Outfit',sans-serif;
    font-weight:700; font-size:0.9rem;
    padding:14px 30px; border-radius:12px;
    border:none; cursor:pointer;
    transition:all 0.3s ease;
    text-decoration:none; letter-spacing:0.02em;
    box-shadow: 0 4px 20px rgba(29,106,245,0.3);
  }
  .btn-primary:hover {
    transform:translateY(-3px);
    box-shadow:0 12px 36px rgba(29,106,245,0.45);
    background:linear-gradient(135deg,#155df5,#4f46e5);
  }

  .btn-ghost {
    display:inline-flex; align-items:center; gap:8px;
    background:rgba(255,255,255,0.08);
    color:#fff; font-family:'Outfit',sans-serif;
    font-weight:700; font-size:0.9rem;
    padding:14px 30px; border-radius:12px;
    border:1.5px solid rgba(255,255,255,0.25); cursor:pointer;
    transition:all 0.3s ease; text-decoration:none;
  }
  .btn-ghost:hover {
    background:rgba(255,255,255,0.15);
    border-color:rgba(255,255,255,0.55);
    transform:translateY(-3px);
  }

  .btn-green {
    display:inline-flex; align-items:center; gap:8px;
    background:linear-gradient(135deg,#16a34a,#15803d);
    color:#fff; font-family:'Outfit',sans-serif;
    font-weight:700; font-size:0.9rem;
    padding:14px 30px; border-radius:12px;
    border:none; cursor:pointer;
    transition:all 0.3s ease; text-decoration:none;
    box-shadow:0 4px 20px rgba(22,163,74,0.3);
  }
  .btn-green:hover {
    transform:translateY(-3px);
    box-shadow:0 12px 36px rgba(22,163,74,0.45);
  }

  /* ── Section tag ── */
  .section-tag {
    display:inline-block;
    font-family:'Outfit',sans-serif; font-size:0.72rem;
    font-weight:700; letter-spacing:0.18em;
    text-transform:uppercase; color:#3b82f6;
    background:rgba(59,130,246,0.1);
    border:1px solid rgba(59,130,246,0.25);
    padding:5px 16px; border-radius:100px;
    margin-bottom:14px;
  }
  .section-tag.light {
    color:#93c5fd; background:rgba(147,197,253,0.1);
    border-color:rgba(147,197,253,0.25);
  }

  /* ── Grid bg ── */
  .grid-bg {
    background-image:
      linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
      linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px);
    background-size:48px 48px;
  }

  /* Dot separator */
  .dot-sep { display:flex; align-items:center; gap:8px; }
  .dot-sep span { width:6px;height:6px;border-radius:50%;background:#3b82f6; }

  /* Icon badge */
  .icon-badge {
    width:58px;height:58px;border-radius:16px;
    display:flex;align-items:center;justify-content:center;
    font-size:26px; flex-shrink:0;
  }

  /* Stat counter */
  .stat-val {
    font-family:'Outfit',sans-serif; font-size:2.8rem;
    font-weight:900; color:#1d6af5; line-height:1;
    animation:countUp 0.7s ease both;
  }

  /* About card */
  .about-card {
    background:#fff;
    border:1.5px solid #e8f0fe;
    border-radius:24px; padding:44px 36px;
    position:relative; overflow:hidden;
    transition:all 0.35s ease;
  }
  .about-card::before {
    content:'';
    position:absolute; top:0;left:0;
    width:100%;height:4px;
    background:linear-gradient(90deg,#1d6af5,#6366f1,#06d6f0);
  }
  .about-card:hover {
    box-shadow:0 28px 64px rgba(29,106,245,0.12);
    transform:translateY(-6px);
    border-color:#93c5fd;
  }

  /* scrollbar */
  ::-webkit-scrollbar { width:6px; }
  ::-webkit-scrollbar-track { background:#f1f5f9; }
  ::-webkit-scrollbar-thumb { background:#93c5fd; border-radius:3px; }

  /* contact info box */
  .contact-box {
    display:flex; align-items:flex-start; gap:16px;
    padding:20px; background:#f8fafc;
    border-radius:14px; border:1.5px solid #e8f0fe;
    transition:all 0.25s ease;
  }
  .contact-box:hover {
    border-color:#3b82f6; background:#fff;
    box-shadow:0 8px 24px rgba(59,130,246,0.1);
    transform:translateY(-2px);
  }

  /* mobile menu */
  .mobile-overlay {
    position:fixed;inset:0;z-index:999;
    background:rgba(7,14,28,0.97);
    backdrop-filter:blur(16px);
    display:flex;flex-direction:column;
    align-items:center;justify-content:center;gap:8px;
  }

  /* Footer */
  .footer-link {
    color:rgba(255,255,255,0.55);
    font-size:0.9rem; cursor:pointer;
    transition:color 0.2s ease; text-decoration:none;
    display:block; margin-bottom:8px;
  }
  .footer-link:hover { color:#60a5fa; }

  /* Timeline for solutions */
  .sol-num {
    width:40px;height:40px;border-radius:50%;
    background:linear-gradient(135deg,#1d6af5,#6366f1);
    color:#fff;font-family:'Outfit',sans-serif;
    font-weight:800;font-size:0.9rem;
    display:flex;align-items:center;justify-content:center;
    flex-shrink:0;
    box-shadow:0 4px 16px rgba(29,106,245,0.35);
  }
`;