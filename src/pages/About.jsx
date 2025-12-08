import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiHome, FiStar, FiUsers, FiAward, FiTrendingUp } = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiHeart,
      title: 'Hospitality First',
      description: 'We believe in creating experiences that touch the heart and create lasting memories for every guest.'
    },
    {
      icon: FiHome,
      title: 'Home Away from Home',
      description: 'Our villas are designed to provide the comfort and warmth of home while offering luxury amenities.'
    },
    {
      icon: FiStar,
      title: 'Attention to Detail',
      description: 'Every element in our villas is carefully curated to ensure perfection in design and functionality.'
    },
    {
      icon: FiUsers,
      title: 'Community Connection',
      description: 'We celebrate local culture and connect our guests with the authentic spirit of Lonavala.'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Ruchi and Jitendra started Retrofusion with a vision to create unique homestay experiences.'
    },
    {
      year: '2021',
      title: 'First Villa',
      description: 'Retro Villa opened its doors, setting new standards for boutique accommodation in Lonavala.'
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Neo Retro and Retro Viswa were added to the collection, each with its own unique character.'
    },
    {
      year: '2024',
      title: 'Excellence Recognized',
      description: 'Retrofusion becomes the most sought-after boutique homestay brand in Lonavala.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-stone-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&h=1080&fit=crop)',
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto">
              A journey of passion, creativity, and dedication to creating exceptional hospitality experiences in the heart of Lonavala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                alt="Ruchi & Jitendra Arora"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
                Meet Ruchi & Jitendra Arora
              </h2>
              <p className="text-lg text-stone-600 mb-6">
                The visionary couple behind Retrofusion, Ruchi and Jitendra Arora, share a deep passion for design, hospitality, and creating spaces that tell stories. Their journey began with a simple dream: to offer travelers an experience that combines the warmth of Indian hospitality with contemporary luxury.
              </p>
              <p className="text-lg text-stone-600 mb-6">
                With backgrounds in design and business, they brought together their complementary skills to curate villas that reflect their love for vintage aesthetics and modern comfort. Every piece of furniture, every color choice, and every amenity has been personally selected by them.
              </p>
              <p className="text-lg text-stone-600 mb-8">
                "We believe that a great vacation home should feel like a warm embrace – familiar yet exciting, comfortable yet luxurious. Our guests don't just stay with us; they become part of our extended family." - Ruchi & Jitendra
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">500+</div>
                  <div className="text-stone-600">Happy Guests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">4.9</div>
                  <div className="text-stone-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">3</div>
                  <div className="text-stone-600">Unique Villas</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Our Values</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape every guest experience at Retrofusion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4">{value.title}</h3>
                <p className="text-stone-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Our Journey</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From a simple dream to becoming Lonavala's premier boutique homestay destination.
            </p>
          </motion.div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="bg-stone-50 p-8 rounded-2xl">
                    <div className="text-3xl font-bold text-amber-700 mb-2">{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-4">{milestone.title}</h3>
                    <p className="text-stone-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Philosophy</h2>
              <p className="text-xl text-stone-300 mb-6">
                At Retrofusion, we believe that travel is about more than just visiting a place – it's about experiencing it with all your senses, creating connections, and taking home memories that last a lifetime.
              </p>
              <p className="text-lg text-stone-400 mb-8">
                Our villas are not just accommodations; they are carefully crafted experiences that celebrate the beauty of vintage design while embracing modern comfort. We curate every detail to ensure that your stay becomes a cherished memory.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiAward} className="w-6 h-6 text-amber-400" />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-amber-400" />
                  <span>Continuous Innovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiHeart} className="w-6 h-6 text-amber-400" />
                  <span>Heartfelt Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiUsers} className="w-6 h-6 text-amber-400" />
                  <span>Community Focus</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop"
                alt="Villa Interior"
                className="w-full rounded-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=400&fit=crop"
                alt="Villa Pool"
                className="w-full rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Become Part of Our Story
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Experience the warmth, luxury, and unique character that define Retrofusion. Your story with us begins with a single stay.
            </p>
            <a
              href="tel:+919876543210"
              className="bg-white text-amber-700 hover:bg-stone-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Start Your Journey
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;