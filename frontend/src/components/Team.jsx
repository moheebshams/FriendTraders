import React, { useState, useEffect, useRef } from 'react';
import { Users, Briefcase, Gavel, Globe, Cpu, Wrench, ChevronLeft, ChevronRight, Award, Star } from 'lucide-react';

// Import team member images
import jaffarImage from '../assets/images/team/jaffar.webp';
import advImage from '../assets/images/team/adv.webp';
import rashidImage from '../assets/images/team/rashid.webp';
import iyyazImage from '../assets/images/team/iyyaz.webp';
import sheryarImage from '../assets/images/team/sheryar.webp';
import ahmedImage from '../assets/images/team/ahmed.webp';

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3); // Default to 3
  const autoSlideRef = useRef(null);
  const containerRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "Jaffar Hussain Shah",
      role: "Director & COO",
      description: "Oversees daily operations and strategic initiatives across all divisions.",
      image: jaffarImage,
      icon: Briefcase,
      experience: "12+ Years",
      expertise: ["Operations", "Strategy", "Management"]
    },
    {
      id: 2,
      name: "Adv. Malik Sajid Hussain",
      role: "Legal Advisor",
      description: "Provides legal counsel and ensures regulatory compliance for international trade.",
      image: advImage,
      icon: Gavel,
      experience: "15+ Years",
      expertise: ["Legal Compliance", "Contracts", "Regulations"]
    },
    {
      id: 3,
      name: "Rashid Shah",
      role: "Regional Manager, Pakistan",
      description: "Heads Pakistan operations, ensuring excellence in local logistics and trade.",
      image: rashidImage,
      icon: Users,
      experience: "10+ Years",
      expertise: ["Local Operations", "Logistics", "Client Relations"]
    },
    {
      id: 4,
      name: "Muhammad Iyyaz Khan",
      role: "Regional Manager, UK",
      description: "Manages UK operations, maintaining top-notch service standards in European markets.",
      image: iyyazImage,
      icon: Globe,
      experience: "8+ Years",
      expertise: ["International Trade", "UK Market", "Supply Chain"]
    },
    {
      id: 5,
      name: "Muhammad Sheryar Khan",
      role: "Chief Technical Officer",
      description: "Leads technology strategy, digital transformation, and system development.",
      image: sheryarImage,
      icon: Cpu,
      experience: "6+ Years",
      expertise: ["Technology", "Digital Systems", "Innovation"]
    },
    {
      id: 6,
      name: "Muhammad Ahmed",
      role: "Technical Advisor",
      description: "Provides expert technical guidance and support for complex trade operations.",
      image: ahmedImage,
      icon: Wrench,
      experience: "7+ Years",
      expertise: ["Technical Solutions", "Infrastructure", "Support"]
    },
  ];

  // Handle responsive slides - ALWAYS show 3 on desktop, adjust for mobile
  const getSlidesPerView = () => {
    if (typeof window === 'undefined') return 3;
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 768) return 2;
    if (width < 1024) return 2;
    return 3; // Always 3 on larger screens
  };

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(getSlidesPerView());
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    // Auto-slide functionality with cleanup
    const startAutoSlide = () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
      
      autoSlideRef.current = setInterval(() => {
        if (!isHovering && containerRef.current) {
          handleNext();
        }
      }, 4000);
    };

    startAutoSlide();

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [isHovering, slidesPerView]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        // If at start, go to the last set of 3 cards
        const lastIndex = teamMembers.length - slidesPerView;
        // Ensure lastIndex is a multiple of slidesPerView for smooth sliding
        return Math.floor(lastIndex / slidesPerView) * slidesPerView;
      }
      // Move back by slidesPerView (3 cards)
      return prevIndex - slidesPerView;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = teamMembers.length - slidesPerView;
      if (prevIndex >= maxIndex) {
        return 0; // Loop back to start
      }
      // Move forward by slidesPerView (3 cards)
      return prevIndex + slidesPerView;
    });
  };

  const goToSlide = (index) => {
    // Ensure index is a multiple of slidesPerView for proper alignment
    const alignedIndex = Math.floor(index / slidesPerView) * slidesPerView;
    setCurrentIndex(Math.min(alignedIndex, teamMembers.length - slidesPerView));
  };

  // Calculate total dots based on slidesPerView
  const totalDots = Math.ceil(teamMembers.length / slidesPerView);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Leadership Team</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Meet Our
            <span className="text-primary block mt-1 sm:mt-2">Expert Leadership</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Dedicated professionals driving innovation and excellence in global trade and logistics.
          </p>
        </div>

        {/* Team Slider Container */}
        <div 
          className="relative"
          ref={containerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setTimeout(() => setIsHovering(false), 3000)}
        >
          {/* Slider Track */}
          <div className="overflow-hidden px-2 sm:px-0">
            <div 
              className="flex transition-all duration-500 ease-out touch-pan-x"
              style={{ 
                transform: `translateX(-${(currentIndex * 100) / teamMembers.length}%)`,
                width: `${(teamMembers.length * 100) / slidesPerView}%`
              }}
            >
              {teamMembers.map((member) => {
                const Icon = member.icon;
                return (
                  <div 
                    key={member.id}
                    className="p-2 sm:p-3"
                    style={{ width: `${100 / slidesPerView}%` }}
                  >
                    <div className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg border border-gray-200 hover:border-primary/20 transition-all duration-300 h-full active:scale-[0.98] touch-manipulation">
                      {/* Member Image */}
                      <div className="relative mb-4 sm:mb-6">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto">
                          {/* Image Glow Effect - Reduced on mobile */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-lg sm:blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Profile Image */}
                          <img 
                            src={member.image} 
                            className="relative w-full h-full rounded-full object-cover border-2 sm:border-3 md:border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                            alt={member.name}
                            loading="lazy"
                            decoding="async"
                            sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                          />
                          
                          {/* Icon Badge - Smaller on mobile */}
                          <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-md sm:shadow-lg border-2 sm:border-3 md:border-4 border-white">
                            <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Member Info */}
                      <div className="text-center">
                        <h5 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                          {member.name}
                        </h5>
                        
                        <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 bg-primary/10 rounded-full mb-2 sm:mb-3">
                          <span className="text-primary font-semibold text-xs sm:text-sm">
                            {member.role}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                          {member.description}
                        </p>
                        
                        {/* Experience Badge */}
                        <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 mb-2.5 sm:mb-3">
                          <Award className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 flex-shrink-0" />
                          <span>{member.experience} Experience</span>
                        </div>
                        
                        {/* Expertise Tags - Responsive */}
                        <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5">
                          {member.expertise.map((skill, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 whitespace-nowrap"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Hover Effect Border - Simplified on mobile */}
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden pointer-events-none">
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 sm:duration-700" />
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 sm:duration-700 delay-150 sm:delay-300" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons - Responsive positioning */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-3 md:-translate-x-4 lg:-translate-x-6 bg-white/90 hover:bg-white text-gray-800 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full shadow-lg sm:shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 z-10 border border-gray-200 hover:border-primary/30 touch-manipulation min-h-[32px] min-w-[32px] sm:min-h-[40px] sm:min-w-[40px]"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-3 md:translate-x-4 lg:translate-x-6 bg-white/90 hover:bg-white text-gray-800 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full shadow-lg sm:shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 z-10 border border-gray-200 hover:border-primary/30 touch-manipulation min-h-[32px] min-w-[32px] sm:min-h-[40px] sm:min-w-[40px]"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * slidesPerView)}
              className={`transition-all duration-300 touch-manipulation ${
                Math.floor(currentIndex / slidesPerView) === index 
                  ? 'bg-gradient-to-r from-primary to-accent w-6 h-1.5 sm:w-8 sm:h-2 rounded-full' 
                  : 'bg-gray-300 hover:bg-gray-400 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-slide indicator - Hidden on mobile */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="text-xs sm:text-sm text-gray-500 flex items-center gap-1.5 sm:gap-2">
            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isHovering ? 'bg-gray-400' : 'bg-primary animate-pulse'}`} />
            <span className="hidden sm:inline">{isHovering ? 'Paused' : 'Auto-scrolling'}</span>
            <span className="inline sm:hidden">{isHovering ? 'Paused' : 'Auto'}</span>
          </div>
        </div>

        {/* Team Stats - Responsive grid */}
        <div className="hidden mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-gray-200">
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Collective Excellence</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-2xl sm:max-w-3xl mx-auto">
            <div className="text-center p-3 sm:p-4 md:p-5 lg:p-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm sm:shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 active:scale-[0.98] touch-manipulation">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">6</div>
              <div className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Expert Leaders</div>
            </div>
            
            <div className="text-center p-3 sm:p-4 md:p-5 lg:p-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm sm:shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 active:scale-[0.98] touch-manipulation">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent mb-1 sm:mb-2">60+</div>
              <div className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Years Combined</div>
            </div>
            
            <div className="text-center p-3 sm:p-4 md:p-5 lg:p-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm sm:shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 active:scale-[0.98] touch-manipulation">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">4</div>
              <div className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Countries</div>
            </div>
            
            <div className="text-center p-3 sm:p-4 md:p-5 lg:p-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm sm:shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 active:scale-[0.98] touch-manipulation">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">10+</div>
              <div className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Expertise Areas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;