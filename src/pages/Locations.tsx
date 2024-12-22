import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocationSearch from '../components/locations/LocationSearch';
import LocationsList from '../components/locations/LocationsList';
import ContactCTA from '../components/shared/ContactCTA';

export default function Locations() {
  return (
    <>
      <Helmet>
        <title>Home Appliance Repair Services Across India | Parakh Services</title>
        <meta 
          name="description" 
          content="Find expert appliance repair services in your city. Available across all major cities in India with same-day service." 
        />
      </Helmet>
      <div className="bg-white">
        <LocationSearch />
        <LocationsList />
        <ContactCTA />
      </div>
    </>
  );
}