"use client";

import Image from "next/image";

const technologies = [
  { name: "React JS", icon: "⚛️" },
  { name: "Next JS", icon: "▲" },
  { name: "Node JS", icon: "🟩" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "Swift", icon: "🍎" },
  { name: "Flutter", icon: "🦋" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Shopify", icon: "🛍️" },
  { name: "Magento", icon: "🛒" },
  { name: "WordPress", icon: "📝" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🗄️" },
  { name: "Figma", icon: "🎨" },
];

export default function TechnologyStack() {
  return (
    <section className="py-20 bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-pink-600 font-semibold tracking-wide uppercase text-sm mb-3">Technologies</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Technology Stack and Platforms</h3>
          <p className="text-gray-400 text-lg">
            Over 1,000 experts with 24+ years of experience in over 50 cutting-edge technologies.
          </p>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative flex overflow-x-hidden group bg-white/5 py-4 sm:py-6 mb-4 backdrop-blur-sm border-y border-white/10">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-4 sm:gap-6 px-4 sm:px-6 group-hover:pause">
          {[...technologies, ...technologies].map((tech, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 sm:gap-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1 transition-all duration-300 min-w-max cursor-pointer"
            >
              <span className="text-lg sm:text-2xl">{tech.icon}</span>
              <span className="text-gray-900 font-bold text-xs sm:text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="relative flex overflow-x-hidden group bg-white/5 py-4 sm:py-6 backdrop-blur-sm border-b border-white/10">
        <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-4 sm:gap-6 px-4 sm:px-6 group-hover:pause">
          {[...technologies, ...technologies].reverse().map((tech, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 sm:gap-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1 transition-all duration-300 min-w-max cursor-pointer"
            >
              <span className="text-lg sm:text-2xl">{tech.icon}</span>
              <span className="text-gray-900 font-bold text-xs sm:text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 sm:mt-12 relative z-10 px-4">
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white transition-all duration-300 border border-white rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white group"
        >
          Book a FREE Consultation
          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
