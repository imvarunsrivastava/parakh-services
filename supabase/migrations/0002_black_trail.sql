/*
  # Update Service Requests Schema

  1. Changes
    - Safely add new columns to service_requests table if it doesn't exist
    - Add RLS policies for service requests
    
  2. Security
    - Enable RLS
    - Allow public inserts for booking requests
    - Restrict read access to authenticated users
*/

-- Create table if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT FROM pg_tables WHERE tablename = 'service_requests') THEN
    CREATE TABLE service_requests (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      customer_name text NOT NULL,
      phone text NOT NULL,
      email text,
      state text NOT NULL,
      city text NOT NULL,
      area text NOT NULL,
      service_id text NOT NULL,
      description text NOT NULL,
      preferred_date date NOT NULL,
      preferred_time text NOT NULL,
      status text NOT NULL DEFAULT 'pending',
      created_at timestamptz DEFAULT now(),
      updated_at timestamptz DEFAULT now()
    );
  END IF;
END $$;

-- Enable RLS if not already enabled
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_tables 
    WHERE tablename = 'service_requests' 
    AND rowsecurity = true
  ) THEN
    ALTER TABLE service_requests ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Drop existing policies if they exist and create new ones
DO $$ 
BEGIN
  -- Drop existing policies
  DROP POLICY IF EXISTS "Allow public to insert service requests" ON service_requests;
  DROP POLICY IF EXISTS "Allow authenticated users to view service requests" ON service_requests;
  
  -- Create new policies
  CREATE POLICY "Allow public to insert service requests"
    ON service_requests
    FOR INSERT
    TO public
    WITH CHECK (true);

  CREATE POLICY "Allow authenticated users to view service requests"
    ON service_requests
    FOR SELECT
    TO authenticated
    USING (true);
END $$;