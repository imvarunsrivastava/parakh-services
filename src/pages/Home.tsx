import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServicesList from '../components/services/ServicesList';
import LocationSearch from '../components/locations/LocationSearch';
import BrandsList from '../components/brands/BrandsList';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Parakh Services - Expert Home Appliance Repair Services</title>
        <meta name="description" content="Professional repair services for AC, Washing Machine, Refrigerator, TV, and RO Systems across India. Expert technicians and same-day service available." />
      </Helmet>
      <Hero />
      <ServicesList />
      <LocationSearch />
      <BrandsList />
    </>
  );
}