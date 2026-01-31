import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/images/eka.jpg';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-32 pb-24 bg-gradient-to-br from-[#EAE6FF] via-[#F5F3FF] to-[#D6E4FF] relative overflow-hidden"
    >
      {/* Dekorasi background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#C4B5FD] rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#93C5FD] rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative">
        
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 animate-fadeInUp">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#EAE6FF] text-[#6C63FF] text-sm font-semibold shadow-sm animate-bounce">
            Information System Student
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4 font-poppins leading-tight">
            Hello, I'm <span className="text-[#6C63FF]">Eka Putra Rahmadani</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#6C63FF] font-semibold mb-5">
            UI/UX Designer • System Analyst • Programmer
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed max-w-xl">
            I am an Information Systems student with a strong interest in
            <span className="font-medium text-[#1F2937]"> system analysis</span>,
            <span className="font-medium text-[#1F2937]"> UI/UX design</span>, and
            <span className="font-medium text-[#1F2937]"> web development</span>.
            Experienced in analyzing user requirements, designing intuitive interfaces,
            and developing web-based solutions that are effective and user-centered.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mb-8">
            <a
              href="#portfolio"
              className="bg-[#6C63FF] text-white px-6 py-3 rounded-full hover:bg-[#4C5BFE] transition transform hover:scale-105 font-medium shadow-lg"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="border border-[#6C63FF] text-[#6C63FF] px-6 py-3 rounded-full hover:bg-[#F3F4F6] transition transform hover:scale-105 font-medium"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 text-2xl text-[#6C63FF]">
            <a href="https://www.instagram.com/ekaptrrdni" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="https://github.com/ekaputrar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition transform hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/eka-putra-rahmadani-333088362/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition transform hover:scale-110">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center relative animate-fadeInUp">
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-[#C4B5FD] via-[#A5B4FC] to-[#93C5FD] blur-3xl opacity-50 -z-10 animate-pulse"></div>

          <div className="relative p-[6px] rounded-full bg-gradient-to-tr from-[#6C63FF] via-[#A78BFA] to-[#60A5FA] shadow-xl transform hover:scale-105 transition duration-500">
            <img
              src={profileImg}
              alt="Eka Putra Rahmadani"
              className="rounded-full w-64 h-64 md:w-72 md:h-72 object-cover border-4 border-white shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
