import { LLMCallOptions, LLMProvider, LLMRequest } from './llm-provider';
import { performTestchimpRequest } from './testchimp-common';

export function createTestchimpKeyBasedProvider(): LLMProvider {
  const apiKey = process.env.TESTCHIMP_API_KEY?.trim();
  const projectId = process.env.TESTCHIMP_PROJECT_ID?.trim();

  return {
    name: 'testchimp-key',

    canAuthenticate(): boolean {
      return Boolean(apiKey);
    },

    async callLLM(request: LLMRequest, options: LLMCallOptions): Promise<string> {
      if (!apiKey) {
        throw new Error(
          'TestChimp key-based provider cannot authenticate because TESTCHIMP_API_KEY is missing.',
        );
      }

      const headers: Record<string, string> = {
        'TestChimp-Api-Key': apiKey,
      };
      if (projectId) {
        headers['project-id'] = projectId;
      }

      return performTestchimpRequest(headers, request, options.timeoutMs);
    },
  };
}
