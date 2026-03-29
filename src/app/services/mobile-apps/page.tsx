"use client";

import { Smartphone, Code, Zap, Shield, Globe, Cpu, Palette, Apple } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MobileApps() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-green-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Smartphone className="w-20 h-20 text-green-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Mobile <span className="text-green-400">App</span> Development
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Native and cross-platform mobile applications that deliver exceptional user experiences
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Develop Your App
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Mobile App Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete mobile app development solutions from concept to launch
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Apple className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">iOS Development</h3>
                <p className="text-gray-600 mb-4">
                  Native iOS apps with Swift and modern iOS frameworks
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Swift & SwiftUI</li>
                  <li>• App Store optimization</li>
                  <li>• iOS ecosystem integration</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Smartphone className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Android Development</h3>
                <p className="text-gray-600 mb-4">
                  Native Android apps with Kotlin and modern Android tools
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Kotlin & Jetpack Compose</li>
                  <li>• Play Store optimization</li>
                  <li>• Material Design</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Zap className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-Platform</h3>
                <p className="text-gray-600 mb-4">
                  Single codebase apps that work on both iOS and Android
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• React Native</li>
                  <li>• Flutter</li>
                  <li>• Ionic</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Palette className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">UI/UX Design</h3>
                <p className="text-gray-600 mb-4">
                  Mobile-first design with intuitive user interfaces
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Mobile wireframing</li>
                  <li>• Prototyping</li>
                  <li>• User testing</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">App Security</h3>
                <p className="text-gray-600 mb-4">
                  Enterprise-grade security for mobile applications
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Data encryption</li>
                  <li>• Authentication</li>
                  <li>• Security audits</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Globe className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">App Integration</h3>
                <p className="text-gray-600 mb-4">
                  Seamless integration with backend services and APIs
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• REST API integration</li>
                  <li>• Real-time sync</li>
                  <li>• Third-party services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Mobile App Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Agile approach ensuring quality and timely delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600">Understanding requirements and market research</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Design</h3>
                <p className="text-gray-600">Creating wireframes and UI/UX design</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Development</h3>
                <p className="text-gray-600">Agile development with iterative testing</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Launch</h3>
                <p className="text-gray-600">App store deployment and ongoing support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Mobile Technologies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Latest tools and frameworks for mobile development
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">iOS Technologies</h3>
                <div className="space-y-2">
                  {['Swift', 'SwiftUI', 'Objective-C', 'Xcode', 'Core Data'].map((tech) => (
                    <div key={tech} className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Android Technologies</h3>
                <div className="space-y-2">
                  {['Kotlin', 'Java', 'Jetpack Compose', 'Android Studio', 'Room'].map((tech) => (
                    <div key={tech} className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Cross-Platform</h3>
                <div className="space-y-2">
                  {['React Native', 'Flutter', 'Ionic', 'Expo', 'Capacitor'].map((tech) => (
                    <div key={tech} className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let's create a mobile application that engages users and drives business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-green-50 transition-colors">
                Get App Consultation
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors">
                View App Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
