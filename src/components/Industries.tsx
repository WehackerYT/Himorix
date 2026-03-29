"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  {
    id: 1,
    title: "Media & Publishing",
    description: "Revolutionising publishing with tools that increase audience reach, monetise content, and effortlessly engage readers.",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    color: "from-orange-500/80 to-black/90"
  },
  {
    id: 2,
    title: "Aviation",
    description: "Developing cutting-edge aviation solutions to improve passenger experience, optimise flight operations, and ensure the safety and efficiency of the skies.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    color: "from-blue-500/80 to-black/90"
  },
  {
    id: 3,
    title: "Healthcare Industry",
    description: "Building innovative tools and platforms to empower healthcare providers in delivering exceptional care, streamlining operations, and scaling their impact.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
    color: "from-emerald-500/80 to-black/90"
  },
  {
    id: 4,
    title: "Education",
    description: "Building innovative education solutions to personalise learning experiences, empower educators, and make quality education accessible to all.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    color: "from-purple-500/80 to-black/90"
  }
];

export default function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-white w-full">
      <div className="flex flex-col lg:flex-row w-full min-h-[400px] lg:h-[600px]">
        {industries.map((industry, index) => (
          <div
            key={industry.id}
            className="relative flex-1 h-48 lg:h-full overflow-hidden group border-r border-white/10 last:border-r-0 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                style={{ objectFit: "cover" }}
                className={`transition-all duration-700 ease-in-out ${
                  hoveredIndex === index ? "scale-110 grayscale-0" : "scale-100 grayscale"
                }`}
              />
              <div 
                className={`absolute inset-0 bg-gradient-to-t ${industry.color} transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-90" : "opacity-80"
                }`}
              />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-4 lg:p-8 flex flex-col justify-end z-10">
              <div className="w-8 h-1 bg-pink-500 mb-4 transition-all duration-500 transform origin-left lg:w-12" />
              
              <h3 className="text-xl lg:text-3xl font-bold mb-4 transition-all duration-500 translate-y-0 group-hover:-translate-y-2">
                {industry.title}
              </h3>
              
              <div className={`overflow-hidden transition-all duration-500 ${
                hoveredIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0 lg:max-h-24 lg:opacity-100"
              }`}>
                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed mb-6">
                  {industry.description}
                </p>
                
                <a href="#" className="inline-flex items-center text-pink-500 font-bold hover:text-white transition-colors text-sm lg:text-base">
                  Learn More
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
