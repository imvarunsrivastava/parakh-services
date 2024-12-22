import React from 'react';
import { Calendar } from 'lucide-react';
import { useBooking } from './BookingContext';

interface BookingButtonProps {
  serviceId?: string;
  state?: string;
  city?: string;
  className?: string;
}

export default function BookingButton({ 
  serviceId, 
  state, 
  city, 
  className = '' 
}: BookingButtonProps) {
  const { initiateBooking } = useBooking();

  const handleClick = () => {
    initiateBooking({ serviceId, state, city });
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-sm ${className}`}
    >
      <Calendar className="h-5 w-5 mr-2" />
      Book Now
    </button>
  );
}