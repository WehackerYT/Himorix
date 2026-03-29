"use client";

import { Lock, Database, Shield, Eye, CheckCircle2, Zap, Users, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DataProtection() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Lock className="w-20 h-20 text-green-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Data <span className="text-green-400">Protection</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Comprehensive data security solutions with encryption, loss prevention, and access control
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Data Protection Assessment
              </button>
            </div>
          </div>
        </section>

        {/* Data Protection Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Data Protection Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced data security measures to protect sensitive information
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">End-to-End Encryption</h3>
                <p className="text-gray-600">Advanced encryption for data at rest and in transit</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Data Loss Prevention</h3>
                <p className="text-gray-600">Prevent unauthorized data exfiltration</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Access Control</h3>
                <p className="text-gray-600">Granular access management and permissions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance Ready</h3>
                <p className="text-gray-600">GDPR, HIPAA, and other regulatory compliance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Protection Services */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Data Protection Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete data security solutions for enterprise protection
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Lock className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Encryption</h3>
                <p className="text-gray-600 mb-4">
                  Advanced encryption solutions for data protection
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• AES-256 encryption</li>
                  <li>• Key management</li>
                  <li>• Database encryption</li>
                  <li>• File encryption</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Loss Prevention</h3>
                <p className="text-gray-600 mb-4">
                  Prevent data breaches and unauthorized access
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Content inspection</li>
                  <li>• Policy enforcement</li>
                  <li>• Data classification</li>
                  <li>• Incident response</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Eye className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Access Management</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive access control and identity management
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Role-based access</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Privileged access management</li>
                  <li>• Single Sign-On</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Database className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Database Security</h3>
                <p className="text-gray-600 mb-4">
                  Secure databases with advanced protection measures
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Database encryption</li>
                  <li>• Activity monitoring</li>
                  <li>• SQL injection prevention</li>
                  <li>• Backup security</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <FileText className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Masking</h3>
                <p className="text-gray-600 mb-4">
                  Protect sensitive data with advanced masking techniques
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Dynamic data masking</li>
                  <li>• Tokenization</li>
                  <li>• Anonymization</li>
                  <li>• Pseudonymization</li>
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
                  <li>• PCI DSS compliance</li>
                  <li>• Audit trails</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Protect Your Sensitive Data
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let our data protection experts secure your information with enterprise-grade solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-green-50 transition-colors">
                Get Data Protection Assessment
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
