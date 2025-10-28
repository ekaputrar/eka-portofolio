import React from 'react';
import { FaInstagram, FaGithub, FaDribbble, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/images/eka.jpg'; 

const HeroSection = () => {
  return (
    <section id="hero" className="pt-28 pb-20 bg-gradient-to-r from-[#EAE6FF] to-[#D6E4FF]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-4xl font-bold text-[#1F2937] mb-3 font-poppins">
            Hello, I'm Eka Putra Rahmadani
          </h2>
          <p className="text-2xl text-[#6C63FF] font-semibold mb-4">
            Creative Designer & Frontend Developer
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            I design and develop experiences that make people's lives simpler through Web and Mobile apps.
            I work with Figma, HTML5, CSS3, JavaScript, and Flutter.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <a
              href="#portfolio"
              className="bg-[#6C63FF] text-white px-5 py-2 rounded hover:bg-[#4C5BFE] transition font-medium shadow-md"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="border border-[#6C63FF] text-[#6C63FF] px-5 py-2 rounded hover:bg-[#F3F4F6] transition font-medium"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 text-2xl text-[#6C63FF]">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition">
              <FaGithub />
            </a>
            <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ea4c89] transition">
              <FaDribbble />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center relative">
          {/* Decorative Gradient Ring */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#C4B5FD] via-[#A5B4FC] to-[#93C5FD] blur-lg opacity-60 -z-10"></div>

          {/* Frame Decoration */}
          <div className="relative p-[6px] rounded-full bg-gradient-to-tr from-[#6C63FF] via-[#A78BFA] to-[#60A5FA] shadow-lg">
            <img
              src={profileImg}
              alt="Eka Putra Rahmadani"
              className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-xl"
            />

            {/* Little decorations around frame */}
            <span className="absolute w-3 h-3 bg-[#6C63FF] rounded-full top-3 left-1/2 -translate-x-1/2 shadow-md"></span>
            <span className="absolute w-2 h-2 bg-[#A5B4FC] rounded-full bottom-6 right-4 shadow-sm"></span>
            <span className="absolute w-2 h-2 bg-[#93C5FD] rounded-full top-8 right-8 shadow-sm"></span>
            <span className="absolute w-[10px] h-[10px] border-2 border-[#6C63FF]/60 rounded-full bottom-4 left-6"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
