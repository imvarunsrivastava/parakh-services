export const BASE_URL = 'https://parakhservices.com';

export const DEFAULT_META = {
  title: 'Parakh Services - Expert Home Appliance Repair Services',
  description: 'Professional repair services for AC, TV, Washing Machine, and more across India.',
  image: `${BASE_URL}/og-image.jpg`,
  twitter: {
    card: 'summary_large_image',
    site: '@parakhservices'
  }
} as const;

export const BUSINESS_INFO = {
  name: 'Parakh Services',
  phone: '+918302311436',
  whatsapp: '+918559940369',
  email: 'contact@parakhservices.com',
  address: {
    street: 'Service Center',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India'
  }
} as const;