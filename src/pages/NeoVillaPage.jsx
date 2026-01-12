import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiWifi, FiTv, FiCoffee, FiCar, FiPhone, FiMapPin, FiStar, FiCheck, FiDroplet, FiSun, FiHome, FiCamera, FiHeart } = FiIcons;

const NeoVillaPage = () => {
    const villa = {
        name: 'Neo-Retro Villa',
        tagline: 'Luxurious 4 BHK Villa in Lonavala with Swimming Pool',
        subtitle: 'An Artistic Retreat',
        description: 'Discover the seamless blend of art, luxury, and nature at Neo-Retro Villa, Retrofusion\'s crown jewel nestled in the tranquil landscape of Lonavala. This spacious 4 BHK Villa in Lonavala with Swimming Pool is not just a place to stay; it\'s an immersive experience designed for art lovers, romantics, and those seeking a serene escape.',
        longDescription: 'Experience the sublime fusion of art, luxury, and nature in Khandala\'s serene backdrop. An artistically themed villa with state-of-the-art amenities & scenic views, offering mesmerising mountain landscapes, comfort & luxury with themed bedrooms, jacuzzi, steam bath, and plunge pool.',
        heroImage: '/images/neo.webp',
        heroVideo: 'https://res.cloudinary.com/dprafk917/video/upload/v1768241694/1874704f-2b23-41a2-aa21-ca77ce4aaecd_ipao9k.mp4',
        guests: '10-12',
        bedrooms: '4',
        bathrooms: '4',
        area: '3500 sq ft',
        location: 'Lonavala, Maharashtra',
        highlights: [
            'Mesmerising Mountain Views',
            'Private Swimming Pool',
            'Jacuzzi & Steam Bath',
            'Themed Bedrooms',
            'Entertainment Galore',
            'Pet-Friendly Environment',
            'BBQ & Outdoor Splendours',
            'OTT Subscriptions Available'
        ],
        amenities: [
            { icon: FiWifi, name: '60 Mbps High-Speed WiFi' },
            { icon: FiTv, name: '55" HDTV with OTT Subscriptions' },
            { icon: FiCoffee, name: 'Fully-equipped Kitchen' },
            { icon: FiCar, name: 'Private Parking & Power Backup' },
            { icon: FiDroplet, name: 'Swimming Pool, Jacuzzi & Steam Bath' },
            { icon: FiSun, name: 'BBQ Grill & Outdoor Patio' },
            { icon: FiHome, name: 'Pet-Friendly Accommodation' },
            { icon: FiCamera, name: 'Traditional & Digital Security' }
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
            question: 'What is Neo Retro Villa?',
            answer: 'Neo-Retro Villa is an artistic retreat that seamlessly blends art, luxury, and nature. It\'s a spacious 4 BHK villa in Lonavala with a swimming pool, designed for art lovers, romantics, and those seeking a serene escape with boutique homestay experience near Pune.'
        },
        {
            question: 'Where is Neo Retro Villa located?',
            answer: 'Located in the serene backdrop of Lonavala, Maharashtra, our villa is strategically positioned just 3.5 km from Kumar Resorts on Old Mumbai Pune Highway, offering easy access to scenic wonders and historical sights.'
        },
        {
            question: 'What makes this villa special?',
            answer: 'Our villa features an artistically themed design with state-of-the-art amenities including swimming pool, jacuzzi, steam bath, plunge pool, themed bedrooms, 55" HDTV with OTT subscriptions, and mesmerising mountain views.'
        },
        {
            question: 'What are the check-in and check-out times?',
            answer: 'Check-in is at 2:00 PM and check-out is at 11:00 AM. We ensure a seamless experience with our dedicated hospitality team.'
        },
        {
            question: 'Is the villa pet-friendly?',
            answer: 'Yes! Your furry companions are cherished guests too. We welcome pets and ensure they have a comfortable stay alongside you.'
        }
    ];

    const nearbyAttractions = [
        { name: 'Tungarli Lake', distance: '2 km', description: 'Serene lake perfect for peaceful walks and photography' },
        { name: 'Lion\'s Point', distance: '4 km', description: 'Famous viewpoint offering breathtaking valley vistas' },
        { name: 'Bhushi Dam', distance: '5 km', description: 'Popular water cascades and picnic spot during monsoon' },
        { name: 'Lohagad Fort', distance: '8 km', description: 'Historic hill fort with stunning panoramic views' },
        { name: 'Karla Caves', distance: '12 km', description: 'Ancient Buddhist rock-cut caves and historical sites' },
        { name: 'Katardhal Waterfall', distance: '6 km', description: 'Beautiful waterfall surrounded by lush greenery' }
    ];

    return (
        <div>
            {/* Hero Section - Fullscreen Video Background */}
            <section className="relative h-screen overflow-hidden">

                {/* Fullscreen Video Background - Slightly Zoomed */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover scale-[1.3]"
                    poster={villa.heroImage}
                    onLoadedData={(e) => {
                        e.target.play().catch(() => {
                            // Fallback if autoplay fails
                        });
                    }}
                >
                    <source src={villa.heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Main Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">

                        {/* Main Heading & Subheading */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            className="space-y-4 sm:space-y-6 mb-8"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl" style={{ fontFamily: "'Marcellus', serif" }}>
                                {villa.name}
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-2xl mx-auto">
                                {villa.tagline}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-amber-300 font-light italic" style={{ fontFamily: "'Marcellus', serif" }}>
                                {villa.subtitle}
                            </p>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <a
                                href="tel:+918999036644"
                                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-500 inline-flex items-center justify-center space-x-3 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/40"
                            >
                                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                                <span>Book Now</span>
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 bg-amber-400 rounded-full"
                        />
                    </motion.div>
                </motion.div>
            </section>

            {/* About Section - Matching Reference Design */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Top Row - Heading and Description */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-10 md:mb-14">

                        {/* Left - Label and Heading */}
                        <div>
                            {/* About Us Label */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-2 mb-4"
                            >
                                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                <span className="text-amber-600 text-sm font-medium uppercase tracking-wider">About Us</span>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6"
                                style={{ fontFamily: "'Marcellus', serif" }}
                            >
                                Neo Retro Villa: An Artistic Retreat
                            </motion.h2>

                            {/* View Gallery Button */}
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                href="#gallery"
                                className="inline-flex items-center space-x-2 bg-stone-800 hover:bg-stone-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                            >
                                <span>View gallery</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                        </div>

                        {/* Right - Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center"
                        >
                            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
                                Discover the seamless blend of art, luxury, and nature at Neo-Retro Villa, Retrofusion's crown jewel nestled in the tranquil landscape of Lonavala. This spacious <span className="font-semibold text-stone-800">4 BHK Villa in Lonavala with Swimming Pool</span> is not just a place to stay; it's an immersive experience designed for art lovers, romantics, and those seeking a serene escape with <span className="font-semibold text-stone-800">Boutique homestay near Pune</span>.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bottom Row - Images */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                        {/* Left - Large Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="relative group overflow-hidden rounded-3xl"
                        >
                            <img
                                src="https://res.cloudinary.com/dprafk917/image/upload/v1768230663/9f5dd90d-eb0b-451d-8d08-508c5f69f2c5_rjpdzh.avif"
                                alt="Neo Retro Villa Exterior"
                                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Play Video Overlay */}
                            {/* <div className="absolute bottom-6 left-6">
                                <button className="flex items-center space-x-3 bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white px-5 py-3 rounded-full transition-all duration-300 group-hover:scale-105">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-stone-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <span className="font-medium">Play Video</span>
                                </button>
                            </div> */}
                        </motion.div>

                        {/* Right - Two Stacked Images */}
                        <div className="grid grid-rows-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative group overflow-hidden rounded-3xl"
                            >
                                <img
                                    src="https://res.cloudinary.com/dprafk917/image/upload/v1768230664/91a15ba5-b5da-4618-b585-5d7f92fa5df3_yqcadt.avif"
                                    alt="Neo Retro Villa Interior"
                                    className="w-full h-[190px] md:h-[235px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="relative group overflow-hidden rounded-3xl"
                            >
                                <img
                                    src="https://res.cloudinary.com/dprafk917/image/upload/v1768230663/a613a1b2-edef-4242-8ee3-79ce77bae0e1_yi24hq.avif"
                                    alt="Neo Retro Villa Pool Area"
                                    className="w-full h-[190px] md:h-[235px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gradient-to-b from-stone-50 via-white to-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Luxury Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <div className="inline-flex items-center space-x-4 mb-6">
                            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                            <span className="text-amber-600 text-sm uppercase tracking-[0.4em] font-light">Villa Features</span>
                            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                        </div>
                        <h2 className="text-5xl font-light text-stone-900 mb-6" style={{ fontFamily: "'Marcellus', serif" }}>
                            Elegance Meets <span className="font-bold text-amber-600">Artistry</span>
                        </h2>
                        <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
                            Experience the sublime fusion of art, luxury, and nature in Khandala's serene backdrop
                        </p>
                    </motion.div>

                    {/* Luxury Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
                    >
                        <div className="text-center group">
                            <div className="w-24 h-24 mx-auto mb-6 relative">
                                <div className="w-full h-full bg-gradient-to-br from-amber-500/10 to-amber-600/20 rounded-full flex items-center justify-center border border-amber-200 group-hover:border-amber-400 transition-all duration-500">
                                    <SafeIcon icon={FiUsers} className="w-10 h-10 text-amber-600" />
                                </div>
                                <div className="absolute -inset-2 bg-gradient-to-br from-amber-400/5 to-transparent rounded-full blur-lg group-hover:from-amber-400/10 transition-all duration-500"></div>
                            </div>
                            <div className="text-4xl font-light text-stone-900 mb-2" style={{ fontFamily: "'Marcellus', serif" }}>{villa.guests}</div>
                            <div className="text-stone-600 font-light tracking-wide uppercase text-sm">Guests</div>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 mx-auto mb-6 relative">
                                <div className="w-full h-full bg-gradient-to-br from-stone-500/10 to-stone-600/20 rounded-full flex items-center justify-center border border-stone-200 group-hover:border-stone-400 transition-all duration-500">
                                    <SafeIcon icon={FiHome} className="w-10 h-10 text-stone-600" />
                                </div>
                                <div className="absolute -inset-2 bg-gradient-to-br from-stone-400/5 to-transparent rounded-full blur-lg group-hover:from-stone-400/10 transition-all duration-500"></div>
                            </div>
                            <div className="text-4xl font-light text-stone-900 mb-2" style={{ fontFamily: "'Marcellus', serif" }}>{villa.bedrooms}</div>
                            <div className="text-stone-600 font-light tracking-wide uppercase text-sm">Bedrooms</div>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 mx-auto mb-6 relative">
                                <div className="w-full h-full bg-gradient-to-br from-amber-500/10 to-amber-600/20 rounded-full flex items-center justify-center border border-amber-200 group-hover:border-amber-400 transition-all duration-500">
                                    <SafeIcon icon={FiDroplet} className="w-10 h-10 text-amber-600" />
                                </div>
                                <div className="absolute -inset-2 bg-gradient-to-br from-amber-400/5 to-transparent rounded-full blur-lg group-hover:from-amber-400/10 transition-all duration-500"></div>
                            </div>
                            <div className="text-4xl font-light text-stone-900 mb-2" style={{ fontFamily: "'Marcellus', serif" }}>{villa.bathrooms}</div>
                            <div className="text-stone-600 font-light tracking-wide uppercase text-sm">Bathrooms</div>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 mx-auto mb-6 relative">
                                <div className="w-full h-full bg-gradient-to-br from-stone-500/10 to-stone-600/20 rounded-full flex items-center justify-center border border-stone-200 group-hover:border-stone-400 transition-all duration-500">
                                    <SafeIcon icon={FiCamera} className="w-10 h-10 text-stone-600" />
                                </div>
                                <div className="absolute -inset-2 bg-gradient-to-br from-stone-400/5 to-transparent rounded-full blur-lg group-hover:from-stone-400/10 transition-all duration-500"></div>
                            </div>
                            <div className="text-3xl font-light text-stone-900 mb-2" style={{ fontFamily: "'Marcellus', serif" }}>{villa.area}</div>
                            <div className="text-stone-600 font-light tracking-wide uppercase text-sm">Total Area</div>
                        </div>
                    </motion.div>

                    {/* Luxury Features */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">

                        {/* Our Facilities */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <div className="inline-flex items-center space-x-3">
                                    <div className="w-1 h-16 bg-gradient-to-b from-amber-400 to-amber-600"></div>
                                    <h3 className="text-3xl font-light text-stone-900" style={{ fontFamily: "'Marcellus', serif" }}>
                                        Our Facilities <span className="font-bold text-amber-600">Leisure Zone</span>
                                    </h3>
                                </div>
                                <p className="text-stone-600 font-light leading-relaxed">An artistically themed villa with state-of-the-art amenities & scenic views</p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { icon: FiCamera, title: "Mesmerising Views", desc: "Overlook the enchanting mountain landscapes" },
                                    { icon: FiDroplet, title: "Comfort & Luxury", desc: "Jacuzzi, steam bath, and plunge pool relaxation" },
                                    { icon: FiTv, title: "Entertainment Galore", desc: "55\" HDTV with Netflix, Prime Video, Disney+" },
                                    { icon: FiHeart, title: "Pet-Friendly", desc: "Your furry companions are cherished guests" }
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-5 p-6 bg-white/50 backdrop-blur-sm rounded-2xl hover:bg-white/80 transition-all duration-500 border border-stone-100 hover:border-amber-200 group">
                                        <div className="w-14 h-14 bg-gradient-to-br from-amber-500/10 to-amber-600/20 rounded-full flex items-center justify-center border border-amber-200 group-hover:border-amber-400 transition-all duration-500 flex-shrink-0">
                                            <SafeIcon icon={feature.icon} className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="text-xl font-medium text-stone-900" style={{ fontFamily: "'Marcellus', serif" }}>{feature.title}</h4>
                                            <p className="text-stone-600 font-light leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* In the Heart of Attractions */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <div className="inline-flex items-center space-x-3">
                                    <div className="w-1 h-16 bg-gradient-to-b from-stone-400 to-stone-600"></div>
                                    <h3 className="text-3xl font-light text-stone-900" style={{ fontFamily: "'Marcellus', serif" }}>
                                        In the Heart of <span className="font-bold text-stone-700">Attractions</span>
                                    </h3>
                                </div>
                                <p className="text-stone-600 font-light leading-relaxed">Discover scenic wonders, historical treasures, and culinary delights nearby</p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { icon: FiSun, title: "Scenic Wonders", items: ["Tungarli Lake", "Katardhal Waterfall", "Lion's Point", "Bhushi Dam"] },
                                    { icon: FiHome, title: "Historical Sights", items: ["Lohagad Fort", "Karla Caves"] },
                                    { icon: FiCoffee, title: "Culinary Spots", items: ["Ramkrishna", "Utopia", "Oven Fresh"] },
                                    { icon: FiCar, title: "Connectivity", items: ["3.5 km to Kumar Resorts", "Old Mumbai Pune Highway"] }
                                ].map((category, index) => (
                                    <div key={index} className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl hover:bg-white/80 transition-all duration-500 border border-stone-100 hover:border-stone-200 group">
                                        <div className="flex items-start space-x-5">
                                            <div className="w-14 h-14 bg-gradient-to-br from-stone-500/10 to-stone-600/20 rounded-full flex items-center justify-center border border-stone-200 group-hover:border-stone-400 transition-all duration-500 flex-shrink-0">
                                                <SafeIcon icon={category.icon} className="w-6 h-6 text-stone-600" />
                                            </div>
                                            <div className="flex-grow space-y-3">
                                                <h4 className="text-xl font-medium text-stone-900" style={{ fontFamily: "'Marcellus', serif" }}>{category.title}</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {category.items.map((item, itemIndex) => (
                                                        <span key={itemIndex} className="text-xs bg-stone-50 text-stone-700 px-4 py-2 rounded-full font-light border border-stone-200 hover:border-amber-300 hover:bg-amber-50 transition-all duration-300">
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Luxury Amenities */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center space-x-4 mb-8">
                            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-stone-400 to-transparent"></div>
                            <h3 className="text-3xl font-light text-stone-900" style={{ fontFamily: "'Marcellus', serif" }}>
                                Essential <span className="font-bold text-amber-600">Amenities</span>
                            </h3>
                            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-stone-400 to-transparent"></div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {villa.amenities.map((amenity, index) => (
                                <div key={index} className="text-center group">
                                    <div className="w-20 h-20 mx-auto mb-4 relative">
                                        <div className="w-full h-full bg-gradient-to-br from-white to-stone-50 rounded-2xl flex items-center justify-center border border-stone-200 group-hover:border-amber-300 group-hover:shadow-lg transition-all duration-500">
                                            <SafeIcon icon={amenity.icon} className="w-8 h-8 text-stone-600 group-hover:text-amber-600 transition-colors duration-500" />
                                        </div>
                                        <div className="absolute -inset-1 bg-gradient-to-br from-amber-400/0 group-hover:from-amber-400/10 to-transparent rounded-2xl blur-sm transition-all duration-500"></div>
                                    </div>
                                    <p className="text-sm text-stone-700 font-light leading-relaxed">{amenity.name}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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