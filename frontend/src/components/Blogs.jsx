import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Calendar, ArrowRight, TrendingUp, Globe, BookOpen, Clock, Eye, MessageSquare } from 'lucide-react';

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/api/blogs/');
      if (!response.ok) throw new Error('Failed to fetch blogs');
      const data = await response.json();
      
      const formattedBlogs = data.map(blog => ({
        id: blog.id,
        title: blog.title,
        content: blog.content,
        category: "Trends",
        publishedAt: new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        readTime: "5 min read",
        views: "1.2K",
        comments: "24",
        image: blog.image ? `http://localhost:8000${blog.image}` : "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }));
      
      setBlogs(formattedBlogs);
      setError(null);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError('Failed to load blogs. Please try again later.');
      // Fallback to empty array if API fails
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { name: "All", count: 12, icon: Newspaper },
    { name: "Trends", count: 4, icon: TrendingUp },
    { name: "Guide", count: 5, icon: BookOpen },
    { name: "Global", count: 3, icon: Globe }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
            <Newspaper className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Industry Insights</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Latest
            <span className="text-primary block mt-1 sm:mt-2">Trade Insights</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Stay updated with the latest trends, regulations, and opportunities in global trade, logistics, and import-export markets.
          </p>
        </div>

        {/* Category Filter - Responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 lg:mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.name;
            
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`group flex items-center px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border transition-all duration-300 active:scale-95 touch-manipulation min-h-[44px] ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary to-primary/90 text-white border-primary shadow-md sm:shadow-lg' 
                    : 'bg-white border-gray-200 text-gray-700 hover:border-primary/30 hover:shadow-sm sm:hover:shadow-md'
                }`}
              >
                <Icon className={`w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-gray-500 group-hover:text-primary'
                }`} />
                <span className="font-medium text-sm sm:text-base">{category.name}</span>
                <span className={`ml-1.5 sm:ml-2 px-1.5 sm:px-2 py-0.5 text-xs rounded-full ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Blog Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">Loading blogs...</p>
            </div>
          ) : error ? (
            <div className="col-span-full text-center py-12">
              <p className="text-red-500">{error}</p>
              <button 
                onClick={fetchBlogs}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
              >
                Retry
              </button>
            </div>
          ) : blogs.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No blogs available yet. Create one from the admin panel!</p>
            </div>
          ) : (
            blogs.map((blog) => {
              const isTrending = blog.category === "Trends";
            
            return (
              <article 
                key={blog.id}
                className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-lg border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] touch-manipulation"
              >
                {/* Featured Image */}
                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg text-xs font-semibold uppercase tracking-wide ${
                      blog.category === "Trends" 
                        ? 'bg-gradient-to-r from-accent to-accent/90 text-white' 
                        : blog.category === "Guide"
                        ? 'bg-gradient-to-r from-primary to-primary/90 text-white'
                        : 'bg-gradient-to-r from-gray-800 to-gray-700 text-white'
                    }`}>
                      {blog.category}
                    </span>
                  </div>
                  
                  {/* Trending Badge - Hidden on mobile */}
                  {isTrending && (
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs font-semibold hidden sm:block">
                      Trending
                    </div>
                  )}
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  {/* Metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 gap-2 sm:gap-0">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{blog.publishedAt}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs">{blog.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs">{blog.comments}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300 leading-tight line-clamp-2">
                    <Link to={`/blog/${blog.id}`} className="hover:underline">
                      {blog.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">
                    {blog.content}
                  </p>

                  {/* Read More Link */}
                  <Link
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all duration-300"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Hover Effect Border - Simplified on mobile */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 sm:duration-700" />
                </div>
              </article>
            );
            })
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-accent text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] touch-manipulation min-h-[44px] sm:min-h-[52px]"
          >
            <span className="text-sm sm:text-base">View All Articles</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
            Discover 50+ expert articles on global trade and logistics
          </p>
        </div>

        {/* Newsletter Signup - Responsive */}
        <div className="mt-12 sm:mt-16 lg:mt-20 relative bg-gradient-to-br from-primary via-primary/90 to-accent rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white overflow-hidden">
          {/* Background Pattern - Reduced on mobile */}
          <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-white/10 rounded-full -translate-y-20 sm:-translate-y-32 translate-x-20 sm:translate-x-32" />
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full translate-y-16 sm:translate-y-24 -translate-x-16 sm:-translate-x-24" />
          
          <div className="relative z-10 max-w-lg sm:max-w-2xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Never Miss an Industry Update
            </h3>
            
            <p className="text-white/80 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Subscribe to our weekly newsletter for expert insights on global trade, logistics tips, and market opportunities.
            </p>
            
            <div className="max-w-sm sm:max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl overflow-hidden border border-white/30">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-white bg-transparent focus:outline-none placeholder-white/70 focus:bg-white/10 text-sm sm:text-base min-h-[48px] sm:min-h-[56px] touch-manipulation"
                />
                <button className="px-4 sm:px-6 py-3 sm:py-4 bg-white text-primary font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap text-sm sm:text-base min-h-[48px] sm:min-h-[56px] active:scale-95 touch-manipulation">
                  Subscribe Now
                </button>
              </div>
              
              <p className="text-xs text-white/60 mt-2 sm:mt-3">
                No spam, unsubscribe anytime. Weekly insights delivered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;