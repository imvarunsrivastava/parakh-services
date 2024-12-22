import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/shared/Footer';
import DisclaimerBanner from './components/shared/DisclaimerBanner';
import FloatingCallButton from './components/shared/FloatingCallButton';
import { BookingProvider } from './modules/booking/BookingContext';
import AppRoutes from './routes';

export default function App() {
  return (
    <HelmetProvider>
      <BookingProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <DisclaimerBanner />
            <Header />
            <main className="flex-grow">
              <AppRoutes />
            </main>
            <Footer />
            <FloatingCallButton />
          </div>
        </Router>
      </BookingProvider>
    </HelmetProvider>
  );
}