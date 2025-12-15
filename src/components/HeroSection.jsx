import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronLeft, FiChevronRight } = FiIcons;

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/retro.webp',
      title: 'Vintage-Chic Villas with',
      highlight: 'Private Pools',
      subtitle: 'in Lonavala',
      description: 'Where nostalgic charm meets modern luxury. Experience boutique comfort in our thoughtfully curated homestays.'
    },
    {
      image: '/images/neo.webp',
      title: 'Contemporary Luxury',
      highlight: 'Villa Retreats',
      subtitle: 'Premium Accommodations',
      description: 'Discover our Neo Villa collection featuring modern architecture with timeless elegance and world-class amenities.'
    },
    {
      image: '/images/retro.webp',
      title: 'Serene Escapes at',
      highlight: 'Visawa Villa',
      subtitle: 'Tranquil Paradise',
      description: 'Immerse yourself in nature while enjoying premium comfort at our flagship villa with breathtaking views.'
    }
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/45"></div>
            </div>
          )
        ))}
      </AnimatePresence>
      
      {/* Content */}
      <AnimatePresence mode="wait">
        <div
          key={currentSlide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-7xl mx-auto px-4"
        >
          {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}<br />
            <span className="text-amber-400">{slides[currentSlide].highlight}</span>
            {slides[currentSlide].subtitle && (
              <><br /><span className="text-3xl md:text-5xl lg:text-6xl">{slides[currentSlide].subtitle}</span></>
            )}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-stone-200 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].description}
          </p> */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 hover:scale-105"
            >
              <span>Book Your Stay</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </a>
            <Link
              to="/gallery"
              className="border-2 border-white text-white hover:bg-white hover:text-stone-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View Gallery
            </Link>
          </div> */}
        </div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-amber-400 scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;