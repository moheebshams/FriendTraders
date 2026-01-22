import React, { useState } from 'react';
import { Handshake } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Marquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  // Responsive brand count - less on mobile
  const brandCount = typeof window !== 'undefined' && window.innerWidth < 640 ? 4 : 8;
  const brandIndices = Array.from({ length: brandCount }, (_, i) => i);

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-gray-200">
            <Handshake className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Trusted Partnerships
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Valued 
            <span className="text-primary block mt-1 sm:mt-2">Partners Worldwide</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
            Collaborating with industry leaders to deliver exceptional import and export solutions.
          </p>
        </div>

        {/* Marquee container */}
        <div className="relative">
          {/* Gradient overlays - responsive sizes */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-white via-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-white via-white to-transparent z-20 pointer-events-none" />
          
          {/* Marquee track */}
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div 
              className="flex gap-4 sm:gap-6 md:gap-8 py-2"
              style={{
                animation: `marquee ${brandCount * 2}s linear infinite`,
                animationPlayState: isPaused ? 'paused' : 'running',
                width: 'max-content',
                animationDuration: typeof window !== 'undefined' && window.innerWidth < 640 ? '20s' : `${brandCount * 2}s`
              }}
            >
              {/* Single set of brand cards */}
              {brandIndices.map((index) => (
                <BrandCard key={index} index={index} />
              ))}
              
              {/* Duplicate for seamless loop */}
              {brandIndices.map((index) => (
                <BrandCard key={`dup-${index}`} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <p className="text-center text-xs sm:text-sm text-gray-500">
            Touch or hover to pause
          </p>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1rem));
          }
        }
        
        @media (min-width: 640px) {
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 1.5rem));
            }
          }
        }
        
        @media (min-width: 768px) {
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 2rem));
            }
          }
        }
        
        @media (min-width: 1024px) {
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 2.5rem));
            }
          }
        }
        
        .brand-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .brand-card:hover {
          transform: translateY(-2px);
        }
        
        /* Mobile touch optimizations */
        @media (max-width: 639px) {
          .brand-card {
            min-width: 160px;
          }
        }
      `}</style>
    </section>
  );
};

const BrandCard = () => {
  return (
    <div className="brand-card flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 h-24 sm:h-28 md:h-32 lg:h-36 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 flex items-center justify-center bg-white border border-gray-200 shadow-sm hover:shadow-md relative touch-manipulation">
      {/* Logo container - just the logo */}
      <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-2">
        <img 
          src={logo} 
          alt="Partner Brand Logo" 
          className="w-full h-full object-contain max-h-10 sm:max-h-12 md:max-h-14 lg:max-h-16 opacity-80 hover:opacity-100 transition-opacity duration-300"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default Marquee;