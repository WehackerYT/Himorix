"use client";

import { Cloud as CloudIcon, Server, Database, Shield, Globe, Zap, Cpu, HardDrive } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Cloud() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <CloudIcon className="w-20 h-20 text-blue-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Cloud <span className="text-blue-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Scalable, secure, and cost-effective cloud solutions to transform your business infrastructure
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cloud solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Server className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Migration</h3>
                <p className="text-gray-600 mb-4">
                  Seamless migration of your existing infrastructure to the cloud with minimal downtime
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Zero-downtime migration</li>
                  <li>• Data integrity assurance</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Database className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Storage</h3>
                <p className="text-gray-600 mb-4">
                  Secure and scalable storage solutions for all your data needs
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Unlimited scalability</li>
                  <li>• Automatic backups</li>
                  <li>• Multi-region replication</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Security</h3>
                <p className="text-gray-600 mb-4">
                  Enterprise-grade security solutions for your cloud infrastructure
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Advanced threat protection</li>
                  <li>• Compliance management</li>
                  <li>• 24/7 monitoring</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global CDN</h3>
                <p className="text-gray-600 mb-4">
                  Lightning-fast content delivery to users worldwide
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Global edge locations</li>
                  <li>• Auto-scaling bandwidth</li>
                  <li>• Real-time analytics</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Serverless Computing</h3>
                <p className="text-gray-600 mb-4">
                  Build and run applications without managing servers
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Pay-per-use pricing</li>
                  <li>• Auto-scaling</li>
                  <li>• Event-driven architecture</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Cpu className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Computing</h3>
                <p className="text-gray-600 mb-4">
                  Powerful computing resources on demand
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• High-performance instances</li>
                  <li>• GPU computing</li>
                  <li>• Container orchestration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Cloud Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of cloud transformation with our expert solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Optimized performance with global CDN and edge computing</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-grade security with advanced threat protection</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HardDrive className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Scalable Storage</h3>
                <p className="text-gray-600">Unlimited storage that grows with your business</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CloudIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Effective</h3>
                <p className="text-gray-600">Pay only for what you use with flexible pricing</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our cloud experts help you migrate, optimize, and scale your infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
