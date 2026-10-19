import { createClient, OAuthStrategy } from "@wix/sdk";
import { products } from "@wix/stores";

/**
 * Wix Headless (self-managed) client for the "Casa Loba" site.
 *
 * The client ID is public by design and identifies the headless OAuth app
 * (Headless Settings > Clientes headless). Visitor/member authentication is
 * handled by the OAuth strategy and stored in the browser by the SDK.
 *
 * Server-side/admin operations must NOT use this client. They use a server
 * credential (API key or app token) in scripts/wix-check.mjs.
 */
export const wixClient = createClient({
  modules: { products },
  auth: OAuthStrategy({
    clientId: import.meta.env.PUBLIC_WIX_CLIENT_ID,
  }),
});
