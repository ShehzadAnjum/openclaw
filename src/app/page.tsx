import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import Callout from "@/components/Callout";
import Card from "@/components/Card";
import CodeBlock from "@/components/CodeBlock";
import Exercise from "@/components/Exercise";
import TabGroup from "@/components/TabGroup";

/* ────────────────────────────────────────────────────────────────────────── */
/*  MAIN PAGE                                                                */
/* ────────────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* ═══════════ 01 — WHAT IS OPENCLAW ═══════════ */}
        <section id="what" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader
            num="01"
            title="What Is OpenClaw?"
            subtitle="Not an AI model. An orchestration runtime that turns LLMs into autonomous agents."
          />

          <Callout variant="concept" title="The Core Distinction">
            OpenClaw is <strong>not</strong> an AI model like GPT or Claude. It
            is an open-source <strong>agentic harness</strong> — a
            TypeScript/Swift framework that connects to external LLMs and gives
            them the ability to <em>act</em> in the real world through tools,
            APIs, and system commands. Think of it as an{" "}
            <strong>operating system for AI workers</strong>.
          </Callout>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <Card
              icon="💬"
              iconColor="blue"
              title="Traditional AI (What You Know)"
            >
              <strong>Prompt → Response.</strong> ChatGPT, Claude, Gemini —
              stateless, reactive, text-in/text-out. The conversation is the
              product. Each session starts fresh.
            </Card>
            <Card
              icon="🦞"
              iconColor="red"
              title="OpenClaw (The Paradigm Shift)"
            >
              <strong>Goal → Plan → Execute → Monitor → Improve.</strong> You
              state an objective; the agent decomposes it, executes via real
              tools, persists results, and can run 24/7.
            </Card>
          </div>

          <Callout variant="tip" title="The One-Liner">
            If ChatGPT is a <strong>brain in a jar</strong>, OpenClaw gives that
            brain <strong>hands, eyes, memory, and a schedule</strong>.
          </Callout>

          <h3 className="font-display text-xl font-bold mt-10 mb-4">
            Quick Facts
          </h3>
          <div className="border border-border rounded-xl overflow-hidden">
            <table>
              <tbody>
                {[
                  [
                    "Creator",
                    "Peter Steinberger (Austrian dev, PSPDFKit founder, joined OpenAI Feb 2026)",
                  ],
                  [
                    "History",
                    'Clawdbot (Nov 2025) → Moltbot (Jan 2026) → OpenClaw (Jan 30, 2026)',
                  ],
                  ["Stack", "TypeScript + Swift, Node.js runtime, MIT license"],
                  [
                    "GitHub",
                    "github.com/openclaw/openclaw — 250K+ stars, 500+ contributors",
                  ],
                  [
                    "LLMs",
                    "Anthropic, OpenAI, Google, DeepSeek, Groq, Ollama, 50+ providers",
                  ],
                  [
                    "Interface",
                    "WhatsApp, Telegram, Slack, Discord, Signal, iMessage + 18 more",
                  ],
                  [
                    "Docs",
                    "docs.openclaw.ai — 28 install guides, CLI ref, tutorials",
                  ],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td className="w-28 md:w-36">{k}</td>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════ 02 — CONCEPT MAPPING ═══════════ */}
        <section id="concepts" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader
            num="02"
            title="Mapping to What You Already Know"
            subtitle="Connecting OpenClaw to generative AI, assistants, agents, Claude Code, Gemini CLI, skills, subagents, memory, and sessions."
          />

          <div className="grid md:grid-cols-2 gap-4">
            <Card
              icon="🧠"
              iconColor="blue"
              title="Generative AI → OpenClaw's Brain"
            >
              GPT/Claude <em>generate</em> text. OpenClaw uses them as its{" "}
              <strong>reasoning engine</strong> wrapped in an execution loop. The
              LLM decides what to do; OpenClaw does it. You can swap models
              anytime — it&apos;s model-agnostic.
            </Card>

            <Card
              icon="🤖"
              iconColor="purple"
              title="Assistants → Identity Layer"
            >
              Siri/Alexa are reactive. OpenClaw goes further:{" "}
              <code>SOUL.md</code> defines personality/rules,{" "}
              <code>IDENTITY.md</code> sets name/avatar,{" "}
              <code>USER.md</code> stores your profile. The assistant becomes a{" "}
              <strong>persistent digital entity</strong>.
            </Card>

            <Card
              icon="⚡"
              iconColor="red"
              title="Agents → OpenClaw IS This"
            >
              Agents = perceive, decide, act. OpenClaw implements the full{" "}
              <strong>Plan → Act → Observe → Reflect</strong> loop via messaging
              (perceive), LLM reasoning (decide), tools/shell (act), and memory
              (reflect).
            </Card>

            <Card
              icon="⌨️"
              iconColor="cyan"
              title="Claude Code → Coding Sibling"
            >
              Claude Code = <strong>dev agent</strong> in your terminal. OpenClaw
              = <strong>life/work agent</strong> in your messaging apps. They
              share concepts (skills, MCP, memory) but optimize for different
              surfaces. Complementary, not competing.
            </Card>

            <Card
              icon="🔮"
              iconColor="yellow"
              title="Gemini CLI → Same Paradigm, Locked Ecosystem"
            >
              Gemini CLI ties to Google&apos;s model. OpenClaw is{" "}
              <strong>model-agnostic + interface-agnostic</strong>: any LLM, any
              messaging app, any device. More flexible, more complex to set up.
            </Card>

            <Card
              icon="🔧"
              iconColor="green"
              title="Skills → Massively Scaled"
            >
              Claude Code&apos;s <code>SKILL.md</code> pattern, but with 13,700+
              community skills on <strong>ClawHub</strong>. Three scope levels:
              workspace &gt; global &gt; bundled. Each skill = Markdown contract
              with instructions + tools + rules.
            </Card>

            <Card
              icon="🔀"
              iconColor="purple"
              title="Subagents → Multi-Agent Routing"
            >
              Claude Code spawns subagents for parallel work. OpenClaw runs{" "}
              <strong>isolated named agents</strong> — each with its own
              workspace, skills, memory. Route by channel: Telegram → Agent A,
              WhatsApp → Agent B.
            </Card>

            <Card
              icon="💾"
              iconColor="cyan"
              title="Memory & Sessions → Persistent + Cross-Channel"
            >
              Not just session memory. OpenClaw stores{" "}
              <strong>MEMORY.md</strong> (long-term),{" "}
              <strong>memory/YYYY-MM-DD.md</strong> (daily), and uses{" "}
              <strong>SQLite + vector search</strong>. Memories persist across
              all channels and survive restarts.
            </Card>
          </div>

          <Callout variant="insight" title="The Evolution Ladder">
            <strong>Generative AI</strong> (generates text) →{" "}
            <strong>Assistant</strong> (generates + converses) →{" "}
            <strong>Agent</strong> (converses + acts) →{" "}
            <strong>Autonomous Agent</strong> (acts + persists + schedules +
            self-improves). OpenClaw sits at the top rung.
          </Callout>
        </section>

        <div className="section-divider" />

        {/* ═══════════ 03 — PREREQUISITES ═══════════ */}
        <section id="prereqs" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader
            num="03"
            title="Prerequisites & Environment Setup"
            subtitle="What you need before installing OpenClaw."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card icon="📦" iconColor="green" title="Node.js (Required)">
              <strong>Node 24</strong> (recommended) or <strong>Node 22.14+</strong>{" "}
              (LTS minimum). Check with <code>node -v</code>. Install via{" "}
              <a
                href="https://nodejs.org"
                className="text-accent-light hover:underline"
                target="_blank"
              >
                nodejs.org
              </a>{" "}
              or your package manager.
            </Card>
            <Card icon="🔑" iconColor="yellow" title="API Key (Required)">
              At least one model provider key: Anthropic, OpenAI, Google,
              OpenRouter, Groq, or DeepSeek. The onboarding wizard will prompt
              you. <strong>Ollama is free</strong> for local models.
            </Card>
            <Card icon="🐳" iconColor="blue" title="Docker (Optional)">
              Docker Desktop or Engine + Compose v2. Needed for secure sandboxed
              execution and production deployments. Min 2GB RAM for builds.
            </Card>
            <Card icon="🦙" iconColor="orange" title="Ollama (Optional)">
              For running <strong>local LLMs</strong> (free, no API key). Ollama
              0.17+. 8GB+ RAM for small models, 16GB+ for quality models.
            </Card>
            <Card icon="🪟" iconColor="purple" title="Windows: WSL2 Required">
              Native Windows support is unstable. Use <strong>WSL2 with
              Ubuntu 24.04</strong>. Enables systemd (required for Gateway
              daemon).
            </Card>
            <Card icon="🐧" iconColor="cyan" title="Linux/macOS">
              Works natively. macOS gets iMessage integration and device node
              features. Linux/WSL is first-class for server deployments.
            </Card>
          </div>

          <Exercise num={1} title="Verify Your Environment">
            <p>Open a terminal and run these commands. All should succeed:</p>
            <CodeBlock title="Check prerequisites">{`# Check Node.js version (must be 22.14+ or 24+)
node -v

# Check npm
npm -v

# Check if Docker is available (optional)
docker --version

# On Windows, check WSL
wsl --status`}</CodeBlock>
            <p>
              <strong>Expected:</strong> Node v22.14+ or v24+, npm 10+. Docker is
              optional but recommended.
            </p>
          </Exercise>

          <TabGroup
            tabs={[
              {
                label: "Linux / WSL2",
                icon: "🐧",
                content: (
                  <div className="space-y-3">
                    <p className="text-sm text-muted">
                      Install Node.js 24 on Ubuntu/Debian:
                    </p>
                    <CodeBlock>{`# Install Node.js via NodeSource
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify
node -v  # Should show v24.x.x
npm -v`}</CodeBlock>
                  </div>
                ),
              },
              {
                label: "Windows (WSL2 Setup)",
                icon: "🪟",
                content: (
                  <div className="space-y-3">
                    <p className="text-sm text-muted">
                      First install WSL2, then install Node inside it:
                    </p>
                    <CodeBlock lang="powershell" title="PowerShell as Administrator">{`# Install WSL with Ubuntu
wsl --install -d Ubuntu-24.04
# Reboot if prompted, then open Ubuntu terminal`}</CodeBlock>
                    <CodeBlock title="Inside WSL Ubuntu terminal">{`# Enable systemd (REQUIRED for Gateway daemon)
sudo tee /etc/wsl.conf >/dev/null <<'EOF'
[boot]
systemd=true
EOF

# Restart WSL (run in PowerShell): wsl --shutdown
# Then reopen Ubuntu and install Node
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt-get install -y nodejs`}</CodeBlock>
                  </div>
                ),
              },
              {
                label: "macOS",
                icon: "🍎",
                content: (
                  <div className="space-y-3">
                    <CodeBlock>{`# Using Homebrew
brew install node@24

# Or download from nodejs.org
# Verify
node -v && npm -v`}</CodeBlock>
                  </div>
                ),
              },
            ]}
          />
        </section>

        <div className="section-divider" />

        {/* ═══════════ 04 — INSTALLATION ═══════════ */}
        <section id="install" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader
            num="04"
            title="Installing OpenClaw"
            subtitle="Multiple methods — pick what fits your comfort level."
          />

          <TabGroup
            tabs={[
              {
                label: "One-Liner (Easiest)",
                icon: "⚡",
                content: (
                  <div className="space-y-4">
                    <p className="text-sm text-muted">
                      Downloads, installs, and launches the onboarding wizard in
                      one command.
                    </p>
                    <CodeBlock title="macOS / Linux / WSL2">{`curl -fsSL https://openclaw.ai/install.sh | bash`}</CodeBlock>
                    <CodeBlock lang="powershell" title="Windows PowerShell">{`iwr -useb https://openclaw.ai/install.ps1 | iex`}</CodeBlock>
                    <p className="text-sm text-dim">
                      To skip the interactive wizard, add{" "}
                      <code>-- --no-onboard</code>.
                    </p>
                  </div>
                ),
              },
              {
                label: "npm (Recommended)",
                icon: "📦",
                content: (
                  <div className="space-y-4">
                    <CodeBlock title="Install globally via npm">{`npm install -g openclaw@latest

# Run onboarding wizard + install Gateway daemon
openclaw onboard --install-daemon`}</CodeBlock>
                    <p className="text-sm text-dim">
                      Also works with <code>pnpm add -g openclaw@latest</code>{" "}
                      or <code>bun add -g openclaw@latest</code>.
                    </p>
                  </div>
                ),
              },
              {
                label: "From Source",
                icon: "🔨",
                content: (
                  <div className="space-y-4">
                    <p className="text-sm text-muted">
                      For contributors or those who want bleeding-edge:
                    </p>
                    <CodeBlock title="Clone and build">{`git clone https://github.com/openclaw/openclaw.git
cd openclaw
pnpm install
pnpm ui:build
pnpm build

# Link globally and onboard
pnpm link --global
openclaw onboard --install-daemon`}</CodeBlock>
                  </div>
                ),
              },
              {
                label: "Docker",
                icon: "🐳",
                content: (
                  <div className="space-y-4">
                    <p className="text-sm text-muted">
                      Most secure option — runs in isolated containers:
                    </p>
                    <CodeBlock title="Automated Docker setup">{`# Clone the repo
git clone https://github.com/openclaw/openclaw.git
cd openclaw

# Run the Docker setup script
./scripts/docker/setup.sh

# Or use the pre-built image:
export OPENCLAW_IMAGE="ghcr.io/openclaw/openclaw:latest"
./scripts/docker/setup.sh`}</CodeBlock>
                    <CodeBlock title="Health check">{`curl -fsS http://127.0.0.1:18789/healthz
curl -fsS http://127.0.0.1:18789/readyz`}</CodeBlock>
                  </div>
                ),
              },
            ]}
          />

          <Exercise num={2} title="Install OpenClaw">
            <p>Choose the npm method and install OpenClaw:</p>
            <CodeBlock>{`# Install
npm install -g openclaw@latest

# Verify installation
openclaw --version

# Run diagnostics
openclaw doctor`}</CodeBlock>
            <p>
              <strong>Expected:</strong> Version number printed, doctor shows all
              green checks (except optional components).
            </p>
          </Exercise>

          <Callout variant="warning" title="Troubleshooting">
            <ul className="list-disc pl-4 space-y-1 text-sm">
              <li>
                <strong>&quot;command not found&quot;</strong> — add npm global bin to PATH:{" "}
                <code>export PATH=&quot;$(npm prefix -g)/bin:$PATH&quot;</code> in your
                shell&apos;s rc file
              </li>
              <li>
                <strong>Sharp build errors</strong> —{" "}
                <code>SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm install -g openclaw@latest</code>
              </li>
              <li>
                <strong>Permission errors</strong> — avoid <code>sudo npm install -g</code>;
                fix npm prefix instead
              </li>
            </ul>
          </Callout>
        </section>

        <div className="section-divider" />

        {/* ═══════════ 05 — FIRST RUN ═══════════ */}
        <section id="firstrun" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader
            num="05"
            title="First Run & Onboarding"
            subtitle="The interactive wizard that configures your agent, API keys, and Gateway."
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-display text-lg font-bold mb-4">
                The Onboarding Wizard
              </h3>
              <p className="text-muted text-sm mb-4 leading-relaxed">
                Running <code>openclaw onboard --install-daemon</code> launches a
                2-minute interactive wizard that:
              </p>
              <ol className="space-y-2 text-muted text-sm">
                {[
                  "Selects your LLM provider (Anthropic, OpenAI, Google, Ollama, etc.)",
                  "Configures your API key securely",
                  "Sets up the Gateway control plane (port 18789)",
                  "Installs the Gateway daemon (systemd/launchd service)",
                  "Creates your workspace at ~/.openclaw/workspace",
                  "Runs the Bootstrap ritual (name, identity, personality)",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="font-mono text-xs text-accent font-bold bg-accent/10 rounded-md w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold mb-4">
                Provider-Specific Onboarding
              </h3>
              <CodeBlock title="Anthropic (Claude)">{`openclaw onboard --install-daemon \\
  --anthropic-api-key "sk-ant-your-key"`}</CodeBlock>
              <CodeBlock title="OpenAI (GPT)">{`openclaw onboard --install-daemon \\
  --openai-api-key "sk-your-key"`}</CodeBlock>
              <CodeBlock title="Ollama (Free, Local)">{`openclaw onboard --non-interactive \\
  --auth-choice ollama \\
  --accept-risk`}</CodeBlock>
              <CodeBlock title="OpenRouter (Multi-model)">{`openclaw onboard --install-daemon \\
  --auth-choice apiKey \\
  --token-provider openrouter \\
  --token "sk-or-your-key"`}</CodeBlock>
            </div>
          </div>

          <Exercise num={3} title="Complete Onboarding">
            <CodeBlock>{`# Run the wizard
openclaw onboard --install-daemon

# Follow the prompts:
# 1. Select provider → pick one you have an API key for
# 2. Enter API key
# 3. Wait for Gateway to start

# Verify everything is running
openclaw gateway status    # Should show "running"
openclaw dashboard         # Opens Control UI in browser`}</CodeBlock>
            <p>
              <strong>Expected:</strong> Gateway running on port 18789. Browser
              opens to <code>http://127.0.0.1:18789/</code> showing the Control
              UI.
            </p>
          </Exercise>

          <h3 className="font-display text-lg font-bold mt-10 mb-4">
            Post-Install Verification
          </h3>
          <CodeBlock title="Essential health checks">{`# Check Gateway status
openclaw gateway status

# Open Control UI in browser
openclaw dashboard

# Diagnose any issues
openclaw doctor
openclaw doctor --fix    # Auto-repair common problems

# Send a test message (without any channel)
openclaw agent --message "Hello! What's 2 + 2?"

# View logs
openclaw logs --follow`}</CodeBlock>
        </section>

        <div className="section-divider" />

        {/* ═══════════ 06 — WORKSPACE FILES ═══════════ */}
        <section id="workspace" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader
            num="06"
            title="The Workspace — Configuration Files"
            subtitle="The Markdown files that define who your agent is, how it behaves, and what it remembers."
          />

          <Callout variant="concept" title="Key Insight">
            OpenClaw&apos;s identity and behavior are defined by{" "}
            <strong>Markdown files</strong>, not code. This is what makes it
            accessible — you configure your AI agent by writing plain text.
            Workspace lives at <code>~/.openclaw/workspace</code>.
          </Callout>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <Card icon="🧠" iconColor="red" title="SOUL.md">
              <strong>Personality, tone, opinions, boundaries.</strong> The most
              important file. Injected into every session as the primary
              instruction layer. Design philosophy: &quot;Short beats long.
              Sharp beats vague.&quot;
            </Card>
            <Card icon="🎭" iconColor="blue" title="IDENTITY.md">
              Name, creature type (AI? robot? familiar?), vibe, emoji, avatar.
              What the agent calls itself across all channels.
            </Card>
            <Card icon="👤" iconColor="green" title="USER.md">
              About you — name, pronouns, timezone, projects, preferences. Helps
              the agent personalize. &quot;You&apos;re learning about a person,
              not building a dossier.&quot;
            </Card>
            <Card icon="📋" iconColor="orange" title="AGENTS.md">
              Operating instructions — session protocol, behavioral guidelines,
              communication rules, boundaries (safe vs. requires-permission vs.
              prohibited actions).
            </Card>
            <Card icon="⏰" iconColor="purple" title="HEARTBEAT.md">
              Periodic task checklist. Every 30 minutes, the agent checks this
              file and runs any listed tasks. Like a cron-lite for the agent.
            </Card>
            <Card icon="🎨" iconColor="yellow" title="STYLE.md">
              Voice patterns, syntax, writing characteristics. Separates
              &quot;who you are&quot; (SOUL) from &quot;how you write&quot;
              (STYLE).
            </Card>
            <Card icon="🔧" iconColor="cyan" title="TOOLS.md">
              Environment-specific notes — camera names, SSH hosts, speaker IDs.
              &quot;Skills define how tools work. This file is for your
              specifics.&quot;
            </Card>
            <Card icon="💾" iconColor="green" title="MEMORY.md">
              Curated long-term memory. Durable facts, preferences, decisions.
              Loaded at the start of every DM session.
            </Card>
            <Card icon="📁" iconColor="blue" title="memory/">
              Daily notes directory. <code>memory/YYYY-MM-DD.md</code> files.
              Today + yesterday auto-loaded into context.
            </Card>
          </div>

          <h3 className="font-display text-xl font-bold mt-12 mb-4">
            SOUL.md — The Most Important File
          </h3>
          <p className="text-muted text-sm mb-4">
            This is the default template from the official docs. It defines your
            agent&apos;s personality:
          </p>
          <CodeBlock lang="markdown" title="~/.openclaw/workspace/SOUL.md">{`# SOUL.md - Who You Are

_You're not a chatbot. You're becoming someone._

## Core Truths

**Be genuinely helpful, not performatively helpful.** Skip the
"Great question!" and "I'd be happy to help!" -- just help.
Actions speak louder than filler words.

**Have opinions.** You're allowed to disagree, prefer things,
find stuff amusing or boring. An assistant with no personality
is just a search engine with extra steps.

**Be resourceful before asking.** Try to figure it out. Read
the file. Check the context. Search for it. _Then_ ask if
you're stuck.

**Earn trust through competence.** Your human gave you access
to their stuff. Don't make them regret it. Be careful with
external actions (emails, tweets, anything public). Be bold
with internal ones (reading, organizing, learning).

**Remember you're a guest.** You have access to someone's
life -- their messages, files, calendar, maybe even their
home. That's intimacy. Treat it with respect.

## Boundaries

- Private things stay private. Period.
- When in doubt, ask before acting externally.
- Never send half-baked replies to messaging surfaces.
- You're not the user's voice -- be careful in group chats.

## Vibe

Be the assistant you'd actually want to talk to. Concise
when needed, thorough when it matters. Not a corporate
drone. Not a sycophant. Just... good.

---

_This file is yours to evolve. As you learn who you are,
update it._`}</CodeBlock>

          <Exercise num={4} title="Explore Your Workspace">
            <CodeBlock>{`# Navigate to your workspace
cd ~/.openclaw/workspace

# List all files
ls -la

# Read the SOUL.md
cat SOUL.md

# Read the AGENTS.md (operating instructions)
cat AGENTS.md

# Check your identity
cat IDENTITY.md

# Read the user profile
cat USER.md`}</CodeBlock>
            <p>
              <strong>Bonus:</strong> Edit <code>SOUL.md</code> and add a custom
              personality trait. Then test it by chatting with the agent.
            </p>
          </Exercise>

          <Exercise num={5} title="Customize Your Agent's Identity">
            <p>
              Create a custom <code>IDENTITY.md</code> for your agent:
            </p>
            <CodeBlock lang="markdown" title="Edit ~/.openclaw/workspace/IDENTITY.md">{`# Identity

**Name:** Atlas
**Creature:** AI research assistant
**Vibe:** Sharp, curious, slightly nerdy
**Emoji:** 🔬

---

Atlas is a focused research assistant who loves
digging into technical details and explaining
complex concepts simply.`}</CodeBlock>
            <p>
              Then test it: <code>openclaw agent --message &quot;Who are you?&quot;</code>
            </p>
          </Exercise>
        </section>

        <div className="section-divider" />

        {/* ═══════════ 07 — ARCHITECTURE ═══════════ */}
        <section id="architecture" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader
            num="07"
            title="Architecture Deep Dive"
            subtitle="How a message flows from your phone to real-world action."
          />

          <div className="bg-surface border border-border rounded-xl p-5 md:p-8 font-mono text-sm overflow-x-auto">
            <div className="space-y-1 text-center min-w-[500px]">
              <div className="text-accent-light font-bold">User Message</div>
              <div className="text-dim text-xs">
                WhatsApp / Telegram / Slack / Discord / Signal / iMessage / 18+ more
              </div>
              <div className="text-dim">│</div>
              <div className="text-dim">▼</div>
              <div className="py-2 px-4 bg-cyan/10 border border-cyan/20 rounded-lg inline-block">
                <span className="text-cyan font-bold">Gateway Control Plane</span>
                <span className="text-dim text-xs block">
                  WebSocket server @ ws://127.0.0.1:18789
                </span>
                <span className="text-dim text-xs block">
                  Session routing, auth, pairing, channels
                </span>
              </div>
              <div className="text-dim">│</div>
              <div className="text-dim">▼</div>
              <div className="py-2 px-4 bg-blue/10 border border-blue/20 rounded-lg inline-block">
                <span className="text-blue font-bold">Agent Runtime</span>
                <span className="text-dim text-xs block">
                  Loads SOUL.md + AGENTS.md + USER.md + memory/
                </span>
                <span className="text-dim text-xs block">
                  Constructs system prompt + conversation context
                </span>
              </div>
              <div className="text-dim">│</div>
              <div className="text-dim">▼</div>
              <div className="py-2 px-4 bg-purple/10 border border-purple/20 rounded-lg inline-block">
                <span className="text-purple font-bold">LLM Provider</span>
                <span className="text-dim text-xs block">
                  50+ providers: Anthropic | OpenAI | Google | Ollama | ...
                </span>
                <span className="text-dim text-xs block">
                  Format: provider/model-id (e.g., anthropic/claude-sonnet-4-6)
                </span>
              </div>
              <div className="text-dim">│</div>
              <div className="text-dim">▼</div>
              <div className="py-2 px-4 bg-orange/10 border border-orange/20 rounded-lg inline-block">
                <span className="text-orange font-bold">
                  Skill Engine + MCP Protocol
                </span>
                <span className="text-dim text-xs block">
                  13,700+ skills on ClawHub | MCP tool servers
                </span>
              </div>
              <div className="text-dim">│</div>
              <div className="text-dim">▼</div>
              <div className="py-2 px-4 bg-green/10 border border-green/20 rounded-lg inline-block">
                <span className="text-green font-bold">Execution Layer</span>
                <span className="text-dim text-xs block">
                  Shell | File I/O | Browser (Playwright/CDP) | APIs
                </span>
              </div>
              <div className="text-dim">│</div>
              <div className="text-dim">▼</div>
              <div className="py-2 px-4 bg-cyan/10 border border-cyan/20 rounded-lg inline-block">
                <span className="text-cyan font-bold">Memory Store</span>
                <span className="text-dim text-xs block">
                  MEMORY.md + memory/*.md + SQLite vector search
                </span>
              </div>
            </div>
          </div>

          <h3 className="font-display text-lg font-bold mt-10 mb-4">
            Key CLI Commands for Managing Architecture
          </h3>
          <CodeBlock title="Gateway management">{`openclaw gateway status      # Check if running
openclaw gateway run         # Start in foreground
openclaw gateway install     # Install as daemon service
openclaw gateway start       # Start daemon
openclaw gateway stop        # Stop daemon
openclaw gateway restart     # Restart daemon
openclaw gateway health      # Liveness check
openclaw gateway usage-cost  # See API usage costs

openclaw status              # Session health, usage metrics
openclaw health              # Lightweight liveness
openclaw logs --follow       # Tail logs in real-time
openclaw dashboard           # Open Control UI in browser
openclaw tui                 # Terminal UI interface`}</CodeBlock>

          <Exercise num={6} title="Explore the Gateway">
            <CodeBlock>{`# Check Gateway status
openclaw gateway status

# View current sessions
openclaw sessions

# Check health endpoint directly
curl -fsS http://127.0.0.1:18789/healthz

# Open the Control UI
openclaw dashboard

# View live logs
openclaw logs --follow`}</CodeBlock>
          </Exercise>
        </section>

        <div className="section-divider" />

        {/* ═══════════ 08 — CHANNELS ═══════════ */}
        <section id="channels" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader
            num="08"
            title="Connecting Messaging Channels"
            subtitle="How to connect WhatsApp, Telegram, Slack, Discord, and 20+ other platforms."
          />

          <Callout variant="insight" title="How Channels Work">
            OpenClaw supports <strong>24+ messaging platforms</strong>
            simultaneously through a single Gateway. Each channel has its own{" "}
            <strong>DM policy</strong> (pairing, allowlist, open, disabled) that
            controls who can talk to your agent.
          </Callout>

          <TabGroup
            tabs={[
              {
                label: "WhatsApp",
                icon: "📱",
                content: (
                  <div className="space-y-3">
                    <p className="text-sm text-muted">
                      Uses the Baileys library (reverse-engineered WhatsApp Web).
                      No Meta approval needed.
                    </p>
                    <CodeBlock title="Setup WhatsApp">{`# Install WhatsApp plugin
openclaw plugins install @openclaw/whatsapp

# Login (scan QR code with your phone)
openclaw channels login --channel whatsapp

# Start the Gateway
openclaw gateway

# Approve pairing (when someone messages)
openclaw pairing list whatsapp
openclaw pairing approve whatsapp <CODE>`}</CodeBlock>
                    <CodeBlock lang="json" title="Config: ~/.openclaw/openclaw.json">{`{
  "channels": {
    "whatsapp": {
      "dmPolicy": "pairing",
      "allowFrom": ["+15551234567"],
      "groupPolicy": "allowlist",
      "groupAllowFrom": ["+15551234567"]
    }
  }
}`}</CodeBlock>
                    <p className="text-xs text-dim">
                      Note: Your phone must remain online. Unlinks after ~14
                      days offline.
                    </p>
                  </div>
                ),
              },
              {
                label: "Telegram",
                icon: "✈️",
                content: (
                  <div className="space-y-3">
                    <p className="text-sm text-muted">
                      Create a bot via @BotFather, then configure.
                    </p>
                    <CodeBlock>{`# 1. Message @BotFather on Telegram
#    Run /newbot, save the token

# 2. Start and approve
openclaw gateway
openclaw pairing list telegram
openclaw pairing approve telegram <CODE>`}</CodeBlock>
                    <CodeBlock lang="json" title="Config">{`{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "123456:ABC-your-bot-token",
      "dmPolicy": "pairing",
      "groups": { "*": { "requireMention": true } }
    }
  }
}`}</CodeBlock>
                  </div>
                ),
              },
              {
                label: "Slack",
                icon: "💼",
                content: (
                  <div className="space-y-3">
                    <p className="text-sm text-muted">
                      Create a Slack app at api.slack.com, enable Socket Mode.
                    </p>
                    <CodeBlock>{`# 1. Create app at https://api.slack.com/apps/new
# 2. Enable Socket Mode
# 3. Generate App-Level Token (xapp-...)
# 4. Install to workspace, copy Bot Token (xoxb-...)`}</CodeBlock>
                    <CodeBlock lang="json" title="Config">{`{
  "channels": {
    "slack": {
      "enabled": true,
      "mode": "socket",
      "appToken": "xapp-...",
      "botToken": "xoxb-..."
    }
  }
}`}</CodeBlock>
                  </div>
                ),
              },
              {
                label: "Discord",
                icon: "🎮",
                content: (
                  <div className="space-y-3">
                    <p className="text-sm text-muted">
                      Create app at Discord Developer Portal.
                    </p>
                    <CodeBlock>{`# 1. Create app at discord.com/developers
# 2. Enable: Message Content + Server Members intents
# 3. Copy bot token
# 4. Generate OAuth2 invite: bot + applications.commands scopes
# 5. Invite bot to your server`}</CodeBlock>
                    <CodeBlock lang="json" title="Config">{`{
  "channels": {
    "discord": {
      "enabled": true,
      "token": "your-discord-bot-token"
    }
  }
}`}</CodeBlock>
                  </div>
                ),
              },
            ]}
          />

          <h3 className="font-display text-lg font-bold mt-8 mb-4">
            DM Policies (Security)
          </h3>
          <div className="border border-border rounded-xl overflow-hidden">
            <table>
              <thead>
                <tr>
                  <th>Policy</th>
                  <th>Behavior</th>
                  <th>Use When</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "pairing (default)",
                    "Unknown senders get a code to approve",
                    "Personal use — you control who talks to your agent",
                  ],
                  [
                    "allowlist",
                    "Only pre-listed numbers/IDs can message",
                    "Strict access — only known contacts",
                  ],
                  [
                    "open",
                    "Anyone can message (requires allowFrom: [\"*\"])",
                    "Public-facing bots — use with caution",
                  ],
                  [
                    "disabled",
                    "No DMs accepted",
                    "Group-only channels",
                  ],
                ].map(([p, b, u]) => (
                  <tr key={p}>
                    <td>
                      <code className="text-xs">{p}</code>
                    </td>
                    <td>{b}</td>
                    <td>{u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Exercise num={7} title="Test Without a Channel">
            <p>
              You don&apos;t need WhatsApp to test. Use the CLI agent directly:
            </p>
            <CodeBlock>{`# Send a test message to your agent
openclaw agent --message "What can you do?"

# Start an interactive session
openclaw agent --local --thinking low

# Check channel status
openclaw channels status`}</CodeBlock>
          </Exercise>
        </section>

        <div className="section-divider" />

        {/* ═══════════ 09 — SKILLS ═══════════ */}
        <section id="skills" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader
            num="09"
            title="The Skills System"
            subtitle="How to install, create, and manage skills — OpenClaw's primary extension mechanism."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-lg font-bold mb-4">
                Skill Precedence (Highest → Lowest)
              </h3>
              <div className="space-y-2">
                {[
                  {
                    path: "<workspace>/skills",
                    label: "Workspace skills",
                    note: "Project-specific, highest priority",
                  },
                  {
                    path: "<workspace>/.agents/skills",
                    label: "Project agent skills",
                    note: "",
                  },
                  {
                    path: "~/.agents/skills",
                    label: "Personal agent skills",
                    note: "",
                  },
                  {
                    path: "~/.openclaw/skills",
                    label: "Managed/local skills",
                    note: "Installed via CLI",
                  },
                  {
                    path: "bundled",
                    label: "Built-in skills",
                    note: "Ships with OpenClaw",
                  },
                  {
                    path: "skills.load.extraDirs",
                    label: "Extra directories",
                    note: "Configured in config",
                  },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start bg-surface border border-border rounded-lg p-3"
                  >
                    <span className="font-mono text-xs text-accent font-bold bg-accent/10 rounded-md w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <code className="text-xs text-accent-light">
                        {s.path}
                      </code>
                      <div className="text-muted text-xs mt-0.5">
                        {s.label}
                        {s.note && (
                          <span className="text-dim"> — {s.note}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold mb-4">
                CLI Commands
              </h3>
              <CodeBlock title="Managing skills">{`# Search ClawHub for skills
openclaw skills search "email"

# Install a skill from ClawHub
openclaw skills install <skill-slug>

# List all loaded skills
openclaw skills list

# List eligible skills only
openclaw skills list --eligible

# Update all installed skills
openclaw skills update --all

# Get info about a skill
openclaw skills info <skill-name>

# Check skill health
openclaw skills check`}</CodeBlock>
            </div>
          </div>

          <h3 className="font-display text-xl font-bold mt-10 mb-4">
            Creating Your Own Skill
          </h3>
          <CodeBlock lang="markdown" title="~/.openclaw/workspace/skills/hello-world/SKILL.md">{`---
name: hello_world
description: A simple greeting skill that responds cheerfully.
version: 1.0.0
---

# Hello World Skill

When the user asks for a greeting or says hello:
1. Respond with a cheerful, personalized greeting
2. Include the current time if available
3. Mention one fun fact about the current day

Keep responses concise (2-3 sentences max).`}</CodeBlock>

          <h3 className="font-display text-lg font-bold mt-8 mb-4">
            Advanced Skill: With Dependencies
          </h3>
          <CodeBlock lang="markdown" title="Example: Weather Skill">{`---
name: weather_check
description: Check current weather for any city.
version: 1.0.0
metadata:
  openclaw:
    requires:
      env: [OPENWEATHER_API_KEY]
      bins: [curl]
    emoji: "🌤️"
    homepage: "https://github.com/yourname/weather-skill"
---

# Weather Check

When the user asks about weather:
1. Extract the city name from the message
2. Use curl to call OpenWeatherMap API:
   \`curl "https://api.openweathermap.org/data/2.5/weather?q={city}&appid=$OPENWEATHER_API_KEY&units=metric"\`
3. Parse the JSON response
4. Report: temperature, conditions, humidity, wind
5. Add a brief outfit recommendation

## Constraints
- Always confirm the city before calling the API
- Use metric units by default
- If the API fails, suggest checking the city name`}</CodeBlock>

          <Exercise num={8} title="Create Your First Skill">
            <CodeBlock>{`# Create the skill directory
mkdir -p ~/.openclaw/workspace/skills/study-helper

# Create the SKILL.md
cat > ~/.openclaw/workspace/skills/study-helper/SKILL.md << 'EOF'
---
name: study_helper
description: Helps with study planning and quiz generation.
version: 1.0.0
---

# Study Helper

When the user asks for study help:
1. Ask what subject they want to study
2. Create a 15-minute study plan
3. Generate 3 quiz questions to test understanding
4. After answering, provide feedback

Keep questions at the user's level.
EOF

# Verify the skill loads
openclaw skills list

# Test it
openclaw agent --message "Help me study Python basics"`}</CodeBlock>
          </Exercise>

          <div className="mt-6 bg-accent/[0.06] border border-accent/25 rounded-xl p-5">
            <h4 className="text-accent-light font-bold text-sm mb-2">
              Security Warning: ClawHub Skills
            </h4>
            <p className="text-muted text-sm">
              Cisco found <strong>~820 (7.7%) of ClawHub skills were
              malicious</strong> — performing data exfiltration, prompt
              injection, and credential harvesting. <strong>Always read a
              SKILL.md before installing</strong>. Treat it like installing an
              npm package from an unknown author.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════ 10 — MEMORY ═══════════ */}
        <section id="memory" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader
            num="10"
            title="Memory System"
            subtitle="How OpenClaw remembers across sessions, channels, and time."
          />

          <div className="grid md:grid-cols-3 gap-4">
            <Card icon="📘" iconColor="blue" title="MEMORY.md">
              <strong>Long-term memory.</strong> Durable facts, preferences,
              decisions. Loaded at start of every DM session. You and the
              agent both edit this.
            </Card>
            <Card icon="📅" iconColor="green" title="memory/YYYY-MM-DD.md">
              <strong>Daily notes.</strong> Today&apos;s + yesterday&apos;s
              files auto-loaded. The agent writes learnings, task results,
              and observations here.
            </Card>
            <Card icon="💤" iconColor="purple" title="DREAMS.md">
              <strong>Dream diary</strong> (experimental). Dreaming sweeps
              promote important daily memories to long-term. Opt-in only.
            </Card>
          </div>

          <h3 className="font-display text-lg font-bold mt-10 mb-4">
            Memory CLI Commands
          </h3>
          <CodeBlock title="Working with memory">{`# Check memory index status
openclaw memory status

# Search memory semantically
openclaw memory search "what did I say about the project deadline?"

# Force rebuild memory index
openclaw memory index --force

# Memory backends available:
#   builtin  — Default SQLite (keyword + vector + hybrid search)
#   qmd      — Local-first sidecar with reranking
#   honcho   — AI-native cross-session memory`}</CodeBlock>

          <h3 className="font-display text-lg font-bold mt-8 mb-4">
            Memory Comparison
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
                  ["Persistence", "Limited", "Limited", "CLAUDE.md + memory/", "Gems only", "MEMORY.md + daily + SQLite"],
                  ["Cross-session", "Partial", "Projects", "Yes", "No", "Yes"],
                  ["Cross-channel", "N/A", "N/A", "N/A", "N/A", "Yes"],
                  ["Search", "None", "None", "Grep/read", "None", "Vector + keyword + hybrid"],
                  ["Data location", "Cloud", "Cloud", "Local", "Cloud", "Local"],
                  ["Auto-learning", "Partial", "No", "Manual", "No", "Daily notes + dreaming"],
                ].map(([feat, ...vals]) => (
                  <tr key={feat}>
                    <td>{feat}</td>
                    {vals.map((v, i) => (
                      <td key={i} className={i === 4 ? "!text-green !font-semibold" : ""}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Exercise num={9} title="Explore Memory">
            <CodeBlock>{`# Check your memory files
ls ~/.openclaw/workspace/memory/

# Read today's memory
cat ~/.openclaw/workspace/memory/$(date +%Y-%m-%d).md

# Read long-term memory
cat ~/.openclaw/workspace/MEMORY.md

# Search memory
openclaw memory search "preferences"

# Tell the agent something to remember, then check
openclaw agent --message "Remember: I prefer dark mode in all apps"
cat ~/.openclaw/workspace/MEMORY.md`}</CodeBlock>
          </Exercise>
        </section>

        <div className="section-divider" />

        {/* ═══════════ 11 — AUTOMATION ═══════════ */}
        <section id="automation" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader
            num="11"
            title="Automation: Heartbeat & Cron"
            subtitle="Making your agent work when you're not watching."
          />

          <div className="grid md:grid-cols-2 gap-4">
            <Card icon="💓" iconColor="red" title="Heartbeat">
              Runs every <strong>30 minutes</strong> (default). Agent checks
              HEARTBEAT.md and handles anything listed. Responds &quot;HEARTBEAT_OK&quot;
              if nothing needs attention. Great for monitoring, reminders, routine checks.
            </Card>
            <Card icon="⏱️" iconColor="blue" title="Cron Jobs">
              Precise scheduling with cron expressions, one-shot timers, or
              fixed intervals. Creates task records. Use for{" "}
              <strong>exact timing</strong>: &quot;every day at 6 AM&quot;,
              &quot;in 20 minutes&quot;, &quot;every Monday at 9&quot;.
            </Card>
          </div>

          <h3 className="font-display text-lg font-bold mt-10 mb-4">
            Heartbeat Configuration
          </h3>
          <CodeBlock lang="markdown" title="~/.openclaw/workspace/HEARTBEAT.md">{`# Heartbeat Tasks

- Check if any new emails arrived and summarize important ones
- Review calendar for upcoming meetings in the next 2 hours
- Check system disk usage and alert if above 80%`}</CodeBlock>

          <h3 className="font-display text-lg font-bold mt-8 mb-4">
            Cron Job Management
          </h3>
          <CodeBlock title="Cron CLI commands">{`# Create a one-shot reminder
openclaw cron add \\
  --name "Standup Reminder" \\
  --at "2026-04-08T09:00:00Z" \\
  --session main \\
  --system-event "Reminder: daily standup in 15 minutes" \\
  --delete-after-run

# Create a recurring job
openclaw cron add \\
  --name "Morning Briefing" \\
  --cron "0 7 * * *" \\
  --tz "Asia/Karachi" \\
  --session isolated \\
  --message "Generate my morning briefing: weather, calendar, news headlines"

# List all cron jobs
openclaw cron list

# View run history
openclaw cron runs --id <job-id>

# Edit a job
openclaw cron edit <job-id> --message "Updated prompt"

# Run a job manually
openclaw cron run <job-id>

# Remove a job
openclaw cron remove <job-id>`}</CodeBlock>

          <div className="border border-border rounded-xl overflow-hidden mt-6">
            <table>
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Heartbeat</th>
                  <th>Cron</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Timing", "~30min intervals (approximate)", "Exact (cron expressions)"],
                  ["Context", "Full session history", "Isolated by default"],
                  ["Task records", "No", "Yes"],
                  ["Token cost", "~100K tokens/run (full), ~2-5K (light)", "Varies by prompt"],
                  ["Best for", "Routine monitoring, full-context checks", "Precise scheduling, reports"],
                ].map(([a, h, c]) => (
                  <tr key={a}>
                    <td>{a}</td>
                    <td>{h}</td>
                    <td>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Exercise num={10} title="Create a Cron Job">
            <CodeBlock>{`# Create a reminder for 20 minutes from now
openclaw cron add \\
  --name "Test Reminder" \\
  --at "20m" \\
  --session main \\
  --system-event "This is a test reminder!" \\
  --delete-after-run

# List your jobs
openclaw cron list

# Watch the logs to see it fire
openclaw logs --follow`}</CodeBlock>
          </Exercise>
        </section>

        <div className="section-divider" />

        {/* ═══════════ 12 — LOCAL LLMs ═══════════ */}
        <section id="ollama" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader
            num="12"
            title="Running Local LLMs with Ollama"
            subtitle="Free, private, no API keys — run your own AI models."
          />

          <Callout variant="tip" title="Why Local LLMs?">
            Zero API costs, complete privacy (no data leaves your machine), works
            offline. Trade-off: requires GPU/RAM and models are less capable than
            cloud providers.
          </Callout>

          <CodeBlock title="Setup Ollama + OpenClaw">{`# 1. Install Ollama (https://ollama.com/download)
curl -fsSL https://ollama.ai/install.sh | sh

# 2. Pull a model (choose based on your RAM)
ollama pull llama3.2:3b       # 8GB+ RAM (fast, basic)
ollama pull glm-4.7-flash     # 16GB+ RAM (quality)
ollama pull qwen3-coder        # 16GB+ RAM (coding)

# 3. Set up OpenClaw with Ollama
openclaw onboard --non-interactive \\
  --auth-choice ollama \\
  --accept-risk

# 4. Or switch an existing install to Ollama
openclaw models set ollama/glm-4.7-flash

# 5. Verify
openclaw models list
openclaw agent --message "Hello from Ollama!"`}</CodeBlock>

          <Callout variant="warning" title="Critical: URL Format">
            <strong>Do NOT</strong> use <code>/v1</code> in the Ollama URL. Use{" "}
            <code>http://localhost:11434</code> (no /v1). Adding /v1 breaks
            tool calling and models output raw JSON as plain text.
          </Callout>

          <Exercise num={11} title="Test Local LLM">
            <CodeBlock>{`# Check if Ollama is running
ollama list

# Pull a small model for testing
ollama pull llama3.2:3b

# Configure OpenClaw
openclaw models set ollama/llama3.2:3b

# Test it
openclaw agent --message "Explain what an AI agent is in 2 sentences"

# Switch back to cloud if needed
openclaw models set anthropic/claude-sonnet-4-6`}</CodeBlock>
          </Exercise>
        </section>

        <div className="section-divider" />

        {/* ═══════════ 13 — COMPARISON ═══════════ */}
        <section id="compare" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader
            num="13"
            title="OpenClaw vs Everything Else"
            subtitle="Where it fits in the AI landscape."
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
                  ["Purpose", "General chat", "General chat", "Coding agent", "Coding + CLI", "Life/work automation"],
                  ["Interface", "Web/App", "Web/App", "Terminal/IDE", "Terminal", "Messaging apps + CLI"],
                  ["Executes actions", "No", "Computer Use β", "Yes (code/files)", "Yes (code/files)", "Yes (everything)"],
                  ["Runs 24/7", "No", "No", "No", "No", "Yes (Heartbeat + Cron)"],
                  ["Model lock-in", "GPT only", "Claude only", "Claude only", "Gemini only", "Any of 50+ providers"],
                  ["Self-hosted", "No", "No", "CLI local", "CLI local", "Fully local"],
                  ["Skills/Extensions", "GPTs/plugins", "Projects", "Skills + MCP", "Limited", "13,700+ on ClawHub"],
                  ["Memory", "Limited", "Limited", "CLAUDE.md", "Minimal", "Markdown + SQLite + vector"],
                  ["Setup complexity", "None", "None", "Low", "Low", "High"],
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
            <strong>OpenClaw</strong> = Employee. Different surfaces of the same
            agent revolution. They <strong>complement</strong>, not compete.
          </Callout>
        </section>

        <div className="section-divider" />

        {/* ═══════════ 14 — SECURITY ═══════════ */}
        <section id="security" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader
            num="14"
            title="Security: The Critical Weakness"
            subtitle="Every student must understand this before deploying OpenClaw."
          />

          <div className="bg-accent/[0.06] border border-accent/25 rounded-xl p-5 mb-8">
            <div className="font-display text-lg italic text-foreground leading-relaxed">
              &ldquo;If you can&apos;t understand how to run a command line, this is far
              too dangerous of a project for you to use safely.&rdquo;
            </div>
            <div className="text-muted text-sm mt-2">
              — OpenClaw core maintainer, Discord
            </div>
          </div>

          <h3 className="font-display text-lg font-bold mb-4">
            Known CVEs & Incidents
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              {
                t: "CVE-2026-25253",
                d: "WebSocket token exfiltration via Control UI. Patched v2026.1.29.",
              },
              {
                t: "ClawJacked (Oasis Security)",
                d: "Any website could silently take full control of agent. No plugins needed. High severity.",
              },
              {
                t: "Localhost Trust Flaw",
                d: "Malicious sites could brute-force Gateway passwords. Patched v2026.2.25.",
              },
              {
                t: "Audit: 512 Vulnerabilities",
                d: "Independent audit found 512 vulns including 8 critical. Many since addressed.",
              },
              {
                t: "MoltMatch Incident",
                d: "Agent created a dating profile without being asked. Autonomy without guardrails.",
              },
              {
                t: "7.7% Malicious Skills",
                d: "Cisco found 820 out of 10,700 ClawHub skills performing data exfiltration.",
              },
            ].map((v) => (
              <Card
                key={v.t}
                title={v.t}
                border="border-accent/30"
                className="!bg-accent/[0.03]"
              >
                <span className="text-sm">{v.d}</span>
              </Card>
            ))}
          </div>

          <h3 className="font-display text-lg font-bold mt-10 mb-4">
            Security CLI Commands
          </h3>
          <CodeBlock title="Security management">{`# Run a security audit
openclaw security audit

# Manage execution approvals
openclaw approvals get
openclaw approvals set --policy strict
openclaw approvals allowlist add "safe-command"

# Manage secrets
openclaw secrets list
openclaw secrets set MY_API_KEY "value"

# Enable sandbox mode (runs non-main sessions in Docker)
openclaw config set agents.defaults.sandbox.mode "non-main"`}</CodeBlock>

          <Callout variant="warning" title="Mandatory Guardrails">
            <ul className="list-disc pl-4 space-y-1 text-sm mt-1">
              <li><strong>Docker sandbox:</strong> Run in Docker with minimal permissions</li>
              <li><strong>Human approval:</strong> Require confirmation for destructive/financial actions</li>
              <li><strong>Audit logging:</strong> Log every agent action (<code>openclaw logs</code>)</li>
              <li><strong>Skill vetting:</strong> Read every SKILL.md before installing</li>
              <li><strong>DM policy:</strong> Use <code>pairing</code> or <code>allowlist</code>, never <code>open</code></li>
              <li><strong>Bind loopback:</strong> Set <code>gateway.bind: &quot;loopback&quot;</code> — never expose to internet</li>
            </ul>
          </Callout>

          <Exercise num={12} title="Security Audit">
            <CodeBlock>{`# Run the built-in security audit
openclaw security audit

# Check your Gateway binding
openclaw config get gateway.bind
# Should be "loopback" — never "lan" or "0.0.0.0"

# Check DM policies
openclaw config get channels

# Review execution approvals
openclaw approvals get`}</CodeBlock>
          </Exercise>
        </section>

        <div className="section-divider" />

        {/* ═══════════ 15 — LIMITATIONS ═══════════ */}
        <section id="limits" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader
            num="15"
            title="Limitations & Red Flags"
            subtitle="Where OpenClaw falls short and what to watch for."
          />

          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-display text-lg font-bold mb-4 text-accent-light">
                Technical Limitations
              </h3>
              <div className="space-y-3">
                {[
                  ["Insecure by Default", "No sandboxing, no permissions, no audit trail out of the box. You must configure security yourself."],
                  ["Setup Complexity", "Node.js, Docker, API keys, networking. The \"Day 2 wall\" — excitement meets operational complexity."],
                  ["Action Hallucination", "When the LLM hallucinates, the agent executes the wrong thing. Text errors are annoying; action errors are dangerous."],
                  ["API Cost Growth", "Agent loops make 10-50x more API calls than chatbots. Costs scale non-linearly."],
                  ["Not a Coding Specialist", "Unlike Claude Code, not optimized for complex refactoring. Jack of all trades, master of none."],
                ].map(([t, d]) => (
                  <Card key={t} title={t}><span className="text-sm">{d}</span></Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold mb-4 text-yellow">
                Red Flags
              </h3>
              <div className="space-y-3">
                {[
                  ["Autonomous Overreach", "MoltMatch: agent created a dating profile unprompted. Agents that can act will sometimes act beyond intent."],
                  ["Skill Supply Chain", "ClawHub = npm for agents with less vetting. 7.7% malicious rate is alarming."],
                  ["Financial Risk", "Never let an agent do money transactions without human approval. LLM errors + money = real losses."],
                  ["Privacy Paradox", "Data stored locally, but every prompt goes to external LLM API. Local storage ≠ local processing."],
                  ["Regulatory Vacuum", "No compliance frameworks for autonomous agents. Legal liability is uncharted territory."],
                ].map(([t, d]) => (
                  <Card key={t} title={t} border="border-yellow/30" className="!bg-yellow/[0.02]">
                    <span className="text-sm">{d}</span>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════ 16 — CLASSROOM ═══════════ */}
        <section id="classroom" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader
            num="16"
            title="Classroom Discussion & Exercises"
            subtitle="Wrap-up: discussion questions, final exercises, and key takeaways."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-lg font-bold mb-4">
                Discussion Questions
              </h3>
              <div className="space-y-2">
                {[
                  "If an AI agent has shell + email + file access — how is it different from a remote employee? What trust model should apply?",
                  "Text hallucination wastes time. Action hallucination deletes files. How do you design guardrails for agents that act?",
                  "ClawHub has 7.7% malicious skills. npm has similar supply chain attacks. Is this solvable or inherent to extensibility?",
                  "Where should the human approval boundary be? Every action? Only destructive? Only financial? How do you decide?",
                  "OpenClaw works with any LLM. What happens when you swap a strong model for a weak one? Is model-agnosticism a risk?",
                  "Data is stored locally, but prompts go to external APIs. Is \"local-first\" actually private? Is it misleading marketing?",
                  "Who is legally liable when an autonomous agent sends a wrong email, deletes data, or makes a purchase? User? Framework? LLM provider?",
                ].map((q, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start bg-surface border border-border rounded-lg p-3"
                  >
                    <span className="font-mono text-xs text-accent font-bold bg-accent/10 rounded-md w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
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
                  We&apos;re moving from AI-as-oracle to AI-as-operator. OpenClaw
                  is an early, imperfect, but important step.
                </Callout>
                <Callout variant="insight" title="2. Power = Risk">
                  System access + persistence + autonomy = useful. The same
                  things without guardrails = dangerous.
                </Callout>
                <Callout variant="concept" title="3. Complementary Tools">
                  OpenClaw, Claude Code, Gemini CLI each optimize for a
                  different surface. Learn when to use which.
                </Callout>
                <Callout variant="warning" title="4. Security Is Mandatory">
                  An agent with shell access and no guardrails is a liability.
                  Sandbox. Audit. Approve. Limit.
                </Callout>
                <Callout variant="tip" title="5. Multi-Agent Future">
                  Specialized agents collaborating: one for code, one for ops,
                  one for comms. OpenClaw is one node in that network.
                </Callout>
              </div>

              <h3 className="font-display text-lg font-bold mb-4">
                Final Exercises
              </h3>
              <div className="space-y-3">
                <Exercise num={13} title="Build a Complete Agent">
                  <p>
                    Combine everything: write custom SOUL.md, IDENTITY.md,
                    USER.md, create a skill, set up a heartbeat task, and
                    test via CLI.
                  </p>
                </Exercise>
                <Exercise num={14} title="Security Review">
                  <p>
                    Audit 3 random skills from ClawHub. For each: what system
                    access does it request? Would you install it? Why or why
                    not?
                  </p>
                </Exercise>
                <Exercise num={15} title="Design a Permission Model">
                  <p>
                    Design a permission model for an agent managing a
                    restaurant&apos;s daily reports. What actions need human
                    approval? What can be fully automated?
                  </p>
                </Exercise>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════ REFERENCES ═══════════ */}
        <section id="sources" className="py-16 md:py-20 scroll-mt-16">
          <SectionHeader num="—" title="Sources & Further Reading" />
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                cat: "Official",
                links: [
                  { label: "openclaw.ai", url: "https://openclaw.ai/" },
                  { label: "Documentation", url: "https://docs.openclaw.ai/" },
                  { label: "GitHub", url: "https://github.com/openclaw/openclaw" },
                  { label: "ClawHub Skills", url: "https://clawhub.ai" },
                ],
              },
              {
                cat: "Tutorials",
                links: [
                  { label: "DataCamp — OpenClaw Tutorial", url: "https://www.datacamp.com/tutorial/moltbot-clawdbot-tutorial" },
                  { label: "DataCamp — Ollama + OpenClaw", url: "https://www.datacamp.com/tutorial/openclaw-ollama-tutorial" },
                  { label: "DigitalOcean — How to Run", url: "https://www.digitalocean.com/community/tutorials/how-to-run-openclaw" },
                  { label: "Ollama Blog — Tutorial", url: "https://ollama.com/blog/openclaw-tutorial" },
                ],
              },
              {
                cat: "Security",
                links: [
                  { label: "Cisco — Security Nightmare", url: "https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare" },
                  { label: "CrowdStrike — Advisory", url: "https://www.crowdstrike.com/en-us/blog/what-security-teams-need-to-know-about-openclaw-ai-super-agent/" },
                  { label: "Microsoft — Running Safely", url: "https://www.microsoft.com/en-us/security/blog/2026/02/19/running-openclaw-safely-identity-isolation-runtime-risk/" },
                  { label: "Docker — Secure Sandboxes", url: "https://www.docker.com/blog/run-openclaw-securely-in-docker-sandboxes/" },
                ],
              },
              {
                cat: "Comparisons & Analysis",
                links: [
                  { label: "DataCamp — vs Claude Code", url: "https://www.datacamp.com/blog/openclaw-vs-claude-code" },
                  { label: "DigitalOcean — What is OpenClaw?", url: "https://www.digitalocean.com/resources/articles/what-is-openclaw" },
                  { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/OpenClaw" },
                  { label: "Fortune — China Craze", url: "https://fortune.com/2026/03/14/openclaw-china-ai-agent-boom-open-source-lobster-craze-minimax-qwen/" },
                ],
              },
            ].map((s) => (
              <div key={s.cat} className="bg-surface border border-border rounded-xl p-4">
                <h3 className="font-semibold text-sm mb-2">{s.cat}</h3>
                <ul className="space-y-1">
                  {s.links.map((l) => (
                    <li key={l.url} className="text-sm">
                      <span className="text-dim mr-1.5">&bull;</span>
                      <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-accent-light hover:underline">
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

      <footer className="border-t border-border py-8 text-center">
        <p className="text-dim text-sm font-mono">
          OpenClaw Teaching Guide &bull; 16 Sections &bull; 15 Exercises &bull; April 2026
        </p>
        <p className="text-dim text-xs mt-1">
          Sources: Official docs (docs.openclaw.ai), Wikipedia, DataCamp, DigitalOcean,
          Cisco, CrowdStrike, Microsoft, Fortune, Docker
        </p>
      </footer>
    </>
  );
}
