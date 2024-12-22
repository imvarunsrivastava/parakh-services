import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../../lib/seo/constants';

interface StructuredDataProps {
  data: object;
}

export default function StructuredData({ data }: StructuredDataProps) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      ...BUSINESS_INFO.address
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({ ...baseData, ...data })}
      </script>
    </Helmet>
  );
}