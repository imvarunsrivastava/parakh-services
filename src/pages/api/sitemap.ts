import { generateSitemap } from '../../lib/seo/sitemap';
import { generateRobots } from '../../lib/seo/robots';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const baseUrl = url.origin;

  if (url.pathname === '/sitemap.xml') {
    const sitemap = await generateSitemap();
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  }

  if (url.pathname === '/robots.txt') {
    const robots = generateRobots(baseUrl);
    return new Response(robots, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  }

  return new Response('Not found', { status: 404 });
}