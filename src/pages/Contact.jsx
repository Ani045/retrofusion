import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiMessageCircle, FiUser, FiCalendar } = FiIcons;

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
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      details: '+91 98765 43210',
      description: 'Call us anytime for bookings and queries',
      action: 'tel:+919876543210'
    },
    {
      icon: FiMail,
      title: 'Email',
      details: 'stay@retrofusion.in',
      description: 'Send us your detailed requirements',
      action: 'mailto:stay@retrofusion.in'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      details: 'Lonavala, Maharashtra',
      description: 'Beautiful hill station in Western Ghats',
      action: null
    },
    {
      icon: FiClock,
      title: 'Response Time',
      details: 'Within 2 hours',
      description: 'We respond quickly to all inquiries',
      action: null
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Ready to experience luxury and comfort at Retrofusion? We're here to help you plan the perfect stay in Lonavala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={info.icon} className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{info.title}</h3>
                {info.action ? (
                  <a
                    href={info.action}
                    className="text-lg font-semibold text-amber-700 hover:text-amber-800 transition-colors block mb-2"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-lg font-semibold text-amber-700 mb-2">{info.details}</p>
                )}
                <p className="text-stone-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-stone-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">
                      <SafeIcon icon={FiUser} className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">
                      <SafeIcon icon={FiMail} className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">
                      <SafeIcon icon={FiPhone} className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    >
                      <option value="">Select guests</option>
                      <option value="2-4">2-4 Guests</option>
                      <option value="5-8">5-8 Guests</option>
                      <option value="9-12">9-12 Guests</option>
                      <option value="13+">13+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 inline mr-2" />
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 inline mr-2" />
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-2">
                    Preferred Villa
                  </label>
                  <select
                    name="villa"
                    value={formData.villa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  >
                    <option value="">Any villa</option>
                    <option value="retro-villa">Retro Villa (12-14 guests)</option>
                    <option value="neo-retro">Neo Retro (8-10 guests)</option>
                    <option value="retro-viswa">Retro Viswa (6-8 guests)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-2">
                    <SafeIcon icon={FiMessageCircle} className="w-4 h-4 inline mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                    placeholder="Tell us about your requirements, special occasions, or any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-stone-900 mb-6">Visit Us in Lonavala</h2>
                
                {/* Map Placeholder */}
                <div className="bg-stone-200 h-64 rounded-2xl mb-6 flex items-center justify-center">
                  <div className="text-center text-stone-600">
                    <SafeIcon icon={FiMapPin} className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Lonavala, Maharashtra, India</p>
                  </div>
                </div>

                <div className="bg-stone-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-stone-900 mb-4">Location Highlights</h3>
                  <ul className="space-y-2 text-stone-600">
                    <li>• 10 minutes from Lonavala Railway Station</li>
                    <li>• 5 minutes from Tiger's Leap</li>
                    <li>• 15 minutes from Bhushi Dam</li>
                    <li>• Easy access to major attractions</li>
                    <li>• Peaceful residential area</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">Quick Booking</h3>
                <p className="text-stone-600 mb-6">
                  For immediate bookings or urgent queries, call us directly. We're available to assist you with your stay requirements.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+919876543210"
                    className="block w-full bg-amber-700 hover:bg-amber-800 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                  >
                    Call Now: +91 98765 43210
                  </a>
                  <a
                    href="mailto:stay@retrofusion.in"
                    className="block w-full border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white text-center py-3 rounded-lg font-semibold transition-colors"
                  >
                    Email: stay@retrofusion.in
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-stone-600">Quick answers to common questions about bookings and stays</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'How far in advance should I book?',
                answer: 'We recommend booking at least 2-3 weeks in advance, especially during peak seasons (October-March) and weekends. However, we also accommodate last-minute bookings subject to availability.'
              },
              {
                question: 'What is your cancellation policy?',
                answer: 'Cancellations made 7 days prior to check-in receive a full refund. Cancellations within 7 days are subject to a 50% charge. No-shows are charged the full amount.'
              },
              {
                question: 'Do you provide transportation from the station?',
                answer: 'Yes, we can arrange pickup and drop services from Lonavala railway station at an additional charge. Please mention this requirement when booking.'
              },
              {
                question: 'Are meals included in the stay?',
                answer: 'Our villas come with fully equipped kitchens for self-catering. We can also arrange for a cook or catered meals at an additional cost with advance notice.'
              },
              {
                question: 'Is the swimming pool heated?',
                answer: 'Our pools are not heated but are maintained at comfortable temperatures. During winter months, pool usage depends on weather conditions.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm"
              >
                <h3 className="text-lg font-bold text-stone-900 mb-3">{faq.question}</h3>
                <p className="text-stone-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;