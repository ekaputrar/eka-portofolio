import React from 'react';
import profileImg from '../assets/images/eka.jpg';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-[#F9FAFF] via-[#FFFFFF] to-[#EAE6FF] overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-44 h-44 bg-[#D6E4FF] rounded-full blur-3xl opacity-40 -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-60 h-60 bg-[#EAE6FF] rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
        
        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center relative animate-fadeInUp">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#6C63FF] via-[#A78BFA] to-[#D6E4FF] blur-lg opacity-40"></div>
          <img
            src={profileImg}
            alt="Eka Putra Rahmadani"
            className="relative rounded-full w-64 h-64 md:w-72 md:h-72 object-cover border-4 border-white shadow-2xl transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* About Content */}
        <div className="md:w-1/2 text-center md:text-left relative animate-fadeInUp delay-200">
          <h2 className="text-3xl font-bold text-[#6C63FF] mb-5 font-poppins">
            About Me
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 max-w-xl">
            I am an <span className="font-medium text-[#1F2937]">Information Systems student</span> at
            Universitas Negeri Surabaya with a strong interest in
            <span className="font-medium text-[#1F2937]"> system analysis</span>,
            <span className="font-medium text-[#1F2937]"> UI/UX design</span>, and
            <span className="font-medium text-[#1F2937]"> web development</span>.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8 max-w-xl">
            I am experienced in analyzing user requirements, designing intuitive interfaces,
            and developing web-based applications. I enjoy collaborating in teams and turning ideas
            into functional digital solutions using modern tools and technologies.
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
            {[
              "System Analysis",
              "UI/UX Design",
              "Web Development",
              "Requirement Analysis",
              "Figma",
              "HTML • CSS • JavaScript"
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-[#EAE6FF] text-[#6C63FF] px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-[#D6E4FF]/60 hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#6C63FF] text-white px-6 py-3 rounded-full hover:bg-[#4C5BFE] transition transform hover:scale-105 font-medium shadow-md"
          >
            ✈️ Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
