# TestChimp Key-Based Provider

Configure the TestChimp key-based provider by setting:

- `TESTCHIMP_API_KEY` – required (the backend resolves the project from this key)
- `TESTCHIMP_PROJECT_ID` – optional; if set, sent as `project-id` for compatibility (ignored for access control)
- `TESTCHIMP_BACKEND_URL` – optional (defaults to `https://featureservice.testchimp.io`)

The provider authenticates to the TestChimp backend using the API key on your behalf.
