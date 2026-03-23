import { siteConfig } from "@/lib/seo-config";
import { getBlogPosts } from "@/lib/blog";

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

function buildEntries(): SitemapEntry[] {
  const baseUrl = siteConfig.url;
  const blogPosts = getBlogPosts();

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastmod: new Date(post.date).toISOString(),
    changefreq: "monthly",
    priority: 0.6,
  }));

  return [
    // Core Pages
    {
      url: baseUrl,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/preise`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/funktionen`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.5,
    },

    // Software Landing Page
    {
      url: `${baseUrl}/bienenverwaltung-software`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.9,
    },

    // Branchen-Seiten
    {
      url: `${baseUrl}/hobby-imker`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/direktvermarkter`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/imkereien`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },

    // Wissen
    {
      url: `${baseUrl}/wissen`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/wissen/bestandsbuch`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/wissen/varroa`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/wissen/honig-etiketten`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },

    // Tools
    {
      url: `${baseUrl}/tools`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/tools/honig-rechner`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },

    // Blog
    {
      url: `${baseUrl}/blog`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    },
    ...blogUrls,

    // App Pages
    {
      url: `${baseUrl}/signup`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/demo`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/weather`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/harvest`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.5,
    },
  ];
}

function toXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function GET() {
  const entries = buildEntries();
  const xml = toXml(entries);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
