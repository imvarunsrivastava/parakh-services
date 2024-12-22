export function generateRobots(baseUrl: string): string {
  return `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay: 10
# Host: ${baseUrl}`;
}