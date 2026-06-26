"use client";

import Script from "next/script";

const BEACON_SRC = "https://static.cloudflareinsights.com/beacon.min.js";

function getCloudflareAnalyticsToken(): string | undefined {
  const token = process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN?.trim();
  return token || undefined;
}

export function CloudflareAnalytics() {
  const token = getCloudflareAnalyticsToken();

  if (process.env.NODE_ENV !== "production" || !token) {
    return null;
  }

  return (
    <Script
      defer={true}
      src={BEACON_SRC}
      strategy="afterInteractive"
      data-cf-beacon={JSON.stringify({ token, spa: true })}
    />
  );
}
