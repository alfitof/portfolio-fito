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
    slug: "getting-started-with-n8n",
    title: "Getting Started with n8n: Automate Everything Without Writing Much Code",
    excerpt: "n8n is one of the most powerful open-source workflow automation tools available. Here's how to get started and what makes it different from Zapier or Make.",
    date: "Mar 10, 2025",
    readTime: "6 min read",
    tags: ["n8n", "automation"],
    content: `
      <p>If you've ever wanted to automate repetitive tasks — moving data between apps, sending notifications, triggering workflows — you've probably heard of Zapier or Make. But <strong>n8n</strong> is different. It's open-source, self-hostable, and far more flexible for developers who want full control.</p>
<br />
      <h2>What is n8n?</h2>
      <p>n8n (pronounced "nodemation") is a workflow automation platform that lets you connect apps and services using a visual node-based editor. Think of each node as a step in your workflow — fetch data, transform it, send it somewhere else.</p>
      <p>What sets it apart: you can run it on your own server, write custom JavaScript inside any node, and connect to virtually any API with the HTTP Request node.</p>
<br />
      <h2>Setting Up Locally</h2>
      <p>The fastest way to get started is with Docker:</p>
      <pre><code>docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  n8nio/n8n</code></pre>
      <p>Then open <code>http://localhost:5678</code> and you'll be greeted by the workflow editor.</p>
<br />
      <h2>Your First Workflow</h2>
      <p>Let's build something simple: every time a form is submitted, send a Slack notification and log the data to Google Sheets.</p>
      <p>You'd need three nodes: a <strong>Webhook</strong> node to receive the form submission, a <strong>Google Sheets</strong> node to append the row, and a <strong>Slack</strong> node to send the message. Connect them in order, configure credentials, and activate the workflow — done.</p>
<br />
      <h2>Why Developers Love It</h2>
      <p>The real power comes from the <strong>Code node</strong>, which lets you write arbitrary JavaScript or Python in the middle of any workflow. You can reshape data, call custom functions, or implement complex logic that no drag-and-drop tool could handle.</p>
      <p>Combined with self-hosting, version control via workflow export, and a growing library of 400+ integrations, n8n is becoming the go-to automation layer for developer-led teams.</p>
<br />
      <h2>When to Use n8n vs Writing Custom Code</h2>
      <p>n8n shines when you're connecting existing services and the logic is orchestration-heavy but not compute-heavy. For complex data transformations or high-throughput processing, you're better off writing a proper service. But for the 80% of automation tasks that are just "get data, do something, put it somewhere else" — n8n will save you hours.</p>
    `,
  },
  {
    slug: "building-ai-agents",
    title: "Building AI Agents: From Prompt Chains to Autonomous Systems",
    excerpt: "AI agents are more than just chatbots. They plan, use tools, and execute multi-step tasks. Here's a practical introduction to building your first agent.",
    date: "Feb 18, 2025",
    readTime: "8 min read",
    tags: ["ai", "agents", "llm"],
    content: `
      <p>The term "AI agent" gets thrown around a lot, but what does it actually mean to build one? At its core, an agent is a system that uses an LLM not just to generate text, but to <strong>reason, plan, and take actions</strong> in the world — calling tools, browsing the web, writing and running code.</p>
<br />
      <h2>The Anatomy of an Agent</h2>
      <p>A basic agent has four components: a <strong>language model</strong> (the brain), a set of <strong>tools</strong> it can call, a <strong>memory</strong> system (short-term context + optionally long-term vector storage), and an <strong>orchestration loop</strong> that runs until the task is complete.</p>
      <p>The loop looks like this: the model receives a task, decides which tool to use, calls the tool, gets the result back, and decides what to do next — repeat until done.</p>
<br />
      <h2>ReAct: The Most Common Agent Pattern</h2>
      <p>The ReAct (Reasoning + Acting) pattern prompts the model to alternate between thinking out loud and taking action. Each step looks like:</p>
      <pre><code>Thought: I need to find the current price of BTC.
Action: web_search("BTC price today")
Observation: Bitcoin is trading at $67,420.
Thought: I have the data. I can now answer the question.
Answer: The current price of Bitcoin is $67,420.</code></pre>
      <p>This pattern dramatically improves reliability by forcing the model to reason before acting.</p>
<br />
      <h2>Building One with LangChain</h2>
      <p>LangChain makes it straightforward to wire up an agent with tools:</p>
      <pre><code>from langchain.agents import create_react_agent, AgentExecutor
from langchain_openai import ChatOpenAI
from langchain.tools import DuckDuckGoSearchRun
<br />
llm = ChatOpenAI(model="gpt-4o")
tools = [DuckDuckGoSearchRun()]
agent = create_react_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools)</code></pre>
<br />
      <h2>Multi-Agent Systems</h2>
      <p>Single agents hit limits quickly — context windows fill up, tasks get too complex. The next step is <strong>multi-agent systems</strong>, where specialized agents collaborate: a planner agent breaks down the task, worker agents execute subtasks, and a critic agent reviews the output.</p>
      <p>Frameworks like <strong>LangGraph</strong> and <strong>CrewAI</strong> make this much easier to implement than rolling your own coordination logic.</p>
<br />
      <h2>The Hard Problems</h2>
      <p>The technical setup is actually the easy part. The hard problems are reliability (agents can loop or hallucinate tool calls), cost management (long agentic runs burn tokens fast), and knowing when to stop. Building robust agents means investing heavily in evals, guardrails, and human-in-the-loop checkpoints.</p>
    `,
  },
  {
    slug: "nextjs-app-router-deep-dive",
    title: "Next.js App Router: A Deep Dive into the Patterns That Actually Matter",
    excerpt: "After building several production apps with the App Router, here are the patterns, pitfalls, and mental models that made the biggest difference.",
    date: "Jan 28, 2025",
    readTime: "9 min read",
    tags: ["nextjs", "react"],
    content: `
      <p>The Next.js App Router isn't just a new file-system convention — it's a fundamentally different mental model for building React applications. After working with it across several production projects, I want to share the patterns that actually move the needle.</p>
<br />
      <h2>Think in Server and Client Boundaries</h2>
      <p>The most important shift: stop thinking in pages and components, and start thinking in <strong>server/client boundaries</strong>. Every component is a Server Component by default. The moment you add <code>"use client"</code>, you're creating a boundary — everything below that line runs on the client.</p>
      <p>The key insight: you can pass Server Components <em>as children</em> to Client Components. This means you can keep data-fetching at the server level even inside interactive UI.</p>
      <pre><code>// This works — RSC passed as children to a client component
&lt;ClientSidebar&gt;
  &lt;ServerFetchedContent /&gt;
&lt;/ClientSidebar&gt;</code></pre>
<br />
      <h2>Data Fetching: Co-locate Everything</h2>
      <p>In the Pages Router, data fetching lived in <code>getServerSideProps</code> at the page level, then got prop-drilled down. With Server Components, fetch directly where the data is used:</p>
      <pre><code>// UserCard.tsx — Server Component
async function UserCard({ userId }: { userId: string }) {
  const user = await fetchUser(userId); // No useEffect, no loading state
  return &lt;div&gt;{user.name}&lt;/div&gt;;
}</code></pre>
      <p>This eliminates prop drilling, request waterfalls, and loading state management for the majority of your UI.</p>
<br />
      <h2>Understanding the Four Caches</h2>
      <p>Next.js App Router has four distinct caching layers: the <strong>Request Memoization</strong> cache (deduplicates fetch calls within a single render), the <strong>Data Cache</strong> (persists fetch results across requests), the <strong>Full Route Cache</strong> (caches rendered HTML at build time), and the <strong>Router Cache</strong> (client-side cache of visited routes).</p>
      <p>Most caching bugs come from not understanding which layer is serving stale data. When in doubt, use <code>revalidatePath()</code> or <code>revalidateTag()</code> after mutations.</p>
<br />
      <h2>Parallel Routes for Complex Layouts</h2>
      <p>Parallel Routes (<code>@slot</code> folders) let you render multiple pages in the same layout simultaneously — perfect for dashboards with independent sections that each need their own loading and error states.</p>
<br />
      <h2>The Pattern I Use for Every Project</h2>
      <p>Server Component fetches data → passes to a Client Component shell for interactivity → child Server Components handle any nested data needs. Keep <code>"use client"</code> as close to the leaves as possible. Use <code>Suspense</code> boundaries generously. Treat the server as your default, client as the exception.</p>
    `,
  },
];