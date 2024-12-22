import React from 'react';
import { Link } from 'react-router-dom';
import { AirVent, Box, WashingMachine, Tv, Droplets, Wrench } from 'lucide-react';
import { services } from '../../data/services';

export default function ServicesList() {
  const getServiceIcon = (iconName: string) => {
    const iconProps = { className: "h-12 w-12 text-blue-600 group-hover:text-white transition-colors" };
    const icons = {
      AirVent: <AirVent {...iconProps} />,
      Box: <Box {...iconProps} />,
      WashingMachine: <WashingMachine {...iconProps} />,
      Tv: <Tv {...iconProps} />,
      Droplets: <Droplets {...iconProps} />,
      Wrench: <Wrench {...iconProps} />
    };
    return icons[iconName as keyof typeof icons] || <Wrench {...iconProps} />;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert repair services for all your home appliances with same-day service and warranty
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:bg-blue-600 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-50 rounded-full group-hover:bg-blue-500 transition-colors">
                  {getServiceIcon(service.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 group-hover:text-blue-100 mb-4">
                    {service.description}
                  </p>
                  <span className="text-sm text-blue-600 group-hover:text-white font-medium">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}