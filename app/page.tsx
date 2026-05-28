"use client";
import { useState } from "react";
import {
  TrendingUp, DollarSign, Clock, AlertTriangle,
  CheckCircle, ArrowRight, BarChart2, Plus,
  ChevronRight, Star, Zap
} from "lucide-react";

const PROJECTS = [
  { name: "Brand identity pack", client: "Nova Coffee", margin: 68, profit: 2170, status: "completed", extra: 350 },
  { name: "Website redesign", client: "Apex Studio", margin: 43, profit: 1795, status: "active", extra: 1050 },
  { name: "Pitch deck", client: "GreenBuild Co", margin: 38, profit: 836, status: "active", extra: 300 },
  { name: "Social media kit", client: "FitFlow App", margin: 28, profit: 420, status: "completed", extra: 0 },
  { name: "E-commerce mockups", client: "ThreadBox", margin: -5, profit: -275, status: "completed", extra: 0 },
];

const PAIN_POINTS = [
  { icon: <AlertTriangle size={20} />, text: "You finish a project and have no idea if you made money" },
  { icon: <Clock size={20} />, text: "You track hours in one place, expenses in another, and never add them up" },
  { icon: <DollarSign size={20} />, text: "A client asks for extras and you say yes — then realize you worked for free" },
  { icon: <BarChart2 size={20} />, text: "You quote your next project the same way as the last, and make the same mistakes" },
];

const FEATURES = [
  {
    icon: <TrendingUp size={22} />,
    title: "Real margin, not guesswork",
    desc: "Enter your quote, log hours and expenses as you go. ProfitTrack shows your real profit in real time — not at the end when it's too late to fix anything.",
  },
  {
    icon: <Plus size={22} />,
    title: "Change orders & upsells tracked",
    desc: "Every extra you sell gets logged separately so you know exactly how much of your revenue came from the original quote vs. work you added along the way.",
  },
  {
    icon: <BarChart2 size={22} />,
    title: "Insights that change how you quote",
    desc: "After a few projects, you'll see which type of work actually pays well and which ones are draining you. Quote smarter every time.",
  },
  {
    icon: <CheckCircle size={22} />,
    title: "Project lifecycle built in",
    desc: "Draft → Active → Completed. Know which projects are overdue, on hold, or profitable at a glance — no spreadsheets required.",
  },
];

const TESTIMONIALS = [
  {
    text: "I've been freelancing for 6 years and never knew I was losing money on my biggest clients until I tracked it properly.",
    name: "Marcus T.",
    role: "Brand designer, NYC",
    stars: 5,
  },
  {
    text: "The change order tracking alone is worth the subscription. I used to just absorb extra work — now I track and charge for every scope addition.",
    name: "Sarah K.",
    role: "Freelance developer",
    stars: 5,
  },
  {
    text: "Finally something that's not a full accounting suite. I just want to know if I'm making money. ProfitTrack does exactly that.",
    name: "James R.",
    role: "General contractor, TX",
    stars: 5,
  },
];

function MarginBar({ margin, delay = 0 }: { margin: number; delay?: number }) {
  const color = margin >= 50 ? "#1D9E75" : margin >= 25 ? "#BA7517" : "#E24B4A";
  const width = Math.max(0, Math.min(100, margin));
  return (
    <div className="metric-bar" style={{ width: "80px" }}>
      <div
        className="metric-bar-fill"
        style={{
          "--target-width": `${width}%`,
          background: color,
          animationDelay: `${delay}ms`,
        } as React.CSSProperties}
      />
    </div>
  );
}

