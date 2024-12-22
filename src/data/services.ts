export const services = [
  {
    id: 'ac-repair',
    name: 'AC Repair & Service',
    description: 'Expert AC repair and maintenance services',
    icon: 'AirVent',
    metaTitle: 'AC Repair Services in India | Parakh Services',
    metaDescription: 'Professional AC repair services for all brands. Split AC, Window AC repair and maintenance services across India.'
  },
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    description: 'Professional refrigerator repair services',
    icon: 'Box',
    metaTitle: 'Refrigerator Repair Services | Parakh Services',
    metaDescription: 'Expert refrigerator repair services for all brands. Same day service with warranty.'
  },
  {
    id: 'washing-machine-repair',
    name: 'Washing Machine Repair',
    description: 'Expert washing machine repair services',
    icon: 'WashingMachine',
    metaTitle: 'Washing Machine Repair Services | Parakh Services',
    metaDescription: 'Professional washing machine repair services for all brands. Front load and top load repair with warranty.'
  },
  {
    id: 'tv-repair',
    name: 'TV Repair',
    description: 'Professional TV repair and service',
    icon: 'Tv',
    metaTitle: 'TV Repair Services - LCD, LED & Smart TV | Parakh Services',
    metaDescription: 'Expert TV repair services for all brands. LCD, LED and Smart TV repair with warranty.'
  },
  {
    id: 'water-purifier-repair',
    name: 'RO & Water Purifier Repair',
    description: 'Expert water purifier repair services',
    icon: 'Droplets',
    metaTitle: 'RO Water Purifier Repair Services | Parakh Services',
    metaDescription: 'Professional RO system and water purifier repair services. All brands RO repair and maintenance.'
  },
  {
    id: 'microwave-repair',
    name: 'Microwave Repair',
    description: 'Professional microwave oven repair',
    icon: 'Wrench',
    metaTitle: 'Microwave Oven Repair Services | Parakh Services',
    metaDescription: 'Expert microwave oven repair services for all brands. Same day service with warranty.'
  }
] as const;

export type Service = typeof services[number];
export type ServiceId = Service['id'];

export function getService(id: ServiceId): Service | undefined {
  return services.find(service => service.id === id);
}