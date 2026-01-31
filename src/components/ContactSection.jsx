import React, { useState } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-br from-indigo-50 via-white to-purple-100 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-300 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-30" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center relative">
        {/* Info */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            📬 Contact Me
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Interested in working together or have a question?  
            Feel free to reach out anytime.
          </p>

          <div className="space-y-3 text-indigo-600 font-medium">
            <p>📧 eka32686@gmail.com</p>
            <p>📞 +62 813-5758-3303</p>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-8 text-2xl">
            <a
              href="https://www.instagram.com/ekaptrrdni"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md transition transform hover:scale-110 hover:text-pink-500"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com/in/eka-putra-rahmadani-333088362"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md transition transform hover:scale-110 hover:text-gray-800"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/USERNAME_LINKEDIN_KAMU"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md transition transform hover:scale-110 hover:text-blue-600"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl space-y-5"
        >
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              required
              className="w-full mt-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="w-full mt-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              required
              className="w-full mt-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Type your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            ✉️ Send Message
          </button>

          {sent && (
            <p className="text-center text-green-600 font-medium">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
