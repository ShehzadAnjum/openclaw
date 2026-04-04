export default function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-blue/[0.02] rounded-full blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--muted) 1px, transparent 1px), linear-gradient(90deg, var(--muted) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-4xl text-center">
        <div className="animate-fade-up">
          <span className="inline-block font-mono text-xs tracking-[0.25em] uppercase text-muted mb-6 px-4 py-2 border border-border rounded-full">
            Classroom Edition &bull; AI Agents Deep Dive &bull; April 2026
          </span>
        </div>

        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          From Chatbot
          <br />
          <span className="relative inline-block">
            to{" "}
            <span className="text-accent-light">AI&nbsp;Employee</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 400 12"
              fill="none"
            >
              <path
                d="M2 8C80 2 200 2 398 8"
                stroke="var(--accent)"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          How OpenClaw bridges the gap between conversational AI and autonomous
          task execution &mdash; and where it still falls dangerously short.
        </p>

        {/* Stats row */}
        <div
          className="flex flex-wrap justify-center gap-8 md:gap-14 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          {[
            { val: "250K+", label: "GitHub Stars" },
            { val: "13,700+", label: "Skills" },
            { val: "50+", label: "Integrations" },
            { val: "MIT", label: "License" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-black text-accent-light">
                {s.val}
              </div>
              <div className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-dim mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="flex flex-col items-center gap-2 text-dim">
          <span className="text-[0.6rem] font-mono tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent" />
        </div>
      </div>
    </header>
  );
}
