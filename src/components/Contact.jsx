// @/components/Contact.jsx
import React from 'react';

const cardClass =
  'bg-base p-6 rounded-xl transition duration-300 ease-in-out hover:shadow-[0_0_20px_#e0f780]';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 lg:px-24 py-16 bg-base2 text-body"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="pb-8" data-aos="fade-up">
          <h6 className="text-brand text-sm font-semibold uppercase">Contact</h6>
          <h1 className="text-4xl font-bold mt-2 text-heading">Get In Touch</h1>
          <p className="mt-4 text-brand max-w-2xl">
            Reach out to me for any freelancing opportunities, contract work or just to say hi!
          </p>
        </div>

        <div
          className={cardClass}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <form action="#" className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-base2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full bg-base2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-base2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <input
              type="text"
              placeholder="Enter subject"
              className="w-full bg-base2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              rows="4"
              placeholder="Enter your message"
              className="w-full bg-base2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className=" bg-brand text-base2 font-bold w-full py-3   font-semibold rounded-md hover:bg-indigo-700 transition-colors"
            >
              Contact me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

