import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useBooking } from '../modules/booking/BookingContext';
import BookingForm from '../components/booking/BookingForm';

export default function BookService() {
  const { bookingState } = useBooking();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Book a Service | Parakh Services</title>
        <meta 
          name="description" 
          content="Book professional appliance repair services. Same-day service available with 90-day warranty." 
        />
      </Helmet>
      
      <div className="py-16 bg-gray-50">
        <BookingForm 
          initialService={bookingState.serviceId}
          initialLocation={
            bookingState.state && bookingState.city 
              ? { state: bookingState.state, city: bookingState.city }
              : undefined
          }
        />
      </div>
    </>
  );
}