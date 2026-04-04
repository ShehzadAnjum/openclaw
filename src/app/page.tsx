import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import Callout from "@/components/Callout";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />

      <div className="max-w-6xl mx-auto px-6">
        {/* ═══════════ SECTION 01: WHAT IS OPENCLAW ═══════════ */}
        <section id="what" className="py-20 scroll-mt-16">
          <SectionHeader
            num="01"
            title="What Is OpenClaw?"
            subtitle="Not a model. Not a chatbot. An orchestration runtime for autonomous AI agents."
          />

          <Callout variant="concept" title="Key Distinction for Students">
            OpenClaw is <strong>not</strong> an AI model like GPT or Claude. It
            is an <strong>agentic harness</strong> — a TypeScript/Swift framework
            that connects to external LLMs (Claude, GPT, DeepSeek, Llama) and
            gives them the ability to <em>act</em> in the real world through
            tools, APIs, and system commands.
          </Callout>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <Card icon="💬" iconColor="blue" title="Traditional AI (What You Know)">
              <strong>Prompt → Response.</strong> You ask, it answers. The
              conversation is the product. Think ChatGPT, Claude Chat, Gemini —
              stateless, reactive, text-in/text-out.
            </Card>
            <Card icon="🚀" iconColor="red" title="OpenClaw (The Shift)">
              <strong>Goal → Plan → Execute → Monitor → Improve.</strong> You
              state an objective, and the agent autonomously decomposes it into
              steps, executes them using real tools, and persists the results.
            </Card>
          </div>

          <Callout variant="tip" title="The One-Liner">
            If ChatGPT is a <strong>brain in a jar</strong>, OpenClaw gives that
            brain <strong>hands, eyes, memory, and a schedule</strong>.
          </Callout>

          {/* Profile table */}
          <h3 className="font-display text-xl font-bold mt-10 mb-4">
            Formal Profile
          </h3>
          <div className="border border-border rounded-xl overflow-hidden">
            <table>
              <tbody>
                {[
                  [
                    "Creator",
                    "Peter Steinberger (Austrian dev, founded PSPDFKit, ~€100M exit)",
                  ],
                  ["First Release", 'November 24, 2025 (as "Clawdbot")'],
                  ["Language", "TypeScript + Swift"],
                  ["License", "MIT (fully open-source)"],
                  ["GitHub", "github.com/openclaw/openclaw — 250K+ stars"],
                  [
                    "Runtime",
                    "Node.js (server), Electron (desktop), Docker (production)",
                  ],
                  [
                    "LLM Support",
                    "Claude, GPT, DeepSeek, Ollama/local — model-agnostic",
                  ],
                  [
                    "Interface",
                    "WhatsApp, Telegram, Slack, Discord, iMessage, Signal",
                  ],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td className="w-40">{k}</td>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════ SECTION 02: HISTORY ═══════════ */}
        <section id="history" className="py-20 scroll-mt-16">
          <SectionHeader
            num="02"
            title="Origin Story & Timeline"
            subtitle="From a solo side project to one of the fastest-growing open-source projects in history."
          />

          <div className="arch-block space-y-8 ml-2">
            {[
              {
                date: "Nov 24, 2025",
                text: 'Clawdbot published by Peter Steinberger. A personal AI assistant that runs locally and connects to messaging apps.',
              },
              {
                date: "Jan 27, 2026",
                text: 'Renamed to Moltbot after Anthropic sends trademark complaint (too close to "Claude").',
              },
              {
                date: "Jan 30, 2026",
                text: "Renamed again to OpenClaw. Lobster mascot adopted. Growth explodes — 9K to 60K+ GitHub stars in 72 hours.",
              },
              {
                date: "Feb 3, 2026",
                text: "MoltBook launches — a social network specifically for AI agents.",
              },
              {
                date: "Feb 14, 2026",
                text: 'Steinberger joins OpenAI. Sam Altman calls him "a genius with a lot of amazing ideas." Project moves to open-source foundation.',
              },
              {
                date: "Feb–Mar 2026",
                text: 'China adoption wave. ~1,000 people queue at Tencent HQ. "Raise a lobster" becomes cultural meme. Local governments offer grants up to $1.4M.',
              },
              {
                date: "Mar 2026",
                text: "250K+ GitHub stars reached. Multiple security vulnerabilities discovered. Cisco, CrowdStrike, Microsoft publish advisories.",
              },
            ].map((item, i) => (
              <div key={i} className="relative pl-6">
                <div className="absolute left-[-0.45rem] top-1 w-2.5 h-2.5 rounded-full bg-accent border-2 border-background" />
                <div className="font-mono text-xs text-accent-light font-bold">
                  {item.date}
                </div>
                <p className="text-muted text-sm mt-1 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════ SECTION 03: WHY IT EXISTS ═══════════ */}
        <section id="why" className="py-20 scroll-mt-16">
          <SectionHeader
            num="03"
            title='The Problem OpenClaw Solves'
            subtitle='Understanding the gap between "AI that talks" and "AI that works."'
          />

          <h3 className="font-display text-xl font-bold mb-5">
            Limitations of Current AI{" "}
            <span className="text-muted font-normal text-base">
              (What You Already Know)
            </span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card title="Stateless Sessions">
              ChatGPT/Claude forget everything between sessions. Each conversation starts from zero. Limited memory exists but is shallow.
            </Card>
            <Card title="No Real-World Access">
              Cannot read your files, send emails, update databases, browse the web autonomously, or control applications.
            </Card>
            <Card title="Human-in-Every-Loop">
              Requires a human to copy-paste outputs, decide next steps, and manually execute every action.
            </Card>
            <Card title="No Continuous Operation">
              Cannot run 24/7, cannot monitor things, cannot trigger on events. Each interaction is one-off.
            </Card>
            <Card title="Isolated Ecosystem">
              Cannot natively integrate with Slack, WhatsApp, CRM, POS, or any business tool without custom middleware.
            </Card>
            <Card title="No Task Decomposition">
              Cannot autonomously break a complex goal into sub-tasks, execute them in sequence, and report back.
            </Card>
          </div>

          <h3 className="font-display text-xl font-bold mt-12 mb-5">
            How OpenClaw Addresses Each Gap
          </h3>

          <div className="border border-border rounded-xl overflow-hidden">
            <table>
              <thead>
                <tr>
                  <th>Problem</th>
                  <th>Before</th>
                  <th>OpenClaw&apos;s Solution</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Memory", "Session-scoped, shallow", "Persistent local memory (Markdown + SQLite), cross-channel"],
                  ["Execution", "Text-only output", "Shell commands, file I/O, browser automation, API calls"],
                  ["Autonomy", "On-demand only", "HEARTBEAT.md for cron-like scheduling, event triggers"],
                  ["Integration", "Isolated silo", "50+ native integrations (WhatsApp, Slack, GitHub, Email)"],
                  ["Extensibility", "Limited plugins", "13,700+ community skills on ClawHub registry"],
                  ["Control", "Vendor-hosted, opaque", "Local, MIT-licensed, full transparency, data sovereignty"],
                ].map(([p, b, s]) => (
                  <tr key={p}>
                    <td>{p}</td>
                    <td>{b}</td>
                    <td className="!text-green">{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════ SECTION 04: CONCEPT MAPPING ═══════════ */}
        <section id="concepts" className="py-20 scroll-mt-16">
          <SectionHeader
            num="04"
            title="Mapping to Concepts You Already Know"
            subtitle="Relating OpenClaw to generative AI, assistants, agents, Claude Code, Gemini CLI, skills, subagents, memory, and sessions."
          />

          <div className="grid md:grid-cols-2 gap-4">
            <Card
              icon="🧠"
              iconColor="blue"
              title="Generative AI → OpenClaw's Brain"
              pills={[
                { label: "LLM as Reasoning Core", color: "blue" },
                { label: "Model-Agnostic", color: "green" },
              ]}
            >
              GPT/Claude <em>generate</em> text. OpenClaw uses generative AI as
              its <strong>reasoning engine</strong> but wraps it in an execution
              loop. The LLM <em>decides</em>; OpenClaw <em>does</em>.
            </Card>

            <Card
              icon="🤖"
              iconColor="purple"
              title="Assistants → Identity Layer"
              pills={[
                { label: "SOUL.md = System Prompt on Steroids", color: "purple" },
              ]}
            >
              AI assistants (Siri, Alexa) are reactive. OpenClaw goes further
              with <code>SOUL.md</code> (personality), <code>IDENTITY.md</code>{" "}
              (name/avatar), <code>USER.md</code> (your profile). The assistant
              becomes a persistent digital entity.
            </Card>

            <Card
              icon="⚡"
              iconColor="red"
              title="Agents → OpenClaw IS This"
              pills={[
                { label: "Core Agent Loop", color: "accent" },
                { label: "ReAct Pattern", color: "orange" },
              ]}
            >
              Agents = autonomous systems that perceive, decide, and act.
              OpenClaw implements the full loop: perceive (messages/APIs), decide
              (LLM), act (tools), reflect (memory updates).{" "}
              <strong>Plan → Act → Observe → Reflect.</strong>
            </Card>

            <Card
              icon="⌨️"
              iconColor="cyan"
              title="Claude Code → Specialized Sibling"
              pills={[
                { label: "Claude Code = Dev Agent", color: "blue" },
                { label: "OpenClaw = Ops Agent", color: "accent" },
              ]}
            >
              Claude Code is a <strong>coding agent</strong> in your terminal.
              OpenClaw is a <strong>life/work agent</strong> in your messaging
              apps. They&apos;re complementary — different surfaces for the same
              agent paradigm.
            </Card>

            <Card
              icon="🔮"
              iconColor="yellow"
              title="Gemini CLI → Same Idea, Different Ecosystem"
              pills={[
                { label: "Model-Agnostic Advantage", color: "yellow" },
              ]}
            >
              Gemini CLI is terminal-based and tied to the Gemini model. OpenClaw
              is <strong>model-agnostic</strong> and{" "}
              <strong>interface-agnostic</strong> — use any LLM, interact via any
              messaging app. More flexible, more complex.
            </Card>

            <Card
              icon="🔧"
              iconColor="green"
              title="Skills → OpenClaw's Superpower"
              pills={[
                { label: "SKILL.md Pattern", color: "green" },
                { label: "ClawHub Registry", color: "orange" },
              ]}
            >
              You know Claude Code&apos;s skills. OpenClaw uses the{" "}
              <strong>same concept</strong>, massively scaled: 13,700+ on
              ClawHub. Each skill is a Markdown contract — instructions + tools +
              rules.
            </Card>

            <Card
              icon="🔀"
              iconColor="purple"
              title="Subagents → Multi-Agent Vision"
              pills={[
                { label: "Multi-Agent Orchestration", color: "purple" },
              ]}
            >
              Claude Code spawns subagents for parallel work. OpenClaw extends
              this: <strong>multiple specialized agents</strong> — one for
              reporting, one for monitoring, one for email — each with own skills
              and memory.
            </Card>

            <Card
              icon="💾"
              iconColor="cyan"
              title="Memory & Sessions → Persistent by Default"
              pills={[
                { label: "Local-First Memory", color: "cyan" },
                { label: "Cross-Channel", color: "green" },
              ]}
            >
              Claude/ChatGPT have limited session memory. OpenClaw stores{" "}
              <strong>local Markdown + SQLite</strong>, persisting across all
              conversations and channels. Supermemory even separates work vs
              personal.
            </Card>
          </div>

          <Callout variant="insight" title="The Evolution Ladder">
            <strong>Generative AI</strong> (generates text) →{" "}
            <strong>Assistant</strong> (generates + converses) →{" "}
            <strong>Agent</strong> (converses + acts) →{" "}
            <strong>Autonomous Agent</strong> (acts + persists + schedules +
            self-improves). OpenClaw sits at the top rung. Claude Code sits at
            &ldquo;Agent&rdquo; level, specialized for coding.
          </Callout>
        </section>

        <div className="section-divider" />

        {/* ═══════════ SECTION 05: ARCHITECTURE ═══════════ */}
        <section id="architecture" className="py-20 scroll-mt-16">
          <SectionHeader
            num="05"
            title="Architecture Deep Dive"
            subtitle="How the pieces fit together — from user message to real-world action."
          />

          {/* Architecture diagram */}
          <div className="bg-surface border border-border rounded-xl p-6 md:p-8 font-mono text-sm overflow-x-auto">
            <div className="space-y-1 text-center min-w-[500px]">
              <div className="text-accent-light font-bold">User</div>
              <div className="text-dim text-xs">WhatsApp / Telegram / Slack / Discord / Signal / iMessage</div>
              <div className="text-dim">│</div>
              <div className="text-dim">▼</div>
              <div className="py-2 px-4 bg-cyan/10 border border-cyan/20 rounded-lg inline-block">
                <span className="text-cyan font-bold">Gateway Layer</span>
                <span className="text-dim text-xs block">port 18789 — message routing, auth</span>
              </div>
              <div className="text-dim">│</div>
              <div className="text-dim">▼</div>
              <div className="py-2 px-4 bg-blue/10 border border-blue/20 rounded-lg inline-block">
                <span className="text-blue font-bold">OpenClaw Runtime</span>
                <span className="text-dim text-xs block">Node.js — loads SOUL.md + USER.md + memory/</span>
              </div>
              <div className="text-dim">│</div>
              <div className="text-dim">▼</div>
              <div className="py-2 px-4 bg-purple/10 border border-purple/20 rounded-lg inline-block">
                <span className="text-purple font-bold">LLM Provider</span>
                <span className="text-dim text-xs block">Claude | GPT | DeepSeek | Ollama/Local</span>
              </div>
              <div className="text-dim">│</div>
              <div className="text-dim">▼</div>
              <div className="py-2 px-4 bg-orange/10 border border-orange/20 rounded-lg inline-block">
                <span className="text-orange font-bold">Skill Engine + MCP</span>
                <span className="text-dim text-xs block">13,700+ skills — tool routing — permissions</span>
              </div>
              <div className="text-dim">│</div>
              <div className="text-dim">▼</div>
              <div className="py-2 px-4 bg-green/10 border border-green/20 rounded-lg inline-block">
                <span className="text-green font-bold">Execution Layer</span>
                <span className="text-dim text-xs block">Shell | File I/O | Browser | APIs (Docker/Local)</span>
              </div>
              <div className="text-dim">│</div>
              <div className="text-dim">▼</div>
              <div className="py-2 px-4 bg-cyan/10 border border-cyan/20 rounded-lg inline-block">
                <span className="text-cyan font-bold">Memory Store</span>
                <span className="text-dim text-xs block">Markdown + SQLite — persist, update, learn</span>
              </div>
            </div>
          </div>

          <h3 className="font-display text-xl font-bold mt-12 mb-5">
            Core Configuration Files
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card icon="🧠" iconColor="red" title="SOUL.md">
              Personality, behavioral rules, core principles. Injected as
              system-level context into every conversation.{" "}
              <strong>System prompt, but persistent.</strong>
            </Card>
            <Card icon="👤" iconColor="blue" title="IDENTITY.md">
              Name, emoji, avatar. What the agent calls itself and how it
              presents across channels.
            </Card>
            <Card icon="🧑" iconColor="green" title="USER.md">
              Your profile — pronouns, timezone, preferences. Helps the agent
              personalize responses.
            </Card>
            <Card icon="⏰" iconColor="orange" title="HEARTBEAT.md">
              Cron-style periodic task scheduling. Enables{" "}
              <strong>always-on automation</strong> — daily reports, hourly
              checks.
            </Card>
            <Card icon="🎨" iconColor="purple" title="STYLE.md">
              Voice, syntax, writing patterns. Controls how the agent
              communicates — formal vs casual, verbose vs terse.
            </Card>
            <Card icon="📁" iconColor="cyan" title="memory/">
              Directory of Markdown files storing persistent facts, preferences,
              and context across all channels.
            </Card>
          </div>

          <Callout variant="concept" title="MCP (Model Context Protocol)">
            OpenClaw supports MCP — Anthropic&apos;s open standard for connecting LLMs
            to external tools. This means it can use the same tool servers that
            Claude Code uses. The <code>openclaw mcp serve</code> command starts
            an MCP server. Transport: stdio, HTTP SSE, streamable-http.
          </Callout>
        </section>

        <div className="section-divider" />

        {/* ═══════════ SECTION 06: SKILLS ═══════════ */}
        <section id="skills" className="py-20 scroll-mt-16">
          <SectionHeader
            num="06"
            title="The Skills System"
            subtitle="How OpenClaw extends its capabilities — and why this is both its greatest strength and biggest risk."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-lg font-bold mb-4">
                How Skills Work
              </h3>
              <div className="space-y-4">
                {[
                  {
                    n: "01",
                    title: "Markdown-based definitions",
                    desc: "Each skill is a SKILL.md file with instructions, tool declarations, and behavioral rules.",
                  },
                  {
                    n: "02",
                    title: "Three scope levels",
                    desc: "Workspace (project-specific) > Global (user-wide) > Bundled (default). Workspace takes precedence.",
                  },
                  {
                    n: "03",
                    title: "ClawHub registry",
                    desc: "Public marketplace with 13,700+ community-built skills. Install via CLI or GitHub link.",
                  },
                  {
                    n: "04",
                    title: "100+ built-in skills",
                    desc: "Pre-configured bundles for email, calendar, web search, file management, and more.",
                  },
                  {
                    n: "05",
                    title: "Composable (RFC stage)",
                    desc: "Upcoming: skill dependencies, typed interfaces, higher-order capabilities.",
                  },
                ].map((item) => (
                  <div
                    key={item.n}
                    className="flex gap-4 items-start bg-surface border border-border rounded-lg p-4"
                  >
                    <span className="font-mono text-xs text-accent font-bold bg-accent/10 rounded-md w-8 h-8 flex items-center justify-center shrink-0">
                      {item.n}
                    </span>
                    <div>
                      <div className="font-semibold text-sm text-foreground">
                        {item.title}
                      </div>
                      <div className="text-muted text-xs mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold mb-4">
                Skill Categories
              </h3>
              <div className="grid gap-3">
                {[
                  {
                    cat: "Productivity",
                    color: "green",
                    items: "Email, calendar sync, task scheduling, Notion, receipts",
                  },
                  {
                    cat: "Development",
                    color: "blue",
                    items: "GitHub, CI/CD monitoring, shell, Docker, code review",
                  },
                  {
                    cat: "Smart Home",
                    color: "purple",
                    items: "Home Assistant, Philips Hue, Elgato, weather-based control",
                  },
                  {
                    cat: "Media",
                    color: "orange",
                    items: "Spotify, video clipping (OpusClip), social posting",
                  },
                  {
                    cat: "Business",
                    color: "accent",
                    items: "CRM, lead generation, web scraping, reports, onboarding",
                  },
                ].map((s) => (
                  <div
                    key={s.cat}
                    className="bg-surface border border-border rounded-lg p-4"
                  >
                    <span
                      className={`pill bg-${s.color}/15 text-${s.color} mb-2`}
                    >
                      {s.cat}
                    </span>
                    <p className="text-muted text-sm mt-2">{s.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security warning */}
          <div className="mt-8 bg-accent/[0.06] border border-accent/25 rounded-xl p-6">
            <h4 className="text-accent-light font-bold text-sm mb-2">
              ⚠ Skill Security Warning
            </h4>
            <p className="text-muted text-sm">
              Out of 10,700 skills audited on ClawHub,{" "}
              <strong className="text-accent-light">
                ~820 (7.7%) were found malicious
              </strong>{" "}
              by Cisco researchers:
            </p>
            <ul className="text-muted text-sm list-disc pl-5 mt-2 space-y-1">
              <li>
                Silent data exfiltration (sending your files to external servers)
              </li>
              <li>
                Prompt injection (overriding agent instructions without your
                knowledge)
              </li>
              <li>Credential harvesting from local storage</li>
            </ul>
            <p className="text-muted text-sm mt-3">
              <strong className="text-foreground">Lesson:</strong> Skill
              registries have the same trust problem as npm/PyPI. Always audit
              before installing.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════ SECTION 07: MEMORY ═══════════ */}
        <section id="memory" className="py-20 scroll-mt-16">
          <SectionHeader
            num="07"
            title="Memory System"
            subtitle="How OpenClaw remembers — and how it compares to memory in tools you know."
          />

          <div className="grid md:grid-cols-2 gap-4">
            <Card title="Storage Architecture">
              <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>
                  <strong>Markdown files</strong> in a local{" "}
                  <code>memory/</code> directory
                </li>
                <li>
                  <strong>SQLite</strong> for semantic search and structured
                  queries
                </li>
                <li>Fully local — your data never leaves your machine</li>
                <li>Cross-channel: WhatsApp memories available in Slack</li>
                <li>Survives restarts, upgrades, and model changes</li>
              </ul>
            </Card>
            <Card title="Supermemory Plugin">
              <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>
                  <strong>Context separation:</strong> Work memories (Slack,
                  Gmail) separate from personal (WhatsApp)
                </li>
                <li>Prevents information leakage between contexts</li>
                <li>Semantic memory retrieval based on relevance</li>
                <li>Automatic fact extraction from conversations</li>
              </ul>
            </Card>
          </div>

          <h3 className="font-display text-xl font-bold mt-12 mb-5">
            Memory Comparison Across Tools
          </h3>

          <div className="border border-border rounded-xl overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>ChatGPT</th>
                  <th>Claude</th>
                  <th>Claude Code</th>
                  <th>Gemini</th>
                  <th className="!text-accent-light">OpenClaw</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Persistence", "Limited", "Limited", "Yes ✓", "Gems only", "Full ✓"],
                  ["Cross-session", "Partial", "Projects only", "Yes ✓", "No", "Yes ✓"],
                  ["Cross-channel", "N/A", "N/A", "N/A", "N/A", "Yes ✓"],
                  ["Data location", "Cloud", "Cloud", "Local ✓", "Cloud", "Local ✓"],
                  ["User control", "Delete only", "Edit projects", "Full ✓", "Minimal", "Full ✓"],
                  ["Context separation", "No", "By project", "By project", "No", "Yes (plugin) ✓"],
                ].map(([feat, ...vals]) => (
                  <tr key={feat}>
                    <td>{feat}</td>
                    {vals.map((v, i) => (
                      <td
                        key={i}
                        className={
                          v.includes("✓")
                            ? "!text-green !font-semibold"
                            : v === "No" || v === "N/A"
                            ? "!text-dim"
                            : "!text-yellow"
                        }
                      >
                        {v.replace(" ✓", "")}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════ SECTION 08: COMPARISON ═══════════ */}
        <section id="compare" className="py-20 scroll-mt-16">
          <SectionHeader
            num="08"
            title="OpenClaw vs Everything Else"
            subtitle="Where OpenClaw fits in the AI agent landscape."
          />

          <div className="border border-border rounded-xl overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>ChatGPT</th>
                  <th>Claude Chat</th>
                  <th>Claude Code</th>
                  <th>Gemini CLI</th>
                  <th className="!text-accent-light">OpenClaw</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Purpose", "General chat", "General chat", "Coding agent", "Coding + general", "Life/work automation"],
                  ["Interface", "Web/App", "Web/App", "Terminal/IDE", "Terminal", "Messaging apps"],
                  ["Real actions", "No", "Computer Use β", "Yes (code)", "Yes (code)", "Yes (everything)"],
                  ["Runs 24/7", "No", "No", "No", "No", "Yes"],
                  ["Model lock-in", "GPT only", "Claude only", "Claude only", "Gemini only", "Any LLM"],
                  ["Self-hosted", "No", "No", "Partial", "Partial", "Fully local"],
                  ["Skills", "GPTs/plugins", "Projects", "Skills + MCP", "Limited", "13,700+ ClawHub"],
                  ["Memory", "Limited", "Limited", "Yes", "Minimal", "Full (local)"],
                  ["Setup", "None", "None", "Low", "Low", "High"],
                  ["Security", "Managed", "Managed", "Sandboxed", "Moderate", "Insecure by default"],
                  ["Cost", "$20/mo", "$20/mo", "$20/mo+", "Free", "Free (BYOK)"],
                ].map(([dim, ...vals]) => (
                  <tr key={dim}>
                    <td>{dim}</td>
                    {vals.map((v, i) => (
                      <td
                        key={i}
                        className={
                          i === 4
                            ? v === "Insecure by default" || v === "High"
                              ? "!text-accent-light !font-semibold"
                              : "!text-green !font-semibold"
                            : ""
                        }
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout variant="insight" title="The Analogy">
            <strong>ChatGPT</strong> = Brain &bull;{" "}
            <strong>Claude Code</strong> = Developer &bull;{" "}
            <strong>Gemini CLI</strong> = Developer (Google) &bull;{" "}
            <strong>OpenClaw</strong> = Employee. Different surfaces, same agent
            revolution.
          </Callout>
        </section>

        <div className="section-divider" />

        {/* ═══════════ SECTION 09: USE CASES ═══════════ */}
        <section id="usecases" className="py-20 scroll-mt-16">
          <SectionHeader
            num="09"
            title="Real-World Use Cases"
            subtitle="Proven deployments, not hypotheticals."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "📧",
                color: "blue",
                title: "Email Triage at Scale",
                desc: "Processed 15,000 email backlog. Auto-unsubscribed spam, categorized by urgency, drafted replies.",
              },
              {
                icon: "🏠",
                color: "green",
                title: 'Smart Home ("Claudette")',
                desc: "Controls house via Home Assistant. Lights, boiler (weather-based), Spotify — all from WhatsApp.",
              },
              {
                icon: "📊",
                color: "orange",
                title: "DevOps Monitoring",
                desc: "Watches GitHub Actions. On failure: fetches logs, parses errors, DMs the committer with fixes.",
              },
              {
                icon: "🎬",
                color: "purple",
                title: "Content Pipeline",
                desc: "Long-form → short-form video clipping for multiple platforms. Titles, descriptions, scheduling.",
              },
              {
                icon: "🤝",
                color: "cyan",
                title: "Client Onboarding",
                desc: "Creates folder, sends welcome email, schedules kickoff, adds reminders. One WhatsApp message.",
              },
              {
                icon: "☕",
                color: "yellow",
                title: "Morning Briefings",
                desc: "Daily 7am: weather, calendar, headlines, pending tasks — delivered to your messaging app.",
              },
              {
                icon: "📱",
                color: "red",
                title: "Code from Mobile",
                desc: 'Build, edit, deploy from WhatsApp. "Fix the login bug on staging" and the agent handles it.',
              },
              {
                icon: "💰",
                color: "blue",
                title: "Financial Reconciliation",
                desc: "Pull POS + aggregator data, match transactions, flag mismatches, generate exception reports nightly.",
              },
              {
                icon: "📝",
                color: "green",
                title: "SOP / Knowledge Agent",
                desc: "Trained on internal SOPs and compliance docs. Natural language Q&A with source references.",
              },
            ].map((uc) => (
              <Card
                key={uc.title}
                icon={uc.icon}
                iconColor={uc.color}
                title={uc.title}
              >
                {uc.desc}
              </Card>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════ SECTION 10: SECURITY ═══════════ */}
        <section id="security" className="py-20 scroll-mt-16">
          <SectionHeader
            num="10"
            title="Security: The Elephant in the Room"
            subtitle="OpenClaw's biggest weakness. Every student must understand this."
          />

          {/* Maintainer quote */}
          <div className="bg-accent/[0.06] border border-accent/25 rounded-xl p-6 mb-8">
            <div className="font-display text-lg italic text-foreground leading-relaxed">
              &ldquo;If you can&apos;t understand how to run a command line, this is far
              too dangerous of a project for you to use safely.&rdquo;
            </div>
            <div className="text-muted text-sm mt-2">
              — OpenClaw core maintainer, Discord
            </div>
          </div>

          <h3 className="font-display text-xl font-bold mb-5">
            Known Vulnerabilities (CVEs)
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "CVE-2026-25253",
                desc: "WebSocket token exfiltration via Control UI. Attackers could steal auth tokens. Patched: v2026.1.29.",
              },
              {
                title: "ClawJacked (Oasis Security)",
                desc: "Any website could silently take full control of a developer's agent. No plugins or interaction required. High severity.",
              },
              {
                title: "Localhost Trust Flaw",
                desc: "Malicious websites could brute-force gateway passwords via localhost trust. Patched: v2026.2.25.",
              },
              {
                title: "Independent Audit",
                desc: "Found 512 vulnerabilities including 8 critical issues in the codebase. Many since addressed.",
              },
            ].map((v) => (
              <Card
                key={v.title}
                title={v.title}
                border="border-accent/30"
                className="!bg-accent/[0.03]"
              >
                <span className="text-sm">{v.desc}</span>
              </Card>
            ))}
          </div>

          <h3 className="font-display text-xl font-bold mt-12 mb-5">
            Who Issued Warnings?
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                who: "Cisco",
                what: '"A security nightmare for casual users." Found malicious skills performing silent data exfiltration.',
              },
              {
                who: "CrowdStrike",
                what: "Published detailed guidance for security teams managing OpenClaw in corporate environments.",
              },
              {
                who: "Microsoft",
                what: "Security blog on identity, isolation, and runtime risk. Recommended strict sandboxing.",
              },
              {
                who: "BitSight",
                what: "Identified thousands of exposed instances on the public internet with no authentication.",
              },
              {
                who: "Dutch DPA",
                what: "Advised organizations not to deploy on systems handling sensitive data.",
              },
              {
                who: "Chinese Authorities",
                what: "Restricted state enterprises and government agencies from running OpenClaw on work devices.",
              },
            ].map((w) => (
              <Card key={w.who} title={w.who}>
                <span className="text-sm">{w.what}</span>
              </Card>
            ))}
          </div>

          <h3 className="font-display text-xl font-bold mt-12 mb-5">
            Core Risk Categories
          </h3>

          <div className="border border-border rounded-xl overflow-hidden">
            <table>
              <thead>
                <tr>
                  <th>Risk</th>
                  <th>Severity</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Malicious Skills", "Critical", "7.7% of ClawHub skills found malicious. Data exfil, prompt injection, credential harvesting."],
                  ["Plaintext Credentials", "Critical", "API keys stored in plaintext config. Easily extracted by malware or rogue skills."],
                  ["Prompt Injection", "High", "Messages from untrusted channels can override agent behavior."],
                  ["Broad System Access", "High", "Shell, file I/O, browser, APIs — compromised agent has wide blast radius."],
                  ["No Governance", "Medium", "No audit logging, RBAC, compliance controls out of the box."],
                  ["Autonomous Overreach", "Medium", "Agent created a dating profile (MoltMatch) without being asked."],
                ].map(([risk, sev, desc]) => (
                  <tr key={risk}>
                    <td>{risk}</td>
                    <td>
                      <span
                        className={`pill ${
                          sev === "Critical"
                            ? "bg-accent/15 text-accent-light"
                            : sev === "High"
                            ? "bg-orange/15 text-orange"
                            : "bg-yellow/15 text-yellow"
                        }`}
                      >
                        {sev}
                      </span>
                    </td>
                    <td>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════ SECTION 11: LIMITATIONS ═══════════ */}
        <section id="limits" className="py-20 scroll-mt-16">
          <SectionHeader
            num="11"
            title="Limitations & Red Flags"
            subtitle="What OpenClaw cannot do, where it fails, and what to watch for."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-lg font-bold mb-4 text-accent-light">
                Technical Limitations
              </h3>
              <div className="space-y-3">
                {[
                  {
                    t: "Insecure by Default",
                    d: "No sandboxing, no permission model, no audit trail out of the box. Docker helps but adds complexity.",
                  },
                  {
                    t: "Setup Complexity",
                    d: 'Requires Node.js, Docker, API keys, networking knowledge. The "Day 2 wall" is real.',
                  },
                  {
                    t: "LLM Error Propagation",
                    d: "When the LLM hallucinates, the agent executes the wrong thing. Action hallucination is dangerous.",
                  },
                  {
                    t: "API Cost Growth",
                    d: "Agent loops make 10-50x more API calls than a chatbot. Costs scale non-linearly.",
                  },
                  {
                    t: "Not a Coding Specialist",
                    d: "Unlike Claude Code, not optimized for complex refactoring. Can write code, not at specialist quality.",
                  },
                ].map((item) => (
                  <Card key={item.t} title={item.t}>
                    <span className="text-sm">{item.d}</span>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold mb-4 text-yellow">
                Red Flags & Cautions
              </h3>
              <div className="space-y-3">
                {[
                  {
                    t: "Autonomous Overreach",
                    d: "MoltMatch incident: agent created a dating profile unprompted. Agents that can act will sometimes act beyond intent.",
                  },
                  {
                    t: "Skill Trust Problem",
                    d: "ClawHub has no rigorous vetting. It's npm for agent capabilities. Unvetted skills = unknown code on your system.",
                  },
                  {
                    t: "Financial Actions",
                    d: "Never let an agent do financial transactions without human-in-the-loop. LLM errors + money = real losses.",
                  },
                  {
                    t: "Data Sovereignty Illusion",
                    d: "Data stored locally, but prompts go to external LLM APIs. Local storage ≠ local processing.",
                  },
                  {
                    t: "Regulatory Uncertainty",
                    d: "No compliance frameworks for autonomous AI agents. Legal liability for agent actions is uncharted.",
                  },
                ].map((item) => (
                  <Card
                    key={item.t}
                    title={item.t}
                    border="border-yellow/30"
                    className="!bg-yellow/[0.02]"
                  >
                    <span className="text-sm">{item.d}</span>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <Callout variant="warning" title="Mandatory Guardrails for Any Deployment">
            <ul className="list-disc pl-4 space-y-1 text-sm mt-1">
              <li>
                <strong>Sandbox execution:</strong> Docker with minimal
                permissions. Never root.
              </li>
              <li>
                <strong>Human approval loops:</strong> Require confirmation for
                destructive/financial actions.
              </li>
              <li>
                <strong>Audit logging:</strong> Log every agent action.
                Traceability is non-negotiable.
              </li>
              <li>
                <strong>Skill vetting:</strong> Read every SKILL.md. Check for
                exfiltration patterns.
              </li>
              <li>
                <strong>Credential isolation:</strong> Environment variables, not
                plaintext. Rotate keys.
              </li>
              <li>
                <strong>Network segmentation:</strong> Limit agent reach.
                Principle of least privilege.
              </li>
            </ul>
          </Callout>
        </section>

        <div className="section-divider" />

        {/* ═══════════ SECTION 12: CLASSROOM ═══════════ */}
        <section id="classroom" className="py-20 scroll-mt-16">
          <SectionHeader
            num="12"
            title="For the Classroom"
            subtitle="Discussion questions, exercises, and key takeaways."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-lg font-bold mb-4">
                Discussion Questions
              </h3>
              <div className="space-y-3">
                {[
                  "Trust boundary: If an AI agent has shell + email + file access — what's the difference from a remote employee? What trust model applies?",
                  "Action hallucination: Text hallucination wastes time. Action hallucination deletes files. How do you design guardrails for agents that act?",
                  "Skill ecosystems: ClawHub has 7.7% malicious skills. npm has similar issues. Solvable problem or inherent risk of extensibility?",
                  "Autonomy spectrum: Where should the human approval boundary be? Every action? Only destructive ones? Only financial?",
                  "Model agnosticism: OpenClaw works with any LLM. Feature or risk? What happens when you swap strong model for weak one?",
                  "Privacy paradox: Data stored locally, but every prompt goes to an external API. Is 'local-first' actually private?",
                  "Regulatory vacuum: Who is liable when an agent sends wrong email or deletes data? User? Framework? LLM provider?",
                ].map((q, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start bg-surface border border-border rounded-lg p-4"
                  >
                    <span className="font-mono text-xs text-accent font-bold bg-accent/10 rounded-md w-7 h-7 flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-muted text-sm leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold mb-4">
                Key Takeaways
              </h3>
              <div className="space-y-3 mb-8">
                <Callout variant="tip" title="1. The Agent Paradigm Shift">
                  We&apos;re moving from AI-as-oracle to AI-as-operator. OpenClaw is
                  an early, imperfect, but important step.
                </Callout>
                <Callout variant="insight" title="2. Power Comes with Risk">
                  The same capabilities that make OpenClaw useful (system access,
                  persistence, autonomy) make it dangerous when misconfigured.
                </Callout>
                <Callout
                  variant="concept"
                  title="3. Complementary, Not Replacement"
                >
                  OpenClaw doesn&apos;t replace Claude Code or Gemini CLI. Each
                  optimizes for a different surface: coding, operations, general
                  automation.
                </Callout>
                <Callout variant="warning" title="4. Security Is Not Optional">
                  An AI agent with shell access and no guardrails is a liability,
                  not an asset. Sandbox, audit, approve, limit.
                </Callout>
                <Callout variant="tip" title="5. The Future Is Multi-Agent">
                  Single agents are limited. The future: specialized agents
                  collaborating — one for code, one for ops, one for comms.
                </Callout>
              </div>

              <h3 className="font-display text-lg font-bold mb-4">
                Hands-On Exercises
              </h3>
              <div className="space-y-3">
                {[
                  "Write a SOUL.md and SKILL.md for a hypothetical agent that manages your class schedule. What permissions would you grant?",
                  "Audit 3 random skills from ClawHub. Identify what system access they request and whether you'd trust them.",
                  "Design a permission model for an agent that sends emails on your behalf. What requires human approval?",
                ].map((ex, i) => (
                  <div
                    key={i}
                    className="bg-surface border border-border rounded-lg p-4"
                  >
                    <span className="font-mono text-xs text-green font-bold">
                      Exercise {i + 1}
                    </span>
                    <p className="text-muted text-sm mt-1">{ex}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════ SOURCES ═══════════ */}
        <section id="sources" className="py-20 scroll-mt-16">
          <SectionHeader num="—" title="Sources & Further Reading" />

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                cat: "Official",
                links: [
                  { label: "openclaw.ai", url: "https://openclaw.ai/" },
                  {
                    label: "GitHub Repository",
                    url: "https://github.com/openclaw/openclaw",
                  },
                  {
                    label: "Wikipedia",
                    url: "https://en.wikipedia.org/wiki/OpenClaw",
                  },
                ],
              },
              {
                cat: "Comparisons & Tutorials",
                links: [
                  {
                    label: "DataCamp — OpenClaw vs Claude Code",
                    url: "https://www.datacamp.com/blog/openclaw-vs-claude-code",
                  },
                  {
                    label: "DigitalOcean — What is OpenClaw?",
                    url: "https://www.digitalocean.com/resources/articles/what-is-openclaw",
                  },
                  {
                    label: "Clarifai — Technical Deep Dive",
                    url: "https://www.clarifai.com/blog/what-is-openclaw/",
                  },
                ],
              },
              {
                cat: "Security Advisories",
                links: [
                  {
                    label: "Cisco — Security Nightmare",
                    url: "https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare",
                  },
                  {
                    label: "CrowdStrike — What Security Teams Need to Know",
                    url: "https://www.crowdstrike.com/en-us/blog/what-security-teams-need-to-know-about-openclaw-ai-super-agent/",
                  },
                  {
                    label: "Microsoft — Running OpenClaw Safely",
                    url: "https://www.microsoft.com/en-us/security/blog/2026/02/19/running-openclaw-safely-identity-isolation-runtime-risk/",
                  },
                  {
                    label: "Oasis Security — ClawJacked",
                    url: "https://www.oasis.security/blog/openclaw-vulnerability",
                  },
                ],
              },
              {
                cat: "Industry Coverage",
                links: [
                  {
                    label: "Fortune — Who is Peter Steinberger?",
                    url: "https://fortune.com/2026/02/19/openclaw-who-is-peter-steinberger-openai-sam-altman-anthropic-moltbook/",
                  },
                  {
                    label: "Fortune — China's OpenClaw Craze",
                    url: "https://fortune.com/2026/03/14/openclaw-china-ai-agent-boom-open-source-lobster-craze-minimax-qwen/",
                  },
                  {
                    label: "Docker — Run OpenClaw Securely",
                    url: "https://www.docker.com/blog/run-openclaw-securely-in-docker-sandboxes/",
                  },
                ],
              },
            ].map((section) => (
              <div
                key={section.cat}
                className="bg-surface border border-border rounded-xl p-5"
              >
                <h3 className="font-semibold text-sm mb-3 text-foreground">
                  {section.cat}
                </h3>
                <ul className="space-y-1.5">
                  {section.links.map((l) => (
                    <li key={l.url} className="text-sm">
                      <span className="text-dim mr-1.5">•</span>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-light hover:underline"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="border-t border-border py-10 text-center">
        <p className="text-dim text-sm font-mono">
          OpenClaw Teaching Guide &bull; April 2026 &bull; Classroom Edition
        </p>
        <p className="text-dim text-xs mt-1">
          Built with Next.js &bull; Sources: Wikipedia, DataCamp, DigitalOcean,
          Clarifai, Fortune, Cisco, CrowdStrike, Microsoft
        </p>
      </footer>
    </>
  );
}
