"use client";
import { useState } from "react";

/* ---- tiny SVG icons so we don't need an icon lib ---- */
const Icon = ({ d, size = 20, color = "currentColor" }: { d: string; size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d={d}/></svg>
);
const ArrowRight = ({ size = 16 }: { size?: number }) => <Icon d="M5 12h14M12 5l7 7-7 7" size={size} />;
const Check = ({ size = 16 }: { size?: number }) => <Icon d="M20 6L9 17l-5-5" size={size} color="#1D9E75" />;
const StarIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="#1D9E75" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01z"/></svg>
);

/* ---- data ---- */
const DASH_PROJECTS = [
  { name: "Brand identity", client: "Nova Coffee", rev: "$3,550", cost: "$1,380", profit: "+$2,170", margin: 68, c: "#1D9E75" },
  { name: "Website redesign", client: "Apex Studio", rev: "$5,850", cost: "$4,055", profit: "+$1,795", margin: 43, c: "#1D9E75" },
  { name: "Pitch deck", client: "GreenBuild Co", rev: "$2,500", cost: "$1,664", profit: "+$836", margin: 38, c: "#D4930E" },
  { name: "Social media kit", client: "FitFlow App", rev: "$1,500", cost: "$1,080", profit: "+$420", margin: 28, c: "#D4930E" },
  { name: "E-commerce mockups", client: "ThreadBox", rev: "$5,500", cost: "$5,775", profit: "-$275", margin: -5, c: "#DC3545" },
];

/* ---- waitlist form ---- */
function Waitlist({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setBusy(true);
    await new Promise(r => setTimeout(r, 800));
    setBusy(false);
    setOk(true);
  };

  if (ok) return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", padding: "12px 0" }}>
      <Check size={18} />
      <span style={{ color: "#1D9E75", fontSize: 14, fontWeight: 600 }}>You&apos;re in! We&apos;ll email you at launch.</span>
    </div>
  );

  const inputBg = dark ? "rgba(255,255,255,0.08)" : "#fff";
  const inputBorder = dark ? "rgba(255,255,255,0.15)" : "#E5E7EB";
  const inputColor = dark ? "#fff" : "#0F1F1C";

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 10, width: "100%", maxWidth: 440 }}>
      <input
        type="email" required value={email} onChange={e => setEmail(e.target.value)}
        placeholder="you@email.com"
        style={{
          flex: 1, padding: "13px 16px", borderRadius: 10, fontSize: 14,
          background: inputBg, border: `1px solid ${inputBorder}`, color: inputColor,
          outline: "none", fontFamily: "Montserrat, sans-serif", minWidth: 0,
        }}
      />
      <button type="submit" disabled={busy} style={{
        padding: "13px 24px", borderRadius: 10, background: "#1D9E75", color: "#fff",
        fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer",
        fontFamily: "Montserrat, sans-serif", display: "flex", alignItems: "center", gap: 8,
        whiteSpace: "nowrap", flexShrink: 0, transition: "background .2s",
      }}>
        {busy ? "Joining..." : <>Join waitlist <ArrowRight size={14} /></>}
      </button>
    </form>
  );
}

/* ---- section wrapper ---- */
const S = ({ children, bg = "transparent", id, py = 100 }: { children: React.ReactNode; bg?: string; id?: string; py?: number }) => (
  <section id={id} style={{ background: bg, padding: `${py}px 24px` }}>
    <div style={{ maxWidth: 1080, margin: "0 auto" }}>{children}</div>
  </section>
);

