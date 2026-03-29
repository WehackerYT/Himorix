import { Building, Mail, Phone, MapPin, Globe, Users, Target, Award, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutCompany() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="pt-[140px]">
        <div className="px-4 max-w-6xl mx-auto">
          
        {/* Company Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-3xl">H</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">Himorix</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Innovative Technology Solutions for a Digital Future</p>
        </div>

        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-pink-400">About Us</h2>
            <p className="text-gray-600 mb-4">
              Himorix is a leading technology company specializing in custom software development, 
              cloud solutions, and digital transformation. We help businesses leverage cutting-edge 
              technology to achieve their goals and stay competitive in the digital age.
            </p>
            <p className="text-gray-600 mb-4">
              Founded with a vision to bridge the gap between business needs and technology solutions, 
              we have successfully delivered over 500 projects for clients across various industries 
              worldwide.
            </p>
            <p className="text-gray-600">
              Our team of expert developers, designers, and consultants work closely with clients 
              to understand their unique challenges and deliver tailored solutions that drive growth 
              and efficiency.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-pink-400">Our Mission</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Innovation-Driven</h3>
                  <p className="text-gray-600">Pushing boundaries with cutting-edge technology solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Client-Centric</h3>
                  <p className="text-gray-600">Putting our clients' success at the heart of everything we do</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Quality Excellence</h3>
                  <p className="text-gray-600">Delivering exceptional quality in every project we undertake</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-pink-400 mb-2">500+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-pink-400 mb-2">200+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="text-center p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-pink-400 mb-2">8+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-pink-400">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Custom Software</h3>
              <p className="text-gray-600">Tailored solutions built to meet your specific business requirements</p>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
              <p className="text-gray-600">Scalable cloud infrastructure and migration services</p>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
              <p className="text-gray-600">Comprehensive digital strategies to modernize your business</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center p-8 bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-800/30 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <div className="flex flex-wrap justify-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-pink-400" />
              <span>info@himorix.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-pink-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-pink-400" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-pink-400" />
              <span>www.himorix.com</span>
            </div>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
