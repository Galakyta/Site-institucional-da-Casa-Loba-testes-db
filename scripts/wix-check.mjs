/**
 * Connectivity check against the live Wix site "Casa Loba".
 *
 * Uses a server-side credential (WIX_API_TOKEN in .env) to query the
 * Stores V3 catalog of the existing site.
 *
 * Run with: npm run wix:check
 */
const token = process.env.WIX_API_TOKEN;
const siteId = process.env.WIX_SITE_ID;

if (!token || !siteId) {
  console.error(
    "WIX_API_TOKEN and WIX_SITE_ID are required. Add them to .env (see .env.example).",
  );
  process.exit(1);
}

const response = await fetch(
  "https://www.wixapis.com/stores/v3/products/query",
  {
    method: "POST",
    headers: {
      Authorization: token,
      "wix-site-id": siteId,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: { paging: { limit: 5 } } }),
  },
);

const body = await response.json();

if (!response.ok) {
  console.error(`HTTP ${response.status}`, JSON.stringify(body, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      connected: true,
      siteId,
      total: body.pagingMetadata?.total ?? body.products?.length ?? 0,
      products: (body.products ?? []).map((p) => ({
        id: p.id,
        name: p.name,
        slug: p.slug,
      })),
    },
    null,
    2,
  ),
);
