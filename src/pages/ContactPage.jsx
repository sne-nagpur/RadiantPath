import { useState } from "react";
    import { Section } from "../components/SECTION";
    

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0A%0AMessage:%0A${form.message}`;
    window.location.href = `mailto:sales@radiantpathngp.com?subject=${encodeURIComponent(form.subject)}&body=${body}`;
    setTimeout(() => { setLoading(false); setSent(true); setTimeout(() => setSent(false), 6000); }, 1000);
  };

  return (
    <div>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg,#070e1c,#0f2040,#1e1b4b)", padding: "140px 32px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "rgba(29,106,245,0.18)", filter: "blur(100px)", top: "-200px", right: "-100px" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="section-tag light">Contact</div>
          <h1 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,5vw,3.5rem)", color: "#fff", margin: "12px auto", maxWidth: 600, lineHeight: 1.15 }}>
            Let's <span className="gradient-text">Start a Conversation</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", maxWidth: 500, margin: "0 auto" }}>
            Our team is ready to understand your needs and craft the perfect solution for your business.
          </p>
        </div>
      </div>

      <Section style={{ background: "#f8fafc" }} className="grid-bg">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "start" }}>

          {/* Left — Info */}
          <div className="anim-slide-r">
            <div style={{ marginBottom: 36 }}>
              <div className="section-tag">Get in Touch</div>
              <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "1.9rem", color: "#0f172a", lineHeight: 1.2, marginTop: 8 }}>
                We'd Love to Hear From You
              </h2>
              <p style={{ color: "#64748b", marginTop: 14, lineHeight: 1.7 }}>
                Whether you have a product question, want a demo, or need a custom quote — drop us a message and we'll respond within 24 hours.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
              <div className="contact-box">
                <div style={{ width: 46, height: 46, borderRadius: 12, background: "linear-gradient(135deg,#dbeafe,#eff6ff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>📍</div>
                <div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>Our Address</div>
                  <div style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    Plot No 64, 65 & 66, Laxmi Vihar Complex, Tenement,<br />
                    Beside Airport Centerpoint Hotel,<br />
                    Nagpur, Maharashtra 440025
                  </div>
                </div>
              </div>

              <div className="contact-box">
                <div style={{ width: 46, height: 46, borderRadius: 12, background: "linear-gradient(135deg,#d1fae5,#ecfdf5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>📞</div>
                <div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>Phone</div>
                  <a href="tel:+919822226482" style={{ color: "#3b82f6", fontWeight: 600, fontSize: "1.05rem", textDecoration: "none" }}>098222 26482</a>
                </div>
              </div>

              <div className="contact-box">
                <div style={{ width: 46, height: 46, borderRadius: 12, background: "linear-gradient(135deg,#fce7f3,#fdf4ff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>✉️</div>
                <div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>Email</div>
                  <a href="mailto:sales@radiantpathngp.com" style={{ color: "#3b82f6", fontWeight: 600, textDecoration: "none" }}>sales@radiantpathngp.com</a>
                </div>
              </div>

              <div className="contact-box"
                style={{ cursor: "pointer" }}
                onClick={() => window.open("https://wa.me/919822226482?text=" + encodeURIComponent("Hello RadiantPath! I'd like to know more about your solutions."), "_blank")}
              >
                <div style={{ width: 46, height: 46, borderRadius: 12, background: "linear-gradient(135deg,#d1fae5,#ecfdf5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#16a34a"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.143.564 4.148 1.55 5.887L.057 23.55l5.817-1.485A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.649-.49-5.186-1.346l-.371-.217-3.449.881.9-3.357-.232-.381A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>WhatsApp Chat</div>
                  <div style={{ color: "#16a34a", fontWeight: 600, fontSize: "0.9rem" }}>Click to chat instantly →</div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div style={{ borderRadius: 16, overflow: "hidden", border: "1.5px solid #e8f0fe" }}>
              <iframe
                title="RadiantPath Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14889.655847462755!2d79.0520751116902!3d21.09605619688719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf0a7ac2946d%3A0xb25bf6f98ca985e7!2sShree%20Nithya%20Enterprises!5e0!3m2!1sen!2sin!4v1773119074126!5m2!1sen!2sin"
                width="100%" height="220" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div className="anim-slide-l">
            <div style={{ background: "#fff", borderRadius: 24, padding: "44px 36px", boxShadow: "0 8px 40px rgba(0,0,0,0.08)", border: "1.5px solid #e8f0fe" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ fontSize: 60, marginBottom: 20 }}>✅</div>
                  <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#0f172a", marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: "#64748b" }}>Your email client has opened. We'll respond within 24 hours. You can also WhatsApp us for a faster reply.</p>
                  <button className="btn-green" style={{ marginTop: 24 }} onClick={() => window.open("https://wa.me/919822226482", "_blank")}>
                    Chat on WhatsApp
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#0f172a", marginBottom: 8 }}>Send Us a Message</h3>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: 28 }}>Fill in the form below and we'll be in touch shortly.</p>

                  <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "#374151", marginBottom: 6 }}>Full Name *</label>
                        <input className="form-field" type="text" name="name" placeholder="Your name" value={form.name} onChange={handle} required />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "#374151", marginBottom: 6 }}>Phone</label>
                        <input className="form-field" type="tel" name="phone" placeholder="Mobile number" value={form.phone} onChange={handle} />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "#374151", marginBottom: 6 }}>Email Address *</label>
                      <input className="form-field" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handle} required />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "#374151", marginBottom: 6 }}>Subject *</label>
                      <select className="form-field" name="subject" value={form.subject} onChange={handle} required>
                        <option value="">Select a subject</option>
                        <option>HRMS Enquiry</option>
                        <option>Web Attendance System</option>
                        <option>Visitor Management</option>
                        <option>Headcount System</option>
                        <option>Custom Software</option>
                        <option>Hardware Solutions</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "#374151", marginBottom: 6 }}>Message *</label>
                      <textarea className="form-field" name="message" rows={5} placeholder="Describe your requirements..." value={form.message} onChange={handle} required style={{ resize: "vertical" }} />
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px 28px", fontSize: "0.95rem" }} disabled={loading}>
                      {loading ? "Opening Email..." : "Send Message"}
                      {!loading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>}
                    </button>

                    <div style={{ textAlign: "center" }}>
                      <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>or reach us instantly</span>
                      <button type="button" className="btn-green" style={{ width: "100%", justifyContent: "center", marginTop: 10 }}
                        onClick={() => window.open("https://wa.me/919822226482?text=" + encodeURIComponent("Hello! I'd like to know more about RadiantPath solutions."), "_blank")}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.143.564 4.148 1.55 5.887L.057 23.55l5.817-1.485A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.649-.49-5.186-1.346l-.371-.217-3.449.881.9-3.357-.232-.381A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                        Chat on WhatsApp Now
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}