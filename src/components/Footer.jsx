// @/components/Footer.jsx
import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaTwitter, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

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
            <h5 className="font-semibold mb-2 uppercase tracking-wider text-xs">
              Connect with me:
            </h5>
            <div className="flex justify-center md:justify-end space-x-4 text-brand text-2xl">
              <a
                href="mailto:giturutrevor@gmail.com"
                className="hover:text-brand2 transition"
                aria-label="Email"
              >
                <FiMail />
              </a>
              <a
                href="https://twitter.com/gituru_trevor"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand2 transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://ke.linkedin.com/in/trevor-gituru-9243782a2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand2 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=254701342609&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand2 transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://github.com/trevor-gituru"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand2 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

