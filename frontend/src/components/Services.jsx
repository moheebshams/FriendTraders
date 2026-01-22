import React, { useState } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Import & Export",
      description: "Global trade solutions with seamless customs clearance and reliable international logistics management.",
      icon: "✈️",
      color: "blue",
      stats: "100% Customs Clearance"
    },
    {
      id: 2,
      title: "Logistics & Transportation",
      description: "Safe and timely cargo transportation with real-time tracking across Pakistan's extensive network.",
      icon: "🚚",
      color: "green",
      stats: "98% On-time Delivery"
    },
    {
      id: 3,
      title: "Building Materials",
      description: "Premium construction materials including cement, steel, and aggregates with competitive bulk pricing.",
      icon: "🏗️",
      color: "amber",
      stats: "100% Quality Assurance"
    },
    {
      id: 4,
      title: "Japanese Automobiles",
      description: "Authentic Japanese vehicle imports with full compliance documentation and seamless delivery services.",
      icon: "🚗",
      color: "purple",
      stats: "100% Authenticity"
    }
  ];

  const keyFeatures = [
    {
      icon: "🌍",
      title: "Global Network",
      description: "Access to extensive trade networks across Asia, Middle East, and Europe.",
      color: "blue"
    },
    {
      icon: "📦",
      title: "End-to-End Service",
      description: "Complete logistics solutions from sourcing to final delivery.",
      color: "green"
    },
    {
      icon: "🛡️",
      title: "Certified & Licensed",
      description: "RCCI certified with full compliance to international trade regulations.",
      color: "amber"
    }
  ];

  // Color mapping to avoid dynamic classes
  const colorMap = {
    blue: {
      border: 'border-blue-500',
      text: 'text-blue-600',
      bg: 'bg-blue-500',
      bgLight: 'bg-blue-400',
      bgGradient: 'from-blue-500 to-blue-700',
      lightGradient: 'from-blue-400 to-blue-600',
      bg50: 'bg-blue-50',
      bg100: 'bg-blue-100',
      via: 'via-blue-500'
    },
    green: {
      border: 'border-green-500',
      text: 'text-green-600',
      bg: 'bg-green-500',
      bgLight: 'bg-green-400',
      bgGradient: 'from-green-500 to-green-700',
      lightGradient: 'from-green-400 to-green-600',
      bg50: 'bg-green-50',
      bg100: 'bg-green-100',
      via: 'via-green-500'
    },
    amber: {
      border: 'border-amber-500',
      text: 'text-amber-600',
      bg: 'bg-amber-500',
      bgLight: 'bg-amber-400',
      bgGradient: 'from-amber-500 to-orange-500',
      lightGradient: 'from-amber-400 to-orange-400',
      bg50: 'bg-amber-50',
      bg100: 'bg-amber-100',
      via: 'via-amber-500'
    },
    purple: {
      border: 'border-purple-500',
      text: 'text-purple-600',
      bg: 'bg-purple-500',
      bgLight: 'bg-purple-400',
      bgGradient: 'from-purple-500 to-purple-700',
      lightGradient: 'from-purple-400 to-purple-600',
      bg50: 'bg-purple-50',
      bg100: 'bg-purple-100',
      via: 'via-purple-500'
    }
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-blue-200">
            <span className="mr-1.5 sm:mr-2">⚙️</span>
            Our Expertise
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
            Comprehensive <span className="text-blue-600">Trade Solutions</span>
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0">
            End-to-end import, export, and logistics services designed to streamline your global trade operations.
          </p>
        </div>

        {/* Services Grid - Responsive with all animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {services.map((service) => {
            const isHovered = hoveredService === service.id;
            const colors = colorMap[service.color];
            
            return (
              <div 
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onTouchStart={() => setHoveredService(service.id)}
                onTouchEnd={() => setHoveredService(null)}
                className="group relative bg-white rounded-xl p-4 sm:p-5 md:p-6 flex flex-col items-center text-center border border-gray-200 transition-all duration-500 hover:shadow-2xl active:scale-[0.98] touch-manipulation min-h-[300px] sm:min-h-[320px]"
              >
                {/* Animated Border Container */}
                <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                  {/* Animated Top Border */}
                  <div 
                    className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${colors.via} to-transparent transform transition-all duration-500 ease-out ${
                      isHovered 
                        ? 'translate-x-0 opacity-100' 
                        : '-translate-x-full opacity-0'
                    }`}
                    style={{ animationDelay: '0ms' }}
                  />
                  
                  {/* Animated Right Border */}
                  <div 
                    className={`absolute top-0 right-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent ${colors.via} to-transparent transform transition-all duration-500 ease-out ${
                      isHovered 
                        ? 'translate-y-0 opacity-100' 
                        : '-translate-y-full opacity-0'
                    }`}
                    style={{ animationDelay: '150ms' }}
                  />
                  
                  {/* Animated Bottom Border */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${colors.via} to-transparent transform transition-all duration-500 ease-out ${
                      isHovered 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-full opacity-0'
                    }`}
                    style={{ animationDelay: '300ms' }}
                  />
                  
                  {/* Animated Left Border */}
                  <div 
                    className={`absolute top-0 left-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent ${colors.via} to-transparent transform transition-all duration-500 ease-out ${
                      isHovered 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-full opacity-0'
                    }`}
                    style={{ animationDelay: '450ms' }}
                  />
                  
                  {/* Corner Dots - Hidden on mobile for performance */}
                  <div className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${colors.bg} transition-all duration-300 ${
                    isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  } hidden sm:block`} style={{ transitionDelay: '0ms' }} />
                  
                  <div className={`absolute top-2 left-2 w-1.5 h-1.5 rounded-full ${colors.bg} transition-all duration-300 ${
                    isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  } hidden sm:block`} style={{ transitionDelay: '100ms' }} />
                  
                  <div className={`absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full ${colors.bg} transition-all duration-300 ${
                    isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  } hidden sm:block`} style={{ transitionDelay: '200ms' }} />
                  
                  <div className={`absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full ${colors.bg} transition-all duration-300 ${
                    isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  } hidden sm:block`} style={{ transitionDelay: '300ms' }} />
                </div>
                
                {/* Icon with enhanced hover effect */}
                <div className={`relative mb-3 sm:mb-4 p-3 sm:p-4 rounded-lg bg-gradient-to-br ${colors.bgGradient} text-white text-2xl sm:text-3xl transform transition-all duration-500 ${
                  isHovered ? 'scale-110 rotate-3' : 'group-hover:scale-105'
                }`}>
                  {service.icon}
                  {/* Glow effect - reduced on mobile */}
                  <div className={`absolute inset-0 rounded-lg ${colors.bg}/20 blur-lg sm:blur-xl transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
                
                {/* Title */}
                <h3 className={`text-lg sm:text-xl font-bold ${colors.text} mb-2 sm:mb-3 transition-colors duration-300`}>
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 flex-grow leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                  {service.description}
                </p>
                
                {/* Stats with animated bar */}
                <div className="w-full mt-auto">
                  <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-1.5 sm:mb-2">
                    <span>{service.stats.split(' ')[0]}</span>
                    <span>{service.stats.split(' ').slice(1).join(' ')}</span>
                  </div>
                  
                  <div className="relative w-full bg-gray-200 rounded-full h-1.5 sm:h-2 overflow-hidden">
                    {/* Animated progress bar */}
                    <div 
                      className={`absolute h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${colors.lightGradient} transition-all duration-1000 ease-out ${
                        isHovered ? 'w-full' : service.stats.includes('100%') ? 'w-full' : 'w-0'
                      }`}
                      style={{ 
                        transitionDelay: '200ms',
                        width: isHovered || service.stats.includes('100%') ? '100%' : '98%'
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Features - Responsive */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {keyFeatures.map((feature, index) => {
              const colors = colorMap[feature.color];
              
              return (
                <div 
                  key={index}
                  className="group relative bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-gray-200 transition-all duration-500 hover:shadow-lg overflow-hidden active:scale-[0.98] touch-manipulation"
                >
                  {/* Animated background */}
                  <div className={`absolute inset-0 ${colors.bg50} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className={`${colors.bg100} p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4 transition-all duration-300 group-hover:scale-110`}>
                        <span className={`${colors.text} text-lg sm:text-xl`}>{feature.icon}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{feature.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="hidden text-center">
          <div className="inline-block bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              Ready to streamline your trade operations?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Get a customized solution tailored to your business needs.
            </p>
            <button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base transition-all duration-200 active:scale-95 touch-manipulation min-h-[44px]">
              Get Free Consultation
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;