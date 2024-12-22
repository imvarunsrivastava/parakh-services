import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ArrowRight } from 'lucide-react';
import { brands } from '../../data/brands';

export default function BrandsList() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Brands We Service
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert repair services for all major appliance brands
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/brands/${brand.id}`}
              className="group relative overflow-hidden bg-white rounded-xl border border-gray-200 hover:border-blue-500 p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Wrench className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {brand.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {brand.services.length} service{brand.services.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="h-5 w-5 text-blue-600" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}