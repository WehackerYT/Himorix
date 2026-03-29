"use client";

import { Globe, Code, Smartphone, Zap, Shield, Database, Palette, Cpu } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WebDevelopment() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-900 via-cyan-900 to-teal-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Globe className="w-20 h-20 text-teal-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Web <span className="text-teal-400">Development</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Modern, responsive, and scalable web applications that deliver exceptional user experiences
              </p>
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Build Your Website
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Web Development Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive web solutions from design to deployment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Code className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Frontend Development</h3>
                <p className="text-gray-600 mb-4">
                  Modern, responsive frontend with cutting-edge technologies
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• React.js & Next.js</li>
                  <li>• Vue.js & Angular</li>
                  <li>• Responsive design</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Database className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Backend Development</h3>
                <p className="text-gray-600 mb-4">
                  Robust backend systems with scalable architecture
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Node.js & Express</li>
                  <li>• Python & Django</li>
                  <li>• RESTful APIs</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Smartphone className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Progressive Web Apps</h3>
                <p className="text-gray-600 mb-4">
                  App-like experiences with offline capabilities
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Service workers</li>
                  <li>• Offline functionality</li>
                  <li>• Push notifications</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Palette className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">UI/UX Design</h3>
                <p className="text-gray-600 mb-4">
                  User-centered design for exceptional experiences
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Wireframing</li>
                  <li>• Prototyping</li>
                  <li>• User testing</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Shield className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Full-featured online stores with payment integration
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Shopping cart systems</li>
                  <li>• Payment gateways</li>
                  <li>• Inventory management</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Zap className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Web Performance</h3>
                <p className="text-gray-600 mb-4">
                  Optimized for speed and search engine ranking
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Performance optimization</li>
                  <li>• SEO implementation</li>
                  <li>• CDN integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Stack */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Technology Stack
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern tools and frameworks for cutting-edge web solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Frontend</h3>
                <div className="space-y-2">
                  {['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                    <div key={tech} className="bg-gray-50 rounded-lg px-4 py-2">
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Backend</h3>
                <div className="space-y-2">
                  {['Node.js', 'Express', 'Python', 'Django', 'GraphQL'].map((tech) => (
                    <div key={tech} className="bg-gray-50 rounded-lg px-4 py-2">
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Database</h3>
                <div className="space-y-2">
                  {['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'].map((tech) => (
                    <div key={tech} className="bg-gray-50 rounded-lg px-4 py-2">
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">DevOps</h3>
                <div className="space-y-2">
                  {['Docker', 'Kubernetes', 'AWS', 'Vercel', 'GitHub Actions'].map((tech) => (
                    <div key={tech} className="bg-gray-50 rounded-lg px-4 py-2">
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Launch Your Web Project?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Let's create a web application that stands out and delivers results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 font-bold py-4 px-8 rounded-lg hover:bg-teal-50 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-teal-600 transition-colors">
                View Our Work
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
