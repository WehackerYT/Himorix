"use client";

import { BarChart, TrendingUp, PieChart, Activity, Database, Brain, Users, Target, Zap, Globe, Layers, LineChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TechLogos } from '@/components/TechLogos';

export default function AnalyticsServices() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <BarChart className="w-20 h-20 text-emerald-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Data <span className="text-emerald-400">Analytics</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Transform raw data into actionable insights that drive smarter business decisions
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore Analytics
              </button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Analytics Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end data analytics solutions from collection to visualization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Interactive dashboards and reports for real-time business insights
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• KPI tracking dashboards</li>
                  <li>• Automated reporting</li>
                  <li>• Executive summaries</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Machine learning models to forecast trends and outcomes
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sales forecasting</li>
                  <li>• Customer churn prediction</li>
                  <li>• Demand planning</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Visualization</h3>
                <p className="text-gray-600 mb-4">
                  Beautiful, interactive charts and graphs for complex data sets
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Custom dashboards</li>
                  <li>• Real-time visualizations</li>
                  <li>• Interactive reports</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Engineering</h3>
                <p className="text-gray-600 mb-4">
                  Build robust data pipelines and warehousing solutions
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• ETL pipeline development</li>
                  <li>• Data warehouse design</li>
                  <li>• Data lake architecture</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Stream processing for instant data-driven decisions
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Event stream processing</li>
                  <li>• Real-time monitoring</li>
                  <li>• Anomaly detection</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Measure, analyze, and optimize your marketing performance
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Campaign performance</li>
                  <li>• Customer segmentation</li>
                  <li>• ROI analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Unlock the Power of Your Data
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Turn your data into a competitive advantage with our analytics solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 font-bold py-4 px-8 rounded-lg hover:bg-emerald-50 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
