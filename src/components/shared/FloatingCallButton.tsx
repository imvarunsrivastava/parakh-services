import React from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+918302311436"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 group"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6 text-white" />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Call Now
        </span>
      </a>
    </div>
  );
}