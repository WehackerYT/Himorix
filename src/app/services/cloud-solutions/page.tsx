"use client";

import { Cloud, Server, Shield, Globe, Zap, Database, Users, Target, Wrench, Rocket, Settings, Lock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TechLogos } from '@/components/TechLogos';

export default function CloudSolutions() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-sky-900 via-blue-900 to-sky-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Cloud className="w-20 h-20 text-sky-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Cloud <span className="text-sky-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Scalable, secure, and cost-effective cloud infrastructure to power your business growth
              </p>
              <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
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
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end cloud solutions from migration to managed services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Migration</h3>
                <p className="text-gray-600 mb-4">
                  Seamless migration of your existing infrastructure to the cloud
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Infrastructure assessment</li>
                  <li>• Migration strategy & planning</li>
                  <li>• Zero-downtime migration</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Security</h3>
                <p className="text-gray-600 mb-4">
                  Enterprise-grade security for your cloud environments
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Identity & access management</li>
                  <li>• Data encryption</li>
                  <li>• Compliance monitoring</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Storage</h3>
                <p className="text-gray-600 mb-4">
                  Scalable and reliable storage solutions for all data types
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Object & block storage</li>
                  <li>• Data backup & recovery</li>
                  <li>• Content delivery networks</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Serverless Architecture</h3>
                <p className="text-gray-600 mb-4">
                  Event-driven computing without managing servers
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• AWS Lambda / Azure Functions</li>
                  <li>• Auto-scaling infrastructure</li>
                  <li>• Pay-per-use optimization</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Cloud Strategy</h3>
                <p className="text-gray-600 mb-4">
                  Leverage the best of AWS, Azure, and Google Cloud
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Multi-cloud architecture</li>
                  <li>• Vendor lock-in prevention</li>
                  <li>• Cost optimization</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">DevOps & CI/CD</h3>
                <p className="text-gray-600 mb-4">
                  Automated deployment pipelines for faster delivery
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Docker & Kubernetes</li>
                  <li>• CI/CD pipelines</li>
                  <li>• Infrastructure as Code</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Platforms */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Cloud Platforms We Work With
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Certified expertise across all major cloud providers
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
              Let us help you build a scalable, secure cloud infrastructure that grows with your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-sky-600 font-bold py-4 px-8 rounded-lg hover:bg-sky-50 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-sky-600 transition-colors">
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
