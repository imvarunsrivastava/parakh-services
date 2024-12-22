import React from 'react';
import { Wrench } from 'lucide-react';
import { services } from '../../data/services';

interface ServiceSelectorProps {
  selected: string;
  onChange: (value: string) => void;
}

export default function ServiceSelector({ selected, onChange }: ServiceSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <Wrench className="inline-block w-4 h-4 mr-2" />
        Service Type
      </label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        required
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
      >
        <option value="">Select a service</option>
        {services.map((service) => (
          <option key={service.id} value={service.id}>
            {service.name}
          </option>
        ))}
      </select>
    </div>
  );
}