'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('header')) {
        setIsMenuOpen(false);
      }
    };

    const handleLinkClick = () => {
      setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('click', handleLinkClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('click', handleLinkClick);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/98 backdrop-blur-lg border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-5">
          {/* Logo - Enhanced for mobile impact */}
          <Link href="/" className="flex items-center space-x-3 sm:space-x-4 hover:opacity-80 transition-opacity duration-300">
            <div className="relative group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                😈
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl sm:text-2xl text-gray-900 leading-tight">ChatPersona AI</span>
              <span className="text-xs sm:text-sm text-gray-500 font-medium">AI-Powered Conversations</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="/#features" className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-lg transition-all duration-300 font-medium text-sm xl:text-base">Features</a>
            <a href="/#personas" className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-lg transition-all duration-300 font-medium text-sm xl:text-base">Personas</a>
            <a href="/#pricing" className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-lg transition-all duration-300 font-medium text-sm xl:text-base">Pricing</a>
            <a href="/blogs" className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-lg transition-all duration-300 font-medium text-sm xl:text-base">Blog</a>
            <a href="/#testimonials" className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-lg transition-all duration-300 font-medium text-sm xl:text-base">Testimonials</a>
            <a href="/agencies" className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-lg transition-all duration-300 font-medium text-sm xl:text-base">For Agencies</a>
          </nav>

          {/* CTA Buttons - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a href="https://app.chatpersona.ai/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-lg transition-all duration-300 font-medium text-sm xl:text-base">Login</a>
            <a href="https://chromewebstore.google.com/detail/ai-chat-tool-chatpersona/bgefplnmcbmcfjmggpjiadldmfiiecma?hl=en&authuser=0" target="_blank" rel="noopener noreferrer" className="relative group bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-4 xl:px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm xl:text-base">
              <span className="relative z-10">Get Extension</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button - Enhanced for better mobile UX */}
          <button
            className="lg:hidden p-3 -mr-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 group touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X size={28} className="text-gray-700 group-hover:text-purple-600 transition-colors duration-200" />
              ) : (
                <Menu size={28} className="text-gray-700 group-hover:text-purple-600 transition-colors duration-200" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu - Enhanced with better animations and visual impact */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 border-t border-gray-200/50 bg-gradient-to-b from-white to-gray-50/50">
            <nav className="flex flex-col space-y-2">
              <a 
                href="/#features" 
                className="text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 px-5 py-4 rounded-xl transition-all duration-300 font-semibold text-lg touch-manipulation border border-transparent hover:border-purple-200 block w-full text-left"
                onClick={() => setIsMenuOpen(false)}
                style={{ minHeight: '48px' }}
              >
                Features
              </a>
              <a 
                href="/#personas" 
                className="text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 px-5 py-4 rounded-xl transition-all duration-300 font-semibold text-lg touch-manipulation border border-transparent hover:border-purple-200 block w-full text-left"
                onClick={() => setIsMenuOpen(false)}
                style={{ minHeight: '48px' }}
              >
                Personas
              </a>
              <a 
                href="/#pricing" 
                className="text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 px-5 py-4 rounded-xl transition-all duration-300 font-semibold text-lg touch-manipulation border border-transparent hover:border-purple-200 block w-full text-left"
                onClick={() => setIsMenuOpen(false)}
                style={{ minHeight: '48px' }}
              >
                Pricing
              </a>
              <a 
                href="/blogs" 
                className="text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 px-5 py-4 rounded-xl transition-all duration-300 font-semibold text-lg touch-manipulation border border-transparent hover:border-purple-200 block w-full text-left"
                onClick={() => setIsMenuOpen(false)}
                style={{ minHeight: '48px' }}
              >
                Blog
              </a>
              <a 
                href="/#testimonials" 
                className="text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 px-5 py-4 rounded-xl transition-all duration-300 font-semibold text-lg touch-manipulation border border-transparent hover:border-purple-200 block w-full text-left"
                onClick={() => setIsMenuOpen(false)}
                style={{ minHeight: '48px' }}
              >
                Testimonials
              </a>
              <a 
                href="/agencies" 
                className="text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 px-5 py-4 rounded-xl transition-all duration-300 font-semibold text-lg touch-manipulation border border-transparent hover:border-purple-200 block w-full text-left"
                onClick={() => setIsMenuOpen(false)}
                style={{ minHeight: '48px' }}
              >
                For Agencies
              </a>
              <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200/50">
                <a href="https://app.chatpersona.ai/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 px-5 py-4 rounded-xl transition-all duration-300 font-semibold text-left text-lg touch-manipulation border border-transparent hover:border-purple-200 block w-full" style={{ minHeight: '48px' }}>
                  Login
                </a>
                <a href="https://chromewebstore.google.com/detail/ai-chat-tool-chatpersona/bgefplnmcbmcfjmggpjiadldmfiiecma?hl=en&authuser=0" target="_blank" rel="noopener noreferrer" className="relative group bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-bold px-8 py-4 rounded-xl w-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg touch-manipulation" style={{ minHeight: '56px' }}>
                  <span className="relative z-10 flex items-center justify-center">
                    Get Extension
                    <span className="ml-2 text-sm">🚀</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

