export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Location {
  state: string;
  city: string;
  area: string;
}

export interface Brand {
  id: string;
  name: string;
  services: string[];
}