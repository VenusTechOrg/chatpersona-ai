'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { blogPosts, BlogPost } from '@/data/blogs';

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Sort all blogs by date (most recent first)
  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA; // Most recent first
  });
  
  const filteredPosts = sortedBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section className="pt-40 pb-16 sm:pt-44 sm:pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Parallax Layers */}
        <div className="absolute inset-0 parallax-bg">
          <div className="absolute top-32 left-10 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-48 right-20 w-20 h-20 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-lg animate-bounce"></div>
        </div>
        
        <div className="absolute inset-0 parallax-mid">
          <div className="absolute bottom-40 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        {/* Tech Aesthetic Elements */}
        <div className="absolute inset-0 circuit-pattern"></div>
        
        {/* Holographic Overlay */}
        <div className="absolute inset-0 holographic-overlay"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              AI Insights & Strategies
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest trends, strategies, and insights in AI-powered content creation
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 touch-manipulation"
                style={{ minHeight: '48px', fontSize: '16px' }}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Featured Articles
              </span>
            </h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredPosts.map((featuredPost, index) => (
                <motion.div
                  key={featuredPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={featuredPost.thumbnail}
                      alt={featuredPost.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{featuredPost.author}</span>
                      </div>
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{post.publishedAt}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 sm:p-12 text-white"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your Content Strategy?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of creators who are already using AI to scale their revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.chatpersona.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </a>
            <a
              href="https://chromewebstore.google.com/detail/ai-chat-tool-chatpersona/bgefplnmcbmcfjmggpjiadldmfiiecma?hl=en&authuser=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Get Extension
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
