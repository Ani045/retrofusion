import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX } = FiIcons;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'interior', name: 'Interior' },
    { id: 'amenities', name: 'Amenities' },
    { id: 'views', name: 'Views' }
  ];

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      category: 'exterior',
      title: 'Retro Villa Exterior',
      description: 'Beautiful facade with vintage charm'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop',
      category: 'amenities',
      title: 'Private Swimming Pool',
      description: 'Relax in your own private oasis'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      category: 'interior',
      title: 'Living Room',
      description: 'Spacious and elegantly furnished'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      category: 'interior',
      title: 'Master Bedroom',
      description: 'Comfortable luxury with retro touches'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
      category: 'exterior',
      title: 'Neo Retro Villa',
      description: 'Modern architecture meets vintage design'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
      category: 'interior',
      title: 'Dining Area',
      description: 'Perfect for family meals and gatherings'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      category: 'amenities',
      title: 'Kitchen',
      description: 'Fully equipped modern kitchen'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      category: 'interior',
      title: 'Cozy Corner',
      description: 'Comfortable seating with vintage charm'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      category: 'views',
      title: 'Lonavala Hills',
      description: 'Scenic mountain views from the villa'
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop',
      category: 'views',
      title: 'Monsoon Magic',
      description: 'Lush greenery during monsoon season'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
      category: 'amenities',
      title: 'Outdoor Dining',
      description: 'Al fresco dining experience'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
      category: 'exterior',
      title: 'Garden Area',
      description: 'Beautifully landscaped gardens'
    }
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dprafk917/image/upload/v1768230663/a613a1b2-edef-4242-8ee3-79ce77bae0e1_yi24hq.avif"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-amber-400 uppercase tracking-[0.4em] text-sm md:text-base mb-6 block font-light">
              Visual Journey
            </span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 leading-[0.9]"
              style={{ fontFamily: "'Marcellus', serif" }}
            >
              Gallery
            </h1>
            <p className="text-stone-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Discover the beauty, comfort, and unique character of our boutique villas through our curated collection of images.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${selectedCategory === category.id
                  ? 'bg-amber-700 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                      <p className="text-stone-200 text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
            >
              <SafeIcon icon={FiX} className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-stone-200">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience This Beauty?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Book your stay and immerse yourself in the luxury and comfort of our boutique villas.
            </p>
            <a
              href="tel:+919876543210"
              className="bg-white text-amber-700 hover:bg-stone-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Book Your Stay Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;