import React from 'react';
import profileImg from '../assets/images/eka.jpg';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-[#F9FAFF] via-[#FFFFFF] to-[#EAE6FF] overflow-hidden"
    >
      {/* Dekorasi Latar */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#D6E4FF] rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-10 right-0 w-56 h-56 bg-[#EAE6FF] rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Foto Profil */}
        <div className="md:w-1/2 flex justify-center relative">
          {/* Bingkai dekoratif */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#6C63FF] to-[#D6E4FF] blur-md opacity-50"></div>
          <img
            src={profileImg}
            alt="Eka Putra Rahmadani"
            className="rounded-full w-64 h-64 object-cover shadow-xl relative border-4 border-white"
          />
        </div>

        {/* Deskripsi */}
        <div className="md:w-1/2 text-center md:text-left relative">
          {/* Aksen dekoratif kecil */}
          <span className="absolute -top-6 left-1/2 md:left-0 md:-translate-x-0 -translate-x-1/2 text-4xl opacity-30">✨</span>
          <h2 className="text-3xl font-bold text-[#6C63FF] mb-4 font-poppins">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hi! I'm Eka, a passionate designer and frontend developer based in Indonesia. 
            With a background in visual design and a love for coding, I focus on creating 
            modern websites and apps that are not only visually appealing but also easy to use. 
            I enjoy bringing ideas to life through design, interactivity, and clean code.
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
            {["UI/UX Design", "Web Development", "Branding", "Motion Graphics"].map((skill, index) => (
              <span
                key={index}
                className="bg-[#EAE6FF] text-[#6C63FF] px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-[#D6E4FF]/50"
              >
                 {skill}
              </span>
            ))}
          </div>

          {/* Tombol Connect */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#6C63FF] text-white px-5 py-2 rounded hover:bg-[#4C5BFE] transition font-medium shadow-md"
          >
            ✈️ Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
