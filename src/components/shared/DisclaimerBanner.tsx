import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DisclaimerBanner() {
  return (
    <div className="bg-yellow-50 p-2">
      <div className="max-w-7xl mx-auto py-1 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <AlertTriangle className="h-5 w-5 text-yellow-600" />
          <p className="ml-3 text-yellow-700 text-sm">
            We are a third-party repair service for out-of-warranty products only.
            <Link to="/disclaimer" className="ml-2 font-medium underline">
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}