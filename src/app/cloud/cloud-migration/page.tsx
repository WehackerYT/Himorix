"use client";

import { Cloud, Server, Database, Shield, ArrowRight, Clock, CheckCircle2, Zap, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CloudMigration() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Cloud className="w-20 h-20 text-blue-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Cloud <span className="text-blue-400">Migration</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Seamless migration of your existing infrastructure to the cloud with zero downtime and complete data integrity
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Migration Assessment
              </button>
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Migration Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Step-by-step approach ensuring smooth transition with minimal business impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-600">Analyze current infrastructure and identify migration requirements</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Planning</h3>
                <p className="text-gray-600">Create detailed migration roadmap with timelines and milestones</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Execution</h3>
                <p className="text-gray-600">Execute migration with zero downtime and continuous monitoring</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Optimization</h3>
                <p className="text-gray-600">Optimize cloud resources and ensure peak performance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Services */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Migration Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive migration solutions for all your infrastructure needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Server className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Application Migration</h3>
                <p className="text-gray-600 mb-4">
                  Migrate web applications, APIs, and microservices to cloud-native architecture
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Container-based deployment</li>
                  <li>• API gateway setup</li>
                  <li>• Load balancing configuration</li>
                  <li>• Auto-scaling implementation</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Database className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Database Migration</h3>
                <p className="text-gray-600 mb-4">
                  Transfer databases to cloud with zero data loss and minimal downtime
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Schema conversion</li>
                  <li>• Data synchronization</li>
                  <li>• Performance tuning</li>
                  <li>• Backup and recovery</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Security Migration</h3>
                <p className="text-gray-600 mb-4">
                  Migrate security infrastructure and implement cloud-native security measures
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Identity management</li>
                  <li>• Network security</li>
                  <li>• Compliance management</li>
                  <li>• Threat detection</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Network Migration</h3>
                <p className="text-gray-600 mb-4">
                  Migrate network infrastructure including VPNs, firewalls, and routing
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Virtual network setup</li>
                  <li>• CDN configuration</li>
                  <li>• DNS management</li>
                  <li>• Traffic optimization</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Clock className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Legacy Modernization</h3>
                <p className="text-gray-600 mb-4">
                  Modernize legacy applications during migration to cloud-native architecture
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Code refactoring</li>
                  <li>• Architecture redesign</li>
                  <li>• Technology upgrade</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Cloud className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Cloud Strategy</h3>
                <p className="text-gray-600 mb-4">
                  Implement multi-cloud architecture for redundancy and optimal performance
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cross-cloud deployment</li>
                  <li>• Resource orchestration</li>
                  <li>• Cost optimization</li>
                  <li>• Vendor management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Migration Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your business with cloud migration advantages
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Zero Downtime</h3>
                <p className="text-gray-600">Business continuity with seamless migration process</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Data Security</h3>
                <p className="text-gray-600">Enterprise-grade security throughout migration process</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Scalability</h3>
                <p className="text-gray-600">Elastic resources that grow with your business</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Efficiency</h3>
                <p className="text-gray-600">Optimized resource utilization and reduced TCO</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our cloud experts help you plan and execute a seamless migration strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                Get Free Assessment
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                View Migration Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
