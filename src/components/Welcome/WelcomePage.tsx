import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Users, 
  Shield, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Zap,
  Target,
  Award,
  MessageSquare,
  Calendar,
  FileText,
  TrendingUp,
  Lock,
  Clock,
  Eye,
  Heart,
  Lightbulb,
  Rocket,
  Sparkles,
  ChevronDown,
  Play,
  Download,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { Navbar } from '../Layout/Navbar';

export function WelcomePage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Users,
      title: 'Comprehensive Student Management',
      description: 'Track progress, manage milestones, and ensure academic success',
      color: 'from-blue-500 to-cyan-500',
      stats: '1,200+ Students Managed'
    },
    {
      icon: Shield,
      title: 'Secure Grievance System',
      description: 'Confidential and transparent resolution of academic concerns',
      color: 'from-red-500 to-pink-500',
      stats: '99.7% Resolution Rate'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Data-driven insights for improved academic outcomes',
      color: 'from-green-500 to-emerald-500',
      stats: '50+ Analytics Reports'
    },
    {
      icon: MessageSquare,
      title: 'Seamless Communication',
      description: 'Real-time collaboration between students and supervisors',
      color: 'from-purple-500 to-indigo-500',
      stats: '10,000+ Messages Daily'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Improved Success Rates',
      description: 'Universities using GTMOS see 23% higher thesis completion rates',
      metric: '+23%'
    },
    {
      icon: Clock,
      title: 'Faster Completion Times',
      description: 'Average thesis completion time reduced by 3.2 months',
      metric: '-3.2mo'
    },
    {
      icon: Star,
      title: 'Higher Satisfaction',
      description: 'Student and supervisor satisfaction scores above 4.5/5',
      metric: '4.5/5'
    },
    {
      icon: TrendingUp,
      title: 'Better Oversight',
      description: 'Administrative efficiency improved by 40%',
      metric: '+40%'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Graduate School Dean',
      university: 'University of Cape Town',
      quote: 'GTMOS has revolutionized how we manage graduate programs. The transparency and efficiency gains are remarkable.',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Research Supervisor',
      university: 'Stellenbosch University',
      quote: 'The communication tools and progress tracking have made supervision more effective than ever before.',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      role: 'PhD Student',
      university: 'University of the Witwatersrand',
      quote: 'GTMOS kept me on track throughout my thesis journey. The milestone tracking and feedback system are incredible.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">

      {/* Hero Section with 3D Elements */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-purple-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-500 rounded-full blur-xl animate-pulse delay-1500"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-2000 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Floating 3D Cards */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-float">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-1000">
              <BookOpen className="h-12 w-12 text-cyan-400 mb-2" />
              <div className="text-white text-sm font-medium">Thesis Management</div>
            </div>
          </div>
          <div className="absolute top-1/3 right-[20%] transform translate-x-1/2 -translate-y-1/2 animate-float delay-1000">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl transform -rotate-12 hover:rotate-6 transition-transform duration-1000">
              <Users className="h-12 w-12 text-purple-400 mb-2" />
              <div className="text-white text-sm font-medium">Student Oversight</div>
            </div>
          </div>
          <div className="absolute bottom-1/3 left-1/5 transform -translate-x-1/2 translate-y-1/2 animate-float delay-2000">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-1000">
              <Shield className="h-12 w-12 text-green-400 mb-2" />
              <div className="text-white text-sm font-medium">Secure Platform</div>
            </div>
          </div>
        </div>

        <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-medium">Next-Generation Academic Management</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            GTMOS
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Graduate Thesis Management &<br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Oversight System
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing graduate education with intelligent oversight, seamless communication, 
            and comprehensive analytics. Empowering universities to achieve excellence in thesis supervision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button className="group bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/60" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              <span>Powerful Features</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Everything You Need for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Academic Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GTMOS provides a comprehensive suite of tools designed to streamline thesis management, 
              enhance communication, and ensure academic success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature Cards */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group p-8 rounded-3xl border-2 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                    activeFeature === index
                      ? 'bg-white border-blue-200 shadow-2xl'
                      : 'bg-gray-50 border-gray-200 hover:bg-white hover:border-blue-100 hover:shadow-xl'
                  }`}
                  onClick={() => setActiveFeature(index)}
                  style={{
                    boxShadow: activeFeature === index ? '0 25px 60px rgba(59, 130, 246, 0.15)' : undefined
                  }}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                      <div className="text-sm font-semibold text-blue-600">{feature.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 3D Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 shadow-2xl transform perspective-1000 rotate-y-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <Users className="h-4 w-4 text-white" />
                        </div>
                        <div className="text-white font-medium">Student Dashboard</div>
                      </div>
                      <div className="bg-white/10 rounded h-2 mb-2">
                        <div className="bg-blue-500 rounded h-2 w-3/4"></div>
                      </div>
                      <div className="text-white/70 text-sm">Thesis Progress: 74%</div>
                    </div>

                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <div className="text-white font-medium">Milestone Tracking</div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>

                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-white" />
                        </div>
                        <div className="text-white font-medium">Real-time Communication</div>
                      </div>
                      <div className="text-white/70 text-sm">3 new messages</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <TrendingUp className="h-4 w-4" />
              <span>Proven Results</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Measurable Impact on
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Academic Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Universities worldwide trust GTMOS to deliver exceptional results in graduate program management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
                style={{ 
                  boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
                  transform: `perspective(1000px) rotateX(${index * 2}deg) rotateY(${index * 1}deg)`
                }}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4" />
              <span>Loved by Educators</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What Our Users
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Say About Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied educators and students who have transformed their academic journey with GTMOS.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
              >
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-200"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.university}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Rocket className="h-4 w-4" />
            <span>Ready to Transform Your Institution?</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Start Your GTMOS
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Journey Today</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join leading universities worldwide in revolutionizing graduate education. 
            Experience the power of intelligent thesis management and oversight.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="group bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3">
              <span>Get Started Free</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-semibold text-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
              <Download className="h-6 w-6" />
              <span>Download Brochure</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">30 Days</div>
              <div className="text-white">Free Trial</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-white">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-white">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold">GTMOS</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Empowering universities worldwide with intelligent thesis management and oversight solutions. 
                Building the future of graduate education.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Phone className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 GTMOS. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}