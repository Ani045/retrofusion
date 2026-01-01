import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiWifi, FiTv, FiCoffee, FiCar, FiPhone, FiMapPin, FiStar, FiCheck, FiDroplet, FiSun, FiHome, FiCamera } = FiIcons;

const NeoVillaPage = () => {
    const villa = {
        name: 'Neo Villa',
        tagline: 'Contemporary Design Meets Classic Comfort',
        description: 'Experience the perfect blend of modern architecture and timeless elegance at Neo Villa. This contemporary homestay features sleek interiors, premium amenities, and thoughtfully designed spaces that create an atmosphere of sophisticated comfort.',
        longDescription: 'Neo Villa represents the pinnacle of modern hospitality design. With its clean lines, open spaces, and carefully curated contemporary furnishings, this villa offers guests a refined experience. The property features state-of-the-art amenities including a private pool, modern kitchen, and spacious bedrooms designed for ultimate relaxation.',
        heroImage: '/images/neo.webp',
        guests: '10-12',
        bedrooms: '4',
        bathrooms: '4',
        area: '3500 sq ft',
        location: 'Lonavala, Maharashtra',
        highlights: [
            'Modern Architecture',
            'Private Swimming Pool',
            'Contemporary Interiors',
            'Premium Furnishing',
            'Spacious Bedrooms',
            'Mountain Views',
            'BBQ Area',
            'Perfect for Groups'
        ],
        amenities: [
            { icon: FiWifi, name: 'High-Speed WiFi' },
            { icon: FiTv, name: 'Smart TV in all rooms' },
            { icon: FiCoffee, name: 'Modern Kitchen' },
            { icon: FiCar, name: 'Private Parking' },
            { icon: FiDroplet, name: 'Private Pool' },
            { icon: FiSun, name: 'Outdoor Terrace' },
            { icon: FiHome, name: 'Spacious Living' },
            { icon: FiCamera, name: 'Scenic Views' }
        ],
        gallery: [
            '/images/neo.webp',
            '/images/gallery/neo1.jpg',
            '/images/gallery/neo2.jpg',
            '/images/gallery/neo3.jpg',
            '/images/gallery/neo4.jpg',
            '/images/gallery/neo5.jpg'
        ]
    };

    const faqs = [
        {
            question: 'What is the check-in and check-out time?',
            answer: 'Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out can be arranged subject to availability.'
        },
        {
            question: 'Does Neo Villa have a private pool?',
            answer: 'Yes, Neo Villa features its own private swimming pool exclusively for guests during their stay.'
        },
        {
            question: 'Are pets allowed?',
            answer: 'We welcome well-behaved pets with prior approval. Additional charges may apply for pet accommodation.'
        },
        {
            question: 'What amenities are included?',
            answer: 'Your stay includes access to all villa amenities, complimentary WiFi, parking, modern kitchen facilities, and 24/7 support. Meals can be arranged separately.'
        },
        {
            question: 'How far is Neo Villa from the main attractions?',
            answer: 'Neo Villa is strategically located within easy reach of Lonavala\'s main attractions, typically 10-20 minutes by car.'
        }
    ];

    const nearbyAttractions = [
        { name: 'Tiger\'s Leap', distance: '3 km', description: 'Scenic cliff-top point with panoramic valley views' },
        { name: 'Bhushi Dam', distance: '5 km', description: 'Popular water cascades and picnic spot' },
        { name: 'Karla Caves', distance: '12 km', description: 'Ancient Buddhist rock-cut caves' },
        { name: 'Rajmachi Fort', distance: '15 km', description: 'Historic fort with trekking trails' }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${villa.heroImage})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
                </div>

                <div className="relative z-10 h-full flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center text-white max-w-7xl mx-auto px-4"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-amber-400 text-sm md:text-base uppercase tracking-[0.3em] mb-4"
                        >
                            Retrofusion Presents
                        </motion.p>
                        <h1
                            className="text-5xl md:text-7xl font-bold mb-4"
                            style={{ fontFamily: "'Marcellus', serif" }}
                        >
                            {villa.name}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-stone-200">{villa.tagline}</p>

                        <div className="flex flex-wrap justify-center gap-6 mb-8 text-lg">
                            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <SafeIcon icon={FiUsers} className="w-5 h-5 text-amber-400" />
                                <span>Up to {villa.guests} Guests</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <SafeIcon icon={FiHome} className="w-5 h-5 text-amber-400" />
                                <span>{villa.bedrooms} Bedrooms</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-amber-400" />
                                <span>{villa.location}</span>
                            </div>
                        </div>

                        <a
                            href="tel:+919876543210"
                            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2 hover:scale-105"
                        >
                            <SafeIcon icon={FiPhone} className="w-5 h-5" />
                            <span>Book Now</span>
                        </a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-xs uppercase tracking-[0.2em] text-white/60">Explore</span>
                        <div className="w-[1px] h-8 bg-gradient-to-b from-amber-400/50 to-transparent"></div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Villa Details */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-stone-900 mb-6" style={{ fontFamily: "'Marcellus', serif" }}>
                                Modern <span className="text-amber-600">Luxury</span>
                            </h2>
                            <p className="text-lg text-stone-600 mb-6">{villa.description}</p>
                            <p className="text-lg text-stone-600 mb-8">{villa.longDescription}</p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-6 bg-gradient-to-br from-white to-stone-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-200">
                                    <div className="text-3xl font-bold text-amber-700">{villa.guests}</div>
                                    <div className="text-stone-600 font-medium">Guests</div>
                                </div>
                                <div className="text-center p-6 bg-gradient-to-br from-white to-stone-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-200">
                                    <div className="text-3xl font-bold text-amber-700">{villa.bedrooms}</div>
                                    <div className="text-stone-600 font-medium">Bedrooms</div>
                                </div>
                                <div className="text-center p-6 bg-gradient-to-br from-white to-stone-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-200">
                                    <div className="text-3xl font-bold text-amber-700">{villa.bathrooms}</div>
                                    <div className="text-stone-600 font-medium">Bathrooms</div>
                                </div>
                                <div className="text-center p-6 bg-gradient-to-br from-white to-stone-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-200">
                                    <div className="text-3xl font-bold text-amber-700">{villa.area}</div>
                                    <div className="text-stone-600 text-sm font-medium">Total Area</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-4" style={{ fontFamily: "'Marcellus', serif" }}>Villa Highlights</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {villa.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-center space-x-3 bg-stone-50 px-4 py-3 rounded-xl hover:bg-amber-50 transition-colors duration-300">
                                            <SafeIcon icon={FiCheck} className="w-5 h-5 text-amber-600" />
                                            <span className="text-stone-700 font-medium">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-4" style={{ fontFamily: "'Marcellus', serif" }}>Amenities</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {villa.amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white to-stone-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-200">
                                            <SafeIcon icon={amenity.icon} className="w-6 h-6 text-amber-600" />
                                            <span className="text-stone-700 font-medium">{amenity.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-stone-900 mb-6" style={{ fontFamily: "'Marcellus', serif" }}>
                            Villa <span className="text-amber-600">Gallery</span>
                        </h2>
                        <p className="text-xl text-stone-600">A visual journey through your contemporary retreat</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {villa.gallery.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-stone-200 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`Neo Villa Gallery ${index + 1}`}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    style={{ minHeight: index === 0 ? '400px' : '200px' }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nearby Attractions */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-stone-900 mb-6" style={{ fontFamily: "'Marcellus', serif" }}>
                            Nearby <span className="text-amber-600">Attractions</span>
                        </h2>
                        <p className="text-xl text-stone-600">Explore the beauty and culture around Neo Villa</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {nearbyAttractions.map((attraction, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-white to-stone-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-200 hover:scale-[1.02]"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-stone-900" style={{ fontFamily: "'Marcellus', serif" }}>{attraction.name}</h3>
                                    <span className="text-amber-600 font-semibold bg-amber-50 px-3 py-1 rounded-full text-sm">{attraction.distance}</span>
                                </div>
                                <p className="text-stone-600 leading-relaxed">{attraction.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-stone-900 mb-6" style={{ fontFamily: "'Marcellus', serif" }}>
                            Frequently Asked <span className="text-amber-600">Questions</span>
                        </h2>
                        <p className="text-xl text-stone-600">Everything you need to know about your stay</p>
                    </motion.div>

                    <div className="space-y-6 max-w-4xl mx-auto">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-white to-stone-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-200"
                            >
                                <h3 className="text-xl font-bold text-stone-900 mb-4" style={{ fontFamily: "'Marcellus', serif" }}>{faq.question}</h3>
                                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Marcellus', serif" }}>
                            Ready to Experience Neo Villa?
                        </h2>
                        <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                            Book your stay now and immerse yourself in contemporary luxury at our modern retreat in Lonavala
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+919876543210"
                                className="bg-white text-amber-700 hover:bg-stone-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 hover:scale-105"
                            >
                                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                                <span>Call to Book</span>
                            </a>
                            <Link
                                to="/contact"
                                className="border-2 border-white text-white hover:bg-white hover:text-amber-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
                            >
                                Send Enquiry
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default NeoVillaPage;