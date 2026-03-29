import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dashboard', '/company'],
      },
    ],
    sitemap: 'https://himorix.com/sitemap.xml',
  };
}
