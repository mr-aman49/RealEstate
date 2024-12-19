import { ChatContext } from '@/lib/types/chat';

export function formatLeadInfo(leadInfo: ChatContext['leadInfo']): string {
  if (!leadInfo) return '';
  
  const details = [
    leadInfo.name ? `Name: ${leadInfo.name}` : null,
    leadInfo.email ? `Email: ${leadInfo.email}` : null,
    leadInfo.phone ? `Phone: ${leadInfo.phone}` : null,
    leadInfo.preferences?.length ? `Preferences: ${leadInfo.preferences.join(', ')}` : null
  ];

  return details
    .filter(Boolean)
    .map(detail => `  ${detail}`)
    .join('\n');
}