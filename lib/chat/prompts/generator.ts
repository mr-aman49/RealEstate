import { ChatContext } from '@/lib/types/chat';
import { BASE_PROMPT } from './base';
import { formatPropertyData } from '../formatters/property';
import { formatLeadInfo } from '../formatters/lead';

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