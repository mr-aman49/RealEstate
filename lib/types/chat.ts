export interface ChatMessage {
    id: string;
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: Date;
    leadId?: string;
  }
  
  export interface PropertyInfo {
    id: string;
    title: string;
    price: number;
    location: string;
    bedrooms?: number;
    bathrooms?: number;
    area?: number;
    type: 'apartment' | 'house' | 'commercial';
    features: string[];
    availability: 'available' | 'sold' | 'rented';
  }
  
  export interface ChatContext {
    brokerId: string;
    propertyData?: PropertyInfo[];
    leadInfo?: {
      name?: string;
      email?: string;
      phone?: string;
      preferences?: string[];
    };
  }