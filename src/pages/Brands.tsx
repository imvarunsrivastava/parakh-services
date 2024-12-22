import React from 'react';
import { Helmet } from 'react-helmet-async';
import BrandsList from '../components/brands/BrandsList';
import BrandSearch from '../components/brands/BrandSearch';
import ContactCTA from '../components/shared/ContactCTA';

export default function Brands() {
  return (
    <>
      <Helmet>
        <title>Appliance Repair Services for All Brands | Parakh Services</title>
        <meta 
          name="description" 
          content="Expert repair services for all major appliance brands in India. AC, TV, washing machine, and RO system repairs with warranty." 
        />
      </Helmet>
      <div className="bg-white">
        <BrandSearch />
        <BrandsList />
        <ContactCTA />
      </div>
    </>
  );
}