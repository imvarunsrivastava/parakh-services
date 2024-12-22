import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { services } from '../../data/services';
import { states } from '../../data/locations';
import { cities } from '../../data/locations/cities';
import LocationSelector from './LocationSelector';
import ServiceSelector from './ServiceSelector';
import TimeSlotSelector from './TimeSlotSelector';
import CustomerDetails from './CustomerDetails';

interface BookingFormProps {
  initialService?: string;
  initialLocation?: {
    state: string;
    city: string;
  };
}

interface FormData {
  customerName: string;
  phone: string;
  email: string;
  state: string;
  city: string;
  area: string;
  serviceId: string;
  description: string;
  preferredDate: string;
  preferredTime: string;
}

export default function BookingForm({ initialService, initialLocation }: BookingFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    customerName: '',
    phone: '',
    email: '',
    state: initialLocation?.state || '',
    city: initialLocation?.city || '',
    area: '',
    serviceId: initialService || '',
    description: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('service_requests')
        .insert([formData]);

      if (error) throw error;

      // Show success message and redirect
      alert('Service request submitted successfully! We will contact you shortly.');
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Book a Service</h1>
          <p className="mt-2 text-gray-600">
            Schedule your appliance repair service with our expert technicians
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <ServiceSelector
            selected={formData.serviceId}
            onChange={(value) => handleChange('serviceId', value)}
          />

          <LocationSelector
            state={formData.state}
            city={formData.city}
            area={formData.area}
            onStateChange={(value) => handleChange('state', value)}
            onCityChange={(value) => handleChange('city', value)}
            onAreaChange={(value) => handleChange('area', value)}
          />

          <TimeSlotSelector
            date={formData.preferredDate}
            time={formData.preferredTime}
            onDateChange={(value) => handleChange('preferredDate', value)}
            onTimeChange={(value) => handleChange('preferredTime', value)}
          />

          <CustomerDetails
            name={formData.customerName}
            phone={formData.phone}
            email={formData.email}
            description={formData.description}
            onNameChange={(value) => handleChange('customerName', value)}
            onPhoneChange={(value) => handleChange('phone', value)}
            onEmailChange={(value) => handleChange('email', value)}
            onDescriptionChange={(value) => handleChange('description', value)}
          />

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Book Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}