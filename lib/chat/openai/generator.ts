import { ChatMessage, ChatContext } from '@/lib/types/chat';
import { generateSystemPrompt } from '../prompts/generator';
import { openai, CHAT_CONFIG } from './config';

export async function generateChatResponse(
  messages: ChatMessage[],
  context: ChatContext
): Promise<string> {
  try {
    const systemMessage = {
      role: 'system' as const,
      content: generateSystemPrompt(context),
    };

    const formattedMessages = messages.map(({ role, content }) => ({
      role,
      content,
    }));

    const response = await openai.chat.completions.create({
      ...CHAT_CONFIG,
      messages: [systemMessage, ...formattedMessages],
    });

    return response.choices[0].message.content || 'I apologize, but I cannot provide a response at this moment.';
  } catch (error) {
    console.error('Error generating chat response:', error);
    throw new Error('Failed to generate response');
  }
  
}