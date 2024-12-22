// City coordinates for map display
export const cityCoordinates: Record<string, [number, number]> = {
  // Maharashtra
  'mumbai': [19.0760, 72.8777],
  'pune': [18.5204, 73.8567],
  'nagpur': [21.1458, 79.0882],
  
  // Delhi
  'new-delhi': [28.6139, 77.2090],
  'delhi-ncr': [28.7041, 77.1025],
  
  // Karnataka
  'bangalore': [12.9716, 77.5946],
  'mysore': [12.2958, 76.6394],
  
  // Tamil Nadu
  'chennai': [13.0827, 80.2707],
  'coimbatore': [11.0168, 76.9558],
  
  // Uttar Pradesh
  'lucknow': [26.8467, 80.9462],
  'noida': [28.5355, 77.3910],
  
  // Gujarat
  'ahmedabad': [23.0225, 72.5714],
  'surat': [21.1702, 72.8311],
  
  // West Bengal
  'kolkata': [22.5726, 88.3639],
  'howrah': [22.5958, 88.2636],
  
  // Telangana
  'hyderabad': [17.3850, 78.4867],
  'warangal': [17.9689, 79.5941],
  
  // Default coordinates (India center)
  'default': [20.5937, 78.9629]
} as const;