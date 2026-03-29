"use client";

import { Shield, AlertTriangle, CheckCircle2, Eye, Target, Zap, Bug, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SecurityTesting() {
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
                Security <span className="text-green-400">Testing</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Comprehensive security testing including penetration testing, vulnerability assessment, and code review
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Security Testing Assessment
              </button>
            </div>
          </div>
        </section>

        {/* Security Testing Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Security Testing Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Systematic approach to identify and fix security vulnerabilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600">Identify assets and attack surfaces</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Testing</h3>
                <p className="text-gray-600">Execute comprehensive security tests</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Analysis</h3>
                <p className="text-gray-600">Analyze findings and assess risk</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Remediation</h3>
                <p className="text-gray-600">Provide recommendations for fixes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Testing Services */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Security Testing Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security testing solutions for enterprise protection
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Target className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Penetration Testing</h3>
                <p className="text-gray-600 mb-4">
                  Simulated attacks to identify vulnerabilities in your systems
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Network penetration testing</li>
                  <li>• Web application testing</li>
                  <li>• Mobile app testing</li>
                  <li>• Social engineering</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <AlertTriangle className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Vulnerability Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive scanning and assessment of security vulnerabilities
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Automated scanning</li>
                  <li>• Manual verification</li>
                  <li>• Risk assessment</li>
                  <li>• Prioritization</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <FileText className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Code Review</h3>
                <p className="text-gray-600 mb-4">
                  In-depth security analysis of source code and applications
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Static code analysis</li>
                  <li>• Dynamic code analysis</li>
                  <li>• Security best practices</li>
                  <li>• Secure coding review</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Security Audits</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive security audits and compliance assessments
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Infrastructure audits</li>
                  <li>• Policy compliance</li>
                  <li>• Configuration review</li>
                  <li>• Gap analysis</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Zap className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Red Team Testing</h3>
                <p className="text-gray-600 mb-4">
                  Adversarial simulation to test your security defenses
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Attack simulation</li>
                  <li>• Defense testing</li>
                  <li>• Incident response</li>
                  <li>• Threat emulation</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Bug className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bug Bounty Programs</h3>
                <p className="text-gray-600 mb-4">
                  Managed bug bounty programs for continuous security testing
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Program management</li>
                  <li>• Researcher engagement</li>
                  <li>• Vulnerability triage</li>
                  <li>• Reward management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Test Your Security Posture
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let our security testing experts identify vulnerabilities before attackers do
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-green-50 transition-colors">
                Get Security Testing Assessment
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors">
                View Testing Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
