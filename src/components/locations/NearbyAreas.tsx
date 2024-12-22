import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { getNearbyAreas } from '../../utils/locationUtils';

interface NearbyAreasProps {
  city: string;
  state: string;
}

export default function NearbyAreas({ city, state }: NearbyAreasProps) {
  const areas = getNearbyAreas(city, state);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Service Areas Near {city}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.id}
              to={`/locations/${state.toLowerCase()}/${area.name.toLowerCase()}`}
              className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <MapPin className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-gray-900">{area.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}