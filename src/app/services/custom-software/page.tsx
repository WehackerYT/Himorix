"use client";

import { Code, Cpu, Database, Globe, Shield, Zap, Users, Target, Package, Cloud, Lock, Wrench, Rocket, Settings, Box, Layers } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TechLogos } from '@/components/TechLogos';

export default function CustomSoftware() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Code className="w-20 h-20 text-indigo-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Custom <span className="text-indigo-400">Software</span> Development
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Tailored software solutions designed to meet your unique business requirements and drive growth
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Custom Software Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end software development solutions from concept to deployment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Applications</h3>
                <p className="text-gray-600 mb-4">
                  Scalable enterprise solutions for complex business operations
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• ERP systems</li>
                  <li>• CRM solutions</li>
                  <li>• Business process automation</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Database Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Custom database design and optimization for data management
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Database architecture</li>
                  <li>• Data migration</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Web Applications</h3>
                <p className="text-gray-600 mb-4">
                  Modern web applications with responsive design and scalability
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Progressive web apps</li>
                  <li>• Single-page applications</li>
                  <li>• Real-time applications</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shield-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Software</h3>
                <p className="text-gray-600 mb-4">
                  Security-first development with advanced protection measures
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Security audits</li>
                  <li>• Encryption implementation</li>
                  <li>• Compliance management</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">API Development</h3>
                <p className="text-gray-600 mb-4">
                  RESTful and GraphQL APIs for seamless integrations
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• REST API design</li>
                  <li>• GraphQL development</li>
                  <li>• API documentation</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">SaaS Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Cloud-based Software as a Service solutions for subscription models
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Multi-tenant architecture</li>
                  <li>• Subscription management</li>
                  <li>• Scalable infrastructure</li>
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
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Agile methodology ensuring quality and timely delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600">Understanding requirements and defining project scope</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Design</h3>
                <p className="text-gray-600">Creating architecture and user experience design</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Development</h3>
                <p className="text-gray-600">Agile development with regular sprints and reviews</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Deployment</h3>
                <p className="text-gray-600">Testing, deployment, and ongoing support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern tech stack for robust and scalable solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.React />
                </div>
                <span className="text-sm font-medium text-gray-700">React</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.Node />
                </div>
                <span className="text-sm font-medium text-gray-700">Node.js</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.Python />
                </div>
                <span className="text-sm font-medium text-gray-700">Python</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.Java />
                </div>
                <span className="text-sm font-medium text-gray-700">Java</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.DotNet />
                </div>
                <span className="text-sm font-medium text-gray-700">.NET</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.AWS />
                </div>
                <span className="text-sm font-medium text-gray-700">AWS</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.Azure />
                </div>
                <span className="text-sm font-medium text-gray-700">Azure</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.Docker />
                </div>
                <span className="text-sm font-medium text-gray-700">Docker</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.Kubernetes />
                </div>
                <span className="text-sm font-medium text-gray-700">Kubernetes</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.MongoDB />
                </div>
                <span className="text-sm font-medium text-gray-700">MongoDB</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.PostgreSQL />
                </div>
                <span className="text-sm font-medium text-gray-700">PostgreSQL</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <TechLogos.Redis />
                </div>
                <span className="text-sm font-medium text-gray-700">Redis</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your requirements and create a software solution that drives your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-lg hover:bg-indigo-50 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors">
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
