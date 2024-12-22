import { cityCoordinates } from '../data/locations/coordinates';

interface Area {
  id: string;
  name: string;
  pincode: string;
}

export function getLocationCoordinates(city: string): [number, number] {
  return cityCoordinates[city as keyof typeof cityCoordinates] || cityCoordinates.default;
}

export function getNearbyAreas(city: string, state: string): Area[] {
  // This would typically fetch from an API/database
  // For now, returning mock data based on city
  const mockAreas: Record<string, Area[]> = {
    'mumbai': [
      { id: '1', name: 'Andheri', pincode: '400053' },
      { id: '2', name: 'Bandra', pincode: '400050' },
      { id: '3', name: 'Borivali', pincode: '400092' },
    ],
    'delhi-ncr': [
      { id: '1', name: 'Connaught Place', pincode: '110001' },
      { id: '2', name: 'Dwarka', pincode: '110075' },
      { id: '3', name: 'Rohini', pincode: '110085' },
    ],
    'bangalore': [
      { id: '1', name: 'Koramangala', pincode: '560034' },
      { id: '2', name: 'Indiranagar', pincode: '560038' },
      { id: '3', name: 'Whitefield', pincode: '560066' },
    ],
    // Default areas if city not found
    'default': [
      { id: '1', name: 'Central Area', pincode: '000001' },
      { id: '2', name: 'North Area', pincode: '000002' },
      { id: '3', name: 'South Area', pincode: '000003' },
    ]
  };

  return mockAreas[city] || mockAreas.default;
}