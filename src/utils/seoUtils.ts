// Generate location-specific keywords
export function generateLocationKeywords(city: string, state: string) {
  const nearMeVariations = [
    'near me',
    'around me',
    'nearby',
    'in my area',
    'close to me',
    'closest to me',
    'within 5km',
    'within 10km',
    'local',
    'in my locality',
    'in my neighborhood',
    'home service'
  ];

  const services = [
    'appliance repair',
    'AC repair',
    'TV repair',
    'washing machine repair',
    'RO repair',
    'refrigerator repair',
    'microwave repair',
    'dishwasher repair',
    'geyser repair',
    'water heater repair',
    'air conditioner service',
    'AC maintenance',
    'home appliance repair',
    'electronic repair',
    'appliance service',
    'AC installation',
    'AC gas filling',
    'AC deep cleaning'
  ];

  const keywords = [
    // Basic location keywords
    `appliance repair in ${city}`,
    `${city} appliance repair`,
    `${state} repair service`,
    `repair service in ${city}`,
    `${city} repair center`,
    `${city} service center`,
    
    // Service quality keywords
    `best repair service ${city}`,
    `top repair service ${city}`,
    `reliable repair service ${city}`,
    `trusted repair service ${city}`,
    `professional repair service ${city}`,
    `expert repair service ${city}`,
    
    // Cost-related keywords
    `affordable repair ${city}`,
    `cheap repair service ${city}`,
    `low cost repair ${city}`,
    `best price repair ${city}`,
    `repair service cost ${city}`,
    
    // Service type keywords
    `doorstep repair ${city}`,
    `home repair service ${city}`,
    `onsite repair ${city}`,
    `same day service ${city}`,
    `emergency repair ${city}`,
    `24 hour repair ${city}`,
    `urgent repair service ${city}`,
    
    // Area-specific keywords
    `repair service ${city} west`,
    `repair service ${city} east`,
    `repair service ${city} north`,
    `repair service ${city} south`,
    `repair service ${city} central`,
    
    // Time-specific keywords
    `sunday repair service ${city}`,
    `weekend repair service ${city}`,
    `late night repair service ${city}`,
    `early morning repair ${city}`,
    `24/7 repair service ${city}`
  ];

  // Generate "near me" variations for each service
  services.forEach(service => {
    nearMeVariations.forEach(variation => {
      keywords.push(
        `${service} ${variation}`,
        `${service} ${variation} in ${city}`,
        `${service} ${variation} ${city}`,
        `${city} ${service} ${variation}`,
        `best ${service} ${variation}`,
        `emergency ${service} ${variation}`,
        `24 hour ${service} ${variation}`,
        `affordable ${service} ${variation}`
      );
    });
  });

  // Add residential area variations
  const residentialTypes = [
    'apartment',
    'flat',
    'house',
    'villa',
    'society',
    'residential complex',
    'township',
    'colony',
    'building'
  ];

  residentialTypes.forEach(type => {
    keywords.push(
      `repair service for ${type} in ${city}`,
      `${type} repair service ${city}`,
      `home appliance repair for ${type} ${city}`,
      `AC repair for ${type} in ${city}`,
      `appliance maintenance for ${type} ${city}`
    );
  });

  return keywords;
}

