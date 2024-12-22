import React from 'react';

interface HeroFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const HeroFeature: React.FC<HeroFeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
};