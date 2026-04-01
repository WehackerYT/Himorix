"use client";

import { Database, Server, Shield, Zap, HardDrive, RefreshCw, Users, Target, Wrench, Rocket, Settings, Lock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TechLogos } from '@/components/TechLogos';

export default function DatabaseSolutions() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Database className="w-20 h-20 text-amber-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Database <span className="text-amber-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Robust, scalable, and high-performance database architecture for your mission-critical applications
              </p>
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Database Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end database solutions from design to optimization and management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Database Design</h3>
                <p className="text-gray-600 mb-4">
                  Optimized schema design for performance and scalability
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Relational database design</li>
                  <li>• NoSQL schema modeling</li>
                  <li>• Data normalization</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Migration</h3>
                <p className="text-gray-600 mb-4">
                  Seamless migration between database systems with zero data loss
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cross-platform migration</li>
                  <li>• Data validation & integrity</li>
                  <li>• Minimal downtime migration</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Query optimization and indexing for maximum speed
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Query performance tuning</li>
                  <li>• Index optimization</li>
                  <li>• Caching strategies</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Database Security</h3>
                <p className="text-gray-600 mb-4">
                  Protect your data with encryption and access controls
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Data encryption at rest</li>
                  <li>• Role-based access control</li>
                  <li>• Audit logging</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <HardDrive className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Backup & Recovery</h3>
                <p className="text-gray-600 mb-4">
                  Automated backup solutions and disaster recovery planning
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Automated daily backups</li>
                  <li>• Point-in-time recovery</li>
                  <li>• Disaster recovery plans</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Managed Database</h3>
                <p className="text-gray-600 mb-4">
                  24/7 database monitoring, management, and support
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 24/7 monitoring & alerts</li>
                  <li>• Proactive maintenance</li>
                  <li>• Scaling & capacity planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Database Technologies */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Technologies We Work With
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expertise across all major database platforms
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.PostgreSQL />
                </div>
                <span className="text-sm font-medium text-gray-700">PostgreSQL</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.MongoDB />
                </div>
                <span className="text-sm font-medium text-gray-700">MongoDB</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.Redis />
                </div>
                <span className="text-sm font-medium text-gray-700">Redis</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.AWS />
                </div>
                <span className="text-sm font-medium text-gray-700">AWS RDS</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.Azure />
                </div>
                <span className="text-sm font-medium text-gray-700">Azure SQL</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.Docker />
                </div>
                <span className="text-sm font-medium text-gray-700">Docker</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need a Reliable Database Solution?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              Let us design and manage a database that scales with your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 font-bold py-4 px-8 rounded-lg hover:bg-amber-50 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
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
