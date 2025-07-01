// @/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-8 pb-5 px-6 lg:px-20 bg-base2 text-body text-sm">
      <div className="max-w-6xl mx-auto">
        {/* Horizontal line */}
        <hr className="border-t border-white/10 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Side Text */}
          <div>
            <p className="mb-0 text-center md:text-left">
              ©2025 Trevor Gituru. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="text-center md:text-right">
            <h5 className="font-semibold mb-2 uppercase tracking-wider text-xs">Connect with me:</h5>
            <div className="flex justify-center md:justify-end space-x-4 text-brand text-2xl">
              <a
                href="mailto:giturutrevor@gmail.com"
                className="hover:text-brand2 transition"
                aria-label="Email"
              >
                <i className="las la-envelope"></i>
              </a>
              <a
                href="https://twitter.com/gituru_trevor"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand2 transition"
                aria-label="Twitter"
              >
                <i className="lab la-twitter"></i>
              </a>
              <a
                href="https://ke.linkedin.com/in/trevor-gituru-9243782a2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand2 transition"
                aria-label="LinkedIn"
              >
                <i className="lab la-linkedin"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=254701342609&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand2 transition"
                aria-label="WhatsApp"
              >
                <i className="lab la-whatsapp"></i>
              </a>
              <a
                href="https://github.com/trevor-gituru"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand2 transition"
                aria-label="GitHub"
              >
                <i className="lab la-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

