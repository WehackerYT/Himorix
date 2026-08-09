import { Zap, Code, Server, Globe, Lock, ArrowRight, Settings, Layers } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TechLogos } from '@/components/TechLogos';

export const metadata = {
  title: "API Development",
  description: "Professional API development services by Himorix. RESTful and GraphQL APIs for seamless integrations and scalable systems.",
};

export default function APIDevelopment() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30" />
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Zap className="w-20 h-20 text-indigo-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                API <span className="text-indigo-400">Development</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                RESTful and GraphQL APIs for seamless integrations and scalable systems
              </p>
              <Link href="/contact" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our API Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">End-to-end API development solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Code, title: "REST API Design", desc: "Well-documented, versioned REST APIs following best practices" },
                { icon: Layers, title: "GraphQL Development", desc: "Flexible GraphQL APIs with efficient data fetching" },
                { icon: Lock, title: "API Security", desc: "OAuth 2.0, JWT, rate limiting, and encryption" },
                { icon: Server, title: "API Gateway", desc: "Centralized API management and routing" },
                { icon: Globe, title: "Third-Party Integration", desc: "Seamless integration with external services" },
                { icon: Settings, title: "API Documentation", desc: "Swagger/OpenAPI documentation and developer portals" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { logo: TechLogos.Node, name: "Node.js" },
                { logo: TechLogos.Python, name: "Python" },
                { logo: TechLogos.Java, name: "Java" },
                { logo: TechLogos.DotNet, name: ".NET" },
                { logo: TechLogos.MongoDB, name: "MongoDB" },
                { logo: TechLogos.PostgreSQL, name: "PostgreSQL" },
              ].map((tech) => (
                <div key={tech.name} className="text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                    <tech.logo />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Build Your API?</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">Let's discuss your API requirements</p>
            <Link href="/contact" className="inline-flex items-center bg-white text-indigo-600 font-bold py-4 px-8 rounded-lg hover:bg-indigo-50 transition-colors">
              Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
