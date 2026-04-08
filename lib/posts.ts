export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags?: string[];
  content: string;
}

export const posts: Post[] = [
  {
    slug: "building-trading-bot-with-openclaw-rust",
    title:
      "How I Built a Trading Bot with OpenClaw & Rust (and What Actually Worked)",
    excerpt:
      "I tried building a trading bot using OpenClaw and Rust. Here's what worked, what broke, and what I'd do differently.",
    date: "Apr 08, 2026",
    readTime: "8 min read",
    tags: ["openclaw", "rust", "trading", "automation"],
    content: `
    <p>I didn't start with the goal of building a trading bot. It actually started from curiosity — "can I automate this whole thing?"</p>
    <p>At first, I was just experimenting with <strong>OpenClaw</strong> to handle simple workflows. But then it hit me: if it can trigger actions based on events, why not use it for trading signals?</p>
<br />
    <h2>The First Attempt (and Why It Failed)</h2>
    <p>My first version was messy. I tried to put everything inside OpenClaw — logic, conditions, even decision making. It worked… but barely.</p>
    <p>The problem? It wasn't built for heavy logic. The workflows became hard to manage, and debugging was painful.</p>
    <p>That’s when I realized: OpenClaw should orchestrate, not think.</p>
<br />
    <h2>Splitting the Brain and the Muscle</h2>
    <p>I redesigned everything into two parts:</p>
    <ul>
      <li><strong>OpenClaw</strong> → handles triggers (price alerts, signals, schedules)</li>
      <li><strong>Rust service</strong> → handles decision making and execution</li>
    </ul>
    <p>This separation changed everything. Suddenly, the system felt clean, predictable, and scalable.</p>
<br />
    <h2>Why I Chose Rust (Even Though It Hurt at First)</h2>
    <p>I'll be honest — Rust wasn't easy in the beginning. The borrow checker alone made me question my life choices.</p>
    <p>But once it clicked, it really clicked.</p>
    <p>For trading, where milliseconds matter and crashes are expensive, Rust just makes sense. No random runtime errors, no memory leaks — just predictable performance.</p>
<br />
    <h2>The Setup That Finally Worked</h2>
    <p>Here's the setup I ended up using:</p>
    <ul>
      <li>OpenClaw watching price signals (via webhook / cron)</li>
      <li>Webhook → trigger Rust API</li>
      <li>Rust evaluates strategy (moving average, simple rules)</li>
      <li>If valid → execute trade via exchange API</li>
    </ul>
    <p>Simple, but effective.</p>
<br />
    <h2>The Unexpected Problems</h2>
    <p>Building the bot was the easy part. Keeping it stable was the real challenge.</p>
    <p>I ran into things like:</p>
    <ul>
      <li>API rate limits (got blocked more than once)</li>
      <li>Bad signals (strategy looked good, reality said otherwise)</li>
      <li>Timing issues (late execution = bad entry)</li>
    </ul>
    <p>This is where I learned: automation doesn't remove risk — it just executes it faster.</p>
<br />
    <h2>What I'd Do Differently</h2>
    <p>If I had to start over:</p>
    <ul>
      <li>Focus more on strategy than tech</li>
      <li>Add better logging from day one</li>
      <li>Simulate trades longer before going live</li>
    </ul>
    <p>The tech stack was solid. The logic? That’s where the real game is.</p>
<br />
    <h2>Final Thoughts</h2>
    <p>OpenClaw + Rust turned out to be a powerful combo. One handles orchestration, the other handles execution — clean separation, no overlap.</p>
    <p>But if there's one thing I learned: building a trading bot is not about automation tools or programming languages.</p>
    <p>It's about decisions.</p>
    <p>And automating bad decisions just makes you lose money faster.</p>
  `,
  },
  {
    slug: "getting-started-with-n8n",
    title:
      "Getting Started with n8n: Automate Everything Without Writing Much Code",
    excerpt:
      "n8n is one of the most powerful open-source workflow automation tools available. Here's how to get started and what makes it different from Zapier or Make.",
    date: "Mar 10, 2025",
    readTime: "6 min read",
    tags: ["n8n", "automation"],
    content: `
  <p>I used to automate things the hard way.</p>
  <p>Small scripts, cron jobs, random APIs stitched together — it worked, but every time something broke, I had to trace everything manually. It felt like building a fragile system out of duct tape.</p>
  <p>Then I found <strong>n8n</strong>. At first, I didn't think much of it. Just another "automation tool", right?</p>
  <p>I was wrong.</p>
<br />
  <h2>How I actually started using it</h2>
  <p>My first workflow was simple: a form submission → send notification → store data.</p>
  <p>Nothing fancy. Honestly, something I could've done with a small backend service.</p>
  <p>But what surprised me wasn't what it did — it was how easy it was to extend.</p>
  <p>I didn't need to rewrite anything. I just added more nodes.</p>
<br />
  <h2>Where it started to click</h2>
  <p>After the first workflow worked, I kept pushing it:</p>
  <ul>
    <li>Adding conditional logic</li>
    <li>Transforming data before sending it</li>
    <li>Triggering multiple services in parallel</li>
  </ul>
  <p>At some point, I realized — this wasn't just automation.</p>
  <p>This was orchestration.</p>
<br />
  <h2>The part that changed everything</h2>
  <p>The <strong>Code node</strong>.</p>
  <p>This is where n8n stopped feeling like a no-code tool and started feeling like a developer tool.</p>
  <p>Whenever the visual nodes weren't enough, I could just drop into JavaScript and handle things properly.</p>
  <p>No limitations. No weird workarounds.</p>
<br />
  <h2>Self-hosting was a game changer</h2>
  <p>Running n8n on my own server completely changed how I used it.</p>
  <p>No rate limits. No per-task billing. No worrying about hitting some arbitrary ceiling.</p>
  <p>It felt like owning the automation layer, instead of renting it.</p>
<br />
  <h2>Where I messed up</h2>
  <p>At one point, I tried to push too much logic into n8n.</p>
  <p>Complex transformations, heavy processing, decision trees that should've lived in code.</p>
  <p>And that's where things got messy.</p>
  <p>Debugging became harder. Workflows became harder to read. Everything slowed down.</p>
<br />
  <h2>What I learned</h2>
  <p>n8n is not meant to replace your backend.</p>
  <p>It's meant to connect it.</p>
  <p>Once I started treating it as an orchestration layer — not a logic engine — everything became clean again.</p>
<br />
  <h2>Final thoughts</h2>
  <p>n8n didn't replace coding for me.</p>
  <p>It removed the boring parts of coding.</p>
  <p>And honestly, that's where most of the time goes.</p>
`,
  },
  {
    slug: "getting-started-with-uft-one",
    title:
      "Getting Started with UFT One: Functional Testing for Enterprise Applications",
    excerpt:
      "UFT One is one of the most powerful functional testing tools for enterprise-grade applications. Here's a practical introduction to getting started and what makes it stand out.",
    date: "Mar 18, 2025",
    readTime: "7 min read",
    tags: ["testing", "uft", "qa"],
    content: `
  <p>I didn't plan to learn <strong>UFT One</strong>.</p>
  <p>I had to.</p>
  <p>The project I was working on required it — enterprise system, complex flows, multiple technologies involved.</p>
  <p>At first glance, it felt outdated. The UI, the scripting language, everything.</p>
  <p>It didn't feel like something you'd choose in 2026.</p>
<br />
  <h2>First impression: this feels old</h2>
  <p>VBScript. Object Repository. Record & Playback.</p>
  <p>It felt like stepping into a different era of software development.</p>
  <p>And honestly, I underestimated it because of that.</p>
<br />
  <h2>Then reality hit</h2>
  <p>The application I was testing wasn't a simple web app.</p>
  <p>It had complex UI behavior, dynamic elements, and some parts that just didn't play nicely with modern testing tools.</p>
  <p>And somehow… UFT handled it.</p>
<br />
  <h2>Where it actually shines</h2>
  <p>The <strong>Object Repository</strong> looked annoying at first, but once the project grew, it became useful.</p>
  <p>Instead of chasing selectors everywhere, everything was centralized.</p>
<br />
  <p>And then there was <strong>Smart Identification</strong>.</p>
  <p>This feature alone saved me from rewriting tests multiple times when UI changes happened.</p>
<br />
  <h2>The trade-offs</h2>
  <p>It's not lightweight.</p>
  <p>It's not flexible like modern JS-based frameworks.</p>
  <p>And debugging sometimes feels slower than it should be.</p>
<br />
  <p>Also, writing VBScript in a modern dev environment feels… strange.</p>
<br />
  <h2>What changed my perspective</h2>
  <p>I stopped comparing it to modern tools.</p>
  <p>And started seeing it for what it is — a tool built for complex enterprise systems.</p>
<br />
  <h2>Final thoughts</h2>
  <p>Would I use UFT One for a startup or side project? No.</p>
  <p>But in the environment it was designed for?</p>
  <p>It makes a lot more sense than I expected.</p>
`,
  },
  {
    slug: "building-ai-agents",
    title: "Building AI Agents: From Prompt Chains to Autonomous Systems",
    excerpt:
      "AI agents are more than just chatbots. They plan, use tools, and execute multi-step tasks. Here's a practical introduction to building your first agent.",
    date: "Feb 18, 2025",
    readTime: "8 min read",
    tags: ["ai", "agents", "llm"],
    content: `
  <p>The first time I built something I called an "AI agent", it wasn't really an agent.</p>
  <p>It was just a bunch of prompts chained together.</p>
  <p>And for a while, I thought that was enough.</p>
<br />
  <h2>Where it started to break</h2>
  <p>The moment I needed the system to make decisions — everything fell apart.</p>
  <p>It couldn't decide what to do next. It couldn't adapt. It just followed instructions blindly.</p>
<br />
  <h2>Understanding the difference</h2>
  <p>That's when I realized:</p>
  <p>An agent is not about generating text.</p>
  <p>It's about <strong>taking actions and deciding what to do next</strong>.</p>
<br />
  <h2>My first real agent</h2>
  <p>I built a simple loop:</p>
  <ul>
    <li>Receive a task</li>
    <li>Decide which tool to use</li>
    <li>Execute it</li>
    <li>Evaluate the result</li>
    <li>Repeat</li>
  </ul>
  <p>And suddenly, it felt completely different from a chatbot.</p>
<br />
  <h2>Then things got complicated</h2>
  <p>I added more tools. More steps. More flexibility.</p>
  <p>And that's when the real problems showed up:</p>
  <ul>
    <li>Agents looping forever</li>
    <li>Calling the wrong tools</li>
    <li>Burning tokens unnecessarily</li>
  </ul>
<br />
  <h2>The real challenge</h2>
  <p>It's not building the agent.</p>
  <p>It's controlling it.</p>
<br />
  <p>You need:</p>
  <ul>
    <li>Clear stopping conditions</li>
    <li>Well-defined tools</li>
    <li>Guardrails to prevent bad decisions</li>
  </ul>
<br />
  <h2>What I learned</h2>
  <p>Frameworks help. But they don't solve the core problem.</p>
  <p>The real challenge is designing the system around the agent.</p>
<br />
  <h2>Final thoughts</h2>
  <p>Building agents taught me something unexpected.</p>
  <p>The hardest part isn't making them smart.</p>
  <p>It's making them reliable.</p>
`,
  },
];
