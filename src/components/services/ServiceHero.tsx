import React from 'react';
import { PhoneCall, MessageCircle, AlertTriangle, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Service } from '../../types';

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/book', { 
      state: { 
        serviceId: service.id 
      }
    });
  };

  return (
    <div className="relative bg-blue-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {service.name}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
            {service.description}
          </p>
          <div className="mt-4 text-sm text-blue-200 flex items-center justify-center">
            <AlertTriangle className="h-4 w-4 mr-1" />
            <span>Available for out-of-warranty products only</span>
          </div>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-3 sm:gap-5">
              <button
                onClick={handleBooking}
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 sm:px-8"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Now
              </button>
              <a
                href="tel:+918302311436"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 sm:px-8"
              >
                <PhoneCall className="h-5 w-5 mr-2" />
                Call Now
              </a>
              <a
                href="https://wa.me/918559940369"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 sm:px-8"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}