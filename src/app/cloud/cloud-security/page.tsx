"use client";

import { Shield, Lock, Eye, AlertTriangle, CheckCircle2, Zap, Globe, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CloudSecurity() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Shield className="w-20 h-20 text-blue-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Cloud <span className="text-blue-400">Security</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Enterprise-grade cloud security solutions to protect your infrastructure and data from advanced threats
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Security Assessment
              </button>
            </div>
          </div>
        </section>

        {/* Security Framework */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Security Framework
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multi-layered security approach ensuring comprehensive protection
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Identity & Access</h3>
                <p className="text-gray-600">Advanced IAM with multi-factor authentication</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Threat Detection</h3>
                <p className="text-gray-600">Real-time monitoring and AI-powered threat analysis</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Data Protection</h3>
                <p className="text-gray-600">End-to-end encryption and data loss prevention</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance</h3>
                <p className="text-gray-600">Regulatory compliance and audit management</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Services */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Security Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security solutions for complete cloud protection
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Lock className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Identity Management</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive identity and access management with zero-trust architecture
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Single Sign-On (SSO)</li>
                  <li>• Multi-Factor Authentication</li>
                  <li>• Role-Based Access Control</li>
                  <li>• Privileged Access Management</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Eye className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Threat Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Advanced threat detection with AI-powered security analytics
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Real-time threat monitoring</li>
                  <li>• Behavioral analysis</li>
                  <li>• Anomaly detection</li>
                  <li>• Incident response automation</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Encryption</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end encryption with key management and secure data handling
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• AES-256 encryption</li>
                  <li>• Key rotation management</li>
                  <li>• Data masking</li>
                  <li>• Secure data transfer</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <AlertTriangle className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Vulnerability Management</h3>
                <p className="text-gray-600 mb-4">
                  Continuous vulnerability assessment and patch management
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Automated scanning</li>
                  <li>• Risk assessment</li>
                  <li>• Patch management</li>
                  <li>• Security testing</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Network Security</h3>
                <p className="text-gray-600 mb-4">
                  Advanced network protection with firewalls and intrusion detection
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Next-gen firewalls</li>
                  <li>• DDoS protection</li>
                  <li>• Network segmentation</li>
                  <li>• Traffic analysis</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <CheckCircle2 className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Management</h3>
                <p className="text-gray-600 mb-4">
                  Ensure regulatory compliance with automated compliance monitoring
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• GDPR compliance</li>
                  <li>• HIPAA compliance</li>
                  <li>• SOC 2 compliance</li>
                  <li>• PCI DSS compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security Metrics */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Security Metrics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven security performance with industry-leading metrics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">99.999%</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Security SLA</h4>
                <p className="text-gray-600">Industry-leading security guarantee</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">&lt;60s</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Threat Response</h4>
                <p className="text-gray-600">Rapid incident response time</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">24/7</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Monitoring</h4>
                <p className="text-gray-600">Continuous security surveillance</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">100%</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Compliance</h4>
                <p className="text-gray-600">Full regulatory compliance</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Secure Your Cloud Infrastructure
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our security experts protect your cloud environment with enterprise-grade solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                Get Security Assessment
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                View Security Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
