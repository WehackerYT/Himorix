"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "TechStart Solutions, Mumbai",
    rating: 5,
    videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    text: "Himorix delivered beyond our expectations. The custom platform they built helped us scale our operations 10x within the first year. Their team's expertise in modern tech stack is remarkable."
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "Digital Innovations, Bangalore",
    rating: 5,
    videoThumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    text: "The API integrations were flawless. We've seen a massive reduction in manual data entry and a huge boost in overall team productivity. Highly recommend the Himorix team for any complex development needs."
  },
  {
    id: 3,
    name: "Amit Patel",
    company: "E-commerce Plus, Delhi",
    rating: 5,
    videoThumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    text: "Their attention to detail and modern tech stack choices gave us an edge over our competitors. The mobile app they developed has increased our customer engagement by 300%."
  },
  {
    id: 4,
    name: "Neha Gupta",
    company: "Fintech Solutions, Pune",
    rating: 5,
    videoThumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    text: "Working with Himorix was a game-changer for our startup. They understood our requirements perfectly and delivered a scalable solution that handles our growing user base seamlessly."
  },
  {
    id: 5,
    name: "Vikram Singh",
    company: "HealthTech India, Chennai",
    rating: 5,
    videoThumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    text: "The healthcare platform they developed is intuitive and robust. Patient data security and compliance were handled excellently. Their support team is always available when needed."
  },
  {
    id: 6,
    name: "Anjali Reddy",
    company: "EduTech Systems, Hyderabad",
    rating: 5,
    videoThumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    text: "Our online learning platform has transformed how we deliver education. The user experience is exceptional, and the backend architecture handles thousands of concurrent users without any issues."
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [playingId, setPlayingId] = useState<number | null>(null);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (testimonials.length - 2)); // Only slide through first 4 to show 3 at a time
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Get the 3 testimonials to display
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Discover how we&apos;ve helped businesses achieve their goals through our dedicated service and expertise.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${currentSlide}`}
                className="bg-white rounded-2xl p-4 lg:p-6 shadow-xl shadow-pink-900/5 hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                {/* Profile Image */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-pink-100">
                    <Image
                      src={testimonial.profileImage}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                    <p className="text-pink-600 font-medium text-sm lg:text-base">{testimonial.company}</p>
                  </div>
                </div>

                {/* Video Thumbnail Area */}
                <div 
                  className="relative h-40 w-full rounded-xl overflow-hidden mb-6 group cursor-pointer"
                  onClick={() => setPlayingId(playingId === testimonial.id ? null : testimonial.id)}
                >
                  <Image
                    src={testimonial.videoThumbnail}
                    alt={`${testimonial.name} Testimonial`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white text-pink-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      {playingId === testimonial.id ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-1" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 italic text-sm lg:text-base mb-4">&quot;{testimonial.text}&quot;</p>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-pink-200 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? "bg-pink-600 w-8" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-pink-200 transition-all"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" />
                )}
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-pink-200 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
