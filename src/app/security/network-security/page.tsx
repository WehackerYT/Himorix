"use client";

import { Shield, Lock, Globe, Zap, Eye, AlertTriangle, CheckCircle2, Server } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NetworkSecurity() {
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
                Network <span className="text-green-400">Security</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Advanced network protection with firewalls, IDS/IPS, and comprehensive threat detection
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Network Security Assessment
              </button>
            </div>
          </div>
        </section>

        {/* Network Security Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Network Security Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive protection for your network infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Firewall Protection</h3>
                <p className="text-gray-600">Next-generation firewalls with advanced filtering</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Intrusion Detection</h3>
                <p className="text-gray-600">Real-time monitoring and threat detection</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Access</h3>
                <p className="text-gray-600">VPN and secure remote access solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">DDoS Protection</h3>
                <p className="text-gray-600">Advanced DDoS mitigation and traffic filtering</p>
              </div>
            </div>
          </div>
        </section>

        {/* Network Security Services */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Network Security Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete network security solutions for enterprise protection
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Next-Gen Firewalls</h3>
                <p className="text-gray-600 mb-4">
                  Advanced firewall solutions with application-level filtering
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Application control</li>
                  <li>• URL filtering</li>
                  <li>• Advanced threat protection</li>
                  <li>• SSL/TLS inspection</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Eye className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">IDS/IPS Systems</h3>
                <p className="text-gray-600 mb-4">
                  Intrusion detection and prevention with real-time monitoring
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Network behavior analysis</li>
                  <li>• Anomaly detection</li>
                  <li>• Automated threat response</li>
                  <li>• Log analysis</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Globe className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">VPN Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Secure remote access and site-to-site VPN connectivity
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Site-to-site VPN</li>
                  <li>• Remote access VPN</li>
                  <li>• SSL VPN</li>
                  <li>• Multi-factor authentication</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Server className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Network Segmentation</h3>
                <p className="text-gray-600 mb-4">
                  Isolate critical assets and control lateral movement
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• VLAN configuration</li>
                  <li>• Micro-segmentation</li>
                  <li>• Zero-trust architecture</li>
                  <li>• Access control lists</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Zap className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">DDoS Protection</h3>
                <p className="text-gray-600 mb-4">
                    Advanced DDoS mitigation and traffic scrubbing
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Volumetric attack protection</li>
                  <li>• Application layer protection</li>
                  <li>• Traffic scrubbing</li>
                  <li>• CDN integration</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <AlertTriangle className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Network Monitoring</h3>
                <p className="text-gray-600 mb-4">
                    24/7 network monitoring and performance analysis
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Real-time monitoring</li>
                  <li>• Performance analytics</li>
                  <li>• Traffic analysis</li>
                  <li>• Alert management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Secure Your Network Infrastructure
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let our network security experts protect your infrastructure with advanced security solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-green-50 transition-colors">
                Get Network Security Assessment
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
