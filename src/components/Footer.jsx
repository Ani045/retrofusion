import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter } = FiIcons;

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-stone-300 overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,119,6,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,119,6,0.15),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">

          {/* Brand Section with Video - Takes More Space */}
          <div className="lg:col-span-5">
            {/* Logo Video */}
            <div className="mb-6 bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[280px] mx-auto lg:mx-0 rounded-xl"
              >
                <source src="/images/logo-intro-orange-2.mp4" type="video/mp4" />
              </video>
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

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-6 text-lg flex items-center">
              <span className="w-1 h-6 bg-amber-500 mr-3 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-stone-400 hover:text-amber-400 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-stone-400 hover:text-amber-400 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-400 hover:text-amber-400 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-stone-400 hover:text-amber-400 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/policies" className="text-stone-400 hover:text-amber-400 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
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