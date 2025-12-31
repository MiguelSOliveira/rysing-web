import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <footer className="bg-rysing-black border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold tracking-tighter text-white">RYSING</span>
              <p className="text-gray-500 text-sm mt-2">Armor against procrastination.</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/presskit" className="text-gray-500 hover:text-white transition-colors text-sm">Presskit</Link>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Discord</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Email</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center md:text-left">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Rysing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;