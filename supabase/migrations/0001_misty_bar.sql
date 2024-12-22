/*
  # Initial Schema Setup for Parakh Services

  1. New Tables
    - `services`
      - Core service offerings (AC repair, TV repair, etc.)
    - `locations`
      - Hierarchical structure for states, cities, and areas
    - `brands`
      - Supported appliance brands
    - `brand_services`
      - Many-to-many relationship between brands and services
    - `service_areas`
      - Service coverage mapping
    - `service_requests`
      - Customer service requests/leads

  2. Security
    - Enable RLS on all tables
    - Add policies for data access
*/

-- Services table
CREATE TABLE services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  meta_title text NOT NULL,
  meta_description text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Locations table (hierarchical)
CREATE TABLE locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id uuid REFERENCES locations(id),
  type text NOT NULL CHECK (type IN ('state', 'city', 'area')),
  name text NOT NULL,
  slug text NOT NULL,
  pincode text,
  meta_title text,
  meta_description text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(parent_id, slug)
);

-- Brands table
CREATE TABLE brands (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  logo_url text,
  meta_title text NOT NULL,
  meta_description text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Brand services mapping
CREATE TABLE brand_services (
  brand_id uuid REFERENCES brands(id),
  service_id uuid REFERENCES services(id),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (brand_id, service_id)
);

-- Service areas mapping
CREATE TABLE service_areas (
  service_id uuid REFERENCES services(id),
  location_id uuid REFERENCES locations(id),
  is_active boolean DEFAULT true,
  response_time_minutes integer,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  PRIMARY KEY (service_id, location_id)
);

-- Service requests/leads
CREATE TABLE service_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id uuid REFERENCES services(id),
  location_id uuid REFERENCES locations(id),
  brand_id uuid REFERENCES brands(id),
  customer_name text NOT NULL,
  phone text NOT NULL,
  email text,
  description text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'assigned', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE brand_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_requests ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Public read access for services"
  ON services FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public read access for locations"
  ON locations FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Public read access for brands"
  ON brands FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Public read access for brand services"
  ON brand_services FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Public read access for service areas"
  ON service_areas FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Public insert access for service requests"
  ON service_requests FOR INSERT
  TO public
  WITH CHECK (true);

-- Indexes for performance
CREATE INDEX idx_locations_parent_id ON locations(parent_id);
CREATE INDEX idx_locations_type ON locations(type);
CREATE INDEX idx_locations_slug ON locations(slug);
CREATE INDEX idx_brand_services_service_id ON brand_services(service_id);
CREATE INDEX idx_service_areas_location_id ON service_areas(location_id);