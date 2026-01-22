import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Home, 
  User, 
  Briefcase, 
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Building,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Subscribed email:', email);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:bg-blue-600", label: "Facebook" },
    { icon: Twitter, href: "#", color: "hover:bg-sky-500", label: "Twitter" },
    { icon: Instagram, href: "#", color: "hover:bg-pink-600", label: "Instagram" },
    { icon: Linkedin, href: "#", color: "hover:bg-blue-800", label: "LinkedIn" },
  ];

  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/about", label: "About", icon: User },
    { to: "/service", label: "Services", icon: Briefcase },
    { to: "/contact", label: "Contact", icon: MessageSquare },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer Content */}
      <div className="relative overflow-hidden">
        {/* Background Pattern - Reduced on mobile */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-primary rounded-full blur-xl sm:blur-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-accent rounded-full blur-xl sm:blur-3xl" />
        </div>

        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Left Column - Info & Contact */}
            <div>
              {/* Company Info */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Friend<span className="text-primary">Traders</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  A premier name in international trade, specializing in seamless import, export, 
                  and logistics solutions connecting Asia and Pakistan through reliable trade networks.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 sm:space-y-6">
                {/* Address Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Rawalpindi Office */}
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 flex items-center gap-1.5 sm:gap-2">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      Rawalpindi Office
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      2<sup>nd</sup> Floor Shinghai Plaza,<br />
                      College Road, Rawalpindi, Punjab
                    </p>
                  </div>

                  {/* Taxila Office */}
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 flex items-center gap-1.5 sm:gap-2">
                      <Building className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                      Taxila Office
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      2<sup>nd</sup> Floor, Raja Business Center,<br />
                      G.T Road, Wahdat Colony, Taxila Cantt
                    </p>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-gray-400">Phone</div>
                      <a 
                        href="tel:+923555017238" 
                        className="font-medium hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                      >
                        +92 355 5017238
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-gray-400">Email</div>
                      <a 
                        href="mailto:info@friendtraders.org" 
                        className="font-medium hover:text-accent transition-colors duration-300 text-sm sm:text-base break-all"
                      >
                        info@friendtraders.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 sm:mt-8">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect With Us</h4>
                <div className="flex gap-2 sm:gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-white/5 ${social.color} transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Links & Newsletter */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Quick Links</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className="group flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-white py-1.5 sm:py-2 transition-all duration-300 active:scale-[0.98] touch-manipulation"
                        >
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                            <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                          </div>
                          <span className="text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">
                            {link.label}
                          </span>
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 flex-shrink-0" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-1.5 sm:gap-2">
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  Newsletter
                </h4>
                
                {isSubmitted ? (
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 text-center border border-green-500/30">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 flex items-center justify-center rounded-full bg-green-500/20">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-semibold text-sm sm:text-base">Subscribed Successfully!</p>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1">You'll receive our updates soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3 sm:space-y-4">
                    <p className="text-gray-300 text-xs sm:text-sm">
                      Subscribe to get trade insights, market updates, and exclusive offers.
                    </p>
                    
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation"
                        required
                        disabled={isSubmitting}
                      />
                      <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-accent text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg active:scale-95 touch-manipulation min-h-[44px] sm:min-h-[48px]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span className="text-sm sm:text-base">Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="text-sm sm:text-base">Subscribe</span>
                        </>
                      )}
                    </button>
                    
                    <p className="text-xs text-gray-400 text-center">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-6 sm:py-8">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left order-2 md:order-1">
              <p className="text-gray-400 text-xs sm:text-sm">
                &copy; {currentYear} Friend Traders. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm order-1 md:order-2">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-white transition-colors duration-300 active:scale-95 touch-manipulation"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-white transition-colors duration-300 active:scale-95 touch-manipulation"
              >
                Terms of Service
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-400 hover:text-white transition-colors duration-300 active:scale-95 touch-manipulation"
              >
                Contact
              </Link>
            </div>

            {/* Removed Back to Top button */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;