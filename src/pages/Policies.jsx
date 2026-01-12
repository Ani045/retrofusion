import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiClock, FiDollarSign, FiUsers, FiHome, FiAlertCircle } = FiIcons;

const Policies = () => {
  const policyCategories = [
    {
      icon: FiClock,
      title: 'Booking & Check-in',
      color: 'amber'
    },
    {
      icon: FiDollarSign,
      title: 'Payment & Cancellation',
      color: 'emerald'
    },
    {
      icon: FiUsers,
      title: 'Guest Guidelines',
      color: 'blue'
    },
    {
      icon: FiHome,
      title: 'Property Care',
      color: 'purple'
    },
    {
      icon: FiShield,
      title: 'Safety & Security',
      color: 'red'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dprafk917/image/upload/v1768230663/a613a1b2-edef-4242-8ee3-79ce77bae0e1_yi24hq.avif"
            alt="Policies"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-900/90"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-amber-400 uppercase tracking-[0.4em] text-sm md:text-base mb-6 block font-light">
              Our Policies
            </span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 leading-[0.9]"
              style={{ fontFamily: "'Marcellus', serif" }}
            >
              Policies & Guidelines
            </h1>
            <p className="text-stone-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Clear, fair policies designed to ensure a wonderful experience for all our guests while maintaining the quality and integrity of our properties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {policyCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-stone-50 rounded-2xl"
              >
                <div className={`w-16 h-16 bg-${category.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <SafeIcon icon={category.icon} className={`w-8 h-8 text-${category.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-stone-900">{category.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policies */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Booking & Check-in */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiClock} className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-stone-900">Booking & Check-in Policies</h2>
            </div>

            <div className="space-y-4 text-stone-700">
              <div>
                <h3 className="font-semibold mb-2">Check-in & Check-out Times</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Standard check-in: 2:00 PM</li>
                  <li>Standard check-out: 11:00 AM</li>
                  <li>Early check-in/late check-out subject to availability and additional charges</li>
                  <li>Late check-in (after 8:00 PM) requires prior coordination</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Booking Requirements</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Valid ID proof required for all guests during check-in</li>
                  <li>Advance payment of 50% required to confirm booking</li>
                  <li>Minimum stay of 2 nights during weekends and peak seasons</li>
                  <li>Group bookings (10+ guests) require special arrangements</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Age Restrictions</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Primary guest must be 21 years or older</li>
                  <li>Children under 12 stay free when sharing existing bedding</li>
                  <li>Adult supervision required for minors at all times</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Payment & Cancellation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-stone-900">Payment & Cancellation Policies</h2>
            </div>

            <div className="space-y-4 text-stone-700">
              <div>
                <h3 className="font-semibold mb-2">Payment Terms</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>50% advance payment required to confirm booking</li>
                  <li>Balance payment due at check-in or 48 hours before arrival</li>
                  <li>Security deposit of ₹10,000 required (refundable after inspection)</li>
                  <li>Additional charges for extra services settled at checkout</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Accepted Payment Methods</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bank transfer (preferred method)</li>
                  <li>UPI payments</li>
                  <li>Credit/Debit cards</li>
                  <li>Cash payments (for balance amount only)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Cancellation Policy</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Free cancellation up to 7 days before check-in</li>
                  <li>50% refund for cancellations 3-7 days before check-in</li>
                  <li>No refund for cancellations within 72 hours of check-in</li>
                  <li>No-show bookings are charged the full amount</li>
                  <li>Weather-related cancellations evaluated case by case</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Guest Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiUsers} className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-stone-900">Guest Guidelines</h2>
            </div>

            <div className="space-y-4 text-stone-700">
              <div>
                <h3 className="font-semibold mb-2">Occupancy Limits</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Retro Villa: Maximum 14 guests</li>
                  <li>Neo Retro: Maximum 10 guests</li>
                  <li>Retro Viswa: Maximum 8 guests</li>
                  <li>Extra guests not permitted without prior approval</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Noise & Behavior Policy</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Quiet hours from 10:00 PM to 8:00 AM</li>
                  <li>Music and loud activities restricted after 10:00 PM</li>
                  <li>Respectful behavior towards neighbors required</li>
                  <li>Pool parties must end by 9:00 PM</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Prohibited Activities</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Smoking inside the villa (designated outdoor areas available)</li>
                  <li>Illegal substances or activities</li>
                  <li>Unauthorized parties or events</li>
                  <li>Bringing outside vendors without permission</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Pet Policy</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Pets allowed with prior approval and additional charges</li>
                  <li>Pet deposit of ₹5,000 required</li>
                  <li>Pets must be supervised at all times</li>
                  <li>Cleaning charges apply if property is damaged</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Property Care */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiHome} className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-stone-900">Property Care Guidelines</h2>
            </div>

            <div className="space-y-4 text-stone-700">
              <div>
                <h3 className="font-semibold mb-2">General Care</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Treat the property as your own home</li>
                  <li>Report any damages or maintenance issues immediately</li>
                  <li>Use appliances and amenities responsibly</li>
                  <li>Keep the property clean and tidy during your stay</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Kitchen & Dining</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Clean utensils and appliances after use</li>
                  <li>Dispose of garbage in designated bins</li>
                  <li>No cooking with excessive oil or strong spices</li>
                  <li>Report any equipment malfunctions immediately</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Pool & Outdoor Areas</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Shower before entering the pool</li>
                  <li>No glass items near the pool area</li>
                  <li>Pool usage at your own risk (no lifeguard on duty)</li>
                  <li>Keep outdoor furniture in designated areas</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Damage Policy</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Guests liable for any damages beyond normal wear</li>
                  <li>Damage charges deducted from security deposit</li>
                  <li>Major damages may incur additional charges</li>
                  <li>Photographic evidence maintained for all damages</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Safety & Security */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiShield} className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-stone-900">Safety & Security Policies</h2>
            </div>

            <div className="space-y-4 text-stone-700">
              <div>
                <h3 className="font-semibold mb-2">Security Measures</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>CCTV cameras in common outdoor areas (not in private spaces)</li>
                  <li>Secure entry systems with unique access codes</li>
                  <li>24/7 emergency contact available</li>
                  <li>Regular security patrols in the neighborhood</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Emergency Procedures</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Emergency contact numbers provided at check-in</li>
                  <li>First aid kit available in each villa</li>
                  <li>Nearest hospital and police station details provided</li>
                  <li>Fire safety equipment installed and maintained</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Guest Safety Guidelines</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Lock all doors and windows when leaving the property</li>
                  <li>Do not share access codes with unauthorized persons</li>
                  <li>Report suspicious activities immediately</li>
                  <li>Keep valuable items in provided safe lockers</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Health & Safety</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Swimming pool usage at guest's own risk</li>
                  <li>No diving allowed in shallow areas</li>
                  <li>Children must be supervised near water bodies</li>
                  <li>Inform us of any medical conditions requiring special attention</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-amber-50 border-l-4 border-amber-400 p-8 rounded-r-2xl"
          >
            <div className="flex items-start space-x-4">
              <SafeIcon icon={FiAlertCircle} className="w-6 h-6 text-amber-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-3">Important Notice</h3>
                <div className="text-amber-700 space-y-2">
                  <p>
                    These policies are designed to ensure a pleasant stay for all guests and to maintain the quality of our properties.
                    Violation of any policy may result in immediate termination of stay without refund.
                  </p>
                  <p>
                    We reserve the right to modify these policies as needed. Updated policies will be communicated to guests
                    at the time of booking or through official channels.
                  </p>
                  <p>
                    For any questions or clarifications regarding these policies, please contact us before your arrival.
                    We're here to help ensure your stay is comfortable and enjoyable.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Questions About Our Policies?</h2>
            <p className="text-xl text-amber-100 mb-8">
              Our team is here to clarify any doubts and ensure you have all the information needed for a perfect stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="bg-white text-amber-700 hover:bg-stone-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                Call Us: +91 98765 43210
              </a>
              <a
                href="mailto:stay@retrofusion.in"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-700 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                Email: stay@retrofusion.in
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Policies;