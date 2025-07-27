import React from 'react';

// You can use actual icons from a library like 'react-icons'
const PlaceholderIcon = () => (
  <svg className="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3"></path>
  </svg>
);


const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building robust and scalable web applications using modern frameworks like Next.js.',
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces that are a joy to use.',
    },
    {
      title: 'SEO Optimization',
      description: 'Improving your site\'s visibility on search engines to attract more organic traffic.',
    },
  ];

  return (
    <section className="bg-black text-white px-8 py-16 h-screen flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">What We Offer</h2>
          <p className="mt-4 text-white">
            Our services are designed to provide a complete solution for your digital presence.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="block rounded-xl border border-gray-800 bg-white p-8 shadow-xl transition hover:border-white/10 hover:shadow-white/10"
            >
              <div className="text-black">
                <PlaceholderIcon />
                <h3 className="mt-4 text-xl font-bold text-black">{service.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;