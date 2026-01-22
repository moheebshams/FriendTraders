import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroDesktop from '../assets/images/hero.webp';
import heroMobile from '../assets/images/hero-mobile.webp';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Optimized image loading
    const images = [heroDesktop, heroMobile];
    let loadedCount = 0;
    
    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          requestAnimationFrame(() => setIsLoaded(true));
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          requestAnimationFrame(() => setIsLoaded(true));
        }
      };
    });
    
    const timeout = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const benefits = [
    'Customs Clearance',
    'Global Shipping',
    'Supply Chain Solutions',
    'Trade Compliance'
  ];

  return (
    <section className="relative min-h-screen sm:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0">
        {/* Loading placeholder */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-primary/10 to-gray-900 transition-opacity duration-500 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
        />

        {/* Responsive Hero Images */}
        <picture>
          <source 
            media="(max-width: 639px)" 
            srcSet={heroMobile}
            type="image/webp"
          />
          <source 
            media="(min-width: 640px)" 
            srcSet={heroDesktop}
            type="image/webp"
          />
          <img 
            src={heroDesktop}
            alt="Friend Traders - Global Logistics Solutions"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            loading="eager"
            decoding="async"
            fetchpriority="high"
            sizes="100vw"
            style={{ objectPosition: 'center center' }}
          />
        </picture>

        {/* Responsive Overlay Gradients - Left aligned */}
        <div className="absolute inset-0">
          {/* Mobile overlay - stronger on left */}
          <div className="sm:hidden absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/50 to-transparent" />
          
          {/* Desktop overlay - focused on left side */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/60 to-transparent" />
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent" />
        </div>
      </div>

      {/* Content Container - All content left aligned */}
      <div className="relative z-10 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 hidden sm:block">
        <div className="py-16 sm:py-20 lg:py-24">
          {/* Content Wrapper - Left aligned */}
          <div className={`max-w-2xl text-white transition-all duration-700 delay-150 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium">Trusted Global Partner Since 2005</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
              <span className="block">Connecting Markets,</span>
              <span className="block text-accent relative">
                Powering Trade
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-3/4 h-0.5 sm:h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-4 sm:mb-6 text-white/90 leading-snug">
              Your Gateway to Seamless{' '}
              <span className="text-accent font-semibold">Global Logistics</span>
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed">
              We specialize in end-to-end supply chain solutions, customs clearance, and international trade compliance. 
              With 18+ years of expertise, we ensure your cargo moves efficiently across borders.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit}
                  className={`flex items-center gap-2 sm:gap-3 group ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-white/90 font-medium text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold 
                rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg
                hover:bg-accent/90 active:scale-95 transition-all duration-200
                shadow-lg hover:shadow-xl min-h-[48px] sm:min-h-[56px]
                touch-manipulation"
              >
                Get Started
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              
              <Link
                to="/service"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm 
                border border-white/30 text-white font-semibold rounded-lg px-6 sm:px-8 py-3 sm:py-4 
                text-base sm:text-lg hover:bg-white/20 active:scale-95 transition-all duration-200
                min-h-[48px] sm:min-h-[56px] touch-manipulation"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;