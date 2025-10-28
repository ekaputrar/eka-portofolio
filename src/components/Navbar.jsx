import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa'; // ikon untuk tombol Hire Me

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold text-[#333333] font-poppins hover:text-[#6C63FF] transition"
        >
          MyProfile
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-[#333333] font-medium">
          <li><a href="#about" className="hover:text-[#6C63FF] transition">About</a></li>
          <li><a href="#skills" className="hover:text-[#6C63FF] transition">Skills</a></li>
          <li><a href="#portfolio" className="hover:text-[#6C63FF] transition">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-[#6C63FF] transition">Contact</a></li>
        </ul>

        {/* Hire Me Button (Desktop) */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#6C63FF] text-white px-4 py-2 rounded hover:bg-[#4C5BFE] transition font-medium shadow-sm"
        >
          <FaPaperPlane className="text-sm" />
          Hire Me
        </a>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#333333] text-2xl focus:outline-none"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white transition-all ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center py-4 space-y-4 text-[#333333] font-medium">
          <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-[#6C63FF] transition">About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-[#6C63FF] transition">Skills</a></li>
          <li><a href="#portfolio" onClick={() => setIsOpen(false)} className="hover:text-[#6C63FF] transition">Portfolio</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[#6C63FF] transition">Contact</a></li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 bg-[#6C63FF] text-white px-4 py-2 rounded hover:bg-[#4C5BFE] transition font-medium shadow-sm"
            >
              <FaPaperPlane className="text-sm" />
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
