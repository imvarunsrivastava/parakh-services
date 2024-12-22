import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../../data/services';

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* Services */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
          Our Services
        </h3>
        <ul className="mt-4 space-y-2">
          {services.map((service) => (
            <li key={service.id}>
              <Link
                to={`/services/${service.id}`}
                className="text-base text-gray-300 hover:text-white"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
          Quick Links
        </h3>
        <ul className="mt-4 space-y-2">
          <li>
            <Link to="/brands" className="text-base text-gray-300 hover:text-white">
              Brands
            </Link>
          </li>
          <li>
            <Link to="/locations" className="text-base text-gray-300 hover:text-white">
              Service Locations
            </Link>
          </li>
          <li>
            <Link to="/disclaimer" className="text-base text-gray-300 hover:text-white">
              Disclaimer
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
          Contact Us
        </h3>
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="tel:+918302311436"
              className="text-base text-gray-300 hover:text-white"
            >
              +91 8302311436
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/918559940369"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-gray-300 hover:text-white"
            >
              WhatsApp: +91 8559940369
            </a>
          </li>
          <li>
            <span className="text-base text-gray-300">
              Available 24/7 for emergency services
            </span>
          </li>
        </ul>
      </div>

      {/* Service Areas */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
          Major Service Areas
        </h3>
        <ul className="mt-4 space-y-2">
          <li>
            <Link
              to="/locations/delhi/new-delhi"
              className="text-base text-gray-300 hover:text-white"
            >
              Delhi NCR
            </Link>
          </li>
          <li>
            <Link
              to="/locations/maharashtra/mumbai"
              className="text-base text-gray-300 hover:text-white"
            >
              Mumbai
            </Link>
          </li>
          <li>
            <Link
              to="/locations/karnataka/bangalore"
              className="text-base text-gray-300 hover:text-white"
            >
              Bangalore
            </Link>
          </li>
          <li>
            <Link
              to="/locations/telangana/hyderabad"
              className="text-base text-gray-300 hover:text-white"
            >
              Hyderabad
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}