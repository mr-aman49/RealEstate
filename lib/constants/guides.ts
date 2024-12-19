import { Guide } from "@/lib/types/resources"

export const guides: Guide[] = [
  {
    title: "Account Setup Guide",
    slug: "account-setup",
    description: "Set up your RealChat account and configure basic settings",
    category: "Getting Started",
    readTime: "5 min read",
    content: `
      <h2>Creating Your Account</h2>
      <p>Follow these steps to set up your RealChat account:</p>
      <ol>
        <li>Sign up with your business email</li>
        <li>Verify your email address</li>
        <li>Complete your profile information</li>
        <li>Set up your business preferences</li>
      </ol>
      
      <h2>Basic Configuration</h2>
      <ul>
        <li>Customize your chat widget appearance</li>
        <li>Set up business hours</li>
        <li>Configure notification preferences</li>
        <li>Add team members (if applicable)</li>
      </ul>
    `
  },
  {
    title: "Chatbot Setup Guide",
    slug: "chatbot-setup",
    description: "Configure your chatbot for optimal performance",
    category: "Getting Started",
    readTime: "8 min read",
    content: `
      <h2>Chatbot Configuration</h2>
      <p>Learn how to set up your chatbot effectively:</p>
      <ul>
        <li>Customize welcome messages</li>
        <li>Set up automated responses</li>
        <li>Configure lead capture settings</li>
        <li>Create conversation flows</li>
      </ul>
      
      <h2>Advanced Settings</h2>
      <ul>
        <li>Integration with WhatsApp</li>
        <li>Website widget setup</li>
        <li>Analytics configuration</li>
        <li>A/B testing setup</li>
      </ul>
    `
  },
  {
    title: "Lead Management Guide",
    slug: "lead-management",
    description: "Learn effective lead management strategies",
    category: "Getting Started",
    readTime: "6 min read",
    content: `
      <h2>Lead Management Basics</h2>
      <p>Master the essentials of lead management:</p>
      <ul>
        <li>Understanding the lead dashboard</li>
        <li>Lead qualification process</li>
        <li>Follow-up strategies</li>
        <li>Lead scoring system</li>
      </ul>
      
      <h2>Advanced Features</h2>
      <ul>
        <li>Automated follow-ups</li>
        <li>Lead nurturing workflows</li>
        <li>Integration with CRM</li>
        <li>Performance tracking</li>
      </ul>
    `
  },
  // Keep existing guides...
  {
    title: "Maximizing Lead Conversion",
    slug: "maximizing-lead-conversion",
    description: "Learn effective strategies to convert more leads into clients",
    category: "Lead Generation",
    readTime: "5 min read",
    content: `
      <h2>Understanding Lead Conversion</h2>
      <p>Converting leads into clients requires a systematic approach and consistent follow-up...</p>
      
      <h2>Key Strategies</h2>
      <ul>
        <li>Respond quickly to inquiries</li>
        <li>Personalize your communication</li>
        <li>Use automated follow-ups</li>
        <li>Track and analyze conversion metrics</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>Implement these proven techniques to improve your conversion rates...</p>
    `
  },
  {
    title: "Chatbot Best Practices",
    slug: "chatbot-best-practices",
    description: "Tips for optimizing your chatbot interactions",
    category: "Automation",
    readTime: "8 min read",
    content: `
      <h2>Designing Effective Chatbot Conversations</h2>
      <p>Learn how to create natural and engaging chatbot interactions...</p>
      
      <h2>Configuration Tips</h2>
      <ul>
        <li>Set clear welcome messages</li>
        <li>Configure fallback responses</li>
        <li>Implement conversation flows</li>
        <li>Monitor and optimize performance</li>
      </ul>
    `
  }
]