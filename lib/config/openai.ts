import OpenAI from 'openai';

export const openai = new OpenAI({
//   apiKey: "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"
});

export const CHAT_CONFIG = {
  model: 'gpt-4',
  temperature: 0.7,
  max_tokens: 500,
  presence_penalty: 0.6,
  frequency_penalty: 0.2,
} as const;