import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services } from '../data/services';
import ServiceHero from '../components/services/ServiceHero';
import ServiceFeatures from '../components/services/ServiceFeatures';
import ServicePricing from '../components/services/ServicePricing';
import FAQSection from '../components/faq/FAQSection';
import ContactCTA from '../components/shared/ContactCTA';

export default function ServiceDetail() {
  const { service: serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
      </Helmet>
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <ServicePricing service={service} />
      <FAQSection />
      <ContactCTA />
    </>
  );
}