"use client";

import { Award, TrendingUp, Users, Globe, Star, CheckCircle2, ArrowRight, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SuccessStories() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Award className="w-20 h-20 text-orange-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Success <span className="text-orange-400">Stories</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Discover how we've helped businesses across industries achieve remarkable results through innovative technology solutions
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View All Case Studies
              </button>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that speak for our success and client satisfaction
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold text-orange-600 mb-2">500+</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Happy Clients</h4>
                <p className="text-gray-600">Businesses transformed globally</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold text-orange-600 mb-2">25+</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Countries</h4>
                <p className="text-gray-600">Global presence and reach</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold text-orange-600 mb-2">98%</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Client Satisfaction</h4>
                <p className="text-gray-600">Exceptional service delivery</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold text-orange-600 mb-2">50+</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Awards Won</h4>
                <p className="text-gray-600">Industry recognition</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Success Stories */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Highlighted case studies showcasing our expertise and results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Fintech
                  </span>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-white opacity-50" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Banking App Revolution</h3>
                <p className="text-gray-600 mb-4">
                  Developed a next-gen banking application serving 1M+ users with 99.9% uptime
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">1M+ Active Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">$10M+ Transaction Volume</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">99.9% Uptime</span>
                  </div>
                </div>
                <button className="text-orange-600 font-semibold flex items-center gap-2 hover:text-orange-700 transition-colors">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Healthcare
                  </span>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white opacity-50" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Platform Transformation</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered healthcare platform serving 50+ hospitals with improved patient care
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">50+ Hospitals Connected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">40% Faster Diagnosis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">HIPAA Compliant</span>
                  </div>
                </div>
                <button className="text-orange-600 font-semibold flex items-center gap-2 hover:text-orange-700 transition-colors">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                    E-commerce
                  </span>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-white opacity-50" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce Excellence</h3>
                <p className="text-gray-600 mb-4">
                  Scalable e-commerce platform handling $10M+ GMV with advanced analytics
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">$10M+ GMV</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">60% Conversion Increase</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">100K+ Daily Orders</span>
                  </div>
                </div>
                <button className="text-orange-600 font-semibold flex items-center gap-2 hover:text-orange-700 transition-colors">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Education
                  </span>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="w-16 h-16 text-white opacity-50" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">EdTech Innovation</h3>
                <p className="text-gray-600 mb-4">
                  Interactive learning platform serving 500K+ students with AI-powered personalization
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">500K+ Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">85% Completion Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">AI-Powered Learning</span>
                  </div>
                </div>
                <button className="text-orange-600 font-semibold flex items-center gap-2 hover:text-orange-700 transition-colors">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Manufacturing
                  </span>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Target className="w-16 h-16 text-white opacity-50" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Manufacturing</h3>
                <p className="text-gray-600 mb-4">
                  IoT-powered manufacturing solution reducing downtime by 45% and increasing efficiency
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">45% Downtime Reduction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">30% Efficiency Increase</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Real-time Monitoring</span>
                  </div>
                </div>
                <button className="text-orange-600 font-semibold flex items-center gap-2 hover:text-orange-700 transition-colors">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Logistics
                  </span>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-600 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-white opacity-50" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Logistics Optimization</h3>
                <p className="text-gray-600 mb-4">
                  AI-driven logistics platform reducing delivery time by 35% and costs by 25%
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">35% Faster Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">25% Cost Reduction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">100+ Cities Covered</span>
                  </div>
                </div>
                <button className="text-orange-600 font-semibold flex items-center gap-2 hover:text-orange-700 transition-colors">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Client Testimonials
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                What our clients say about working with us
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Himorix transformed our business with their innovative solutions. Their team's expertise and dedication helped us achieve our goals faster than we ever imagined."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Rajesh Kumar</h4>
                    <p className="text-sm text-gray-600">CEO, TechStart Solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The team at Himorix delivered exceptional results. Their attention to detail and innovative approach helped us stay ahead of the competition."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600">CTO, Global Finance Corp</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Working with Himorix was a game-changer for our company. Their solutions not only met our requirements but exceeded our expectations."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Michael Chen</h4>
                    <p className="text-sm text-gray-600">Director, Healthcare Plus</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The AI solutions developed by Himorix revolutionized our operations. We've seen a 300% increase in efficiency and customer satisfaction."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Emily Rodriguez</h4>
                    <p className="text-sm text-gray-600">VP Operations, RetailMax</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Himorix's cloud migration services were exceptional. They handled our complex infrastructure with zero downtime and complete data security."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">David Park</h4>
                    <p className="text-sm text-gray-600">CIO, DataFlow Systems</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The mobile app developed by Himorix has transformed how we engage with our customers. We've seen a 200% increase in user engagement."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Lisa Thompson</h4>
                    <p className="text-sm text-gray-600">Marketing Director, ConnectHub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Success */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Success Across Industries
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven track record across diverse sectors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fintech</h3>
                <p className="text-gray-600">25+ successful projects</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Healthcare</h3>
                <p className="text-gray-600">30+ healthcare solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">E-commerce</h3>
                <p className="text-gray-600">40+ retail platforms</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600">50+ enterprise solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Join our growing list of successful clients and let us help you achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 font-bold py-4 px-8 rounded-lg hover:bg-orange-50 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-orange-600 transition-colors">
                View More Stories
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
