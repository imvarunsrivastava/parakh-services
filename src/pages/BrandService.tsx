import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brands } from '../data/brands';
import { services } from '../data/services';
import ServiceHero from '../components/services/ServiceHero';
import ServiceFeatures from '../components/services/ServiceFeatures';
import ContactCTA from '../components/shared/ContactCTA';

export default function BrandService() {
  const { brand: brandId, service: serviceId } = useParams();
  
  const brand = brands.find(b => b.id === brandId);
  const service = serviceId ? services.find(s => s.id === serviceId) : null;

  if (!brand) {
    return <Navigate to="/brands" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`${brand.name} ${service?.name || 'Appliance'} Repair Services | Parakh Services`}</title>
        <meta 
          name="description" 
          content={`Professional ${service?.name || 'appliance'} repair services for ${brand.name}. Expert technicians and same-day service with warranty.`} 
        />
      </Helmet>
      {service && <ServiceHero service={service} />}
      {service && <ServiceFeatures service={service} />}
      <ContactCTA />
    </>
  );
}