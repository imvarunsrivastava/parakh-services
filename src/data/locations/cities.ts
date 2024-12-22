// Major cities by state
export const cities: Record<string, Array<{ value: string; label: string }>> = {
  'delhi': [
    { value: 'new-delhi', label: 'New Delhi' },
    { value: 'delhi-ncr', label: 'Delhi NCR' }
  ],
  'maharashtra': [
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'pune', label: 'Pune' },
    { value: 'nagpur', label: 'Nagpur' },
    { value: 'nashik', label: 'Nashik' },
    { value: 'aurangabad', label: 'Aurangabad' },
    { value: 'solapur', label: 'Solapur' }
  ],
  'karnataka': [
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'mysore', label: 'Mysore' },
    { value: 'hubli', label: 'Hubli' },
    { value: 'mangalore', label: 'Mangalore' },
    { value: 'belgaum', label: 'Belgaum' }
  ],
  'tamil-nadu': [
    { value: 'chennai', label: 'Chennai' },
    { value: 'coimbatore', label: 'Coimbatore' },
    { value: 'madurai', label: 'Madurai' },
    { value: 'salem', label: 'Salem' },
    { value: 'trichy', label: 'Trichy' }
  ],
  'uttar-pradesh': [
    { value: 'lucknow', label: 'Lucknow' },
    { value: 'kanpur', label: 'Kanpur' },
    { value: 'agra', label: 'Agra' },
    { value: 'varanasi', label: 'Varanasi' },
    { value: 'meerut', label: 'Meerut' },
    { value: 'ghaziabad', label: 'Ghaziabad' },
    { value: 'noida', label: 'Noida' }
  ],
  'gujarat': [
    { value: 'ahmedabad', label: 'Ahmedabad' },
    { value: 'surat', label: 'Surat' },
    { value: 'vadodara', label: 'Vadodara' },
    { value: 'rajkot', label: 'Rajkot' },
    { value: 'gandhinagar', label: 'Gandhinagar' }
  ],
  'west-bengal': [
    { value: 'kolkata', label: 'Kolkata' },
    { value: 'howrah', label: 'Howrah' },
    { value: 'durgapur', label: 'Durgapur' },
    { value: 'asansol', label: 'Asansol' },
    { value: 'siliguri', label: 'Siliguri' }
  ],
  'telangana': [
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'warangal', label: 'Warangal' },
    { value: 'nizamabad', label: 'Nizamabad' },
    { value: 'karimnagar', label: 'Karimnagar' }
  ],
  'rajasthan': [
    { value: 'jaipur', label: 'Jaipur' },
    { value: 'jodhpur', label: 'Jodhpur' },
    { value: 'udaipur', label: 'Udaipur' },
    { value: 'kota', label: 'Kota' },
    { value: 'ajmer', label: 'Ajmer' }
  ],
  'madhya-pradesh': [
    { value: 'bhopal', label: 'Bhopal' },
    { value: 'indore', label: 'Indore' },
    { value: 'jabalpur', label: 'Jabalpur' },
    { value: 'gwalior', label: 'Gwalior' },
    { value: 'ujjain', label: 'Ujjain' }
  ]
} as const;