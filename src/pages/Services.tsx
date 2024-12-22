import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesList from '../components/services/ServicesList';
import ContactCTA from '../components/shared/ContactCTA';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Home Appliance Repair Services | Parakh Services</title>
        <meta 
          name="description" 
          content="Professional repair services for AC, TV, washing machine, refrigerator, and RO systems. Expert technicians and same-day service available." 
        />
      </Helmet>
      <div className="bg-white">
        <ServicesList />
        <ContactCTA />
      </div>
    </>
  );
}