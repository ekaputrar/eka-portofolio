import React from 'react';

const skills = [
  { title: "UI/UX Design", tools: "Figma, Adobe XD, Sketch", icon: "🎨", bg: "bg-[#F3E8FF]" },
  { title: "Frontend Dev", tools: "React.js, Tailwind, Bootstrap", icon: "👨🏻‍💻", bg: "bg-[#E0F2FE]" },
  { title: "Backend Dev", tools: "Node.js, Express.js", icon: "⚙️", bg: "bg-[#FEF9C3]" },
  { title: "Database", tools: "PostgreSQL, Sequelize", icon: "🗄️", bg: "bg-[#DBEAFE]" },
  { title: "System Analyst", tools: "Requirement Analysis, Documentation, Flowchart", icon: "📊", bg: "bg-[#DCFCE7]" },
  { title: "Version Control", tools: "Git, GitHub", icon: "🔧", bg: "bg-[#FFE4E6]" },
  { title: "API Development", tools: "RESTful API, JWT Auth", icon: "🌐", bg: "bg-[#FFF7ED]" },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-br from-[#F9FAFF] via-[#FFFFFF] to-[#EAE6FF] overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#D6E4FF] rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-[#F3E8FF] rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative">
        <h2 className="text-3xl font-bold text-[#1F2937] mb-10 font-poppins">
          My Skills
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6 flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl shadow-md border border-white/60 ${skill.bg} 
                transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#6C63FF]/40 animate-fadeInUp`}
            >
              <span className="text-4xl block mb-3">{skill.icon}</span>
              <h3 className="text-xl font-semibold text-[#1F2937]">{skill.title}</h3>
              <p className="text-[#6B7280] mt-2">{skill.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
