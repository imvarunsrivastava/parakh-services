export const brands = [
  {
    id: 'lg',
    name: 'LG',
    services: ['tv-repair', 'refrigerator-repair', 'washing-machine-repair', 'ac-repair']
  },
  {
    id: 'samsung',
    name: 'Samsung',
    services: ['tv-repair', 'refrigerator-repair', 'washing-machine-repair', 'ac-repair']
  },
  {
    id: 'whirlpool',
    name: 'Whirlpool',
    services: ['refrigerator-repair', 'washing-machine-repair', 'microwave-repair']
  },
  {
    id: 'godrej',
    name: 'Godrej',
    services: ['refrigerator-repair', 'washing-machine-repair', 'ac-repair']
  },
  {
    id: 'voltas',
    name: 'Voltas',
    services: ['ac-repair']
  },
  {
    id: 'daikin',
    name: 'Daikin',
    services: ['ac-repair']
  },
  {
    id: 'carrier',
    name: 'Carrier',
    services: ['ac-repair']
  },
  {
    id: 'hitachi',
    name: 'Hitachi',
    services: ['ac-repair', 'refrigerator-repair']
  },
  {
    id: 'panasonic',
    name: 'Panasonic',
    services: ['tv-repair', 'ac-repair', 'refrigerator-repair']
  },
  {
    id: 'haier',
    name: 'Haier',
    services: ['refrigerator-repair', 'washing-machine-repair', 'ac-repair']
  },
  {
    id: 'videocon',
    name: 'Videocon',
    services: ['tv-repair', 'washing-machine-repair', 'refrigerator-repair']
  },
  {
    id: 'onida',
    name: 'Onida',
    services: ['tv-repair', 'ac-repair']
  },
  {
    id: 'bluestar',
    name: 'Blue Star',
    services: ['ac-repair', 'water-purifier-repair']
  },
  {
    id: 'kent',
    name: 'Kent',
    services: ['water-purifier-repair']
  },
  {
    id: 'eureka-forbes',
    name: 'Eureka Forbes',
    services: ['water-purifier-repair']
  },
  {
    id: 'pureit',
    name: 'Pureit',
    services: ['water-purifier-repair']
  },
  {
    id: 'ifb',
    name: 'IFB',
    services: ['washing-machine-repair', 'microwave-repair']
  }
] as const;

export type Brand = typeof brands[number];
export type BrandId = Brand['id'];
export type ServiceId = Brand['services'][number];

// Helper functions
export function getBrandsByService(serviceId: ServiceId): Brand[] {
  return brands.filter(brand => brand.services.includes(serviceId));
}

export function getBrand(brandId: BrandId): Brand | undefined {
  return brands.find(brand => brand.id === brandId);
}

export function getServicesForBrand(brandId: BrandId): ServiceId[] {
  const brand = getBrand(brandId);
  return brand ? brand.services : [];
}