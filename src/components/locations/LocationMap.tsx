import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface LocationMapProps {
  address: string;
  city: string;
  state: string;
  coordinates?: [number, number];
}

export default function LocationMap({ 
  address, 
  city, 
  state, 
  coordinates = [20.5937, 78.9629] 
}: LocationMapProps) {
  return (
    <div className="w-full h-[400px] rounded-lg shadow-md overflow-hidden">
      <MapContainer 
        center={coordinates} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            <div className="text-sm">
              <strong className="block text-gray-900">{city}</strong>
              <span className="block text-gray-600">{address}</span>
              <span className="block text-gray-600">{state}</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}