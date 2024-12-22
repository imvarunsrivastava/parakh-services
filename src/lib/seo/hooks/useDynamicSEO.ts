import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { generateDynamicSEO } from '../dynamicSEO';

export function useDynamicSEO() {
  const location = useLocation();
  
  return useQuery({
    queryKey: ['seo', location.pathname],
    queryFn: () => generateDynamicSEO(location.pathname),
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    cacheTime: 1000 * 60 * 30 // Keep in cache for 30 minutes
  });
}