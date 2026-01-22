import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight, Sparkles } from 'lucide-react';
import Services from '../components/Services';

const ServicePage = () => {
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

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className={`text-center text-white transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>

            {/* Main Heading - Fluid typography */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Our
              <span className="block text-white mt-1 sm:mt-2">
                Professional <span className="text-accent">Services</span>
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
                  <span>Services</span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse flex-shrink-0" />
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Bottom Gradient Fade - Responsive height */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-t from-white via-transparent to-transparent" />
      </section>

      {/* Services Component */}
      <div id="services-section">
        <Services />
      </div>
    </div>
  );
};

export default ServicePage;