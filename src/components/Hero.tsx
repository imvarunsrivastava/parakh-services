import React from 'react';
import { Wrench, Clock, MapPin, Shield } from 'lucide-react';
import { HeroFeature } from './hero/HeroFeature';

const Hero = () => {
  const features = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Expert Technicians",
      description: "Certified and experienced professionals"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Quick Service",
      description: "Same-day service available"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Pan India Service",
      description: "Available across all major cities"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Warranty",
      description: "90-day service warranty"
    }
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Expert Home Appliance</span>
                <span className="block text-blue-600">Repair Services</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Professional repair services for all major brands of AC, Washing Machine, Refrigerator, 
                Microwave, TV, and RO Systems across India.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="tel:+918302311436"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Call Now
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://wa.me/918559940369"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <HeroFeature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;