import { ChatContext } from '@/lib/types/chat';

export function formatLeadInfo(leadInfo: ChatContext['leadInfo']): string {
  if (!leadInfo) return '';
  
  return `
Name: ${leadInfo.name || 'Not provided'}
Email: ${leadInfo.email || 'Not provided'}
Phone: ${leadInfo.phone || 'Not provided'}
Preferences: ${leadInfo.preferences?.join(', ') || 'Not specified'}`;
}