import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { generateDynamicSEO } from '../../lib/seo/dynamicSEO';

export default function DynamicSEO() {
  const location = useLocation();
  const { data: seo } = useQuery({
    queryKey: ['seo', location.pathname],
    queryFn: () => generateDynamicSEO(location.pathname),
    staleTime: 1000 * 60 * 5 // Cache for 5 minutes
  });

  if (!seo) return null;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      <link rel="canonical" href={seo.canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify(seo.structuredData)}
      </script>
    </Helmet>
  );
}