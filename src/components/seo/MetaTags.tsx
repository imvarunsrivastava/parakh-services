import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_META, BASE_URL } from '../../lib/seo/constants';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  image?: string;
  noindex?: boolean;
}

export default function MetaTags({
  title = DEFAULT_META.title,
  description = DEFAULT_META.description,
  keywords = [],
  canonicalUrl,
  image = DEFAULT_META.image,
  noindex = false
}: MetaTagsProps) {
  const fullTitle = title === DEFAULT_META.title ? title : `${title} | Parakh Services`;
  const url = canonicalUrl || `${BASE_URL}${window.location.pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content={DEFAULT_META.twitter.card} />
      <meta name="twitter:site" content={DEFAULT_META.twitter.site} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}