import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiLinkedin, FiArrowRight, FiStar } = FiIcons;

const Footer = () => {
  const villas = [
    {
      name: 'Retro Villa',
      address: 'Lonavala, Maharashtra',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15109.873760341943!2d73.38454500000002!3d18.777266000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be801aa57c6135d%3A0x824b8eb6beb6dd96!2sRetro!5e0!3m2!1sen!2sin!4v1768252896855!5m2!1sen!2sin'
    },
    {
      name: 'Neo Retro',
      address: 'Lonavala, Maharashtra',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.8224756767913!2d73.40316217536163!3d18.7614649823795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8012168808e5d%3A0xdf3e3ee6735ba0dd!2sNeo%20Retro%2C%20An%20Artist&#39;s%20Delight!5e0!3m2!1sen!2sin!4v1768253378393!5m2!1sen!2sin'
    },
    {
      name: 'Retro Viswa',
      address: 'Lonavala, Maharashtra',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.5261563188674!2d73.38618412536205!3d18.774690932368895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8019b5d5ccae7%3A0xc6fc42bf9baf54a!2sRetro%20Visawa!5e0!3m2!1sen!2sin!4v1768252988545!5m2!1sen!2sin'
    }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/about' },
    { name: 'Neo Retro Villa', path: '/neo-villa' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Cancellation Policy', path: '/' },
    { name: 'Privacy Policy', path: '/' },
    { name: 'Terms & Conditions', path: '/' },
  ];

  const villaLinks = [
    { name: 'Retro Villa', path: '/' },
    { name: 'Neo Retro Villa', path: '/neo-villa' },
    { name: 'Retro Visawa', path: '/viswa-villa' },
  ];

  return (
    <footer className="bg-stone-900 text-stone-300 relative overflow-hidden">


      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">

        {/* Top Section - Brand & CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16 pb-12 border-b border-white/10">
          <div className="flex-1">
            <img
              src="https://res.cloudinary.com/damfndmrm/image/upload/v1765779522/Retro_fusion_logo_nmc7kf.png"
              alt="Retrofusion Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-stone-400 max-w-md leading-relaxed text-sm">
              We are a homestay brand in the holiday capital of Maharashtra, Lonavala. We believe in creating a cozy hospitable tapestry for our clients, helping them realise the intimate joys of villa living.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 text-amber-400">
              <SafeIcon icon={FiStar} className="w-5 h-5 fill-amber-400" />
              <SafeIcon icon={FiStar} className="w-5 h-5 fill-amber-400" />
              <SafeIcon icon={FiStar} className="w-5 h-5 fill-amber-400" />
              <SafeIcon icon={FiStar} className="w-5 h-5 fill-amber-400" />
              <SafeIcon icon={FiStar} className="w-5 h-5 fill-amber-400" />
              <span className="text-white text-sm ml-2">500+ Happy Guests</span>
            </div>
            <a
              href="tel:+918999036644"
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/25 text-sm flex items-center gap-2"
            >
              <SafeIcon icon={FiPhone} className="w-4 h-4" />
              Book Now
            </a>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-4">
              <a href="tel:+918999036644" className="flex items-center gap-3 text-stone-400 hover:text-amber-400 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-amber-500/20 flex items-center justify-center transition-colors">
                  <SafeIcon icon={FiPhone} className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs text-stone-500">Call Us</p>
                  <p className="text-sm text-white">+91 89990 36644</p>
                </div>
              </a>
              <a href="mailto:retrofusion2023@gmail.com" className="flex items-center gap-3 text-stone-400 hover:text-amber-400 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-amber-500/20 flex items-center justify-center transition-colors">
                  <SafeIcon icon={FiMail} className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs text-stone-500">Email Us</p>
                  <p className="text-sm text-white">retrofusion2023@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a href="https://www.instagram.com/retrofusion.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300">
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/retrofusion.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-all duration-300">
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/retrofusion/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-blue-700 flex items-center justify-center transition-all duration-300">
                <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-stone-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group">
                    <SafeIcon icon={FiArrowRight} className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Villas */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Our Villas</h4>
            <ul className="space-y-3">
              {villaLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-stone-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group">
                    <SafeIcon icon={FiArrowRight} className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://www.linkedin.com/company/retrofusion/posts/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group">
                  <SafeIcon icon={FiArrowRight} className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">LinkedIn Articles</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-stone-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group">
                    <SafeIcon icon={FiArrowRight} className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Maps Section */}
        <div className="mb-12">
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider flex items-center gap-3">
            <SafeIcon icon={FiMapPin} className="w-5 h-5 text-amber-500" />
            Our Locations
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {villas.map((villa, index) => (
              <div key={index} className="overflow-hidden">
                <div className="h-40 w-full rounded-xl overflow-hidden">
                  <iframe
                    src={villa.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${villa.name} Map`}
                  ></iframe>
                </div>
                <p className="text-white text-sm mt-3 hover:text-amber-400 transition-colors cursor-pointer">{villa.name}, {villa.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-xs text-center md:text-left">
              © 2025 RETROFUSION BOUTIQUE HOMESTAYS LLP. All Rights Reserved.
            </p>
            <p className="text-stone-500 text-xs text-center md:text-right flex items-center gap-1">
              Crafted with <span className="text-amber-500 text-base">♥</span> in Lonavala, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;