import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Building, 
  Globe, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  TrendingUp,
  User,
  Gavel,
  Briefcase,
  Laptop,
  Wrench
} from 'lucide-react';

// Import images
import ceoImage from '../assets/images/ceo.webp';
import jaffarImage from '../assets/images/team/jaffar.webp';
import advImage from '../assets/images/team/adv.webp';
import rashidImage from '../assets/images/team/rashid.webp';
import iyyazImage from '../assets/images/team/iyyaz.webp';
import sheryarImage from '../assets/images/team/sheryar.webp';
import ahmedImage from '../assets/images/team/ahmed.webp';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary overflow-hidden">
        {/* Background Pattern - Responsive sizing */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-white blur-xl sm:blur-2xl md:blur-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-accent blur-xl sm:blur-2xl md:blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className={`text-center text-white transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {/* Badge - Responsive */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 sm:mb-8">
              <Building className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-semibold">Our Legacy</span>
            </div>

            {/* Main Heading - Fluid typography */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              About
              <span className="block text-white mt-1 sm:mt-2">
                Friend<span className="text-accent">Traders</span>
              </span>
            </h1>

            {/* Breadcrumb - Responsive */}
            <nav aria-label="Breadcrumb" className="flex justify-center items-center mb-6 sm:mb-8">
              <ol className="flex items-center space-x-2 sm:space-x-3 text-white/90">
                <li>
                  <Link
                    to="/"
                    className="group flex items-center gap-1.5 sm:gap-2 hover:text-white transition-colors duration-300 font-medium text-sm sm:text-base"
                  >
                    <Home className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span>Home</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mx-1.5 sm:mx-2 text-white/60 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                </li>
                <li className="text-white font-semibold flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                  <span>About</span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse flex-shrink-0" />
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Bottom Gradient Fade - Responsive */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-t from-white via-transparent to-transparent" />
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">

          {/* Company Overview */}
          <div className="relative bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-lg sm:shadow-xl border border-gray-200">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-sm border border-primary/20">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Global Trade Leadership</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Pioneering
                <span className="text-primary block mt-1 sm:mt-2">Trade Excellence</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg">
                <span className="font-bold text-gray-900">Friend Traders</span> stands as a premier force in international trade, 
                specializing in seamless import, export, and logistics solutions that bridge 
                <span className="font-semibold text-primary"> Asia, Pakistan, and Japan</span> through reliable, efficient trade networks.
              </p>

              <div className="relative pl-4 sm:pl-6 border-l-2 sm:border-l-3 border-primary my-4 sm:my-6">
                <div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full" />
                <p className="text-sm sm:text-base md:text-lg">
                  We deliver comprehensive services — from strategic sourcing and quality inspections 
                  to expert customs clearance and <span className="font-semibold text-accent">guaranteed timely delivery</span> — 
                  ensuring operational excellence at every supply chain stage.
                </p>
              </div>

              <p className="text-sm sm:text-base md:text-lg">
                With decades of industry expertise and an extensive regional network, we empower businesses 
                to expand into new markets, optimize supply chains, and achieve sustainable growth with confidence.
              </p>
            </div>

            {/* Core Values - Responsive grid */}
            <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 md:pt-12 border-t border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { icon: Globe, title: "Global Network", description: "Connecting markets across continents", color: "blue", bg: "bg-blue-500", text: "text-blue-600" },
                  { icon: Shield, title: "Quality Assured", description: "Premium goods and reliable service", color: "green", bg: "bg-green-500", text: "text-green-600" },
                  { icon: Clock, title: "Timely Delivery", description: "Efficient logistics and supply chain", color: "amber", bg: "bg-amber-500", text: "text-amber-600" }
                ].map((value, index) => (
                  <div 
                    key={index}
                    className="group bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-md active:scale-[0.98] touch-manipulation"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`p-2 sm:p-3 rounded-lg ${value.text}/10 flex-shrink-0`}>
                        <value.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${value.text}`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2">{value.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="space-y-12 sm:space-y-16">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-sm border border-primary/20">
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Our Leadership</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Visionary
                <span className="text-primary block mt-1 sm:mt-2">Leadership Team</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0">
                Experienced leaders driving global trade excellence and business growth
              </p>
            </div>

            {/* Founder Card */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg sm:shadow-xl border border-gray-200">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 sm:duration-700" />
                <img 
                  src={ceoImage} 
                  alt="Muhammad Rafique Khan - Founder & Chairman" 
                  loading="lazy"
                  decoding="async"
                  className="relative rounded-xl sm:rounded-2xl w-full aspect-square object-cover shadow-lg group-hover:shadow-xl transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-primary to-primary/90 text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base">
                  Founder
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1.5 sm:mb-2">Muhammad Rafique Khan</h3>
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 rounded-full mb-3 sm:mb-4">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    <span className="font-semibold text-primary text-sm sm:text-base">Founder & Chairman</span>
                  </div>
                  <div className="w-12 sm:w-16 h-1 bg-primary rounded-full"></div>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  The visionary leader behind Friend Traders, Muhammad Rafique Khan has built a reputation for excellence in 
                  global trade. With extensive experience in logistics and commerce, he ensures smooth and efficient 
                  cross-border trade operations between Asia, Pakistan, and Japan.
                </p>
                
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Industry Expert</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span>Global Network</span>
                  </div>
                </div>
              </div>
            </div>

            {/* COO Card */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg sm:shadow-xl border border-gray-200">
              <div className="lg:order-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-400/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 sm:duration-700" />
                <img 
                  src={jaffarImage} 
                  alt="Jaffar Hussain Shah - Director & COO" 
                  loading="lazy"
                  decoding="async"
                  className="relative rounded-xl sm:rounded-2xl w-full aspect-square object-cover shadow-lg group-hover:shadow-xl transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-accent to-accent/90 text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base">
                  Operations
                </div>
              </div>
              
              <div className="lg:order-1 space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1.5 sm:mb-2">Jaffar Hussain Shah</h3>
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-accent/10 rounded-full mb-3 sm:mb-4">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                    <span className="font-semibold text-accent text-sm sm:text-base">Director & Chief Operating Officer</span>
                  </div>
                  <div className="w-12 sm:w-16 h-1 bg-accent rounded-full"></div>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  As COO, Jaffar Shah plays a crucial role in managing operations and optimizing supply chains. His extensive 
                  expertise in logistics and commerce ensures seamless import and export processes while maintaining the 
                  company's commitment to reliable, cost-effective solutions.
                </p>
                
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Operations Expert</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span>Growth Strategist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Team Section */}
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-accent/10 to-accent/5 text-accent rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-sm border border-accent/20">
                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Expert Team</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Our
                <span className="text-accent block mt-1 sm:mt-2">Specialist Team</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0">
                Dedicated professionals ensuring your trade success across all operations
              </p>
            </div>

            {/* Expert Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  image: advImage,
                  name: "Adv. Malik Sajid Hussain",
                  role: "Legal Advisor",
                  icon: Gavel,
                  description: "Specializing in corporate law, trade regulations, and international business compliance.",
                  color: "blue",
                  bg: "bg-blue-500",
                  text: "text-blue-600"
                },
                {
                  image: rashidImage,
                  name: "Rashid Shah",
                  role: "Regional Manager, Pakistan",
                  icon: Briefcase,
                  description: "Expert in trade operations with focus on South Asian market and cross-border transactions.",
                  color: "green",
                  bg: "bg-green-500",
                  text: "text-green-600"
                },
                {
                  image: iyyazImage,
                  name: "Muhammad Iyyaz Khan",
                  role: "Regional Manager, UK",
                  icon: Globe,
                  description: "Oversees UK operations with expertise in logistics and strategic market expansion.",
                  color: "purple",
                  bg: "bg-purple-500",
                  text: "text-purple-600"
                },
                {
                  image: sheryarImage,
                  name: "Muhammad Sheryar Khan",
                  role: "Chief Technical Officer",
                  icon: Laptop,
                  description: "Leading digital transformation and technology-driven solutions for trade operations.",
                  color: "blue",
                  bg: "bg-blue-500",
                  text: "text-blue-600"
                },
                {
                  image: ahmedImage,
                  name: "Muhammad Ahmed",
                  role: "Technical Advisor",
                  icon: Wrench,
                  description: "Specializing in logistics technology and operational efficiency solutions.",
                  color: "green",
                  bg: "bg-green-500",
                  text: "text-green-600"
                }
              ].map((expert, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg border border-gray-200 hover:border-primary/30 transition-all duration-300 active:scale-[0.98] touch-manipulation"
                >
                  <div className="relative mb-4 sm:mb-6">
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      loading="lazy"
                      decoding="async"
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto rounded-lg sm:rounded-xl object-cover border-2 sm:border-3 md:border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                    />
                    <div className={`absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 ${expert.bg} rounded-full flex items-center justify-center border-2 sm:border-3 md:border-4 border-white shadow-lg`}>
                      <expert.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">{expert.name}</h4>
                    <div className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 ${expert.text}/10 rounded-full mb-3 sm:mb-4`}>
                      <span className={`text-xs sm:text-sm font-semibold ${expert.text}`}>{expert.role}</span>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                      {expert.description}
                    </p>
                    
                    <div className="pt-3 sm:pt-4 border-t border-gray-100">
                      <div className={`w-full h-1 ${expert.text}/20 rounded-full overflow-hidden`}>
                        <div className={`w-0 h-full ${expert.bg} group-hover:w-full transition-all duration-700`} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;