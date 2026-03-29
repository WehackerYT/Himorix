"use client";

import { Users, Shield, Lock, Key, CheckCircle2, Zap, Globe, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function IdentityManagement() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Users className="w-20 h-20 text-green-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Identity <span className="text-green-400">Management</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Advanced IAM solutions with SSO, MFA, and role-based access control for enterprise security
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get IAM Assessment
              </button>
            </div>
          </div>
        </section>

        {/* IAM Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                IAM Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive identity and access management capabilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Single Sign-On</h3>
                <p className="text-gray-600">Unified access to all applications</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-Factor Auth</h3>
                <p className="text-gray-600">Enhanced security with MFA</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Role-Based Access</h3>
                <p className="text-gray-600">Granular permission management</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Privileged Access</h3>
                <p className="text-gray-600">Secure admin and privileged accounts</p>
              </div>
            </div>
          </div>
        </section>

        {/* IAM Services */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                IAM Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete identity and access management solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Key className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Single Sign-On (SSO)</h3>
                <p className="text-gray-600 mb-4">
                  Unified authentication across all enterprise applications
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• SAML integration</li>
                  <li>• OAuth 2.0 support</li>
                  <li>• Federation services</li>
                  <li>• Seamless user experience</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Factor Authentication</h3>
                <p className="text-gray-600 mb-4">
                  Enhanced security with multiple authentication factors
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Biometric authentication</li>
                  <li>• SMS verification</li>
                  <li>• Hardware tokens</li>
                  <li>• Push notifications</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Role-Based Access Control</h3>
                <p className="text-gray-600 mb-4">
                  Granular access management based on user roles
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Role definition</li>
                  <li>• Permission assignment</li>
                  <li>• Access policies</li>
                  <li>• Dynamic provisioning</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Lock className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Privileged Access Management</h3>
                <p className="text-gray-600 mb-4">
                  Secure management of privileged accounts and access
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Privileged session management</li>
                  <li>• Just-in-time access</li>
                  <li>• Password vaulting</li>
                  <li>• Activity monitoring</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Globe className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Directory Services</h3>
                <p className="text-gray-600 mb-4">
                  Centralized user and group management
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Active Directory integration</li>
                  <li>• LDAP support</li>
                  <li>• Cloud directory services</li>
                  <li>• Synchronization</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Eye className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Access Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive monitoring and analytics of access patterns
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Access logging</li>
                  <li>• Behavior analysis</li>
                  <li>• Anomaly detection</li>
                  <li>• Compliance reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Secure Your Identity Management
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let our IAM experts implement comprehensive identity and access management solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-green-50 transition-colors">
                Get IAM Assessment
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
