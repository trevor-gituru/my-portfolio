import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[url('/sidebar-img.jpg')] bg-cover bg-center bg-opacity-80 backdrop-blur-md text-white z-50 flex items-center justify-between px-6 shadow-md">
      {/* Brand / Profile */}
      <a
        href="#"
        className="font-bold text-xl hover:text-brand transition-colors"
      >
        Trevor Gituru
      </a>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-8 uppercase font-bold text-sm tracking-wider">
        <li>
          <a href="#home" className="hover:text-brand transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-brand transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-brand transition-colors">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-brand transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-brand transition-colors">
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {/* Simple Hamburger Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-base2 bg-opacity-90 backdrop-blur-md flex flex-col items-center space-y-4 py-4 md:hidden uppercase font-bold text-sm tracking-wider z-40">
          <li>
            <a
              href="#home"
              className="hover:text-brand transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-brand transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-brand transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-brand transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-brand transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
