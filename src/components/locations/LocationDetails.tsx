import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import LocationMap from './LocationMap';

interface LocationDetailsProps {
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
}

export default function LocationDetails({ 
  city, 
  state, 
  address, 
  phone, 
  email 
}: LocationDetailsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Location</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Address</h3>
                  <p className="mt-1 text-gray-600">{address}</p>
                  <p className="text-gray-600">{city}, {state}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <a href={`tel:${phone}`} className="mt-1 text-gray-600 hover:text-blue-600">
                    {phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <a href={`mailto:${email}`} className="mt-1 text-gray-600 hover:text-blue-600">
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <LocationMap 
              address={address}
              city={city}
              state={state}
            />
          </div>
        </div>
      </div>
    </section>
  );
}