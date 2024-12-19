import { ChatMessage } from '@/lib/types/chat';
import { PROPERTY_PATTERNS } from '../constants/patterns';

export function extractPreferences(messages: ChatMessage[]): string[] {
  const preferences = new Set<string>();
  
  for (const message of messages) {
    if (message.role !== 'user') continue;
    
    const content = message.content.toLowerCase();
    
    // Extract property types
    PROPERTY_PATTERNS.propertyTypes.forEach(type => {
      if (content.includes(type)) {
        preferences.add(type);
      }
    });
    
    // Extract features
    PROPERTY_PATTERNS.features.forEach(feature => {
      if (content.includes(feature)) {
        preferences.add(feature);
      }
    });
    
    // Extract bedroom preferences
    const bedroomMatch = content.match(PROPERTY_PATTERNS.bedrooms);
    if (bedroomMatch) {
      preferences.add(`${bedroomMatch[1]} bedrooms`);
    }
  }
  
  return Array.from(preferences);
}