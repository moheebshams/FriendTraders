import React, { useState } from 'react';
import { Handshake, Bus, Factory, ArrowRight, Target, Globe, Mail, CheckCircle } from 'lucide-react';
import backgroundImage from '../assets/images/blue.webp';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Newsletter subscription:', email);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const features = [
    {
      title: "Strategic Meetings",
      description: "Coordinate with industry leaders",
      icon: Handshake,
      color: "accent",
      gradient: "from-accent/20 to-accent/5",
      delay: "0"
    },
    {
      title: "Premium Transport",
      description: "Luxury logistics services",
      icon: Bus,
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5",
      delay: "100"
    },
    {
      title: "Facility Tours",
      description: "Visit premier factories & ports",
      icon: Factory,
      color: "primary",
      gradient: "from-primary/20 to-primary/5",
      delay: "200"
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background with overlay - Optimized for mobile */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt="Global Partnership Background" 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/90 to-dark/85 sm:bg-gradient-to-r sm:from-dark/95 sm:via-dark/90 sm:to-dark/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 sm:mb-8">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold">Strategic Partnership</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
            Partner With
            <span className="bg-gradient-to-r from-accent via-accent to-secondary bg-clip-text text-transparent block mt-1 sm:mt-2">
              Friend Traders
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0">
            Unlock global trade opportunities. Join forces to expand market reach and build lasting business relationships.
          </p>

          {/* Features Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:border-white/40 transition-all duration-300 sm:hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] touch-manipulation"
                  style={{ animationDelay: `${feature.delay}ms` }}
                >
                  {/* Animated background */}
                  <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center rounded-lg sm:rounded-xl bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Email Form Section */}
          <div className="max-w-lg sm:max-w-xl mx-auto mb-12 sm:mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-xs sm:text-sm font-semibold">Get Started Today</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Start Your Partnership Journey</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">
                Enter your business email to explore collaboration opportunities
              </p>
            </div>

            {isSubmitted ? (
              <div className="relative bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-green-500/30">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Partnership Initiated!</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
                  Our team will contact you within 24 hours to discuss opportunities.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 hover:bg-white/20 rounded-lg sm:rounded-xl border border-white/20 transition-all duration-300 active:scale-95 touch-manipulation text-sm sm:text-base"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="group">
                <div className="relative flex flex-col sm:flex-row bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl border border-white/20">
                  <input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 sm:px-6 py-3 sm:py-4 md:py-5 text-white bg-transparent focus:outline-none placeholder-gray-400 text-sm sm:text-base md:text-lg focus:bg-white/5 min-h-[48px] sm:min-h-[56px] touch-manipulation"
                    required
                    disabled={isSubmitting}
                    autoComplete="email"
                    inputMode="email"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative px-4 sm:px-6 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-accent to-secondary font-semibold text-white hover:from-secondary hover:to-accent transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 min-w-full sm:min-w-[140px] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group/btn min-h-[48px] sm:min-h-[56px] touch-manipulation active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="text-sm sm:text-base">Processing...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-sm sm:text-base">Get Started</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    )}
                    
                    {/* Button shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </button>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4 text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>

          {/* Partnership Benefits - Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-xl sm:max-w-3xl mx-auto">
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:border-white/40 transition-all duration-300 active:scale-[0.98] touch-manipulation">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 group-hover:bg-primary/30 transition-colors duration-300 flex-shrink-0">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Strategic Goals</h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Building long-term partnerships focused on mutual growth and market expansion.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:border-white/40 transition-all duration-300 active:scale-[0.98] touch-manipulation">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 group-hover:bg-secondary/30 transition-colors duration-300 flex-shrink-0">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Global Network</h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Access extensive trade networks across Asia, Middle East, and European markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;