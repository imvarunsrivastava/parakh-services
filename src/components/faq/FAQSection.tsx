import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What areas do you service?",
    answer: "We provide services across all major cities in India including Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, and more. Check our locations page for detailed coverage."
  },
  {
    question: "Do you provide warranty on repairs?",
    answer: "Yes, we provide a 90-day warranty on all our repair services. This covers both parts and labor for any issues related to the original repair."
  },
  {
    question: "What brands do you service?",
    answer: "We service all major brands including Samsung, LG, Whirlpool, Godrej, Voltas, Daikin, Carrier, Hitachi, and many more. Check our brands page for a complete list."
  },
  {
    question: "How quickly can you respond to service requests?",
    answer: "We offer same-day service in most locations. For emergency repairs, we aim to reach you within 2-4 hours of booking confirmation."
  },
  {
    question: "What are your service charges?",
    answer: "Our service charges vary depending on the type of appliance and repair needed. We provide a clear estimate after initial diagnosis. Visit charges are included in the repair cost."
  },
  {
    question: "Do you provide genuine spare parts?",
    answer: "Yes, we use genuine spare parts for all repairs. In cases where original parts are not available, we discuss compatible alternatives with the customer."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including cash, credit/debit cards, UPI, and digital wallets. Payment is collected after service completion."
  },
  {
    question: "Are your technicians certified?",
    answer: "Yes, all our technicians are professionally trained and experienced. They undergo regular training to stay updated with the latest technology."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}