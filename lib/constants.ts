export const SITE_CONFIG = {
  name: "RealChat",
  description: "Intelligent chatbot solution for real estate brokers",
  url: "https://realchat.com",
  ogImage: "https://realchat.com/og.jpg",
}

export const SUBSCRIPTION_PLANS = {
  basic: {
    name: "Basic",
    price: 29,
    features: [
      "WhatsApp Integration",
      "Up to 500 leads/month",
      "Basic Analytics",
      "Email Support",
    ],
  },
  pro: {
    name: "Professional",
    price: 79,
    features: [
      "Everything in Basic",
      "Website Integration",
      "Up to 2000 leads/month",
      "Advanced Analytics",
      "Priority Support",
    ],
  },
  enterprise: {
    name: "Enterprise",
    price: 199,
    features: [
      "Everything in Professional",
      "Unlimited leads",
      "Custom Integrations",
      "Dedicated Account Manager",
      "24/7 Phone Support",
    ],
  },
}

export const API_ENDPOINTS = {
  auth: "/api/auth",
  chat: "/api/chat",
  properties: "/api/properties",
  leads: "/api/leads",
  analytics: "/api/analytics",
  payments: "/api/payments",
}