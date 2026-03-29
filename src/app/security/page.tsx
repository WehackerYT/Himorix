"use client";

import { Shield, Lock, Eye, AlertTriangle, CheckCircle2, Users, Zap, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Security() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Shield className="w-20 h-20 text-green-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Cyber<span className="text-green-400">security</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Enterprise-grade cybersecurity solutions to protect your digital assets and ensure business continuity
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
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
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Prevention</h3>
                <p className="text-gray-600">Proactive threat prevention and risk mitigation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Detection</h3>
                <p className="text-gray-600">Real-time threat monitoring and detection</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Response</h3>
                <p className="text-gray-600">Rapid incident response and containment</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Recovery</h3>
                <p className="text-gray-600">Business continuity and disaster recovery</p>
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
                Comprehensive security solutions for complete protection
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Lock className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Network Security</h3>
                <p className="text-gray-600 mb-4">
                  Advanced network protection with firewalls, IDS/IPS, and intrusion detection
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Next-gen firewalls</li>
                  <li>• Intrusion detection systems</li>
                  <li>• Network segmentation</li>
                  <li>• VPN management</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Eye className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Threat Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Proactive threat hunting and intelligence gathering for early warning
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Threat monitoring</li>
                  <li>• Vulnerability assessment</li>
                  <li>• Security analytics</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Protection</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive data encryption and loss prevention solutions
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Data encryption</li>
                  <li>• DLP solutions</li>
                  <li>• Access control</li>
                  <li>• Data masking</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Identity Management</h3>
                <p className="text-gray-600 mb-4">
                  Advanced IAM with multi-factor authentication and SSO
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Single Sign-On</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Role-based access</li>
                  <li>• Privileged access management</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <AlertTriangle className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Security Testing</h3>
                <p className="text-gray-600 mb-4">
                  Regular security assessments and penetration testing
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Penetration testing</li>
                  <li>• Vulnerability scanning</li>
                  <li>• Security audits</li>
                  <li>• Code review</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Management</h3>
                <p className="text-gray-600 mb-4">
                  Ensure regulatory compliance with automated monitoring
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
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">99.999%</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Security SLA</h4>
                <p className="text-gray-600">Industry-leading security guarantee</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">&lt;60s</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Response Time</h4>
                <p className="text-gray-600">Rapid incident response</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">24/7</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Monitoring</h4>
                <p className="text-gray-600">Continuous security surveillance</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">100%</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Compliance</h4>
                <p className="text-gray-600">Full regulatory compliance</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Secure Your Digital Assets
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let our security experts protect your business with enterprise-grade security solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-green-50 transition-colors">
                Get Security Assessment
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors">
                View Security Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
