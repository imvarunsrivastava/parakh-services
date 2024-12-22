import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import type { Service } from '../../types';

interface ServicePricingProps {
  service: Service;
}

export default function ServicePricing({ service }: ServicePricingProps) {
  const navigate = useNavigate();
  
  const handleBooking = () => {
    navigate('/book', { 
      state: { 
        serviceId: service.id 
      }
    });
  };

  const pricingTiers = [
    {
      name: 'Basic Service',
      price: '₹499',
      description: `Basic ${service.name.toLowerCase()} inspection and diagnosis`,
      features: [
        'Professional inspection',
        'Issue diagnosis',
        'Minor repairs',
        '30-day warranty',
      ],
    },
    {
      name: 'Standard Service',
      price: '₹999',
      description: `Complete ${service.name.toLowerCase()} service and repair`,
      features: [
        'All Basic features',
        'Parts replacement',
        'Performance optimization',
        '60-day warranty',
      ],
    },
    {
      name: 'Premium Service',
      price: '₹1499',
      description: `Premium ${service.name.toLowerCase()} maintenance package`,
      features: [
        'All Standard features',
        'Deep cleaning',
        'Preventive maintenance',
        '90-day warranty',
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Service Packages</h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the service package that best fits your needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-4 text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /service
                  </span>
                </p>
              </div>
              <div className="px-6 pt-6 pb-8">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start"
                    >
                      <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-base text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button
                    onClick={handleBooking}
                    className="w-full px-4 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}