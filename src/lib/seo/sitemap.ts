import { supabase } from '../supabase';

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

export async function generateSitemap(): Promise<string> {
  const baseUrl = 'https://parakh-services.com'; // Replace with your domain
  const urls: SitemapURL[] = [];

  // Add static pages
  urls.push(
    { loc: '/', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 1.0 },
    { loc: '/services', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: '/locations', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: '/brands', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 }
  );

  // Add dynamic pages from database
  const [services, locations, brands] = await Promise.all([
    supabase.from('services').select('slug, updated_at'),
    supabase.from('locations').select('slug, updated_at').eq('is_active', true),
    supabase.from('brands').select('slug, updated_at').eq('is_active', true)
  ]);

  // Add service pages
  services.data?.forEach(service => {
    urls.push({
      loc: `/services/${service.slug}`,
      lastmod: service.updated_at,
      changefreq: 'weekly',
      priority: 0.8
    });
  });

  // Add location pages
  locations.data?.forEach(location => {
    urls.push({
      loc: `/locations/${location.slug}`,
      lastmod: location.updated_at,
      changefreq: 'weekly',
      priority: 0.8
    });
  });

  // Add brand pages
  brands.data?.forEach(brand => {
    urls.push({
      loc: `/brands/${brand.slug}`,
      lastmod: brand.updated_at,
      changefreq: 'weekly',
      priority: 0.8
    });
  });

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>
  `).join('')}
</urlset>`;

  return xml;
}