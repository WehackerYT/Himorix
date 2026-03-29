"use client";

import { CheckCircle2, Shield, FileText, Users, Zap, Eye, Globe, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ComplianceManagement() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Compliance <span className="text-green-400">Management</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Ensure regulatory compliance with GDPR, HIPAA, SOC 2, PCI DSS and automated monitoring
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Compliance Assessment
              </button>
            </div>
          </div>
        </section>

        {/* Compliance Framework */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Compliance Framework
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Systematic approach to ensure regulatory compliance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-600">Evaluate current compliance posture</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Policy Development</h3>
                <p className="text-gray-600">Create compliance policies and procedures</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Monitoring</h3>
                <p className="text-gray-600">Continuous compliance monitoring</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Audit Support</h3>
                <p className="text-gray-600">Prepare for and support audits</p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Services */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Compliance Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive compliance management solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Globe className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">GDPR Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Ensure compliance with General Data Protection Regulation
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Data protection impact assessment</li>
                  <li>• Consent management</li>
                  <li>• Data breach notification</li>
                  <li>• Privacy by design</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">HIPAA Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Healthcare information protection and HIPAA compliance
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Protected health information</li>
                  <li>• Security safeguards</li>
                  <li>• Privacy policies</li>
                  <li>• Business associate agreements</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">SOC 2 Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Service Organization Control 2 compliance and reporting
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Security controls</li>
                  <li>• Availability controls</li>
                  <li>• Processing integrity</li>
                  <li>• Confidentiality controls</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <FileText className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">PCI DSS Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Payment Card Industry Data Security Standard compliance
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Card data protection</li>
                  <li>• Network security</li>
                  <li>• Access control</li>
                  <li>• Vulnerability management</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Zap className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">ISO 27001</h3>
                <p className="text-gray-600 mb-4">
                  Information Security Management System certification
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• ISMS implementation</li>
                  <li>• Risk assessment</li>
                  <li>• Security controls</li>
                  <li>• Continuous improvement</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Tailored compliance solutions for specific regulations
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Industry-specific compliance</li>
                  <li>• Regional regulations</li>
                  <li>• Custom frameworks</li>
                  <li>• Gap analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ensure Regulatory Compliance
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let our compliance experts ensure your business meets all regulatory requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-green-50 transition-colors">
                Get Compliance Assessment
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors">
                View Compliance Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
