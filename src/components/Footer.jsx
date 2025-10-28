import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#EAE6FF] to-[#D6E4FF] py-6 text-center text-gray-700 text-sm shadow-inner">
      <div className="flex flex-col items-center gap-2">
        <p className="font-medium">
          © 2025 <span className="text-[#6C63FF] font-semibold">Eka Putra Rahmadani</span> in Surabaya
        </p>
        <div className="w-24 h-[2px] bg-[#6C63FF] rounded-full opacity-70"></div>
      </div>

      {/* Dekorasi lembut di bawah */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#C9D6FF] to-[#E2E2E2] opacity-60 rounded-t-full"></div>
    </footer>
  );
};

export default Footer;
