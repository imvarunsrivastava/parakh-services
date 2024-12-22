import React from 'react';
import { MapPin, PhoneCall, MessageCircle, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Service } from '../../types';
import LocationMap from './LocationMap';
import { getLocationCoordinates } from '../../utils/locationUtils';

interface LocationServiceHeroProps {
  city: string;
  state: string;
  service: Service | null;
}

export default function LocationServiceHero({ city, state, service }: LocationServiceHeroProps) {
  const navigate = useNavigate();
  const coordinates = getLocationCoordinates(city.toLowerCase());
  const address = `Service Center, ${city}, ${state}`;

  const handleBooking = () => {
    navigate('/book', { 
      state: { 
        serviceId: service?.id,
        state,
        city
      }
    });
  };

  return (
    <div className="relative bg-blue-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center text-blue-200 mb-4">
            <MapPin className="h-6 w-6 mr-2" />
            <span>{city}, {state}</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {service ? service.name : 'Appliance Repair Services'}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
            Professional {service?.name.toLowerCase() || 'appliance repair'} services in {city}. 
            Expert technicians, same-day service, and 90-day warranty.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={handleBooking}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Now
            </button>
            <a
              href="tel:+918302311436"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
            >
              <PhoneCall className="h-5 w-5 mr-2" />
              Call Now
            </a>
            <a
              href="https://wa.me/918559940369"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
        
        <div className="mt-8 bg-white p-4 rounded-lg shadow-lg">
          <LocationMap 
            address={address}
            city={city}
            state={state}
            coordinates={coordinates}
          />
        </div>
      </div>
    </div>
  );
}