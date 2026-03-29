"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X, ChevronDown, Code, Database, Globe, Smartphone, Cloud, Shield, Cpu, Palette, BarChart, Phone, Brain, MessageSquare, Eye, Lock, Users, AlertTriangle, CheckCircle2, Award } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const servicesMenu = [
    {
      title: "Custom Software Development",
      icon: Code,
      description: "Tailored solutions for your business needs",
      href: "/services/custom-software"
    },
    {
      title: "Web Application Development",
      icon: Globe,
      description: "Modern, responsive web applications",
      href: "/services/web-development"
    },
    {
      title: "Mobile App Development",
      icon: Smartphone,
      description: "iOS and Android native applications",
      href: "/services/mobile-apps"
    },
    {
      title: "Cloud Solutions",
      icon: Cloud,
      description: "Scalable cloud infrastructure and migration",
      href: "/services/cloud-solutions"
    },
    {
      title: "Database Solutions",
      icon: Database,
      description: "Database design and optimization",
      href: "/services/database"
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      description: "Comprehensive security solutions",
      href: "/services/security"
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      description: "User-centered design services",
      href: "/services/ui-ux"
    },
    {
      title: "Data Analytics",
      icon: BarChart,
      description: "Business intelligence and analytics",
      href: "/services/analytics"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when search is open
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSearchOpen]);

  return (
    <>
      {/* Top Bar - Above Header */}
      <div className={`flex w-full bg-black text-gray-400 text-xs font-medium transition-all duration-500 ease-in-out fixed top-0 left-0 right-0 z-[60] ${
        scrolled ? "h-0 opacity-0 overflow-hidden" : "h-[33px] opacity-100"
      } px-4 justify-center lg:justify-end items-center space-x-4 lg:space-x-6 border-b border-white/10`}>
        <div className="flex items-center space-x-2">
          <Phone className="w-3 h-3 text-pink-600" />
          <span className="text-pink-600">US</span> <span className="text-white">+1 301 563 9488</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-3 h-3 text-pink-600" />
          <span className="text-pink-600">IND</span> <span className="text-white">+91 96600 77663</span>
        </div>
        <div className="flex items-center space-x-2 border-l border-gray-600 pl-4">
          <Link
            href="/auth"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-white/10 top-0" : "bg-black"
      } ${scrolled ? "top-0" : "top-[33px]"}`}>
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative h-12 w-48 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/logo-white.png"
                    alt="Himorix Logo"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-4 text-sm font-semibold text-white" ref={dropdownRef}>
              <div 
                className="relative group cursor-pointer flex items-center hover:text-pink-500 transition-all duration-300 py-8 hover:scale-105"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Services <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-gray-900 rounded-xl shadow-xl border border-gray-700 overflow-hidden transition-all duration-300 transform ${
                  activeDropdown === "services" ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                }`}>
                  <div className="grid grid-cols-2 gap-0">
                    {servicesMenu.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="group/item p-3 hover:bg-gray-800 transition-colors border-b border-r border-white/5 last:border-b-0"
                      >
                        <div className="flex items-start gap-2">
                          <div className="w-8 h-8 bg-pink-600 rounded-md flex items-center justify-center text-white group-hover/item:bg-pink-500 transition-colors flex-shrink-0">
                            <service.icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-white text-xs mb-0.5 group-hover/item:text-pink-400 transition-colors">
                              {service.title}
                            </h4>
                            <p className="text-xs text-gray-400 leading-tight line-clamp-2 group-hover/item:text-gray-300">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div 
                className="relative group cursor-pointer flex items-center hover:text-pink-500 transition-all duration-300 py-8 hover:scale-105"
                onMouseEnter={() => setActiveDropdown("cloud")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Cloud <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                
                {/* Cloud Dropdown Menu */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-gray-900 rounded-xl shadow-xl border border-gray-700 overflow-hidden transition-all duration-300 transform ${
                  activeDropdown === "cloud" ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                }`}>
                  <div className="grid grid-cols-2 gap-0">
                    <Link
                      href="/cloud/cloud-migration"
                      className="group/item p-3 hover:bg-gray-800 transition-colors border-b border-r border-white/5 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-md flex items-center justify-center text-white group-hover/item:bg-pink-500 transition-colors flex-shrink-0">
                          <Cloud className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5 group-hover/item:text-pink-400 transition-colors">
                            Cloud Migration
                          </h4>
                          <p className="text-xs text-gray-400 leading-tight line-clamp-2 group-hover/item:text-gray-300">
                            Seamless migration with zero downtime
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/cloud/cloud-storage"
                      className="group/item p-3 hover:bg-gray-800 transition-colors border-b border-r border-white/5 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-md flex items-center justify-center text-white group-hover/item:bg-pink-500 transition-colors flex-shrink-0">
                          <Database className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5 group-hover/item:text-pink-400 transition-colors">
                            Cloud Storage
                          </h4>
                          <p className="text-xs text-gray-400 leading-tight line-clamp-2 group-hover/item:text-gray-300">
                            Scalable storage with automatic backups
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/cloud/cloud-security"
                      className="group/item p-3 hover:bg-gray-800 transition-colors border-b border-r border-white/5 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-md flex items-center justify-center text-white group-hover/item:bg-pink-500 transition-colors flex-shrink-0">
                          <Shield className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5 group-hover/item:text-pink-400 transition-colors">
                            Cloud Security
                          </h4>
                          <p className="text-xs text-gray-400 leading-tight line-clamp-2 group-hover/item:text-gray-300">
                            Enterprise-grade security solutions
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/cloud/global-cdn"
                      className="group/item p-3 hover:bg-gray-800 transition-colors border-b border-r border-white/5 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-md flex items-center justify-center text-white group-hover/item:bg-pink-500 transition-colors flex-shrink-0">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5 group-hover/item:text-pink-400 transition-colors">
                            Global CDN
                          </h4>
                          <p className="text-xs text-gray-400 leading-tight line-clamp-2 group-hover/item:text-gray-300">
                            Lightning-fast content delivery
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div 
                className="relative group cursor-pointer flex items-center hover:text-pink-500 transition-all duration-300 py-8 hover:scale-105"
                onMouseEnter={() => setActiveDropdown("data-ai")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Data & AI <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                
                {/* Data & AI Dropdown Menu */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-gray-900 rounded-xl shadow-xl border border-gray-700 overflow-hidden transition-all duration-300 transform ${
                  activeDropdown === "data-ai" ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                }`}>
                  <div className="grid grid-cols-2 gap-0">
                    <Link
                      href="/data-ai/machine-learning"
                      className="group/item p-3 hover:bg-gray-800 transition-colors border-b border-r border-white/5 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-md flex items-center justify-center text-white group-hover/item:bg-pink-500 transition-colors flex-shrink-0">
                          <Brain className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5 group-hover/item:text-pink-400 transition-colors">
                            Machine Learning
                          </h4>
                          <p className="text-xs text-gray-400 leading-tight line-clamp-2 group-hover/item:text-gray-300">
                            Custom ML models and predictive analytics
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/data-ai/data-analytics"
                      className="group/item p-3 hover:bg-gray-800 transition-colors border-b border-r border-white/5 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-md flex items-center justify-center text-white group-hover/item:bg-pink-500 transition-colors flex-shrink-0">
                          <BarChart className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5 group-hover/item:text-pink-400 transition-colors">
                            Data Analytics
                          </h4>
                          <p className="text-xs text-gray-400 leading-tight line-clamp-2 group-hover/item:text-gray-300">
                            Business intelligence and data insights
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/data-ai/nlp"
                      className="group/item p-3 hover:bg-gray-800 transition-colors border-b border-r border-white/5 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-md flex items-center justify-center text-white group-hover/item:bg-pink-500 transition-colors flex-shrink-0">
                          <MessageSquare className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5 group-hover/item:text-pink-400 transition-colors">
                            NLP
                          </h4>
                          <p className="text-xs text-gray-400 leading-tight line-clamp-2 group-hover/item:text-gray-300">
                            Natural language processing solutions
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/data-ai/computer-vision"
                      className="group/item p-3 hover:bg-gray-800 transition-colors border-b border-r border-white/5 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-md flex items-center justify-center text-white group-hover/item:bg-pink-500 transition-colors flex-shrink-0">
                          <Eye className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5 group-hover/item:text-pink-400 transition-colors">
                            Computer Vision
                          </h4>
                          <p className="text-xs text-gray-400 leading-tight line-clamp-2 group-hover/item:text-gray-300">
                            Image recognition and visual analytics
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div 
                className="relative group cursor-pointer flex items-center hover:text-pink-500 transition-all duration-300 py-8 hover:scale-105"
                onMouseEnter={() => setActiveDropdown("security")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Security <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                
                {/* Security Dropdown Menu */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-gray-900 rounded-xl shadow-xl border border-gray-700 overflow-hidden transition-all duration-300 transform ${
                  activeDropdown === "security" ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                }`}>
                  <div className="grid grid-cols-2 gap-0">
                    <Link
                      href="/security/network-security"
                      className="group/item p-3 hover:bg-gray-800 transition-colors border-b border-r border-white/5 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-md flex items-center justify-center text-white group-hover/item:bg-pink-500 transition-colors flex-shrink-0">
                          <Shield className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5 group-hover/item:text-pink-400 transition-colors">
                            Network Security
                          </h4>
                          <p className="text-xs text-gray-400 leading-tight line-clamp-2 group-hover/item:text-gray-300">
                            Advanced network protection
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/security/data-protection"
                      className="group/item p-3 hover:bg-gray-800 transition-colors border-b border-r border-white/5 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-md flex items-center justify-center text-white group-hover/item:bg-pink-500 transition-colors flex-shrink-0">
                          <Lock className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5 group-hover/item:text-pink-400 transition-colors">
                            Data Protection
                          </h4>
                          <p className="text-xs text-gray-400 leading-tight line-clamp-2 group-hover/item:text-gray-300">
                            Encryption and DLP solutions
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/security/identity-management"
                      className="group/item p-3 hover:bg-gray-800 transition-colors border-b border-r border-white/5 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-md flex items-center justify-center text-white group-hover/item:bg-pink-500 transition-colors flex-shrink-0">
                          <Users className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5 group-hover/item:text-pink-400 transition-colors">
                            Identity Management
                          </h4>
                          <p className="text-xs text-gray-400 leading-tight line-clamp-2 group-hover/item:text-gray-300">
                            IAM and access control
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/security/security-testing"
                      className="group/item p-3 hover:bg-gray-800 transition-colors border-b border-r border-white/5 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-md flex items-center justify-center text-white group-hover/item:bg-pink-500 transition-colors flex-shrink-0">
                          <AlertTriangle className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5 group-hover/item:text-pink-400 transition-colors">
                            Security Testing
                          </h4>
                          <p className="text-xs text-gray-400 leading-tight line-clamp-2 group-hover/item:text-gray-300">
                            Penetration testing & audits
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/security/compliance-management"
                      className="group/item p-3 hover:bg-gray-800 transition-colors border-b border-r border-white/5 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-md flex items-center justify-center text-white group-hover/item:bg-pink-500 transition-colors flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5 group-hover/item:text-pink-400 transition-colors">
                            Compliance Management
                          </h4>
                          <p className="text-xs text-gray-400 leading-tight line-clamp-2 group-hover/item:text-gray-300">
                            Regulatory compliance
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/security"
                      className="group/item p-3 hover:bg-gray-800 transition-colors border-b border-r border-white/5 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-md flex items-center justify-center text-white group-hover/item:bg-pink-500 transition-colors flex-shrink-0">
                          <Shield className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5 group-hover/item:text-pink-400 transition-colors">
                            Overview
                          </h4>
                          <p className="text-xs text-gray-400 leading-tight line-clamp-2 group-hover/item:text-gray-300">
                            All security services
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group cursor-pointer flex items-center hover:text-pink-500 transition-all duration-300 py-8 hover:scale-105">
                Industries <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </div>
              <Link href="#" className="hover:text-pink-500 transition-all duration-300 py-8 hover:scale-105">
                On-Demand Developer
              </Link>
              <div className="relative group cursor-pointer flex items-center hover:text-pink-500 transition-all duration-300 py-8 hover:scale-105">
                Technologies <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </div>
              <div 
                className="relative group cursor-pointer flex items-center hover:text-pink-500 transition-all duration-300 py-8 hover:scale-105"
                onMouseEnter={() => setActiveDropdown("success-stories")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Success Stories <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                
                {/* Success Stories Dropdown Menu */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[280px] bg-gray-900 rounded-xl shadow-xl border border-gray-700 overflow-hidden transition-all duration-300 transform ${
                  activeDropdown === "success-stories" ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                }`}>
                  <div className="grid grid-cols-1 gap-0">
                    <Link
                      href="/success-stories"
                      className="group/item p-3 hover:bg-gray-800 transition-colors border-b border-white/5 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-md flex items-center justify-center text-white group-hover/item:bg-pink-500 transition-colors flex-shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5 group-hover/item:text-pink-400 transition-colors">
                            Success Stories
                          </h4>
                          <p className="text-xs text-gray-400 leading-tight line-clamp-2 group-hover/item:text-gray-300">
                            Client case studies & testimonials
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              
              <button 
                className="text-white hover:text-pink-500 transition-all duration-300 hover:scale-110"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-5 h-5" />
              </button>
              <Link 
                href="/contact" 
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 text-sm"
              >
                Contact us
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-white hover:text-pink-500 transition-colors"
              >
                <Search className="w-6 h-6" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-pink-500 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="h-8 w-8" />
                ) : (
                  <Menu className="h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-800 shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="px-4 py-6 space-y-2">
              {/* Services with Submenu */}
              <div className="border-b border-gray-700">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "mobile-services" ? null : "mobile-services")}
                  className="w-full px-3 py-3 text-base font-medium text-gray-200 hover:text-pink-500 hover:bg-gray-800 rounded-md flex items-center justify-between transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "mobile-services" ? "rotate-180" : ""
                  }`} />
                </button>
                
                {/* Mobile Services Submenu */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === "mobile-services" ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="px-3 py-2 space-y-1">
                    {servicesMenu.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-start gap-3 p-3 text-sm text-gray-300 hover:text-pink-500 hover:bg-gray-800 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-8 h-8 bg-pink-100 rounded-md flex items-center justify-center text-pink-600 flex-shrink-0">
                          <service.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-200 mb-0.5">
                            {service.title}
                          </h4>
                          <p className="text-xs text-gray-400 leading-tight">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other Menu Items */}
              {['Cloud', 'Data & AI', 'Security', 'Industries', 'On-Demand Developer', 'Technologies', 'Success Stories'].map((item) => (
                <Link 
                  key={item}
                  href="#" 
                  className="block px-3 py-3 text-base font-medium text-gray-200 hover:text-pink-500 hover:bg-gray-800 rounded-md border-b border-gray-700 last:border-0 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              
              <div className="pt-6 space-y-3">
                <Link 
                  href="/auth"
                  className="block w-full text-center bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-bold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href="/contact" 
                  className="block w-full text-center bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-bold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[45] bg-black/90 backdrop-blur-sm flex flex-col" style={{ top: scrolled ? '80px' : '113px' }}>
          {/* Header remains visible above */}
          <div className="flex-1 flex flex-col items-center justify-start pt-16 px-4">
            {/* Search Input */}
            <div className="relative w-full max-w-2xl">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for services, solutions, or technologies..."
                className="w-full px-6 py-4 pr-14 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:bg-white/20 transition-all text-lg"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const query = e.currentTarget.value.trim();
                    if (query) {
                      window.location.href = `/search?q=${encodeURIComponent(query)}`;
                    }
                  }
                }}
              />
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-pink-500 hover:text-pink-400 transition-colors"
                onClick={() => {
                  const query = searchInputRef.current?.value.trim();
                  if (query) {
                    window.location.href = `/search?q=${encodeURIComponent(query)}`;
                  }
                }}
              >
                <Search className="w-6 h-6" />
              </button>
            </div>
            
            {/* Popular Searches */}
            <div className="mt-6 w-full max-w-2xl">
              <p className="text-gray-400 text-sm mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {['Custom Software', 'Mobile Apps', 'Cloud Solutions', 'Web Development', 'UI/UX Design'].map((term) => (
                  <button
                    key={term}
                    className="px-4 py-2 bg-white/10 hover:bg-pink-600 text-gray-300 hover:text-white rounded-full text-sm transition-all duration-300"
                    onClick={() => {
                      if (searchInputRef.current) {
                        searchInputRef.current.value = term;
                        searchInputRef.current.focus();
                      }
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Close Button at Bottom */}
          <div className="flex justify-center mb-20">
            <button
              className="flex items-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-medium transition-colors"
              onClick={() => setIsSearchOpen(false)}
            >
              <X className="w-5 h-5" />
              <span>Close Search</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
