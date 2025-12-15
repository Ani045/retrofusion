import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8">

          {/* Brand Section with Video - Takes More Space */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <img
                src="https://res.cloudinary.com/damfndmrm/image/upload/v1765779522/Retro_fusion_logo_nmc7kf.png"
                alt="Retrofusion Logo"
                className="h-16 sm:h-20 w-auto"
              />
            </div>

            <p className="text-stone-400 mb-6 leading-relaxed text-base">
              Experience the perfect blend of vintage charm and modern luxury in our boutique homestays nestled in the heart of Lonavala.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 hover:border-amber-500"
              >
                <SafeIcon icon={FiInstagram} className="w-5 h-5 text-stone-300 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 hover:border-amber-500"
              >
                <SafeIcon icon={FiFacebook} className="w-5 h-5 text-stone-300 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 hover:border-amber-500"
              >
                <SafeIcon icon={FiTwitter} className="w-5 h-5 text-stone-300 hover:text-white" />
              </a>
            </div>
          </div>


          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold mb-6 text-lg flex items-center">
              <span className="w-1 h-6 bg-amber-500 mr-3 rounded-full"></span>
              Get In Touch
            </h3>
            <div className="space-y-4">
              <a href="tel:+919876543210" className="flex items-start space-x-3 text-stone-400 hover:text-amber-400 transition-colors duration-200 group">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 group-hover:bg-amber-500/20 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <SafeIcon icon={FiPhone} className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 mb-1">Call Us</div>
                  <div className="font-medium">+91 98765 43210</div>
                </div>
              </a>

              <a href="mailto:stay@retrofusion.in" className="flex items-start space-x-3 text-stone-400 hover:text-amber-400 transition-colors duration-200 group">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 group-hover:bg-amber-500/20 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <SafeIcon icon={FiMail} className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 mb-1">Email</div>
                  <div className="font-medium">stay@retrofusion.in</div>
                </div>
              </a>

              <div className="flex items-start space-x-3 text-stone-400">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiMapPin} className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 mb-1">Location</div>
                  <div className="font-medium">Lonavala, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-stone-500 text-sm text-center md:text-left">
              © 2024 Retrofusion. All rights reserved.
            </p>
            <p className="text-stone-500 text-sm text-center md:text-right">
              Crafted with{' '}
              <span className="text-amber-500">♥</span>
              {' '}by Ruchi & Jitendra Arora
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;