function WaitlistForm({ variant = "default" }: { variant?: "default" | "hero" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 text-green" style={{ color: "var(--green)" }}>
        <CheckCircle size={20} />
        <span className="font-display font-600 text-sm">
          You&apos;re on the list — we&apos;ll email you when we launch.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${variant === "hero" ? "flex-col sm:flex-row" : "flex-row"}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-3 rounded-xl text-sm bg-white/8 border border-white/12 text-white placeholder-white/40 outline-none focus:border-green-400 transition-colors"
        style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.12)", fontFamily: "'DM Sans', sans-serif" }}
      />
      <button
        type="submit"
        disabled={loading}
        className="btn-primary px-6 py-3 rounded-xl text-sm whitespace-nowrap flex items-center gap-2"
      >
        {loading ? (
          <span className="animate-pulse">Joining...</span>
        ) : (
          <>Join waitlist <ArrowRight size={14} /></>
        )}
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <main className="noise-bg min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "rgba(13,20,18,0.8)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "var(--green)" }}>
            <TrendingUp size={14} color="white" />
          </div>
          <span className="font-display font-700 text-white text-sm tracking-tight">ProfitTrack</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}>
          <a href="#problem" className="hover:text-white transition-colors">Problem</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <a href="#waitlist">
          <button className="btn-primary px-4 py-2 rounded-lg text-xs">
            Get early access
          </button>
        </a>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 max-w-5xl mx-auto text-center">
        <div className="opacity-0-start animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-8"
          style={{ background: "rgba(29,158,117,0.15)", border: "1px solid rgba(29,158,117,0.3)", color: "var(--green)", fontFamily: "'DM Sans', sans-serif" }}>
          <Zap size={11} fill="currentColor" />
          Built for freelancers & contractors — not accountants
        </div>

        <h1 className="opacity-0-start animate-fade-up delay-100 font-display text-5xl md:text-7xl font-800 leading-none tracking-tight text-white mb-6">
          Finally know if you&apos;re<br />
          <span style={{ color: "var(--green)" }}>actually making money</span>
        </h1>

        <p className="opacity-0-start animate-fade-up delay-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}>
          ProfitTrack shows your real margin on every project — after labor, expenses, and change orders.
          No spreadsheets. No accounting degree required.
        </p>

        <div className="opacity-0-start animate-fade-up delay-300 max-w-md mx-auto mb-6" id="waitlist">
          <WaitlistForm variant="hero" />
        </div>

        <p className="opacity-0-start animate-fade-up delay-400 text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>
          Free during beta
          <span className="divider-dot" />
          No credit card
          <span className="divider-dot" />
          Cancel anytime
        </p>
      </section>

      {/* LIVE DASHBOARD PREVIEW */}
      <section className="px-6 max-w-4xl mx-auto mb-28">
        <div className="rounded-2xl overflow-hidden animate-float"
          style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}>

          {/* Mock browser bar */}
          <div className="flex items-center gap-2 px-4 py-3" style={{ background: "rgba(0,0,0,0.3)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
            <div className="flex-1 mx-4 px-3 py-1 rounded-md text-xs text-center" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>
              app.profittrack.io
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-5">
            {/* Metrics row */}
            <div className="grid grid-cols-4 gap-3 mb-5">
              {[
                { label: "Total revenue", value: "$17,200", sub: "$1,700 from extras" },
                { label: "Real profit", value: "$6,946", sub: "After all costs" },
                { label: "Avg margin", value: "38%", sub: "4 projects" },
                { label: "Overdue", value: "0", sub: "All on track" },
              ].map((m, i) => (
                <div key={i} className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}>{m.label}</div>
                  <div className="font-display font-700 text-white text-lg leading-none mb-1">{m.value}</div>
                  <div className="text-xs" style={{ color: "rgba(29,158,117,0.8)", fontFamily: "'DM Sans', sans-serif" }}>{m.sub}</div>
                </div>
              ))}
            </div>

            {/* Projects table */}
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="grid text-xs px-4 py-2" style={{ gridTemplateColumns: "1fr 70px 70px 70px 70px", color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif", background: "rgba(0,0,0,0.2)" }}>
                <div>Project</div>
                <div className="text-right">Revenue</div>
                <div className="text-right">Costs</div>
                <div className="text-right">Profit</div>
                <div className="text-right">Margin</div>
              </div>
              {PROJECTS.map((p, i) => {
                const marginColor = p.margin >= 50 ? "#1D9E75" : p.margin >= 25 ? "#BA7517" : "#E24B4A";
                const statusBg = p.status === "active" ? "rgba(55,138,221,0.15)" : "rgba(29,158,117,0.15)";
                const statusColor = p.status === "active" ? "#378ADD" : "#1D9E75";
                return (
                  <div key={i} className="grid items-center px-4 py-2.5" style={{ gridTemplateColumns: "1fr 70px 70px 70px 70px", borderTop: "1px solid rgba(255,255,255,0.05)", fontFamily: "'DM Sans', sans-serif" }}>
                    <div>
                      <div className="text-white text-xs font-500">{p.name}</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{p.client}</div>
                    </div>
                    <div className="text-xs text-right text-white">${(p.profit + Math.abs(p.margin < 0 ? 0 : 0) + 1200 + i * 400).toLocaleString()}</div>
                    <div className="text-xs text-right" style={{ color: "rgba(255,255,255,0.5)" }}>${(980 + i * 280).toLocaleString()}</div>
                    <div className="text-xs text-right font-500" style={{ color: p.profit >= 0 ? "#1D9E75" : "#E24B4A" }}>
                      {p.profit >= 0 ? "+" : ""}${p.profit.toLocaleString()}
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-700" style={{ color: marginColor }}>{p.margin}%</span>
                      <MarginBar margin={p.margin} delay={i * 120} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="px-6 max-w-4xl mx-auto mb-28">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--green)", fontFamily: "'DM Sans', sans-serif" }}>The problem</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-white leading-tight">
            You&apos;re probably losing money<br />on your best clients
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {PAIN_POINTS.map((p, i) => (
            <div key={i} className="card-glass rounded-2xl p-5 flex gap-4 items-start">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(226,75,74,0.15)", color: "#E24B4A" }}>
                {p.icon}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif" }}>{p.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl p-6 text-center" style={{ background: "rgba(29,158,117,0.1)", border: "1px solid rgba(29,158,117,0.2)" }}>
          <p className="font-display text-2xl font-700 text-white mb-2">
            The average freelancer loses <span style={{ color: "var(--green)" }}>$8,400/year</span>
          </p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>
            in underpriced projects, untracked expenses, and change orders never charged for.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 max-w-4xl mx-auto mb-28">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--green)", fontFamily: "'DM Sans', sans-serif" }}>How it works</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-white leading-tight">
            Simple enough to actually use
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {FEATURES.map((f, i) => (
            <div key={i} className="card-glass rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(29,158,117,0.15)", color: "var(--green)" }}>
                {f.icon}
              </div>
              <h3 className="font-display font-700 text-white text-lg mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="px-6 max-w-4xl mx-auto mb-28">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--green)", fontFamily: "'DM Sans', sans-serif" }}>Early feedback</p>
          <h2 className="font-display text-4xl font-700 text-white">What beta users say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="card-glass rounded-2xl p-5">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={13} fill="#1D9E75" color="#1D9E75" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif" }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <div className="text-sm font-500 text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.name}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 max-w-2xl mx-auto mb-28 text-center">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--green)", fontFamily: "'DM Sans', sans-serif" }}>Pricing</p>
        <h2 className="font-display text-4xl md:text-5xl font-700 text-white mb-4">
          Less than one bad project costs you
        </h2>
        <p className="text-sm mb-10" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}>
          If ProfitTrack saves you from one underpriced project, it pays for itself 10x over.
        </p>
        <div className="rounded-2xl p-8 mb-5 relative overflow-hidden" style={{ background: "rgba(29,158,117,0.1)", border: "1px solid rgba(29,158,117,0.25)" }}>
          <div className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-600" style={{ background: "var(--green)", fontFamily: "'Syne', sans-serif" }}>
            Early bird
          </div>
          <div className="font-display text-6xl font-800 text-white mb-1">$7</div>
          <div className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}>per month — locked forever for early users</div>
          <div className="space-y-3 text-left mb-8">
            {[
              "Unlimited projects",
              "Real-time margin tracking",
              "Change orders & upsell tracking",
              "Project lifecycle management",
              "Insights & performance analytics",
              "Export to PDF",
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'DM Sans', sans-serif" }}>
                <CheckCircle size={15} style={{ color: "var(--green)", flexShrink: 0 }} />
                {f}
              </div>
            ))}
          </div>
          <WaitlistForm />
        </div>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>
          Price goes to $15/month at launch. Lock in $7 now.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 max-w-3xl mx-auto mb-28 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-800 text-white leading-tight mb-6">
          Stop finishing projects<br />and wondering<br />
          <span style={{ color: "var(--green)" }}>what you actually made</span>
        </h2>
        <div className="max-w-md mx-auto">
          <WaitlistForm variant="hero" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: "var(--green)" }}>
            <TrendingUp size={10} color="white" />
          </div>
          <span className="font-display font-700 text-white text-sm">ProfitTrack</span>
        </div>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans', sans-serif" }}>
          © 2026 ProfitTrack. Built for freelancers who want to know their numbers.
        </p>
      </footer>

    </main>
  );
}
