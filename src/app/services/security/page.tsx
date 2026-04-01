"use client";

import { Shield, Lock, Eye, AlertTriangle, FileCheck, Server, Users, Target, Wrench, Rocket, Settings, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TechLogos } from '@/components/TechLogos';

export default function SecurityServices() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-900 via-rose-900 to-red-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Shield className="w-20 h-20 text-red-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Cyber<span className="text-red-400">security</span> Solutions
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Protect your digital assets with enterprise-grade security solutions and proactive threat management
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Security Audit
              </button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Security Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions to safeguard your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Network Security</h3>
                <p className="text-gray-600 mb-4">
                  Advanced firewall, intrusion detection, and network monitoring
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Firewall configuration</li>
                  <li>• Intrusion detection systems</li>
                  <li>• Network monitoring 24/7</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Protection</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end encryption and data loss prevention strategies
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Data encryption (AES-256)</li>
                  <li>• DLP implementation</li>
                  <li>• Secure data backup</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Threat Detection</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered threat detection and real-time incident response
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• SIEM implementation</li>
                  <li>• Threat intelligence</li>
                  <li>• Incident response plans</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance & Audit</h3>
                <p className="text-gray-600 mb-4">
                  Regulatory compliance and security audit services
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• GDPR, HIPAA, SOC2</li>
                  <li>• Security audits</li>
                  <li>• Vulnerability assessments</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Penetration Testing</h3>
                <p className="text-gray-600 mb-4">
                  Ethical hacking to identify vulnerabilities before attackers do
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Web application testing</li>
                  <li>• Mobile app security</li>
                  <li>• API security testing</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Security</h3>
                <p className="text-gray-600 mb-4">
                  Secure your cloud infrastructure across AWS, Azure, and GCP
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cloud security posture</li>
                  <li>• Container security</li>
                  <li>• Identity management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-rose-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Don't wait for a breach. Get a comprehensive security assessment and protect your digital assets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-red-50 transition-colors">
                Free Security Audit
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-red-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
