"use client";

import { Palette, Figma, Monitor, Smartphone, MousePointer, Layout, Users, Target, Layers, Eye, Sparkles, PenTool } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function UIUXDesign() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-pink-900 via-fuchsia-900 to-pink-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Palette className="w-20 h-20 text-pink-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                UI/UX <span className="text-pink-400">Design</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                User-centered design that delights users and drives engagement through intuitive experiences
              </p>
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Design Project
              </button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Design Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From research to pixel-perfect designs, we create experiences users love
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">UX Research</h3>
                <p className="text-gray-600 mb-4">
                  Deep understanding of your users through research and testing
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• User interviews & surveys</li>
                  <li>• Persona development</li>
                  <li>• Usability testing</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <PenTool className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">UI Design</h3>
                <p className="text-gray-600 mb-4">
                  Beautiful, modern interface designs that captivate users
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Visual design systems</li>
                  <li>• Component libraries</li>
                  <li>• Brand-consistent interfaces</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Layout className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wireframing & Prototyping</h3>
                <p className="text-gray-600 mb-4">
                  Interactive prototypes to validate ideas before development
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Low & high fidelity wireframes</li>
                  <li>• Interactive prototypes</li>
                  <li>• User flow mapping</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Web Design</h3>
                <p className="text-gray-600 mb-4">
                  Responsive web designs that look stunning on every device
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Responsive design</li>
                  <li>• Landing page design</li>
                  <li>• E-commerce UI</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile App Design</h3>
                <p className="text-gray-600 mb-4">
                  Native-feel mobile designs for iOS and Android platforms
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• iOS & Android guidelines</li>
                  <li>• Gesture-based interactions</li>
                  <li>• App icon & splash screens</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Design Systems</h3>
                <p className="text-gray-600 mb-4">
                  Scalable design systems for consistent brand experiences
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Style guides</li>
                  <li>• Reusable components</li>
                  <li>• Design tokens</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Design Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven design-thinking approach for exceptional results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Discover</h3>
                <p className="text-gray-600">User research, competitive analysis, and requirement gathering</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Define</h3>
                <p className="text-gray-600">Information architecture, user flows, and wireframes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Design</h3>
                <p className="text-gray-600">High-fidelity designs, prototypes, and design systems</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MousePointer className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Deliver</h3>
                <p className="text-gray-600">Dev handoff, quality assurance, and design iteration</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-fuchsia-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Create an Amazing User Experience?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Let's design something beautiful that your users will love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-pink-600 font-bold py-4 px-8 rounded-lg hover:bg-pink-50 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-pink-600 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
