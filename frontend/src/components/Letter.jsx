import React from 'react';
import { Handshake, Award, Truck, Quote, Globe, TrendingUp } from 'lucide-react';
import ceoImage from '../assets/images/ceo.webp';

const Letter = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 backdrop-blur-sm border border-primary/20">
            <Handshake className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Leadership & Vision
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
            A Message from Our
            <span className="block text-primary mt-1 sm:mt-2">Founder & CEO</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0">
            Driving global trade excellence through decades of experience and unwavering commitment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          
          {/* CEO Profile Card */}
          <div className="lg:col-span-1">
            <div className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:sticky lg:top-6 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 h-fit">
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src={ceoImage} 
                  alt="Muhammad Rafique Khan - Founder & CEO"
                  className="relative w-full aspect-[3/4] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Decorative Corner */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border-t-2 border-r-2 border-primary/50 rounded-tr-lg sm:rounded-tr-xl" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border-b-2 border-l-2 border-accent/50 rounded-bl-lg sm:rounded-bl-xl" />
              </div>
              
              {/* CEO Info */}
              <div className="text-center">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                    Muhammad Rafique Khan
                  </h3>
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-primary font-semibold text-xs sm:text-sm">
                      Founder & CEO
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1.5 sm:mt-2">
                    Friend Traders International
                  </p>
                </div>
                
                {/* Credentials */}
                <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg sm:rounded-xl border border-primary/20 hover:border-primary/40 transition-colors duration-300">
                    <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">RCCI Certified Member</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-accent/5 to-accent/10 rounded-lg sm:rounded-xl border border-accent/20 hover:border-accent/40 transition-colors duration-300">
                    <div className="p-1.5 sm:p-2 bg-accent/10 rounded-lg">
                      <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">Truck Association President</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-gray-300 transition-colors duration-300">
                    <div className="p-1.5 sm:p-2 bg-gray-100 rounded-lg">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">18+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Message - Balanced height */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-white via-white to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg sm:shadow-xl border border-gray-100 overflow-hidden h-full">
              
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-24 sm:-translate-y-32 translate-x-24 sm:translate-x-32" />
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-tr from-accent/5 to-transparent rounded-full translate-y-16 sm:translate-y-24 -translate-x-16 sm:-translate-x-24" />
              
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-primary/10">
                <Quote className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
              </div>

              {/* Message Content - Balanced */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Message Header */}
                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-primary/10 rounded-full mb-3 sm:mb-4">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full" />
                    <span className="text-primary font-semibold text-xs sm:text-sm">Leadership Message</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Building Bridges in
                    <span className="block text-primary mt-1 sm:mt-2">Global Commerce</span>
                  </h2>
                </div>

                {/* Opening Quote */}
                <div className="mb-6 sm:mb-8">
                  <div className="relative pl-4 sm:pl-6 border-l-3 sm:border-l-4 border-primary">
                    <div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full" />
                    <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed">
                      "Welcome to Friend Traders—where trust meets trade, and partnerships become bridges to success."
                    </p>
                  </div>
                </div>

                {/* Message Body - Takes available space */}
                <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed flex-1">
                  <p className="text-base sm:text-lg">
                    As Founder and CEO, I take great pride in leading a company built on the principles of
                    <span className="font-semibold text-primary"> trust, integrity, and service excellence</span>. 
                    Over nearly two decades, we have successfully connected businesses across continents, 
                    fostering sustainable trade opportunities and driving economic growth through 
                    <span className="font-semibold text-accent"> reliable logistics solutions</span>.
                  </p>

                  <p className="text-base sm:text-lg">
                    My dual roles as an active member of the Rawalpindi Chamber of Commerce & Industry (RCCI) 
                    and President of the All Pakistan Truck Dumper Association have provided me with unique 
                    insights into both <span className="font-semibold text-gray-900">global trade dynamics</span> and 
                    <span className="font-semibold text-gray-900"> local operational excellence</span>. 
                    This dual perspective enables us to offer unparalleled end-to-end solutions.
                  </p>

                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg sm:rounded-xl p-4 sm:p-6 my-4 sm:my-6 border-l-3 sm:border-l-4 border-primary">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1.5 sm:mb-2 text-base sm:text-lg">Our Commitment</h4>
                        <p className="text-gray-700 text-sm sm:text-base">
                          Every shipment represents more than goods in transit—it represents 
                          <span className="font-semibold text-primary"> relationships built</span>, 
                          <span className="font-semibold text-accent"> promises kept</span>, and 
                          <span className="font-semibold text-gray-900"> futures secured</span>.
                          We don't just move cargo; we move possibilities.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg">
                    Whether you're sourcing quality products from Asia, expanding your market reach, 
                    or seeking a trusted logistics partner who understands both documentation and delivery, 
                    Friend Traders is committed to ensuring your success through 
                    <span className="font-semibold text-primary"> every step of the journey</span>.
                  </p>
                </div>

                {/* Closing Signature */}
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                        Muhammad Rafique Khan
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base">Founder & CEO</p>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      Leading with purpose since 2005
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Letter;