/* ---- the page ---- */
export default function Home() {
  return (
    <main style={{ background: "#fff", color: "#0F1F1C", fontFamily: "Montserrat, sans-serif" }}>

      {/* ===== NAVBAR ===== */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 32px", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E5E7EB",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: "#1D9E75", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M22 12l-4-4v3H3v2h15v3z"/></svg>
          </div>
          <span style={{ fontWeight: 800, fontSize: 16, color: "#0F1F1C" }}>ProfitTrack</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <a href="#problem" style={{ fontSize: 13, color: "#64748B", textDecoration: "none", fontWeight: 500 }}>Problem</a>
          <a href="#features" style={{ fontSize: 13, color: "#64748B", textDecoration: "none", fontWeight: 500 }}>Features</a>
          <a href="#pricing" style={{ fontSize: 13, color: "#64748B", textDecoration: "none", fontWeight: 500 }}>Pricing</a>
          <a href="#waitlist" style={{
            padding: "9px 18px", borderRadius: 8, background: "#1D9E75", color: "#fff",
            fontSize: 13, fontWeight: 700, textDecoration: "none",
          }}>Get early access</a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <S bg="#F8FAFC" py={0} id="waitlist">
        <div style={{ paddingTop: 130, paddingBottom: 60, textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
          <div className="a-up op0" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 99, marginBottom: 28,
            background: "rgba(29,158,117,0.1)", border: "1px solid rgba(29,158,117,0.2)",
            fontSize: 13, fontWeight: 600, color: "#1D9E75",
          }}>
            Built for freelancers & contractors
          </div>

          <h1 className="a-up op0 d1" style={{
            fontSize: "clamp(34px, 5.5vw, 58px)", fontWeight: 800, lineHeight: 1.08,
            color: "#0F1F1C", marginBottom: 20,
          }}>
            Finally know if you&apos;re{" "}
            <span style={{ color: "#1D9E75" }}>actually making money</span>
          </h1>

          <p className="a-up op0 d2" style={{
            fontSize: 17, lineHeight: 1.65, color: "#64748B",
            marginBottom: 36, maxWidth: 520, marginLeft: "auto", marginRight: "auto",
          }}>
            Track real profit on every project — after labor, expenses, and change orders. No spreadsheets. No guessing.
          </p>

          <div className="a-up op0 d3" style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
            <Waitlist />
          </div>
          <p className="a-up op0 d4" style={{ fontSize: 12, color: "#94A3B8" }}>
            Free during beta &nbsp;·&nbsp; No credit card &nbsp;·&nbsp; Cancel anytime
          </p>
        </div>
      </S>

      {/* ===== DASHBOARD PREVIEW ===== */}
      <S bg="#F8FAFC" py={0}>
        <div style={{ paddingBottom: 80, maxWidth: 880, margin: "0 auto" }}>
          <div className="a-float" style={{
            borderRadius: 16, overflow: "hidden", background: "#0F1F1C",
            boxShadow: "0 48px 100px rgba(15,31,28,0.35), 0 0 0 1px rgba(255,255,255,0.05)",
          }}>
            {/* browser bar */}
            <div style={{
              display: "flex", alignItems: "center", gap: 8, padding: "12px 18px",
              background: "#0a1512", borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }}/>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }}/>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }}/>
              </div>
              <div style={{
                flex: 1, margin: "0 40px", padding: "5px 0", borderRadius: 6,
                background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)",
                fontSize: 11, textAlign: "center",
              }}>app.profittrack.io/dashboard</div>
            </div>

            {/* dash content */}
            <div style={{ padding: 22 }}>
              {/* metrics */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 18 }}>
                {[
                  { l: "Total revenue", v: "$17,200", s: "+$1,700 extras", sc: "#1D9E75" },
                  { l: "Real profit", v: "$6,946", s: "After all costs", sc: "rgba(255,255,255,0.35)" },
                  { l: "Avg margin", v: "38%", s: "5 projects", sc: "#1D9E75" },
                  { l: "Overdue", v: "0", s: "All on track", sc: "#1D9E75" },
                ].map((m, i) => (
                  <div key={i} style={{ padding: 14, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 5, fontWeight: 500 }}>{m.l}</div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{m.v}</div>
                    <div style={{ fontSize: 10, color: m.sc, marginTop: 4, fontWeight: 500 }}>{m.s}</div>
                  </div>
                ))}
              </div>
              {/* table */}
              <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{
                  display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
                  padding: "8px 16px", background: "rgba(0,0,0,0.3)",
                  fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: 0.5,
                }}>
                  <div>Project</div>
                  <div style={{ textAlign: "right" }}>Revenue</div>
                  <div style={{ textAlign: "right" }}>Costs</div>
                  <div style={{ textAlign: "right" }}>Profit</div>
                  <div style={{ textAlign: "right" }}>Margin</div>
                </div>
                {DASH_PROJECTS.map((p, i) => (
                  <div key={i} style={{
                    display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
                    padding: "11px 16px", alignItems: "center",
                    borderTop: "1px solid rgba(255,255,255,0.04)",
                  }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{p.name}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 400 }}>{p.client}</div>
                    </div>
                    <div style={{ textAlign: "right", fontSize: 13, color: "#fff", fontWeight: 500 }}>{p.rev}</div>
                    <div style={{ textAlign: "right", fontSize: 13, color: "rgba(255,255,255,0.45)", fontWeight: 400 }}>{p.cost}</div>
                    <div style={{ textAlign: "right", fontSize: 13, fontWeight: 600, color: p.margin >= 0 ? "#1D9E75" : "#DC3545" }}>{p.profit}</div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontSize: 13, fontWeight: 800, color: p.c }}>{p.margin}%</span>
                      <div style={{ height: 4, borderRadius: 2, background: "rgba(255,255,255,0.08)", marginTop: 4, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${Math.max(0, p.margin)}%`, background: p.c, borderRadius: 2, animation: `barGrow 1s ease forwards`, animationDelay: `${i * 0.15}s` }}/>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </S>

      {/* ===== PROBLEM ===== */}
      <S id="problem" py={80}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "#1D9E75", marginBottom: 10 }}>The problem</p>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, lineHeight: 1.15, color: "#0F1F1C", maxWidth: 560, margin: "0 auto" }}>
            You&apos;re probably losing money on your best clients
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 780, margin: "0 auto 32px" }}>
          {[
            { emoji: "⚠️", text: "You finish a project and have no idea if you made money" },
            { emoji: "⏰", text: "Hours in one place, expenses in another — never added up" },
            { emoji: "💸", text: "Client asks for extras, you say yes — then realize you worked for free" },
            { emoji: "📊", text: "You quote the next project the same and make the same mistakes" },
          ].map((p, i) => (
            <div key={i} style={{
              display: "flex", gap: 14, alignItems: "flex-start",
              padding: 22, borderRadius: 14,
              background: "#F8FAFC", border: "1px solid #E5E7EB",
            }}>
              <span style={{ fontSize: 22, flexShrink: 0, lineHeight: 1 }}>{p.emoji}</span>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#64748B", fontWeight: 500 }}>{p.text}</p>
            </div>
          ))}
        </div>
        <div style={{
          maxWidth: 780, margin: "0 auto", padding: 32, borderRadius: 16, textAlign: "center",
          background: "linear-gradient(135deg, rgba(29,158,117,0.08) 0%, rgba(29,158,117,0.03) 100%)",
          border: "1px solid rgba(29,158,117,0.15)",
        }}>
          <p style={{ fontSize: 22, fontWeight: 800, color: "#0F1F1C", marginBottom: 6 }}>
            The average freelancer loses <span style={{ color: "#1D9E75" }}>$8,400/year</span>
          </p>
          <p style={{ fontSize: 14, color: "#64748B", fontWeight: 400 }}>
            in underpriced projects, untracked expenses, and change orders never invoiced.
          </p>
        </div>
      </S>

      {/* ===== FEATURES ===== */}
      <S bg="#F8FAFC" id="features" py={80}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "#1D9E75", marginBottom: 10 }}>How it works</p>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, lineHeight: 1.15, color: "#0F1F1C" }}>
            Simple enough to actually use
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 900, margin: "0 auto" }}>
          {[
            { num: "01", title: "Log your project", desc: "Enter the quote, your hourly rate, and estimated hours. Takes 30 seconds." },
            { num: "02", title: "Track costs as you go", desc: "Add expenses, log hours, track change orders and upsells — all in one place." },
            { num: "03", title: "See your real profit", desc: "Your margin updates in real time. Know exactly what you're making at any moment." },
          ].map((f, i) => (
            <div key={i} style={{
              padding: 28, borderRadius: 16, background: "#fff", border: "1px solid #E5E7EB",
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 40, height: 40, borderRadius: 10, marginBottom: 18,
                background: "rgba(29,158,117,0.1)", color: "#1D9E75", fontSize: 14, fontWeight: 800,
              }}>{f.num}</div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0F1F1C", marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#64748B", fontWeight: 400 }}>{f.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 900, margin: "24px auto 0" }}>
          {[
            { title: "Lifecycle tracking", desc: "Draft → Active → On hold → Completed. See overdue projects at a glance." },
            { title: "Insights that improve pricing", desc: "See which work is profitable and which drains you. Quote smarter every time." },
          ].map((f, i) => (
            <div key={i} style={{ padding: 28, borderRadius: 16, background: "#fff", border: "1px solid #E5E7EB" }}>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0F1F1C", marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#64748B", fontWeight: 400 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </S>

      {/* ===== TESTIMONIALS ===== */}
      <S py={80}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "#1D9E75", marginBottom: 10 }}>Early feedback</p>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, color: "#0F1F1C" }}>What beta users say</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 900, margin: "0 auto" }}>
          {[
            { q: "I freelanced 6 years without knowing I was losing money on my biggest clients. ProfitTrack changed that.", n: "Marcus T.", r: "Brand designer, NYC" },
            { q: "Change order tracking alone is worth it. I used to absorb extra work — now I charge for every scope addition.", n: "Sarah K.", r: "Freelance developer" },
            { q: "Not an accounting suite. I just want to know if I'm making money. This does exactly that.", n: "James R.", r: "Contractor, TX" },
          ].map((t, i) => (
            <div key={i} style={{
              padding: 28, borderRadius: 16, background: "#F8FAFC", border: "1px solid #E5E7EB",
              display: "flex", flexDirection: "column",
            }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                {[1,2,3,4,5].map(j => <StarIcon key={j} />)}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "#64748B", flex: 1, marginBottom: 18, fontWeight: 400 }}>
                &ldquo;{t.q}&rdquo;
              </p>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0F1F1C" }}>{t.n}</div>
                <div style={{ fontSize: 12, color: "#94A3B8", fontWeight: 500 }}>{t.r}</div>
              </div>
            </div>
          ))}
        </div>
      </S>

      {/* ===== PRICING ===== */}
      <S bg="#F8FAFC" id="pricing" py={80}>
        <div style={{ maxWidth: 460, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "#1D9E75", marginBottom: 10 }}>Pricing</p>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, color: "#0F1F1C", marginBottom: 10 }}>
            Less than one bad project costs you
          </h2>
          <p style={{ fontSize: 14, color: "#64748B", marginBottom: 36 }}>
            One underpriced project = hundreds lost. ProfitTrack costs less than a coffee a week.
          </p>
          <div style={{
            padding: "40px 32px", borderRadius: 20, background: "#fff",
            border: "2px solid #1D9E75", position: "relative",
            boxShadow: "0 8px 40px rgba(29,158,117,0.12)",
          }}>
            <div style={{
              position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
              padding: "5px 16px", borderRadius: 99, background: "#1D9E75", color: "#fff",
              fontSize: 12, fontWeight: 700,
            }}>EARLY BIRD — LIMITED</div>
            <div style={{ fontSize: 56, fontWeight: 800, color: "#0F1F1C", lineHeight: 1, marginTop: 8 }}>$7<span style={{ fontSize: 18, fontWeight: 500, color: "#64748B" }}>/mo</span></div>
            <p style={{ fontSize: 13, color: "#94A3B8", marginBottom: 28 }}>Locked forever for early users</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28, textAlign: "left" }}>
              {[
                "Unlimited projects",
                "Real-time margin tracking",
                "Change orders & upsells",
                "Project lifecycle (Draft → Done)",
                "Performance insights",
                "Export to PDF",
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#0F1F1C", fontWeight: 500 }}>
                  <Check size={16} /> {f}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Waitlist />
            </div>
          </div>
          <p style={{ fontSize: 12, color: "#94A3B8", marginTop: 16 }}>
            Price goes to $15/mo at launch. Lock in $7 now.
          </p>
        </div>
      </S>

      {/* ===== FINAL CTA ===== */}
      <S py={80}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.1, color: "#0F1F1C", marginBottom: 28 }}>
            Stop guessing.<br />
            <span style={{ color: "#1D9E75" }}>Start knowing.</span>
          </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Waitlist />
          </div>
        </div>
      </S>

      {/* ===== FOOTER ===== */}
      <footer style={{ padding: "28px 24px", textAlign: "center", borderTop: "1px solid #E5E7EB" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 6 }}>
          <div style={{ width: 18, height: 18, borderRadius: 5, background: "#1D9E75", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width={9} height={9} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5}><path d="M22 12l-4-4v3H3v2h15v3z"/></svg>
          </div>
          <span style={{ fontWeight: 800, fontSize: 13, color: "#0F1F1C" }}>ProfitTrack</span>
        </div>
        <p style={{ fontSize: 11, color: "#94A3B8" }}>© 2026 ProfitTrack. Built for freelancers who want to know their numbers.</p>
      </footer>
    </main>
  );
}
