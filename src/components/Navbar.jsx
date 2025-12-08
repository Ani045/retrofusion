import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiChevronDown, FiChevronUp } = FiIcons;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileVillasOpen, setMobileVillasOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Resources', path: '/resources' },
  ];

  const villas = [
    {
      name: 'Retro Villa',
      image: '/images/retro.webp',
      tagline: 'Vintage charm meets modern luxury',
      path: '/villa/retro'
    },
    {
      name: 'Neo Villa',
      image: '/images/neo.webp',
      tagline: 'Contemporary design with classic comfort',
      path: '/villa/neo'
    },
    {
      name: 'Visawa Villa',
      image: '/images/retro.webp',
      tagline: 'Serene escape with premium amenities',
      path: '/villa/visawa'
    }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Video */}
            <Link to="/" className="flex items-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-12 w-auto"
              >
                <source src="/images/logo-intro-orange-2.mp4" type="video/mp4" />
              </video>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-colors font-medium relative group ${scrolled ? 'text-stone-800 hover:text-amber-600' : 'text-white hover:text-amber-400'
                    } ${location.pathname === item.path ? 'text-amber-600' : ''}`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* Our Villas with Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                <button className={`transition-colors font-medium flex items-center space-x-1 group ${scrolled ? 'text-stone-800 hover:text-amber-600' : 'text-white hover:text-amber-400'
                  }`}>
                  <span>Our Villas</span>
                  <SafeIcon icon={FiChevronDown} className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`transition-colors ${scrolled ? 'text-stone-700' : 'text-white'} hover:text-amber-600`}
              >
                <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-stone-200"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Logo Video in Mobile Menu */}
                <div className="flex justify-center mb-6">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-10 w-auto"
                  >
                    <source src="/images/logo-intro-orange-2.mp4" type="video/mp4" />
                  </video>
                </div>

                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 text-stone-700 hover:text-amber-600 hover:bg-amber-50 font-medium rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Villas Collapsible */}
                <div className="border-t border-stone-200 pt-4">
                  <button
                    onClick={() => setMobileVillasOpen(!mobileVillasOpen)}
                    className="w-full flex items-center justify-between px-3 py-3 text-stone-700 hover:text-amber-600 font-medium"
                  >
                    <span>Our Villas</span>
                    <SafeIcon icon={mobileVillasOpen ? FiChevronUp : FiChevronDown} className="w-4 h-4" />
                  </button>

                  <AnimatePresence>
                    {mobileVillasOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-2 space-y-2"
                      >
                        {villas.map((villa) => (
                          <Link
                            key={villa.name}
                            to={villa.path}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileVillasOpen(false);
                            }}
                            className="block px-3 py-2 text-stone-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                          >
                            {villa.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {showMegaMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white shadow-xl border-t border-stone-200"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-3 gap-8">
                {villas.map((villa) => (
                  <Link
                    key={villa.name}
                    to={villa.path}
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={villa.image}
                        alt={villa.name}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-stone-800 group-hover:text-amber-600 transition-colors">
                      {villa.name}
                    </h3>
                    <p className="text-stone-600 mt-1">
                      {villa.tagline}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;