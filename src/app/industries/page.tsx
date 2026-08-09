import Link from "next/link";
import { ArrowRight, Newspaper, Plane, HeartPulse, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Industries We Serve",
  description: "Himorix delivers tailored technology solutions across Media & Publishing, Aviation, Healthcare, Education, and more industries.",
};

const industries = [
  { title: "Media & Publishing", icon: Newspaper, description: "Revolutionising publishing with tools that increase audience reach, monetise content, and effortlessly engage readers." },
  { title: "Aviation", icon: Plane, description: "Developing cutting-edge aviation solutions to improve passenger experience, optimise flight operations, and ensure safety." },
  { title: "Healthcare", icon: HeartPulse, description: "Building innovative tools and platforms to empower healthcare providers in delivering exceptional care and scaling their impact." },
  { title: "Education", icon: GraduationCap, description: "Building innovative education solutions to personalise learning experiences, empower educators, and make quality education accessible to all." },
];

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px] bg-white">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Industries We <span className="text-pink-500">Serve</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Delivering tailored technology solutions across diverse industries
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry) => (
                <div key={industry.title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-pink-600 font-semibold hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-700">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Looking for Industry-Specific Solutions?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              We'll tailor our services to meet your industry's unique challenges
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-pink-600 font-bold py-4 px-8 rounded-lg hover:bg-pink-50 transition-colors"
            >
              Contact Us <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
