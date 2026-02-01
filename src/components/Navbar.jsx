import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiChevronDown, FiChevronUp } = FiIcons;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileVillasOpen, setMobileVillasOpen] = useState(false);

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
  ];

  const villas = [
    {
      name: 'Retro Visawa',
      image: 'https://res.cloudinary.com/dprafk917/video/upload/so_2/v1769858399/8wr207mfxnrmy0cvd61bd2gn1g_result__viprl7.jpg',
      tagline: 'Spacious 4BHK with private pool for groups',
      path: '/viswa-villa'
    },
    {
      name: 'Neo Retro Villa',
      image: 'https://res.cloudinary.com/dprafk917/video/upload/so_2/v1768241694/1874704f-2b23-41a2-aa21-ca77ce4aaecd_ipao9k.jpg',
      tagline: 'Artistic retreat with jacuzzi & mountain views',
      path: '/neo-villa'
    },
    {
      name: 'Retro Villa',
      image: 'https://res.cloudinary.com/dprafk917/video/upload/so_3/v1769867671/final_nkd4ry.jpg',
      tagline: 'Vintage escape with plunge pool & terrace',
      path: '/retro-villa'
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
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://res.cloudinary.com/damfndmrm/image/upload/v1765779522/Retro_fusion_logo_nmc7kf.png"
                alt="Retrofusion Logo"
                className={`h-8 sm:h-14 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'
                  }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-colors font-medium text-lg relative group ${scrolled ? 'text-stone-800 hover:text-amber-600' : 'text-white hover:text-amber-400'
                    }`}
                >
                  <span className="text-sm sm:text-base lg:text-lg">{item.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* Our Villas with Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                <button className={`transition-colors font-medium text-lg flex items-center space-x-1 group ${scrolled ? 'text-stone-800 hover:text-amber-600' : 'text-white hover:text-amber-400'
                  }`}>
                  <span className="text-sm sm:text-base lg:text-lg">Our Villas</span>
                  <SafeIcon icon={FiChevronDown} className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
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
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-stone-200"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Logo in Mobile Menu */}
                <div className="flex justify-center mb-6">
                  <img
                    src="https://res.cloudinary.com/damfndmrm/image/upload/v1765779522/Retro_fusion_logo_nmc7kf.png"
                    alt="Retrofusion Logo"
                    className="h-14 w-auto"
                  />
                </div>

                {/* Navigation Items */}
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 text-stone-700 hover:text-amber-600 hover:bg-amber-50 font-medium text-base sm:text-lg rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Villas Collapsible */}
                <div className="border-t border-stone-200 pt-4">
                  <button
                    onClick={() => setMobileVillasOpen(!mobileVillasOpen)}
                    className="w-full flex items-center justify-between px-3 py-3 text-stone-700 hover:text-amber-600 font-medium text-base sm:text-lg"
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
                            className="block px-3 py-2 text-stone-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors text-base"
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

      {/* Desktop Mega Menu - Constrained Width with Border Radius */}
      <AnimatePresence>
        {showMegaMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 sm:top-20 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 lg:px-8"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <div className="w-full max-w-7xl bg-white shadow-2xl border border-stone-200 rounded-2xl overflow-hidden">
              <div className="px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-800" style={{ fontFamily: "'Marcellus', serif" }}>
                      Our <span className="text-amber-600">Villas</span>
                    </h3>
                    <p className="text-stone-500 text-sm mt-1">Discover our curated collection of luxury stays</p>
                  </div>
                  <Link
                    to="/about"
                    className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-1 transition-colors"
                  >
                    View all
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Villa Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                  {villas.map((villa) => (
                    <Link
                      key={villa.name}
                      to={villa.path}
                      className="group block"
                    >
                      <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
                        {/* Image */}
                        <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                          <img
                            src={villa.image}
                            alt={villa.name}
                            className="w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-125"
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent group-hover:from-black/85 transition-colors duration-300" />

                          {/* Villa Info on Image */}
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h4 className="text-lg lg:text-xl font-bold text-white mb-0.5 group-hover:text-amber-300 transition-colors" style={{ fontFamily: "'Marcellus', serif" }}>
                              {villa.name}
                            </h4>
                            <p className="text-white/80 text-xs font-light">
                              {villa.tagline}
                            </p>

                            {/* Explore Button */}
                            <div className="mt-2 flex items-center gap-1.5 text-amber-400 text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                              <span>Explore</span>
                              <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;