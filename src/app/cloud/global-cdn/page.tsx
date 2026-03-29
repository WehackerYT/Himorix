"use client";

import { Globe, Zap, Server, Clock, BarChart, Shield, Users, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GlobalCDN() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Globe className="w-20 h-20 text-blue-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Global <span className="text-blue-400">CDN</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Lightning-fast content delivery with global edge locations and auto-scaling bandwidth
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Optimize Your Content
              </button>
            </div>
          </div>
        </section>

        {/* CDN Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                CDN Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced content delivery capabilities for optimal performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Sub-second content delivery worldwide</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-600">200+ edge locations across 100+ countries</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Auto-Scaling</h3>
                <p className="text-gray-600">Automatic bandwidth scaling on demand</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Real-time Analytics</h3>
                <p className="text-gray-600">Comprehensive performance monitoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* CDN Services */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                CDN Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive content delivery solutions for all your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Static Content CDN</h3>
                <p className="text-gray-600 mb-4">
                  Accelerate delivery of images, videos, CSS, JavaScript, and other static assets
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Automatic optimization</li>
                  <li>• Image compression</li>
                  <li>• Minification</li>
                  <li>• Browser caching</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Server className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dynamic Content CDN</h3>
                <p className="text-gray-600 mb-4">
                  High-performance delivery for dynamic content and API responses
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Edge caching</li>
                  <li>• API acceleration</li>
                  <li>• Load balancing</li>
                  <li>• Failover protection</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure CDN</h3>
                <p className="text-gray-600 mb-4">
                  Enterprise-grade security with DDoS protection and SSL/TLS encryption
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• DDoS mitigation</li>
                  <li>• SSL/TLS encryption</li>
                  <li>• Web Application Firewall</li>
                  <li>• Bot management</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <BarChart className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Media Streaming</h3>
                <p className="text-gray-600 mb-4">
                  Optimized delivery for video, audio, and live streaming content
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Adaptive bitrate</li>
                  <li>• Live streaming</li>
                  <li>• Video transcoding</li>
                  <li>• DRM protection</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Enhanced performance for mobile devices and apps
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Mobile acceleration</li>
                  <li>• App content delivery</li>
                  <li>• Push notifications</li>
                  <li>• Offline caching</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Clock className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive monitoring and analytics for performance insights
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Performance metrics</li>
                  <li>• User analytics</li>
                  <li>• Error tracking</li>
                  <li>• Custom reports</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Performance Metrics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven performance improvements with measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">95%</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Cache Hit Rate</h4>
                <p className="text-gray-600">Industry-leading cache efficiency</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">&lt;50ms</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Response Time</h4>
                <p className="text-gray-600">Ultra-fast content delivery</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">200+</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Edge Locations</h4>
                <p className="text-gray-600">Global network coverage</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">99.99%</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Uptime SLA</h4>
                <p className="text-gray-600">Maximum availability guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Accelerate Your Content Delivery
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our CDN experts optimize your content delivery for maximum performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                Get CDN Assessment
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                View Performance Reports
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
