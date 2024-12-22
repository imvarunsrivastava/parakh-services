import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { states } from '../../data/locations/index';

export default function LocationsList() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Service Locations
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((state) => (
            <Link
              key={state.value}
              to={`/locations/${state.value}`}
              className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <MapPin className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">{state.label}</h3>
                <p className="mt-1 text-sm text-gray-500">All major cities covered</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}