// Generate service-specific keywords
export function generateServiceKeywords(serviceName: string) {
  const problems = [
    'not working',
    'not starting',
    'making noise',
    'leaking',
    'no power',
    'error',
    'broken',
    'damaged',
    'faulty',
    'problem',
    'issue',
    'repair',
    'service',
    'maintenance'
  ];

  const serviceTypes = [
    'repair',
    'service',
    'maintenance',
    'installation',
    'uninstallation',
    'relocation',
    'deep cleaning',
    'gas filling',
    'gas charging',
    'sanitization',
    'check up',
    'inspection',
    'troubleshooting',
    'diagnosis',
    'replacement',
    'upgrade'
  ];

  const qualifiers = [
    'best',
    'professional',
    'expert',
    'reliable',
    'trusted',
    'affordable',
    'cheap',
    'emergency',
    'urgent',
    'quick',
    'same day',
    '24 hour',
    'doorstep',
    'home',
    'local'
  ];

  const keywords = [];

  // Basic service keywords
  serviceTypes.forEach(type => {
    keywords.push(
      `${serviceName} ${type}`,
      `${type} ${serviceName}`,
      `${serviceName} ${type} service`,
      `${serviceName} ${type} cost`,
      `${serviceName} ${type} price`,
      `${serviceName} ${type} charges`
    );

    // Add qualifiers
    qualifiers.forEach(qualifier => {
      keywords.push(
        `${qualifier} ${serviceName} ${type}`,
        `${serviceName} ${type} ${qualifier}`,
        `${qualifier} ${type} ${serviceName} service`
      );
    });
  });

  // Problem-specific keywords
  problems.forEach(problem => {
    keywords.push(
      `${serviceName} ${problem}`,
      `${serviceName} ${problem} solution`,
      `${serviceName} ${problem} repair`,
      `${serviceName} ${problem} fix`,
      `how to fix ${serviceName} ${problem}`,
      `why is my ${serviceName} ${problem}`,
      `${serviceName} ${problem} repair cost`,
      `${serviceName} ${problem} repair near me`
    );
  });

  // Additional specific keywords
  keywords.push(
    // Parts and components
    `${serviceName} spare parts`,
    `${serviceName} replacement parts`,
    `${serviceName} accessories`,
    `${serviceName} components`,
    `genuine ${serviceName} parts`,
    
    // Service quality
    `${serviceName} repair reviews`,
    `${serviceName} service rating`,
    `${serviceName} repair feedback`,
    `best ${serviceName} repair shop`,
    `trusted ${serviceName} service`,
    
    // Cost and warranty
    `${serviceName} repair warranty`,
    `${serviceName} service guarantee`,
    `${serviceName} repair estimate`,
    `${serviceName} service package`,
    `${serviceName} AMC`,
    
    // Emergency services
    `emergency ${serviceName} repair`,
    `24/7 ${serviceName} service`,
    `urgent ${serviceName} repair`,
    `same day ${serviceName} repair`,
    
    // Technical terms
    `${serviceName} troubleshooting`,
    `${serviceName} maintenance tips`,
    `${serviceName} repair guide`,
    `${serviceName} service manual`,
    `${serviceName} repair manual`
  );

  return Array.from(new Set(keywords)); // Remove duplicates
}

// Generate brand-specific keywords
export function generateBrandKeywords(brandName: string) {
  const serviceTypes = [
    'repair',
    'service',
    'maintenance',
    'installation',
    'support',
    'care',
    'help',
    'fix',
    'solutions',
    'center'
  ];

  const qualifiers = [
    'authorized',
    'official',
    'genuine',
    'certified',
    'professional',
    'expert',
    'specialized',
    'trusted',
    'reliable',
    'experienced'
  ];

  const keywords = [];

  // Generate combinations
  serviceTypes.forEach(type => {
    qualifiers.forEach(qualifier => {
      keywords.push(
        `${brandName} ${type}`,
        `${qualifier} ${brandName} ${type}`,
        `${brandName} ${type} ${qualifier}`,
        `${brandName} ${type} center`,
        `${brandName} ${type} near me`,
        `${brandName} ${type} at home`,
        `${brandName} home ${type}`,
        `${brandName} doorstep ${type}`,
        `emergency ${brandName} ${type}`,
        `24/7 ${brandName} ${type}`,
        `local ${brandName} ${type}`,
        `best ${brandName} ${type}`,
        `affordable ${brandName} ${type}`
      );
    });
  });

  // Add specific brand-related keywords
  keywords.push(
    // Parts and warranty
    `${brandName} spare parts`,
    `${brandName} genuine parts`,
    `${brandName} warranty service`,
    `${brandName} out of warranty service`,
    `${brandName} extended warranty`,
    
    // Service quality
    `best ${brandName} service`,
    `trusted ${brandName} repair`,
    `reliable ${brandName} service`,
    `professional ${brandName} repair`,
    
    // Cost-related
    `${brandName} repair cost`,
    `${brandName} service charges`,
    `${brandName} repair estimate`,
    `affordable ${brandName} repair`,
    
    // Service types
    `${brandName} home service`,
    `${brandName} onsite service`,
    `${brandName} doorstep repair`,
    `${brandName} same day service`,
    
    // Additional variations
    `${brandName} customer care`,
    `${brandName} toll free`,
    `${brandName} helpline`,
    `${brandName} service booking`,
    `${brandName} repair booking`
  );

  return Array.from(new Set(keywords)); // Remove duplicates
}