import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Home, Briefcase, User, Images, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Responsive viewport check with sm breakpoint
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Optimized scroll effect with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Body scroll lock with safe area consideration
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.touchAction = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.touchAction = '';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/service', label: 'Services', icon: Briefcase },
    { path: '/about', label: 'About', icon: User },
    { path: '/gallery', label: 'Gallery', icon: Images },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-sm py-1' 
            : 'bg-white/90 backdrop-blur-md py-2'
          }
          safe-area-top
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between">

            {/* Logo - Fluid scaling */}
            <Link 
              to="/" 
              className="flex-shrink-0 py-1"
              aria-label="Go to homepage"
            >
              <img 
                src={logo} 
                alt="Friend Traders - Global Logistics" 
                className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 
                         transition-all duration-300 hover:scale-105
                         select-none touch-manipulation object-contain"
                loading="eager"
                width="200"
                height="60"
                decoding="async"
                style={{
                  maxWidth: 'min(200px, 50vw)'
                }}
              />
            </Link>

            {/* Desktop Navigation - Responsive from lg */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      relative px-3 xl:px-4 py-2.5 
                      rounded-lg font-medium text-sm xl:text-base
                      transition-all duration-200 min-w-[70px]
                      text-center truncate
                      ${active 
                        ? 'text-primary font-semibold' 
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                      }
                      active:scale-95 touch-manipulation
                    `}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {active && (
                      <span 
                        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 
                        h-0.5 w-6 bg-primary rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
              
              {/* CTA Button - Responsive */}
              <Link
                to="/contact"
                className="ml-2 px-4 xl:px-6 py-2.5 
                bg-primary text-white font-medium rounded-lg text-sm xl:text-base
                hover:bg-primary/90 active:scale-95 
                transition-all duration-200
                border border-primary/20 whitespace-nowrap
                min-h-[44px] flex items-center justify-center
                touch-manipulation shadow-sm hover:shadow"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button - Touch optimized */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 
              active:bg-gray-200 transition-all duration-200 
              touch-manipulation min-h-[44px] min-w-[44px] 
              flex items-center justify-center"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 w-full h-full text-gray-800 
                  transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`}
                  strokeWidth={2.5}
                />
                <X 
                  className={`absolute inset-0 w-full h-full text-gray-800 
                  transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`}
                  strokeWidth={2.5}
                />
              </div>
            </button>

          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-12 sm:h-14 md:h-16 lg:h-20"></div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-0 z-40 transition-all duration-300 ease-out lg:hidden
          ${isMobileMenuOpen 
            ? 'bg-black/50 backdrop-blur-sm opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
          }
        `}
        onClick={toggleMobileMenu}
        aria-hidden="true"
        style={{ 
          WebkitTapHighlightColor: 'transparent',
        }}
      />

      {/* Mobile Menu Panel - Responsive width */}
      <aside 
        id="mobile-menu"
        className={`
          fixed top-0 right-0 h-full w-[85vw] max-w-sm z-50
          bg-white shadow-2xl
          transform transition-transform duration-300 ease-out lg:hidden
          ${isMobileMenuOpen 
            ? 'translate-x-0' 
            : 'translate-x-full'
          }
          safe-area-inset-bottom
        `}
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="h-full flex flex-col overflow-hidden">
          
          {/* Menu Header */}
          <div className="p-4 border-b border-gray-100 flex-shrink-0">
            <div className="flex items-center justify-between">
              <Link 
                to="/" 
                onClick={toggleMobileMenu}
                className="flex items-center"
                aria-label="Go to homepage"
              >
                <img 
                  src={logo} 
                  alt="Friend Traders" 
                  className="h-10 w-auto"
                  width="160"
                  height="48"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 
                transition-colors duration-200 touch-manipulation
                min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={toggleMobileMenu}
                      className={`
                        flex items-center gap-3 p-3 sm:p-4
                        rounded-xl font-medium transition-all duration-200
                        min-h-[52px] sm:min-h-[56px]
                        ${active
                          ? 'bg-primary text-white'
                          : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                        }
                        touch-manipulation
                      `}
                      aria-current={active ? 'page' : undefined}
                    >
                      <div className={`
                        p-2 rounded-lg transition-colors duration-300
                        ${active 
                          ? 'bg-white/20' 
                          : 'bg-gray-100'
                        }
                      `}>
                        <Icon className={`
                          w-5 h-5 transition-colors duration-300
                          ${active ? 'text-white' : 'text-gray-600'}
                        `} 
                        strokeWidth={2.2}
                        />
                      </div>
                      <span className="flex-1 text-base sm:text-lg">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile CTA with safe area */}
          <div className="p-4 border-t border-gray-100 flex-shrink-0 safe-area-bottom">
            <Link
              to="/contact"
              onClick={toggleMobileMenu}
              className="block w-full py-3 sm:py-4 bg-primary text-white 
              font-medium rounded-xl text-center hover:bg-primary/90 
              active:scale-[0.98] transition-all duration-200 
              shadow-lg hover:shadow-xl text-base sm:text-lg
              min-h-[52px] sm:min-h-[56px] flex items-center justify-center
              touch-manipulation"
            >
              Get Free Quote
            </Link>
            <p className="mt-3 text-center text-sm text-gray-500">
              Global Logistics Solutions
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;