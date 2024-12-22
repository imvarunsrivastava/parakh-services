import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { states, cities } from '../../data/locations/index';

export default function LocationSearch() {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [availableCities, setAvailableCities] = useState<Array<{ value: string; label: string }>>([]);

  useEffect(() => {
    if (selectedState && cities[selectedState]) {
      setAvailableCities(cities[selectedState]);
      setSelectedCity(''); // Reset city when state changes
    } else {
      setAvailableCities([]);
    }
  }, [selectedState]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedState && selectedCity) {
      navigate(`/locations/${selectedState}/${selectedCity}`);
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Find Services in Your Area
        </h2>
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
            
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              disabled={!selectedState}
            >
              <option value="">Select City</option>
              {availableCities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
              disabled={!selectedState || !selectedCity}
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}