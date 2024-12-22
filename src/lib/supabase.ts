import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export async function getServicesByLocation(locationId: string) {
  const { data, error } = await supabase
    .from('service_areas')
    .select(`
      service_id,
      services (*)
    `)
    .eq('location_id', locationId)
    .eq('is_active', true);

  if (error) throw error;
  return data;
}

export async function getLocationHierarchy(locationId: string) {
  const { data, error } = await supabase
    .from('locations')
    .select('*, parent:parent_id(*)')
    .eq('id', locationId)
    .single();

  if (error) throw error;
  return data;
}

export async function searchLocations(query: string) {
  const { data, error } = await supabase
    .from('locations')
    .select('*')
    .or(`name.ilike.%${query}%, slug.ilike.%${query}%`)
    .eq('is_active', true)
    .limit(10);

  if (error) throw error;
  return data;
}