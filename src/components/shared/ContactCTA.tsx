import React from 'react';
import { Phone, MessageCircle, Clock } from 'lucide-react';

export default function ContactCTA() {
  return (
    <div className="bg-blue-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Need immediate assistance?</span>
          <span className="block text-blue-200">Our experts are ready to help.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="tel:+918302311436"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="https://wa.me/918559940369"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-center justify-center text-white">
          <Clock className="h-5 w-5 mr-2" />
          <span>Available 24/7 for emergency services</span>
        </div>
      </div>
    </div>
  );
}