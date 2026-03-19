"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle, XCircle, Mail, Linkedin, Circle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (status === "loading") {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 15;
        });
      }, 200);
      return () => clearInterval(interval);
    }
    if (status === "success" || status === "error") setProgress(100);
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: "var(--bg-input)",
    border: "1px solid var(--border-input)",
    color: "var(--text-primary)",
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h2 className="text-xs tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>// Contact</h2>
        <span className="flex items-center gap-1.5 text-[10px]" style={{ color: "var(--text-muted)" }}>
          <Circle className="w-2 h-2 fill-green-500 text-green-500" />
          Open to opportunities
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-px" style={{ backgroundColor: "var(--border)" }}>
        {/* Left */}
        <div className="md:col-span-2 p-5 md:p-6 flex flex-col gap-6" style={{ backgroundColor: "var(--bg-card)" }}>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            I am available for full-time roles, freelance engagements, and selective project collaborations. If you have something meaningful in mind, I'd love to hear about it — I typically respond within 24 hours.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--text-muted)" }} />
              <a href="mailto:alfito.fbriansyah@gmail.com" className="text-xs transition-colors hover:text-blue-400 truncate" style={{ color: "var(--text-secondary)" }}>
                alfito.fbriansyah@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--text-muted)" }} />
              <a href="https://linkedin.com/in/alfito-fbriansyah" target="_blank" rel="noopener noreferrer" className="text-xs transition-colors hover:text-blue-400 truncate" style={{ color: "var(--text-secondary)" }}>
                linkedin.com/in/alfito-fbriansyah
              </a>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-8 gap-1.5 mt-auto opacity-[0.06]">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--text-primary)" }} />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-3 p-5 md:p-6" style={{ backgroundColor: "var(--bg-card)" }}>
          {status === "success" ? (
            <div className="h-full min-h-[200px] flex flex-col items-center justify-center text-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--text-heading)" }}>Message Sent!</p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
              <button onClick={() => setStatus("idle")} className="text-[10px] uppercase tracking-widest mt-1 transition-colors hover:opacity-80" style={{ color: "var(--text-muted)" }}>
                Send another message →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest block mb-1.5" style={{ color: "var(--text-muted)" }}>Name</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe" required
                    style={{ ...inputStyle, paddingBlock: "0.5rem", paddingInline: "0.6rem" }}
                    className="w-full text-xs outline-none font-mono transition-colors placeholder:opacity-30"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest block mb-1.5" style={{ color: "var(--text-muted)" }}>Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com" required
                    style={{ ...inputStyle, paddingBlock: "0.5rem", paddingInline: "0.6rem" }}
                    className="w-full text-xs outline-none font-mono transition-colors placeholder:opacity-30"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest block mb-1.5" style={{ color: "var(--text-muted)" }}>Message</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Hi, I'd love to discuss a potential collaboration..." required rows={5}
                  style={{ ...inputStyle, paddingBlock: "0.5rem", paddingInline: "0.6rem" }}
                  className="w-full text-xs outline-none font-mono resize-none transition-colors placeholder:opacity-30"
                />
              </div>
              <div className="relative overflow-hidden">
                <button type="submit" disabled={status === "loading"}
                  style={{ paddingBlock: "0.5rem", border: "1px solid var(--border-input)", color: "var(--text-secondary)" }}
                  className="relative w-full flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest transition-colors disabled:cursor-not-allowed overflow-hidden"
                >
                  {status === "loading" && (
                    <div className="absolute left-0 top-0 h-full transition-all duration-300 ease-out" style={{ width: `${progress}%`, backgroundColor: "var(--border)" }} />
                  )}
                  {status === "error" && <div className="absolute left-0 top-0 h-full w-full bg-red-500/10" />}
                  <span className="relative flex items-center gap-2">
                    {status === "idle" && <><Send width={12} height={12} /> Send Message</>}
                    {status === "loading" && <>Sending... {Math.round(progress)}%</>}
                    {status === "error" && <><XCircle className="w-3 h-3 text-red-400" /> Failed, try again</>}
                  </span>
                </button>
                {status === "loading" && (
                  <div className="absolute bottom-0 left-0 h-px transition-all duration-300 ease-out" style={{ width: `${progress}%`, backgroundColor: "var(--text-muted)" }} />
                )}
              </div>
              {status === "error" && (
                <p className="text-[10px] text-red-400 text-center">Something went wrong. Email me directly at alfito.fbriansyah@gmail.com</p>
              )}
            </form>
          )}
        </div>
      </div>
    </>
  );
}