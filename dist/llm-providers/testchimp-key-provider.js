"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTestchimpKeyBasedProvider = createTestchimpKeyBasedProvider;
const testchimp_common_1 = require("./testchimp-common");
function createTestchimpKeyBasedProvider() {
    const apiKey = process.env.TESTCHIMP_API_KEY?.trim();
    const projectId = process.env.TESTCHIMP_PROJECT_ID?.trim();
    return {
        name: 'testchimp-key',
        canAuthenticate() {
            return Boolean(apiKey);
        },
        async callLLM(request, options) {
            if (!apiKey) {
                throw new Error('TestChimp key-based provider cannot authenticate because TESTCHIMP_API_KEY is missing.');
            }
            const headers = {
                'TestChimp-Api-Key': apiKey,
            };
            if (projectId) {
                headers['project-id'] = projectId;
            }
            return (0, testchimp_common_1.performTestchimpRequest)(headers, request, options.timeoutMs);
        },
    };
}
