import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Wrench } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Parakh Services</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/locations" className="text-gray-700 hover:text-blue-600">Locations</Link>
            <Link to="/brands" className="text-gray-700 hover:text-blue-600">Brands</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="tel:+918302311436" className="flex items-center space-x-1 text-green-600 hover:text-green-700">
              <Phone className="h-5 w-5" />
              <span className="hidden sm:inline">+91 8302311436</span>
            </a>
            <a 
              href="https://wa.me/918559940369" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;