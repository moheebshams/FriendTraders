import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Mail, 
  Send, 
  MapPin, 
  Phone, 
  Clock,
  MessageSquare,
  Building,
  Target,
  Sparkles,
  CheckCircle
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Building,
      title: "Office Address",
      details: "2nd Floor Shinghai Plaza, College Road, Rawalpindi, Punjab",
      bgColor: "bg-primary/5",
      iconColor: "text-primary",
      hoverColor: "hover:bg-primary/10"
    },
    {
      icon: Building,
      title: "Taxila Office",
      details: "2nd Floor, Raja Business Center, G.T Road, Wahdat Colony, Taxila Cantt",
      bgColor: "bg-blue-500/5",
      iconColor: "text-blue-600",
      hoverColor: "hover:bg-blue-500/10"
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: "+92 355 5017238",
      link: "tel:+923555017238",
      bgColor: "bg-accent/5",
      iconColor: "text-accent",
      hoverColor: "hover:bg-accent/10"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@friendtraders.org",
      link: "mailto:info@friendtraders.org",
      bgColor: "bg-primary/5",
      iconColor: "text-primary",
      hoverColor: "hover:bg-primary/10"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM",
      additional: "Sunday: Closed",
      bgColor: "bg-blue-500/5",
      iconColor: "text-blue-600",
      hoverColor: "hover:bg-blue-500/10"
    }
  ];

  const inquiryTypes = [
    { value: "", label: "Select Inquiry Type" },
    { value: "import", label: "Import Services" },
    { value: "export", label: "Export Services" },
    { value: "logistics", label: "Logistics & Transportation" },
    { value: "materials", label: "Building Materials" },
    { value: "automobiles", label: "Japanese Automobiles" },
    { value: "partnership", label: "Business Partnership" },
    { value: "other", label: "Other Inquiry" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Consistent with other pages */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary overflow-hidden">
        {/* Background Pattern - Responsive sizing */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-white blur-xl sm:blur-2xl md:blur-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-accent blur-xl sm:blur-2xl md:blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center text-white">
            {/* Badge - Responsive */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 sm:mb-8">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-semibold">Get In Touch</span>
            </div>

            {/* Main Heading - Fluid typography */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Contact
              <span className="block text-white mt-1 sm:mt-2">
                Friend<span className="text-accent">Traders</span>
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
                  <span>Contact</span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse flex-shrink-0" />
                </li>
              </ol>
            </nav>

            {/* Description - Added for mobile */}
            <div className="max-w-xl sm:max-w-2xl mx-auto px-3 sm:px-0">
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                Connect with our trade experts for seamless global logistics solutions and partnership opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade - Responsive height */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-t from-white via-transparent to-transparent" />
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Success Message - Responsive */}
          {isSubmitted && (
            <div className="mb-6 sm:mb-8 relative bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center border border-green-500/30">
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-800 mb-1.5 sm:mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-600 text-sm sm:text-base">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              </div>
            </div>
          )}

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg sm:shadow-xl border border-gray-200">
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-sm border border-primary/20">
                  <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Send Message</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Start Your
                  <span className="text-primary block mt-1 sm:mt-2">Trade Journey</span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">We'll respond within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-gray-50/50 focus:bg-white group-hover:border-primary/50 text-sm sm:text-base min-h-[44px] touch-manipulation"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-gray-50/50 focus:bg-white group-hover:border-primary/50 text-sm sm:text-base min-h-[44px] touch-manipulation"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-gray-50/50 focus:bg-white group-hover:border-primary/50 text-sm sm:text-base min-h-[44px] touch-manipulation"
                  >
                    {inquiryTypes.map((type, index) => (
                      <option key={index} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-gray-50/50 focus:bg-white resize-none group-hover:border-primary/50 text-sm sm:text-base min-h-[120px] touch-manipulation"
                    placeholder="Tell us about your trade requirements, shipment details, or any specific inquiries..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-accent text-white py-3 sm:py-3.5 md:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed touch-manipulation min-h-[44px] sm:min-h-[48px] md:min-h-[52px]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg sm:shadow-xl border border-gray-200">
                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Contact Details</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Get In
                    <span className="text-primary block mt-1 sm:mt-2">Touch</span>
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">Multiple ways to reach our team</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-700 hover:text-primary transition-colors duration-300 block text-sm sm:text-base break-all"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-700 text-sm sm:text-base">{info.details}</p>
                    );

                    return (
                      <div
                        key={index}
                        className={`group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 ${info.bgColor} rounded-lg sm:rounded-xl ${info.hoverColor} transition-all duration-300 border border-transparent hover:border-primary/20 active:scale-[0.98] touch-manipulation`}
                      >
                        <div className={`p-2 sm:p-3 rounded-lg ${info.iconColor}/10 group-hover:${info.iconColor}/20 transition-colors duration-300 flex-shrink-0`}>
                          <Icon className={`${info.iconColor} w-4 h-4 sm:w-5 sm:h-5`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{info.title}</h4>
                          {content}
                          {info.additional && (
                            <p className="text-gray-500 text-xs sm:text-sm mt-1">{info.additional}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Map Section */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-200">
              <div className="p-4 sm:p-5 md:p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg sm:text-xl flex items-center gap-2 sm:gap-3">
                      <MapPin className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
                      Our Main Office Location
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">2nd Floor Shinghai Plaza, College Road, Rawalpindi</p>
                  </div>
                  <a
                    href="https://goo.gl/maps/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-primary font-semibold hover:text-accent transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    Open in Maps →
                  </a>
                </div>
              </div>
              <div className="h-48 sm:h-64 md:h-80 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.888709615365!2d73.06186257452823!3d33.60819194104894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94bd8ece70a7%3A0x1c8e01b8ae6004e7!2sShanghai%20Plaza!5e0!3m2!1sen!2s!4v1759394519037!5m2!1sen!2s"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  title="Friend Traders Location - Rawalpindi Office"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;