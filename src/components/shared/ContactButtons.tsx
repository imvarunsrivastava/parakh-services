import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import BookingButton from '../../modules/booking/BookingButton';

interface ContactButtonsProps {
  serviceId?: string;
  location?: {
    state?: string;
    city?: string;
  };
  className?: string;
}

export default function ContactButtons({ serviceId, location, className = '' }: ContactButtonsProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <BookingButton 
        serviceId={serviceId}
        state={location?.state}
        city={location?.city}
      />
      <a
        href="tel:+918302311436"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-sm"
      >
        <Phone className="h-5 w-5 mr-2" />
        Call Now
      </a>
      <a
        href="https://wa.me/918559940369"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 shadow-sm"
      >
        <MessageCircle className="h-5 w-5 mr-2" />
        WhatsApp
      </a>
    </div>
  );
}