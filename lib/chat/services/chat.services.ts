import { ChatMessage, ChatContext } from '@/lib/types/chat';
import { openai, CHAT_CONFIG } from '@/lib/config/openai';
import { generateSystemPrompt } from '../prompts/system.prompt';
import { extractLeadInfo } from '../extractors/lead.extractor';
import { extractPreferences } from '../extractors/preferences.extractor';

export class ChatService {
  static async generateResponse(
    messages: ChatMessage[],
    context: ChatContext
  ): Promise<string> {
    try {
      // Extract lead information and preferences
      const leadInfo = extractLeadInfo(messages);
      const preferences = extractPreferences(messages);

      // Update context with extracted information
      const enrichedContext = {
        ...context,
        leadInfo: {
          ...context.leadInfo,
          ...leadInfo,
          preferences: [...(context.leadInfo?.preferences || []), ...preferences]
        }
      };

      const systemMessage = {
        role: 'system' as const,
        content: generateSystemPrompt(enrichedContext),
      };

      const formattedMessages = messages.map(({ role, content }) => ({
        role,
        content,
      }));

      const response = await openai.chat.completions.create({
        ...CHAT_CONFIG,
        messages: [systemMessage, ...formattedMessages],
      });

      return response.choices[0].message.content || 
        'I apologize, but I cannot provide a response at this moment.';
    } catch (error) {
      console.error('Error generating chat response:', error);
      throw new Error('Failed to generate response');
    }
  }
}