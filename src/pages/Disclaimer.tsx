import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, Shield } from 'lucide-react';

export default function Disclaimer() {
  return (
    <>
      <Helmet>
        <title>Legal Disclaimer | Parakh Services</title>
        <meta 
          name="description" 
          content="Important legal information about our third-party repair services and brand relationships." 
        />
      </Helmet>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto" />
            <h1 className="mt-4 text-3xl font-extrabold text-gray-900">Legal Disclaimer</h1>
          </div>
          
          <div className="mt-12 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <Shield className="h-5 w-5 text-blue-600 mr-2" />
                Third-Party Service Provider
              </h2>
              <p className="mt-3 text-gray-600">
                Parakh Services is an independent repair service provider. We are not affiliated with, 
                endorsed by, or connected to any of the brands or manufacturers mentioned on this website. 
                All brand names, trademarks, and logos are the property of their respective owners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Warranty Services</h2>
              <p className="mt-3 text-gray-600">
                We exclusively provide repair services for out-of-warranty products. For products under 
                manufacturer warranty, please contact the respective brand's authorized service center. 
                Our service warranty is limited to the repairs we perform and is separate from any 
                manufacturer warranty.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Parts and Services</h2>
              <p className="mt-3 text-gray-600">
                While we strive to use high-quality replacement parts, these may include both original 
                and compatible parts based on availability and customer preference. Our technicians are 
                trained professionals but are not brand-authorized personnel.
              </p>
            </section>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-700">
                By using our services, you acknowledge that you understand we are a third-party repair 
                service provider and not affiliated with any manufacturer. For in-warranty products, 
                please contact the respective brand's authorized service center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}