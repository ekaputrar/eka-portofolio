import React from 'react';
import moneyTrackerImg from '../assets/images/MoneyTracker.png';
import pawpawImg from '../assets/images/PawpawPetshop.png';
import ahpImg from '../assets/images/SPK-AHP.png';
import bellaImg from '../assets/images/BellaBoutique.png';

const projects = [
  {
    category: "UI/UX Design & Programmer",
    title: "Website MoneyTracker",
    tags: "UI/UX, Figma, User Flow, Frontend",
    imgSrc: moneyTrackerImg,
  },
  {
    category: "System Analyst & Programmer",
    title: "Pawpaw Petshop Web App",
    tags: "System Analysis, Web Development",
    imgSrc: pawpawImg,
  },
  {
    category: "System Analyst",
    title: "SPK Metode AHP",
    tags: "Requirement Analysis, UML, DFD",
    imgSrc: ahpImg,
  },
  {
    category: "UI/UX Design & System Analyst",
    title: "Bella Boutique E-Commerce",
    tags: "UI Design, Branding, Figma",
    imgSrc: bellaImg,
  },
];

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="relative py-20 bg-gradient-to-br from-[#F9FAFF] via-[#FFFFFF] to-[#EAE6FF] overflow-hidden"
    >
      {/* Decorative Blur */}
      <div className="absolute top-16 left-10 w-40 h-40 bg-[#D6E4FF] rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-16 w-48 h-48 bg-[#F3E8FF] rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#1F2937] mb-12 text-center font-poppins">
          Portfolio
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md overflow-hidden border border-white/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#6C63FF]/40 animate-fadeInUp"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>

              <div className="p-6">
                <span className="inline-block bg-[#EAE6FF] text-sm text-[#6C63FF] font-medium px-3 py-1 rounded-full mb-2 shadow-sm">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-[#1F2937] group-hover:text-[#6C63FF] transition">
                  {project.title}
                </h3>
                <p className="text-[#6B7280] mt-1">{project.tags}</p>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="flex justify-center mt-14">
          <a
            href="https://github.com/ekaputrar"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6C63FF] text-white px-8 py-3 rounded-full hover:bg-[#4C5BFE] transition transform hover:scale-105 font-medium shadow-md"
          >
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
