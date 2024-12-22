import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { brands } from '../../data/brands';
import { slugify } from '../../utils/stringUtils';

export default function BrandSearch() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search) {
      navigate(`/brands/${slugify(search)}`);
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Find Your Brand
        </h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex gap-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter brand name..."
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              list="brands"
            />
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </div>
          <datalist id="brands">
            {brands.map((brand) => (
              <option key={brand.id} value={brand.name} />
            ))}
          </datalist>
        </form>
      </div>
    </section>
  );
}