import { DocsConfig } from "@/lib/types/docs"

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
        },
        {
          title: "Installation",
          href: "/docs/installation",
        },
        {
          title: "Configuration",
          href: "/docs/configuration",
        },
      ],
    },
    {
      title: "Features",
      items: [
        {
          title: "Chatbot",
          href: "/docs/features/chatbot",
        },
        {
          title: "Lead Management",
          href: "/docs/features/leads",
        },
        {
          title: "Analytics",
          href: "/docs/features/analytics",
        },
      ],
    },
    {
      title: "API Reference",
      items: [
        {
          title: "REST API",
          href: "/docs/api/rest",
        },
        {
          title: "WebSocket API",
          href: "/docs/api/websocket",
        },
        {
          title: "Webhooks",
          href: "/docs/api/webhooks",
        },
      ],
    },
  ],
  tableOfContents: [
    {
      title: "Overview",
      slug: "overview",
      level: 1,
    },
    {
      title: "Prerequisites",
      slug: "prerequisites",
      level: 2,
    },
    {
      title: "Installation Steps",
      slug: "installation-steps",
      level: 2,
    },
    {
      title: "Configuration",
      slug: "configuration",
      level: 1,
    },
    {
      title: "Environment Variables",
      slug: "environment-variables",
      level: 2,
    },
  ],
  mainContent: `
    <h1 id="overview">Overview</h1>
    <p>Welcome to the RealChat documentation. This guide will help you get started with our platform and explore its features.</p>
    
    <h2 id="prerequisites">Prerequisites</h2>
    <ul>
      <li>A RealChat account</li>
      <li>Basic understanding of chat systems</li>
      <li>API access (for developers)</li>
    </ul>

    <h2 id="installation-steps">Installation Steps</h2>
    <p>Follow these steps to integrate RealChat into your website or application:</p>
    <ol>
      <li>Sign up for a RealChat account</li>
      <li>Configure your chatbot settings</li>
      <li>Add the chat widget to your website</li>
    </ol>

    <h1 id="configuration">Configuration</h1>
    <p>Learn how to configure RealChat for optimal performance.</p>

    <h2 id="environment-variables">Environment Variables</h2>
    <p>The following environment variables are required:</p>
    <ul>
      <li>REALCHAT_API_KEY</li>
      <li>REALCHAT_SECRET_KEY</li>
      <li>WEBHOOK_URL</li>
    </ul>
  `,
}