"use client";

import { Eye, Camera, Target, Zap, Shield, Users, Brain, BarChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ComputerVision() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Eye className="w-20 h-20 text-purple-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Computer <span className="text-purple-400">Vision</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Advanced computer vision solutions to analyze, interpret, and extract insights from visual data
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore Vision Solutions
              </button>
            </div>
          </div>
        </section>

        {/* Vision Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Vision Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Systematic approach to develop powerful computer vision systems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Image Acquisition</h3>
                <p className="text-gray-600">Collect and preprocess visual data</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Feature Extraction</h3>
                <p className="text-gray-600">Extract visual features and patterns</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Model Training</h3>
                <p className="text-gray-600">Train vision models with labeled data</p>
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

        {/* Vision Services */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Vision Services & Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive computer vision services for various applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Target className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Object Detection</h3>
                <p className="text-gray-600 mb-4">
                  Identify and locate objects within images and videos
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Real-time detection</li>
                  <li>• Multiple object tracking</li>
                  <li>• Custom object training</li>
                  <li>• Video analysis</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Facial Recognition</h3>
                <p className="text-gray-600 mb-4">
                  Advanced facial detection and recognition systems
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Face detection</li>
                  <li>• Identity verification</li>
                  <li>• Emotion recognition</li>
                  <li>• Age/gender detection</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Eye className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Image Classification</h3>
                <p className="text-gray-600 mb-4">
                  Categorize images into predefined classes
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Multi-class classification</li>
                  <li>• Fine-grained classification</li>
                  <li>• Custom category training</li>
                  <li>• Confidence scoring</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Camera className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Video Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Analyze video content for insights and automation
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Motion detection</li>
                  <li>• Activity recognition</li>
                  <li>• Crowd analysis</li>
                  <li>• Surveillance systems</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Shield className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Control</h3>
                <p className="text-gray-600 mb-4">
                  Automated visual inspection for manufacturing
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Defect detection</li>
                  <li>• Quality assurance</li>
                  <li>• Product inspection</li>
                  <li>• Process monitoring</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <BarChart className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Extract insights from visual data patterns
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Pattern recognition</li>
                  <li>• Trend analysis</li>
                  <li>• Statistical modeling</li>
                  <li>• Predictive analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Technologies */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Vision Technologies & Frameworks
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge technologies for computer vision development
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Deep Learning</h3>
                <div className="space-y-2">
                  {['YOLO', 'R-CNN', 'SSD', 'ResNet'].map((tech) => (
                    <div key={tech} className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Vision Libraries</h3>
                <div className="space-y-2">
                  {['OpenCV', 'TensorFlow Vision', 'PyTorch Vision', 'MediaPipe'].map((tech) => (
                    <div key={tech} className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Platforms</h3>
                <div className="space-y-2">
                  {['AWS Rekognition', 'Google Vision', 'Azure Vision', 'IBM Vision'].map((tech) => (
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
              Ready to Leverage Computer Vision?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let our vision experts help you build intelligent visual analysis solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:bg-purple-50 transition-colors">
                Get Vision Assessment
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
                View Vision Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
