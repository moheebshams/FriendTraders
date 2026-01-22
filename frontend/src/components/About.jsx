import React, { useState } from 'react';
import { Building, CheckCircle } from 'lucide-react';
import aboutImage from '../assets/images/about.webp';

const About = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 lg:items-stretch">
          
          {/* Left Column - Text Content */}
          <div className="flex flex-col h-full order-2 lg:order-1">
            <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md sm:shadow-lg border border-gray-100 h-full flex flex-col hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300">
              {/* Section Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20 w-fit">
                <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Our Legacy & Vision</span>
              </div>
              
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Pioneering
                <span className="text-primary block mt-1 sm:mt-2">Global Trade Excellence</span>
              </h2>
              
              {/* Description */}
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed flex-grow">
                <p className="text-sm sm:text-base md:text-lg">
                  <span className="font-bold text-gray-900">Friend Traders</span> stands as a premier force in 
                  international trade, specializing in seamless import, export, and logistics solutions that 
                  bridge Asia and Pakistan through reliable, efficient trade networks.
                </p>

                <div className="relative pl-4 sm:pl-6 border-l-2 sm:border-l-3 border-primary my-3 sm:my-4">
                  <div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full" />
                  <p className="text-sm sm:text-base md:text-lg">
                    We deliver comprehensive services — from strategic sourcing and rigorous quality inspections 
                    to expert customs clearance and <span className="font-semibold text-accent">guaranteed timely delivery</span> — 
                    ensuring operational excellence at every supply chain stage.
                  </p>
                </div>

                <p className="text-sm sm:text-base md:text-lg">
                  With decades of industry expertise and an extensive regional network, we empower businesses 
                  to expand into new markets, optimize supply chains, and achieve sustainable growth with confidence.
                </p>
              </div>

              {/* Simple Value Indicators - Responsive layout */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 xs:gap-4 sm:gap-6">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 hover:text-primary transition-colors duration-300">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <span>RCCI Certified</span>
                  </div>
                  <div className="h-px xs:h-4 xs:w-px bg-gray-300"></div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 hover:text-accent transition-colors duration-300">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                    <span>Since 2014</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image Content */}
          <div className="flex flex-col h-full order-1 lg:order-2">
            <div className="relative h-full group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg h-full hover:shadow-lg sm:hover:shadow-xl transition-all duration-500 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-auto">
                {/* Loading placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 transition-opacity duration-500 ${
                  isImageLoaded ? 'opacity-0' : 'opacity-100'
                } z-10`} />
                
                <img 
                  src={aboutImage} 
                  alt="Friend Traders - Global Import Export Logistics Team"
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isImageLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                  } group-hover:scale-105`}
                  onLoad={() => setIsImageLoaded(true)}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Subtle Overlay - Reduced on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 sm:from-black/5 via-transparent to-transparent" />
                
                {/* Image Loading Indicator */}
                {!isImageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-8 h-8 border-2 border-gray-300 border-t-primary rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              
              {/* Decorative Corner - Hidden on mobile */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary/10 rounded-full hidden sm:block" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-accent/10 rounded-full hidden sm:block" />
            </div>
          </div>

        </div>

        {/* Additional Info Section - Mobile optimized */}
        <div className="hidden mt-8 sm:mt-12 lg:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Global Reach",
                desc: "Extensive trade networks across Asia, Middle East & Europe",
                value: "50+",
                unit: "Countries"
              },
              {
                title: "Experience",
                desc: "Decades of industry expertise and market knowledge",
                value: "10+",
                unit: "Years"
              },
              {
                title: "Reliability",
                desc: "Consistent service excellence and client satisfaction",
                value: "1000+",
                unit: "Shipments"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-4 sm:p-5 rounded-lg sm:rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{item.value}</div>
                  <div className="text-xs sm:text-sm text-gray-500 mb-2">{item.unit}</div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;