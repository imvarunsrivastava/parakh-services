interface ServiceFeature {
  name: string;
  description: string;
}

export const commonFeatures: ServiceFeature[] = [
  {
    name: 'Expert Technicians',
    description: 'Our technicians are certified and experienced in handling all major brands.',
  },
  {
    name: '90-Day Warranty',
    description: 'All our repair services come with a 90-day service warranty.',
  },
  {
    name: 'Same Day Service',
    description: 'We offer same-day service in most locations across India.',
  },
  {
    name: 'Genuine Parts',
    description: 'We use only genuine spare parts for all repairs and replacements.',
  },
];

export const serviceSpecificFeatures: Record<string, ServiceFeature[]> = {
  'ac-repair': [
    {
      name: 'Complete AC Solutions',
      description: 'Services for split AC, window AC, and central AC systems.',
    },
    {
      name: 'Energy Efficiency',
      description: 'Optimize your AC performance for better energy efficiency.',
    },
  ],
  'tv-repair': [
    {
      name: 'All TV Types',
      description: 'Expert repair for LED, LCD, OLED, and Smart TVs.',
    },
    {
      name: 'Software Updates',
      description: 'Smart TV software updates and troubleshooting.',
    },
  ],
};