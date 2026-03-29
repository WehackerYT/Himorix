"use client";

import { Brain, BarChart, Database, Cpu, TrendingUp, Target, Lightbulb, Bot, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DataAI() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Brain className="w-20 h-20 text-purple-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Data & <span className="text-purple-400">AI</span> Solutions
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Harness the power of artificial intelligence and data analytics to transform your business
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore AI Solutions
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our AI & Data Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge AI and data solutions to drive business intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Bot className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Machine Learning</h3>
                <p className="text-gray-600 mb-4">
                  Custom ML models to automate processes and predict outcomes
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Predictive analytics</li>
                  <li>• Classification models</li>
                  <li>• Regression analysis</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <BarChart className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Transform raw data into actionable business insights
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Business intelligence</li>
                  <li>• Data visualization</li>
                  <li>• Real-time dashboards</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Database className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Big Data Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Process and analyze massive datasets efficiently
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Distributed computing</li>
                  <li>• Stream processing</li>
                  <li>• Data warehousing</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Brain className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Natural Language Processing</h3>
                <p className="text-gray-600 mb-4">
                  Advanced NLP solutions for text and speech processing
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sentiment analysis</li>
                  <li>• Language translation</li>
                  <li>• Chatbot development</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Cpu className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Learning</h3>
                <p className="text-gray-600 mb-4">
                  Neural network solutions for complex pattern recognition
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Computer vision</li>
                  <li>• Image recognition</li>
                  <li>• Neural networks</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Target className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Strategy Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Strategic guidance for AI implementation and adoption
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• AI roadmap planning</li>
                  <li>• Technology assessment</li>
                  <li>• Change management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Transform Your Business with AI
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage artificial intelligence to gain competitive advantage
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Smarter Decisions</h3>
                <p className="text-gray-600">Data-driven insights for better business outcomes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Automation</h3>
                <p className="text-gray-600">Automate repetitive tasks and improve efficiency</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600">Forecast trends and anticipate customer needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Cutting-edge AI solutions for competitive edge</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let our AI experts help you transform your data into competitive advantage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:bg-purple-50 transition-colors">
                Get AI Consultation
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
                View AI Projects
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
