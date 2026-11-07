/**
 * Resolves the base canonical URL for the application dynamically.
 * Priority order:
 * 1. NEXT_PUBLIC_SITE_URL (defined in .env / .env.local or Vercel Environment Variables)
 * 2. VERCEL_PROJECT_PRODUCTION_URL (automatically provided by Vercel for production branch)
 * 3. VERCEL_URL (automatically provided by Vercel for all deployments)
 * 4. Fallback domain
 */
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    const url = process.env.NEXT_PUBLIC_SITE_URL.trim().replace(/\/+$/, "");
    return url.startsWith("http") ? url : `https://${url}`;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/+$/, "")}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/+$/, "")}`;
  }

  return "https://kureghorfoundation.org";
}

export const SITE_URL = getBaseUrl();
