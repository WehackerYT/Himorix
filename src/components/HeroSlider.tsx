"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Future-Ready Digital Solutions",
    subtitle: "Empowering businesses with scalable and secure software",
    description: "Himorix Technologies specializes in developing custom software, centralized platforms, and advanced web applications tailored to your business needs.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    buttonText: "Discover More",
    buttonLink: "/services",
  },
  {
    id: 2,
    title: "Innovative Custom Software",
    subtitle: "Built for performance and long-term reliability",
    description: "Our approach is centered around innovation, ensuring that every solution we build is not only functional but also adaptable for future growth.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    buttonText: "Our Approach",
    buttonLink: "/about",
  },
  {
    id: 3,
    title: "API-Based Systems & Platforms",
    subtitle: "Seamless integrations for modern institutions",
    description: "We build centralized platforms and robust API-based systems that connect your digital ecosystem for maximum efficiency and growth.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    buttonText: "View Portfolio",
    buttonLink: "/portfolio",
  },
];

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-[100vh] min-h-[600px] bg-gray-900 overflow-hidden">
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect="fade"
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="relative w-full h-full flex items-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent z-10" />
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className={`transition-transform duration-10000 ease-linear ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                    priority={index === 0}
                  />
                </div>

                {/* Content */}
                <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl pt-20 lg:pt-24">
                    <div className={`transition-all duration-1000 delay-300 transform ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                      <span className="inline-block py-1 px-3 rounded-full bg-pink-600/20 text-pink-400 font-semibold tracking-wider text-xs sm:text-sm mb-4 border border-pink-500/30">
                        {slide.subtitle}
                      </span>
                    </div>
                    
                    <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6 transition-all duration-1000 delay-500 transform ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                      {slide.title}
                    </h1>
                    
                    <p className={`text-sm sm:text-base md:text-lg text-gray-300 mb-8 lg:mb-10 leading-relaxed transition-all duration-1000 delay-700 transform ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                      {slide.description}
                    </p>
                    
                    <div className={`transition-all duration-1000 delay-900 transform ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                      <a
                        href={slide.buttonLink}
                        className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white transition-all duration-200 bg-pink-600 border border-transparent rounded-full hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600 shadow-lg hover:shadow-pink-500/30 transform hover:-translate-y-1"
                      >
                        {slide.buttonText}
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="absolute bottom-10 right-10 z-30 flex items-center gap-4 hidden md:flex">
          <button className="swiper-button-prev-custom w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-600 text-white backdrop-blur-sm border border-white/20 transition-all cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div className="swiper-pagination-custom flex items-center gap-2"></div>
          <button className="swiper-button-next-custom w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-600 text-white backdrop-blur-sm border border-white/20 transition-all cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </Swiper>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}
