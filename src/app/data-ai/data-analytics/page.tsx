"use client";

import { BarChart, Database, TrendingUp, PieChart, LineChart, Target, Zap, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DataAnalytics() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <BarChart className="w-20 h-20 text-purple-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Data <span className="text-purple-400">Analytics</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Transform raw data into actionable insights with advanced analytics and business intelligence solutions
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Data Analysis
              </button>
            </div>
          </div>
        </section>

        {/* Analytics Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Analytics Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Systematic approach to transform data into business intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Data Collection</h3>
                <p className="text-gray-600">Gather data from multiple sources</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Data Cleaning</h3>
                <p className="text-gray-600">Process and clean raw data</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Analysis</h3>
                <p className="text-gray-600">Apply analytical models and techniques</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Visualization</h3>
                <p className="text-gray-600">Create interactive dashboards and reports</p>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Services */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Analytics Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive data analytics solutions for business intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <BarChart className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive BI solutions for data-driven decision making
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Executive dashboards</li>
                  <li>• KPI tracking</li>
                  <li>• Performance metrics</li>
                  <li>• Real-time reporting</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <PieChart className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Visualization</h3>
                <p className="text-gray-600 mb-4">
                  Interactive visualizations to communicate insights effectively
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Interactive dashboards</li>
                  <li>• Custom charts</li>
                  <li>• Geographic mapping</li>
                  <li>• Real-time visualizations</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <LineChart className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Forecast future trends and outcomes using statistical models
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Trend analysis</li>
                  <li>• Forecasting models</li>
                  <li>• Scenario planning</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Database className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Warehousing</h3>
                <p className="text-gray-600 mb-4">
                  Centralized data storage for efficient analytics and reporting
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Data integration</li>
                  <li>• ETL processes</li>
                  <li>• Data modeling</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Target className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Deep insights into customer behavior and preferences
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Customer segmentation</li>
                  <li>• Behavioral analysis</li>
                  <li>• Lifetime value</li>
                  <li>• Churn prediction</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <Zap className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Instant insights from streaming data and live events
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Stream processing</li>
                  <li>• Live dashboards</li>
                  <li>• Alert systems</li>
                  <li>• Event tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Tools */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Analytics Tools & Technologies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge tools we use for data analytics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">BI Platforms</h3>
                <div className="space-y-2">
                  {['Tableau', 'Power BI', 'QlikView', 'Looker'].map((tool) => (
                    <div key={tool} className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-sm text-gray-700">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Data Tools</h3>
                <div className="space-y-2">
                  {['Apache Spark', 'Hadoop', 'Kafka', 'Airflow'].map((tool) => (
                    <div key={tool} className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-sm text-gray-700">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Visualization</h3>
                <div className="space-y-2">
                  {['D3.js', 'Chart.js', 'Plotly', 'Kibana'].map((tool) => (
                    <div key={tool} className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-sm text-gray-700">{tool}</span>
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
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let our analytics experts help you transform data into actionable business insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:bg-purple-50 transition-colors">
                Get Analytics Assessment
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
                View Analytics Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
