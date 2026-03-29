"use client";

import { Database, Shield, Globe, Zap, HardDrive, Clock, CheckCircle2, Cloud } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CloudStorage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Database className="w-20 h-20 text-blue-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Cloud <span className="text-blue-400">Storage</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Scalable, secure, and high-performance cloud storage solutions for all your data needs
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Storage Setup
              </button>
            </div>
          </div>
        </section>

        {/* Storage Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Storage Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade storage capabilities designed for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Unlimited Scalability</h3>
                <p className="text-gray-600">Scale storage capacity on demand without performance degradation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">256-bit encryption and advanced threat protection</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-Region</h3>
                <p className="text-gray-600">Global distribution with automatic failover</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Automatic Backups</h3>
                <p className="text-gray-600">Scheduled backups with point-in-time recovery</p>
              </div>
            </div>
          </div>
        </section>

        {/* Storage Solutions */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Storage Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive storage options for different use cases and requirements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <HardDrive className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Object Storage</h3>
                <p className="text-gray-600 mb-4">
                  Scalable object storage for unstructured data, media files, and backups
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• S3-compatible API</li>
                  <li>• Version control</li>
                  <li>• Lifecycle management</li>
                  <li>• Cross-region replication</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Database className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Block Storage</h3>
                <p className="text-gray-600 mb-4">
                  High-performance block storage for databases and applications
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• SSD & HDD options</li>
                  <li>• Instant provisioning</li>
                  <li>• Snapshot backups</li>
                  <li>• Performance tuning</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Cloud className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">File Storage</h3>
                <p className="text-gray-600 mb-4">
                  Shared file storage with NFS/SMB protocols for collaborative work
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Multi-user access</li>
                  <li>• Permission management</li>
                  <li>• Real-time sync</li>
                  <li>• Version history</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Archive Storage</h3>
                <p className="text-gray-600 mb-4">
                  Cost-effective long-term storage for compliance and data retention
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cold data storage</li>
                  <li>• Compliance ready</li>
                  <li>• Data lifecycle</li>
                  <li>• Retrieval options</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hybrid Storage</h3>
                <p className="text-gray-600 mb-4">
                  Combine on-premises and cloud storage for optimal performance and cost
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Seamless integration</li>
                  <li>• Data tiering</li>
                  <li>• Cache optimization</li>
                  <li>• Bandwidth management</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Content Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Global CDN for fast content delivery and media streaming
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Edge locations</li>
                  <li>• Auto-scaling bandwidth</li>
                  <li>• Media optimization</li>
                  <li>• Analytics dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Performance & Reliability
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade performance metrics and SLA guarantees
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">99.99%</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Uptime SLA</h4>
                <p className="text-gray-600">Industry-leading availability guarantee</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">10GB/s</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Transfer Speed</h4>
                <p className="text-gray-600">High-speed data transfer capabilities</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">15</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Global Regions</h4>
                <p className="text-gray-600">Worldwide data center coverage</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">&lt;1ms</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Latency</h4>
                <p className="text-gray-600">Ultra-low latency access times</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need Scalable Storage Solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our storage experts design the perfect solution for your data requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                Get Storage Assessment
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                View Storage Pricing
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
