import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { states } from '../../data/locations';
import { cities } from '../../data/locations/cities';

interface LocationSelectorProps {
  state: string;
  city: string;
  area: string;
  onStateChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onAreaChange: (value: string) => void;
}

export default function LocationSelector({
  state,
  city,
  area,
  onStateChange,
  onCityChange,
  onAreaChange
}: LocationSelectorProps) {
  const [availableCities, setAvailableCities] = useState<Array<{ value: string; label: string }>>([]);

  useEffect(() => {
    if (state && cities[state]) {
      setAvailableCities(cities[state]);
    } else {
      setAvailableCities([]);
    }
  }, [state]);

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        <MapPin className="inline-block w-4 h-4 mr-2" />
        Location Details
      </label>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <select
            value={state}
            onChange={(e) => onStateChange(e.target.value)}
            required
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
            required
            disabled={!state}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md disabled:bg-gray-100"
          >
            <option value="">Select City</option>
            {availableCities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <input
          type="text"
          value={area}
          onChange={(e) => onAreaChange(e.target.value)}
          placeholder="Enter your area/locality"
          required
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
}