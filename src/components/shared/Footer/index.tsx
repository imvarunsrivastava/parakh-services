import React from 'react';
import { Wrench, Phone, Mail, MapPin, Clock } from 'lucide-react';
import FooterLinks from './FooterLinks';
import FooterBottom from './FooterBottom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        {/* Top Section with Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center">
              <Wrench className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold text-white">Parakh Services</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-300">
            <Phone className="h-5 w-5 text-blue-400" />
            <a href="tel:+918302311436" className="hover:text-white transition-colors">
              +91 8302311436
            </a>
          </div>
          
          <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-300">
            <Mail className="h-5 w-5 text-blue-400" />
            <a href="mailto:contact@parakhservices.com" className="hover:text-white transition-colors">
              contact@parakhservices.com
            </a>
          </div>
          
          <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-300">
            <Clock className="h-5 w-5 text-blue-400" />
            <span>24/7 Emergency Service</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-12">
          <FooterLinks />
        </div>

        {/* Bottom Section */}
        <FooterBottom />
      </div>
    </footer>
  );
}