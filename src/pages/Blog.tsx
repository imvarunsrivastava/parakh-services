import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';

const blogPosts = [
  {
    id: 'ac-maintenance-tips',
    title: 'Essential AC Maintenance Tips for Summer',
    excerpt: 'Learn how to keep your AC running efficiently during peak summer months with these maintenance tips.',
    author: 'Technical Team',
    date: '2024-03-15',
    category: 'Maintenance Tips',
    image: 'https://images.unsplash.com/photo-1621532801487-157c80148147?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'washing-machine-problems',
    title: 'Common Washing Machine Problems and Solutions',
    excerpt: 'Troubleshoot common washing machine issues with our comprehensive guide.',
    author: 'Service Experts',
    date: '2024-03-10',
    category: 'Troubleshooting',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'energy-saving-appliances',
    title: 'How to Choose Energy-Efficient Appliances',
    excerpt: 'Save money on your electricity bills by choosing the right energy-efficient appliances.',
    author: 'Energy Expert',
    date: '2024-03-05',
    category: 'Buying Guide',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Blog() {
  return (
    <>
      <MetaTags
        title="Appliance Repair & Maintenance Blog"
        description="Expert tips, guides, and advice on home appliance repair and maintenance."
      />

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Appliance Care & Maintenance Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert tips, guides, and advice to help you maintain your home appliances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}