import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hammer } from 'lucide-react'; // <--- Import Hammer icon if you want
import Modal from './Modal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Engine', path: '/engine' },
    { name: 'Manifesto', path: '/manifesto' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Forge', path: '/forge' }, // <--- Add this
  ];

  const isActive = (path) => {
    return location.pathname === path ? 'text-rysing-gold' : 'text-gray-400 hover:text-white';
  };

  return (
      <>
        <nav className="fixed top-0 w-full z-40 bg-rysing-black/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
                  RYSING
                </Link>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {navLinks.map((link) => (
                      <Link
                          key={link.name}
                          to={link.path}
                          className={`${isActive(link.path)} px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2`}
                      >
                        {/* Optional: Add a subtle icon for the Forge to make it stand out */}
                        {link.name === 'Forge' && <Hammer size={14} className={isActive(link.path) ? "text-rysing-gold" : "text-gray-500"} />}
                        {link.name}
                      </Link>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="hidden md:block">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-rysing-gold text-black px-5 py-2 rounded text-sm font-bold hover:bg-rysing-gold/90 transition-all shadow-[0_0_15px_rgba(255,149,0,0.3)] hover:shadow-[0_0_25px_rgba(255,149,0,0.5)]"
                >
                  Join the Watch
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-400 hover:text-white p-2"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
              <div className="md:hidden bg-rysing-dark border-b border-white/5">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navLinks.map((link) => (
                      <Link
                          key={link.name}
                          to={link.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`${isActive(link.path)} block px-3 py-2 rounded-md text-base font-medium`}
                      >
                        {link.name}
                      </Link>
                  ))}
                  <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsModalOpen(true);
                      }}
                      className="w-full text-left mt-4 bg-rysing-gold text-black px-3 py-3 rounded-md text-base font-bold"
                  >
                    Join the Watch
                  </button>
                </div>
              </div>
          )}
        </nav>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
  );
};

export default Navbar;