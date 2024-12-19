export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "broker" | "user";
  subscriptionPlan?: "basic" | "pro" | "enterprise";
  subscriptionStatus?: "active" | "inactive" | "trial";
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: "apartment" | "house" | "commercial";
  features: string[];
  images: string[];
  brokerId: string;
  status: "available" | "sold" | "rented";
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  propertyId?: string;
  source: "whatsapp" | "website" | "social";
  status: "new" | "contacted" | "qualified" | "converted";
  createdAt: Date;
  brokerId: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
  leadId?: string;
}