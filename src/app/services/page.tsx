import Link from "next/link";
import { Code, Globe, Smartphone, Cloud, Database, Shield, Palette, BarChart, Zap, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Services",
  description: "Explore Himorix's full range of software development services including custom software, web development, mobile apps, cloud solutions, cybersecurity, UI/UX design, and data analytics.",
};

const services = [
  { title: "Custom Software Development", icon: Code, description: "Tailored solutions for your business needs", href: "/services/custom-software" },
  { title: "Web Application Development", icon: Globe, description: "Modern, responsive web applications", href: "/services/web-development" },
  { title: "Mobile App Development", icon: Smartphone, description: "iOS and Android native applications", href: "/services/mobile-apps" },
  { title: "Cloud Solutions", icon: Cloud, description: "Scalable cloud infrastructure and migration", href: "/services/cloud-solutions" },
  { title: "Database Solutions", icon: Database, description: "Database design and optimization", href: "/services/database" },
  { title: "Cybersecurity", icon: Shield, description: "Comprehensive security solutions", href: "/services/security" },
  { title: "UI/UX Design", icon: Palette, description: "User-centered design services", href: "/services/ui-ux" },
  { title: "Data Analytics", icon: BarChart, description: "Business intelligence and analytics", href: "/services/analytics" },
  { title: "API Development", icon: Zap, description: "RESTful and GraphQL APIs for seamless integrations", href: "/services/api-development" },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px] bg-white">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-pink-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to transform your business and drive growth
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-pink-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-700">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your project requirements
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-pink-600 font-bold py-4 px-8 rounded-lg hover:bg-pink-50 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
