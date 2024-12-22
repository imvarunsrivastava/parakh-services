import React, { createContext, useContext, useState } from 'react';

interface BookingState {
  serviceId?: string;
  state?: string;
  city?: string;
}

interface BookingContextType {
  bookingState: BookingState;
  setBookingState: (state: BookingState) => void;
  initiateBooking: (state: BookingState) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [bookingState, setBookingState] = useState<BookingState>({});

  const initiateBooking = (state: BookingState) => {
    setBookingState(state);
    window.location.href = '/book';
  };

  return (
    <BookingContext.Provider value={{ bookingState, setBookingState, initiateBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}