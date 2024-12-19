import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const CHAT_CONFIG = {
  model: 'gpt-4',
  temperature: 0.7,
  max_tokens: 500,
  presence_penalty: 0.6,
  frequency_penalty: 0.2,
} as const;