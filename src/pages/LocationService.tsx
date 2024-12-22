import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LocationServiceHero from '../components/locations/LocationServiceHero';
import ServiceFeatures from '../components/services/ServiceFeatures';
import NearbyAreas from '../components/locations/NearbyAreas';
import ContactCTA from '../components/shared/ContactCTA';
import { capitalizeWords } from '../utils/stringUtils';
import { findService } from '../utils/serviceUtils';

export default function LocationService() {
  const { state, city, service: serviceId } = useParams();
  const service = serviceId ? findService(serviceId) : null;
  const formattedCity = capitalizeWords(city?.replace(/-/g, ' ') || '');
  const formattedState = capitalizeWords(state?.replace(/-/g, ' ') || '');

  const title = service 
    ? `${service.name} in ${formattedCity}, ${formattedState} | Parakh Services`
    : `Appliance Repair Services in ${formattedCity}, ${formattedState}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta 
          name="description" 
          content={`Professional ${service?.name || 'appliance repair'} services in ${formattedCity}, ${formattedState}. Expert technicians, same-day service, and 90-day warranty.`} 
        />
      </Helmet>
      <LocationServiceHero 
        city={formattedCity} 
        state={formattedState}
        service={service}
      />
      {service && <ServiceFeatures service={service} />}
      <NearbyAreas city={formattedCity} state={formattedState} />
      <ContactCTA />
    </>
  );
}