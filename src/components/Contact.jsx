// @/components/Contact.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const cardClass =
  'bg-base p-6 rounded-xl transition duration-300 ease-in-out hover:shadow-[0_0_20px_#e0f780]';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;

    // Check for empty fields
    if (!name || !email || !subject || !message) {
      toast.error('Please fill in all fields.');
      return false;
    }

    // Basic email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs.init({
      publicKey: publicKey,
      blockHeadless: true,
      blockList: {
        list: ['foo@emailjs.com'],
        watchVariable: 'userEmail',
      },
      limitRate: {
        id: 'app',
        throttle: 10000,
      },
    });

    emailjs.send(serviceId, templateId, formData).then(
      (response) => {
        toast.success(`Thank you ${formData.name} for contacting me!`);
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        toast.error('Something went wrong. Please try again.');
      }
    );
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 lg:px-24 py-16 bg-base2 text-body"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="pb-8" data-aos="fade-up">
          <h6 className="text-brand text-sm font-semibold uppercase">
            Contact
          </h6>
          <h1 className="text-4xl font-bold mt-2 text-heading">Get In Touch</h1>
          <p className="mt-4 text-brand max-w-2xl">
            Reach out to me for any freelancing opportunities, contract work or
            just to say hi!
          </p>
        </div>

        <div className={cardClass} data-aos="fade-up" data-aos-delay="300">
          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-base2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-base2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-base2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-base2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={handleSubmit}
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
