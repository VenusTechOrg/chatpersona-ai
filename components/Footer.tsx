'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 relative z-30 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description - Mobile optimized */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="text-xl sm:text-2xl">😈</div>
              <span className="font-bold text-lg sm:text-xl">CHATPERSONA AI</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 max-w-md leading-relaxed">
              Boost your revenue with AI-powered personas that engage your audience and increase your earnings by 10x.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="https://chromewebstore.google.com/detail/ai-chat-tool-chatpersona/bgefplnmcbmcfjmggpjiadldmfiiecma?hl=en&authuser=0" target="_blank" rel="noopener noreferrer" className="relative group bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base touch-manipulation">
                <span className="relative z-10">Get Extension</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="https://app.chatpersona.ai/" target="_blank" rel="noopener noreferrer" className="bg-white/80 backdrop-blur-sm text-purple-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-white w-full sm:w-auto text-sm sm:text-base touch-manipulation">
                Sign Up
              </a>
            </div>
          </div>

          {/* Quick Links - Mobile optimized */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#features" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="/#personas" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Personas</a></li>
              <li><a href="/#pricing" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/#testimonials" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Support - Mobile optimized */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="mailto:support@chatpersona.ai" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">support@chatpersona.ai</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left mb-3 sm:mb-0">
            © 2024 ChatPersona AI. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

