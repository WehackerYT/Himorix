"use client";

import { Brain, TrendingUp, Target, Lightbulb, Zap, BarChart, Cpu, Database } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MachineLearning() {
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
                Machine <span className="text-purple-400">Learning</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Advanced machine learning solutions to transform your data into actionable insights and intelligent automation
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get ML Consultation
              </button>
            </div>
          </div>
        </section>

        {/* ML Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our ML Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end machine learning development from data collection to deployment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Data Collection</h3>
                <p className="text-gray-600">Gather and preprocess data for ML training</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Model Training</h3>
                <p className="text-gray-600">Develop and train custom ML models</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Validation</h3>
                <p className="text-gray-600">Test and optimize model performance</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Deployment</h3>
                <p className="text-gray-600">Deploy models to production environment</p>
              </div>
            </div>
          </div>
        </section>

        {/* ML Services */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                ML Services & Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive machine learning services for various business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Forecast business outcomes and trends using advanced predictive models
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sales forecasting</li>
                  <li>• Customer churn prediction</li>
                  <li>• Demand forecasting</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Brain className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Model Development</h3>
                <p className="text-gray-600 mb-4">
                  Build tailored ML models for your specific business requirements
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Deep learning models</li>
                  <li>• Neural networks</li>
                  <li>• Ensemble methods</li>
                  <li>• Transfer learning</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Lightbulb className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Recommendation Systems</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent recommendation engines for personalized user experiences
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Product recommendations</li>
                  <li>• Content personalization</li>
                  <li>• Collaborative filtering</li>
                  <li>• Behavioral analysis</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Target className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Classification Systems</h3>
                <p className="text-gray-600 mb-4">
                  Automated classification of data into predefined categories
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Image classification</li>
                  <li>• Text categorization</li>
                  <li>• Spam detection</li>
                  <li>• Sentiment analysis</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Zap className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Anomaly Detection</h3>
                <p className="text-gray-600 mb-4">
                  Identify unusual patterns and outliers in your data
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Fraud detection</li>
                  <li>• Network security</li>
                  <li>• Quality control</li>
                  <li>• System monitoring</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <BarChart className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Time Series Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Analyze temporal data patterns and forecast future trends
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Stock price prediction</li>
                  <li>• Weather forecasting</li>
                  <li>• Traffic analysis</li>
                  <li>• Economic indicators</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                ML Technologies & Frameworks
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge technologies we use for ML development
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Deep Learning</h3>
                <div className="space-y-2">
                  {['TensorFlow', 'PyTorch', 'Keras', 'MXNet'].map((tech) => (
                    <div key={tech} className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Data Science</h3>
                <div className="space-y-2">
                  {['Scikit-learn', 'Pandas', 'NumPy', 'SciPy'].map((tech) => (
                    <div key={tech} className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">ML Platforms</h3>
                <div className="space-y-2">
                  {['AWS SageMaker', 'Google ML', 'Azure ML', 'IBM Watson'].map((tech) => (
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
              Ready to Leverage Machine Learning?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let our ML experts help you transform your data into intelligent business solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:bg-purple-50 transition-colors">
                Get ML Assessment
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
                View ML Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
