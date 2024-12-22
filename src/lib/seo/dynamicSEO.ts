import { supabase } from '../supabase';
import { generateLocationKeywords, generateServiceKeywords, generateBrandKeywords } from '../../utils/seoUtils';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  structuredData: object;
}

export async function generateDynamicSEO(path: string): Promise<SEOData> {
  const pathParts = path.split('/').filter(Boolean);
  const baseUrl = 'https://parakh-services.com'; // Replace with your domain

  // Default SEO data
  const defaultSEO: SEOData = {
    title: 'Parakh Services - Expert Home Appliance Repair Services',
    description: 'Professional repair services for AC, TV, Washing Machine, and more across India.',
    keywords: [],
    canonicalUrl: `${baseUrl}${path}`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Parakh Services',
      description: 'Expert home appliance repair services',
      telephone: '+918302311436',
      url: baseUrl
    }
  };

  try {
    switch (pathParts[0]) {
      case 'services':
        return await generateServicePageSEO(pathParts[1], baseUrl, path);
      case 'locations':
        return await generateLocationPageSEO(pathParts[1], pathParts[2], baseUrl, path);
      case 'brands':
        return await generateBrandPageSEO(pathParts[1], baseUrl, path);
      default:
        return defaultSEO;
    }
  } catch (error) {
    console.error('Error generating SEO data:', error);
    return defaultSEO;
  }
}

async function generateServicePageSEO(serviceId: string, baseUrl: string, path: string): Promise<SEOData> {
  const { data: service } = await supabase
    .from('services')
    .select('*')
    .eq('slug', serviceId)
    .single();

  if (!service) throw new Error('Service not found');

  const keywords = generateServiceKeywords(service.name);

  return {
    title: service.meta_title,
    description: service.meta_description,
    keywords,
    canonicalUrl: `${baseUrl}${path}`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Parakh Services'
      }
    }
  };
}