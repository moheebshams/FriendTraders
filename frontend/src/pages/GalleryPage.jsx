import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Upload, X, Image as ImageIcon, Sparkles } from 'lucide-react';

const GalleryPage = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [marqueeImages, setMarqueeImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const isSuperuser = false; // Set to true if admin

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/api/gallery/');
      if (!response.ok) throw new Error('Failed to fetch gallery');
      const data = await response.json();
      
      const formattedImages = data.map(item => ({
        id: item.id,
        url: `http://localhost:8000${item.image}`,
        type: item.image_type
      }));
      
      // Separate gallery and slider images
      const galleryOnly = formattedImages.filter(img => img.type === 'gallery' || img.type === 'both');
      const sliderImages = formattedImages.filter(img => img.type === 'slider' || img.type === 'both');
      
      setGalleryImages(galleryOnly);
      setMarqueeImages(sliderImages.slice(0, 4));
      setError(null);
    } catch (err) {
      console.error('Error fetching gallery:', err);
      setError('Failed to load gallery. Please try again later.');
      setGalleryImages([]);
      setMarqueeImages([]);
    } finally {
      setLoading(false);
    }
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    console.log('Upload form submitted');
    setShowUploadModal(false);
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedImage]);

  return (
    <>
      {/* Hero Section - Updated to match AboutPage/ServicePage */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary overflow-hidden">
        {/* Background Pattern - Responsive sizing */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-white blur-xl sm:blur-2xl md:blur-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-accent blur-xl sm:blur-2xl md:blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className={`text-center text-white transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {/* Badge - Responsive */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 sm:mb-8">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-semibold">Visual Journey</span>
            </div>

            {/* Main Heading - Fluid typography */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Gallery
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
                  <span>Gallery</span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse flex-shrink-0" />
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Bottom Gradient Fade - Responsive height */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-t from-white via-transparent to-transparent" />
      </section>

      {/* Marquee Section */}
      <section className="py-8 sm:py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="relative overflow-hidden">
            {/* Gradient overlays - Responsive */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>

            {/* Marquee wrapper */}
            <div 
              className="marquee-container"
              onMouseEnter={() => setIsMarqueePaused(true)}
              onMouseLeave={() => setIsMarqueePaused(false)}
              onTouchStart={() => setIsMarqueePaused(true)}
              onTouchEnd={() => setIsMarqueePaused(false)}
            >
              <div 
                className="flex whitespace-nowrap gap-x-3 sm:gap-x-4 md:gap-x-6 py-2 sm:py-4 touch-pan-x"
                style={{ 
                  animation: `marquee ${window.innerWidth < 640 ? 40 : 30}s linear infinite`,
                  animationPlayState: isMarqueePaused ? 'paused' : 'running',
                  width: 'max-content',
                }}
              >
                {/* Marquee Cards Set 1 */}
                {marqueeImages.map((image, i) => (
                  <div key={`marquee-1-${i}`} className="flex-shrink-0">
                    <MarqueeCard image={image} onImageClick={openLightbox} />
                  </div>
                ))}

                {/* Duplicate set for seamless looping */}
                {marqueeImages.map((image, i) => (
                  <div key={`marquee-2-${i}`} className="flex-shrink-0">
                    <MarqueeCard image={image} onImageClick={openLightbox} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        {/* Upload Modal */}
        {isSuperuser && showUploadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-0 w-full max-w-sm sm:max-w-md relative border border-gray-100" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100 bg-primary/10 rounded-t-xl sm:rounded-t-2xl">
                <h3 id="modalTitle" className="text-lg sm:text-xl font-bold text-primary flex items-center gap-1.5 sm:gap-2">
                  <Upload className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /> Upload Image
                </h3>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="text-gray-400 hover:text-primary transition rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/30 active:scale-95 touch-manipulation"
                  aria-label="Close Upload Modal"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              
              {/* Modal Body */}
              <form onSubmit={handleUploadSubmit} className="space-y-3 sm:space-y-4 px-4 sm:px-6 py-4 sm:py-6">
                {/* Image Input */}
                <div>
                  <label htmlFor="image" className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700">Select Image</label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    required
                    className="block w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 text-xs sm:text-sm min-h-[44px] touch-manipulation"
                  />
                </div>
                
                {/* Type Select */}
                <div>
                  <label htmlFor="image_type" className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700">Image Type</label>
                  <select
                    name="image_type"
                    id="image_type"
                    className="block w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 text-xs sm:text-sm min-h-[44px] touch-manipulation"
                  >
                    <option value="both">Both Slider & Gallery</option>
                    <option value="slider">Slider Only</option>
                    <option value="gallery">Gallery Only</option>
                  </select>
                </div>
                
                {/* Submit */}
                <button
                  type="submit"
                  className="bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold w-full flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-primary/90 transition active:scale-95 touch-manipulation min-h-[44px]"
                >
                  <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
                  Upload
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Gallery Wrapper */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Upload Button */}
          {isSuperuser && (
            <div className="w-full mb-6 sm:mb-8 md:mb-10 flex justify-end">
              <button
                onClick={() => setShowUploadModal(true)}
                className="bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center gap-1.5 sm:gap-2 active:scale-95 touch-manipulation text-sm sm:text-base min-h-[44px]"
                aria-haspopup="dialog"
                aria-controls="uploadModal"
              >
                <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
                Upload Image
              </button>
            </div>
          )}

          {/* Gallery Grid Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Gallery Collection
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Trade Operations
            </h2>
            <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0 text-sm sm:text-base">
              Explore our journey through comprehensive trade solutions, logistics excellence, and successful partnerships.
            </p>
          </div>

          {/* Static Gallery Grid */}
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">Loading gallery...</p>
            </div>
          ) : error ? (
            <div className="col-span-full text-center py-12">
              <p className="text-red-500">{error}</p>
              <button 
                onClick={fetchGalleryImages}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
              >
                Retry
              </button>
            </div>
          ) : galleryImages.length > 0 && (
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-white border border-gray-200 transition-all duration-300 hover:shadow-lg active:scale-[0.98] touch-manipulation cursor-zoom-in"
                >
                  <div 
                    className="relative overflow-hidden aspect-square"
                    onClick={() => openLightbox(image)}
                  >
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={image.url}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Images Message */}
          {!loading && !error && galleryImages.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-400" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-2">Gallery Coming Soon</h3>
              <p className="text-gray-500 text-sm sm:text-base">We're preparing our gallery. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-3 sm:p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 active:scale-95 touch-manipulation"
            aria-label="Close lightbox"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
          
          <div className="relative w-full max-w-3xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt="Gallery"
              className="w-full h-full object-contain rounded-lg"
              loading="eager"
            />
          </div>
        </div>
      )}

      {/* Marquee Animation CSS */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @media (max-width: 639px) {
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        }
      `}</style>
    </>
  );
};

// Marquee Card Component - Responsive
const MarqueeCard = ({ image, onImageClick }) => {
  return (
    <div className="group flex-shrink-0 w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32 bg-white rounded-lg sm:rounded-xl border border-gray-200 p-2 sm:p-3 md:p-4 flex items-center justify-center hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 active:scale-95 touch-manipulation cursor-zoom-in" onClick={() => onImageClick(image)}>
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src={image.url} 
          alt={image.alt} 
          className="w-full h-full object-cover rounded"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default GalleryPage;