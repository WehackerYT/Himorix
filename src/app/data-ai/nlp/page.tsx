"use client";

import { MessageSquare, Brain, Globe, Bot, FileText, Users, Zap, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NLP() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <MessageSquare className="w-20 h-20 text-purple-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Natural Language <span className="text-purple-400">Processing</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Advanced NLP solutions to understand, process, and generate human language for intelligent automation
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore NLP Solutions
              </button>
            </div>
          </div>
        </section>

        {/* NLP Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our NLP Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Systematic approach to develop powerful language understanding systems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Text Preprocessing</h3>
                <p className="text-gray-600">Clean and prepare text data for analysis</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Feature Extraction</h3>
                <p className="text-gray-600">Extract meaningful features from text</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Model Training</h3>
                <p className="text-gray-600">Train NLP models with domain-specific data</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Deployment</h3>
                <p className="text-gray-600">Deploy models for real-time processing</p>
              </div>
            </div>
          </div>
        </section>

        {/* NLP Services */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                NLP Services & Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive natural language processing services for various applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <MessageSquare className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sentiment Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Analyze text to determine emotional tone and sentiment
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Customer feedback analysis</li>
                  <li>• Social media monitoring</li>
                  <li>• Brand sentiment tracking</li>
                  <li>• Review classification</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Bot className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Chatbots & Virtual Assistants</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent conversational AI for customer service and support
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Customer service bots</li>
                  <li>• Voice assistants</li>
                  <li>• FAQ automation</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <FileText className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Text Classification</h3>
                <p className="text-gray-600 mb-4">
                  Automatically categorize and organize text documents
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Document categorization</li>
                  <li>• Spam detection</li>
                  <li>• Content moderation</li>
                  <li>• Topic modeling</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Globe className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Language Translation</h3>
                <p className="text-gray-600 mb-4">
                  Automated translation between multiple languages
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Real-time translation</li>
                  <li>• Document translation</li>
                  <li>• Localization services</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Named Entity Recognition</h3>
                <p className="text-gray-600 mb-4">
                  Identify and extract entities like names, places, and organizations
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Person identification</li>
                  <li>• Location extraction</li>
                  <li>• Organization detection</li>
                  <li>• Custom entity training</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Target className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Text Summarization</h3>
                <p className="text-gray-600 mb-4">
                  Generate concise summaries of long documents and articles
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Extractive summarization</li>
                  <li>• Abstractive summarization</li>
                  <li>• Document summarization</li>
                  <li>• News summarization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* NLP Technologies */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                NLP Technologies & Frameworks
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                State-of-the-art technologies for natural language processing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Deep Learning</h3>
                <div className="space-y-2">
                  {['BERT', 'GPT', 'Transformer', 'XLNet'].map((tech) => (
                    <div key={tech} className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">NLP Libraries</h3>
                <div className="space-y-2">
                  {['NLTK', 'spaCy', 'Stanford NLP', 'OpenNLP'].map((tech) => (
                    <div key={tech} className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">ML Platforms</h3>
                <div className="space-y-2">
                  {['Hugging Face', 'Google NLP', 'Azure Cognitive', 'AWS Comprehend'].map((tech) => (
                    <div key={tech} className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Leverage NLP Technology?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let our NLP experts help you build intelligent language understanding solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:bg-purple-50 transition-colors">
                Get NLP Assessment
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
                View NLP Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
