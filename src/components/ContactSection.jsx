import React from 'react';
import { FaInstagram, FaGithub, FaDribbble, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative pt-28 pb-20 bg-gradient-to-br from-[#F9FAFF] via-[#FFFFFF] to-[#EAE6FF] overflow-hidden"
    >
      {/* Dekorasi Blur */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#C7D2FE] rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-[#E9D5FF] rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        {/* Kiri: Info Kontak */}
        <div>
          <h2 className="text-3xl font-bold text-[#1F2937] mb-4 font-poppins">📬 Contact Me</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Interested in working together? Let’s connect and create something amazing!
          </p>

          <div className="space-y-4 text-[#6C63FF] font-medium">
            <div className="flex items-center gap-3">
              <span>📧</span>
              <a href="mailto:eka32686@gmail.com" className="hover:underline">
                eka32686@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span>📞</span>
              <a href="tel:+6281357583303" className="hover:underline">
                +62 813-5758-3303
              </a>
            </div>
          </div>

          {/* Ikon Sosial */}
          <div className="flex gap-4 mt-6 text-2xl">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6C63FF] hover:bg-pink-100 hover:text-pink-500 p-3 rounded-full transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6C63FF] hover:bg-gray-100 hover:text-gray-800 p-3 rounded-full transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6C63FF] hover:bg-pink-50 hover:text-[#ea4c89] p-3 rounded-full transition"
            >
              <FaDribbble />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6C63FF] hover:bg-blue-50 hover:text-blue-600 p-3 rounded-full transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Kanan: Form Kontak */}
        <form className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/60 space-y-4 transition-all">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#6C63FF] text-white px-6 py-2 rounded-full hover:bg-[#4C5BFE] hover:shadow-md transition font-medium"
          >
            ✉️ Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
