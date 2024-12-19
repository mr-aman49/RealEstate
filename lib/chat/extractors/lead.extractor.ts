import { ChatMessage, ChatContext } from '@/lib/types/chat';
import { LEAD_PATTERNS } from '../constants/patterns';

export function extractLeadInfo(messages: ChatMessage[]): ChatContext['leadInfo'] {
  const leadInfo: ChatContext['leadInfo'] = {};
  
  for (const message of messages) {
    if (message.role !== 'user') continue;
    
    const content = message.content.toLowerCase();
    
    // Extract email
    const emailMatch = content.match(LEAD_PATTERNS.email);
    if (emailMatch && !leadInfo.email) {
      leadInfo.email = emailMatch[0];
    }
    
    // Extract phone
    const phoneMatch = content.match(LEAD_PATTERNS.phone);
    if (phoneMatch && !leadInfo.phone) {
      leadInfo.phone = phoneMatch[0];
    }
    
    // Extract name
    const nameMatch = content.match(LEAD_PATTERNS.name);
    if (nameMatch && !leadInfo.name) {
      leadInfo.name = nameMatch[1].trim();
    }
  }

  return Object.keys(leadInfo).length > 0 ? leadInfo : undefined;
}