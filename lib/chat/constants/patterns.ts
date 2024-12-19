export const LEAD_PATTERNS = {
    email: /[\w.-]+@[\w.-]+\.\w+/,
    phone: /(\+\d{1,3}[-.]?)?\d{3}[-.]?\d{3}[-.]?\d{4}/,
    name: /(?:my name is|i am|i'm) ([a-z\s]+)/i,
  } as const;
  
  export const PROPERTY_PATTERNS = {
    propertyTypes: ['apartment', 'house', 'commercial'] as const,
    features: ['parking', 'garden', 'balcony', 'pool'] as const,
    bedrooms: /(\d+)\s*bed/,
  } as const;