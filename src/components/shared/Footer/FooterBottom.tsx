import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-12 pt-8 border-t border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-base text-gray-400">
          © {currentYear} Parakh Services. All rights reserved.
        </div>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <Link to="/privacy-policy" className="text-gray-400 hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-gray-400 hover:text-gray-300">
            Terms of Service
          </Link>
          <Link to="/sitemap" className="text-gray-400 hover:text-gray-300">
            Sitemap
          </Link>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-500 text-center">
        Disclaimer: We are a third-party repair service provider for out-of-warranty products only.
        All brand names and trademarks are properties of their respective owners.
      </div>
    </div>
  );
}