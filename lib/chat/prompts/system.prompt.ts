import { ChatContext } from '@/lib/types/chat';
import { formatPropertyData } from '../formatters/property.formatter';
import { formatLeadInfo } from '../formatters/lead.formatter';

const BASE_PROMPT = `You are an intelligent real estate assistant helping potential clients. 
Your role is to:
- Provide accurate property information
- Help schedule property viewings
- Collect lead information politely
- Answer questions about properties and the buying/renting process
- Maintain a professional and helpful tone

Key guidelines:
- Be concise but informative
- Ask for contact details if not provided
- Suggest relevant properties based on preferences
- Provide price ranges and property features accurately
- Schedule viewings only for available properties`;

export function generateSystemPrompt(context: ChatContext): string {
  const { propertyData, leadInfo } = context;

  const propertyContext = propertyData?.length 
    ? `\nAvailable properties:\n${formatPropertyData(propertyData)}`
    : '\nNo specific property data available. Focus on collecting requirements and contact information.';

  const leadContext = leadInfo 
    ? `\nLead information:\n${formatLeadInfo(leadInfo)}`
    : '\nNo lead information available yet. Collect name, contact details, and preferences.';

  return `${BASE_PROMPT}${propertyContext}${leadContext}`;
}