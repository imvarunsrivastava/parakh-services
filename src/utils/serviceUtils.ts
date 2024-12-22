import type { Service } from '../types';
import { services } from '../data/services';
import { commonFeatures, serviceSpecificFeatures } from './serviceFeatures';

export function findService(serviceId: string): Service | null {
  return services.find(service => service.id === serviceId) || null;
}

export function getServiceFeatures(serviceId: string) {
  return [
    ...commonFeatures,
    ...(serviceSpecificFeatures[serviceId] || [])
  ];
}