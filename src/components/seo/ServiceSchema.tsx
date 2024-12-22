import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: {
    name: string;
    telephone: string;
    address: string;
  };
  areaServed: string;
  serviceType: string;
}

export default function ServiceSchema({
  name,
  description,
  provider,
  areaServed,
  serviceType,
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      ...provider,
    },
    areaServed: {
      '@type': 'State',
      name: areaServed,
    },
    serviceType,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}