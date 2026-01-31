import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiMessageCircle, FiUser, FiCalendar, FiUsers, FiHome } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    villa: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      details: '+91 89990 36644',
      action: 'tel:+918999036644'
    },
    {
      icon: FiMail,
      title: 'Email',
      details: 'retrofusion2023@gmail.com',
      action: 'mailto:retrofusion2023@gmail.com'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      details: 'Lonavala, Maharashtra',
      action: null
    },
    {
      icon: FiClock,
      title: 'Response Time',
      details: 'Within 2 hours',
      action: null
    }
  ];

  return (
    <div className="bg-stone-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[68vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dprafk917/image/upload/v1768230663/a613a1b2-edef-4242-8ee3-79ce77bae0e1_yi24hq.avif"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-amber-400 uppercase tracking-[0.4em] text-sm md:text-base mb-6 block font-light">
              Contact Us
            </span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 leading-[0.9]"
              style={{ fontFamily: "'Marcellus', serif" }}
            >
              Get in Touch
            </h1>
            <p className="text-stone-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Ready to experience luxury and comfort at Retrofusion? We're here to help you plan the perfect getaway.
            </p>
          </div>
        </div>


      </section>

      {/* Contact Info Strip */}
      <section className="bg-stone-900 py-8 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <SafeIcon icon={info.icon} className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-white font-semibold mb-1" style={{ fontFamily: "'Marcellus', serif" }}>{info.title}</h3>
                {info.action ? (
                  <a href={info.action} className="text-stone-400 hover:text-amber-400 transition-colors text-sm">
                    {info.details}
                  </a>
                ) : (
                  <p className="text-stone-400 text-sm">{info.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section with Form & Image */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Contact Form */}
            <div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl"
            >
              <div className="mb-8">
                <span className="text-amber-600 uppercase tracking-[0.3em] text-xs font-medium">Book Your Stay</span>
                <h2
                  className="text-3xl lg:text-4xl font-bold text-stone-900 mt-2"
                  style={{ fontFamily: "'Marcellus', serif" }}
                >
                  Send Us a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-stone-600 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-stone-600 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 text-sm font-medium mb-2">
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                    >
                      <option value="">Select guests</option>
                      <option value="2-4">2-4 Guests</option>
                      <option value="5-8">5-8 Guests</option>
                      <option value="9-12">9-12 Guests</option>
                      <option value="13+">13+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-stone-600 text-sm font-medium mb-2">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 text-sm font-medium mb-2">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-600 text-sm font-medium mb-2">
                    Preferred Villa
                  </label>
                  <select
                    name="villa"
                    value={formData.villa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                  >
                    <option value="">Any villa</option>
                    <option value="retro-villa">Retro Villa</option>
                    <option value="neo-retro">Neo Retro</option>
                    <option value="retro-viswa">Retro Viswa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-600 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/25"
                >
                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Right Side - Image & Quick Contact */}
            <div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Featured Image */}
              <div className="relative rounded-3xl overflow-hidden h-72 lg:h-80">
                <img
                  src="https://res.cloudinary.com/dprafk917/image/upload/v1768230664/91a15ba5-b5da-4618-b585-5d7f92fa5df3_yqcadt.avif"
                  alt="Retrofusion Villa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-1" style={{ fontFamily: "'Marcellus', serif" }}>
                    Experience Luxury in Lonavala
                  </h3>
                  <p className="text-stone-300 text-sm">Your perfect getaway awaits</p>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-stone-900 p-8 rounded-3xl">
                <h3
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Marcellus', serif" }}
                >
                  Quick Booking
                </h3>
                <p className="text-stone-400 mb-6 text-sm leading-relaxed">
                  For immediate bookings or urgent queries, call us directly. We're available to assist you with your stay.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+918999036644"
                    className="flex items-center gap-3 w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-5 rounded-xl font-semibold transition-colors"
                  >
                    <SafeIcon icon={FiPhone} className="w-5 h-5" />
                    <span>+91 89990 36644</span>
                  </a>
                  <a
                    href="mailto:retrofusion2023@gmail.com"
                    className="flex items-center gap-3 w-full border-2 border-white/20 text-white hover:bg-white/10 py-3 px-5 rounded-xl font-semibold transition-colors"
                  >
                    <SafeIcon icon={FiMail} className="w-5 h-5" />
                    <span>retrofusion2023@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Location Highlights */}
              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold text-stone-900 mb-4" style={{ fontFamily: "'Marcellus', serif" }}>
                  Location Highlights
                </h3>
                <ul className="space-y-3 text-stone-600 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    10 minutes from Lonavala Railway Station
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    5 minutes from Tiger's Leap
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    15 minutes from Bhushi Dam
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    Peaceful residential area
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative">
        <div className="h-80 md:h-96 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15109.873760341943!2d73.38454500000002!3d18.777266000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be801aa57c6135d%3A0x824b8eb6beb6dd96!2sRetro!5e0!3m2!1sen!2sin!4v1768252896855!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Retrofusion Location"
          ></iframe>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg">
          <p className="text-stone-900 font-medium text-sm flex items-center gap-2">
            <SafeIcon icon={FiMapPin} className="w-4 h-4 text-amber-500" />
            Lonavala, Maharashtra, India
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dprafk917/image/upload/v1768230663/5d93e66d-23b4-4578-bb58-35032b8b39b8_cftv5v.avif"
            alt="Villa Experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-400 uppercase tracking-[0.4em] text-sm mb-4 block">
              Ready to Experience
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Marcellus', serif" }}
            >
              Your Perfect Getaway Awaits
            </h2>
            <p className="text-stone-300 text-lg mb-8 max-w-2xl mx-auto">
              Book your stay at one of our luxurious villas and experience the perfect blend of vintage charm and modern comfort.
            </p>
            <a
              href="tel:+918999036644"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-amber-500/25"
            >
              <SafeIcon icon={FiPhone} className="w-5 h-5" />
              Book Now: +91 89990 36644
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;