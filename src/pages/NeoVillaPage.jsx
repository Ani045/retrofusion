import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiWifi, FiTv, FiCoffee, FiCar, FiPhone, FiMapPin, FiStar, FiCheck, FiDroplet, FiSun, FiHome, FiCamera, FiHeart, FiX, FiChevronLeft, FiChevronRight } = FiIcons;

// Lightweight Bento Gallery with smooth CSS transitions and Lightbox
const BentoGallery = () => {
    const [currentSet, setCurrentSet] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    // All gallery images from Cloudinary
    const allImages = [
        'https://res.cloudinary.com/dprafk917/image/upload/v1768230663/9f5dd90d-eb0b-451d-8d08-508c5f69f2c5_rjpdzh.avif',
        'https://res.cloudinary.com/dprafk917/image/upload/v1768230663/a613a1b2-edef-4242-8ee3-79ce77bae0e1_yi24hq.avif',
        'https://res.cloudinary.com/dprafk917/image/upload/v1768230664/91a15ba5-b5da-4618-b585-5d7f92fa5df3_yqcadt.avif',
        'https://res.cloudinary.com/dprafk917/image/upload/v1768248894/2_hogr0f.avif',
        'https://res.cloudinary.com/dprafk917/image/upload/v1768248894/6_tvvdn8.avif',
        'https://res.cloudinary.com/dprafk917/image/upload/v1768248894/5_kuaou6.avif',
        'https://res.cloudinary.com/dprafk917/image/upload/v1768248894/4_durxmw.avif',
        'https://res.cloudinary.com/dprafk917/image/upload/v1768248895/7_c3uz2f.avif',
        'https://res.cloudinary.com/dprafk917/image/upload/v1768248895/1_eyt1cq.avif',
        'https://res.cloudinary.com/dprafk917/image/upload/v1768248895/9_vcaja3.avif',
    ];

    // Create image sets of 4 images each for the 2-row bento grid
    const imageSets = [
        allImages.slice(0, 4),
        allImages.slice(4, 8),
        [allImages[8], allImages[9], allImages[0], allImages[1]],
    ];

    // Auto-rotate images with smooth transition
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSet((prev) => (prev + 1) % imageSets.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [imageSets.length]);

    const currentImages = imageSets[currentSet];

    // Open lightbox with specific image
    const openLightbox = (imgSrc) => {
        const index = allImages.indexOf(imgSrc);
        setLightboxIndex(index >= 0 ? index : 0);
        setLightboxOpen(true);
    };

    // Navigate lightbox
    const nextImage = () => setLightboxIndex((prev) => (prev + 1) % allImages.length);
    const prevImage = () => setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setLightboxOpen(false);
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        if (lightboxOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [lightboxOpen]);

    // Simple Image Component with CSS fade transition
    const GalleryImage = ({ src, alt, className }) => {
        return (
            <div
                className={`relative overflow-hidden group cursor-pointer ${className}`}
                onClick={() => openLightbox(src)}
            >
                <img
                    src={src}
                    alt={alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />
                {/* Subtle overlay on hover with zoom icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Grid layout - 2 rows only, 4 images total
    const gridItems = [
        { className: "col-span-2 row-span-2" }, // Large left (spans both rows)
        { className: "col-span-2 row-span-1" }, // Top right wide
        { className: "col-span-1 row-span-1" }, // Bottom right small 1
        { className: "col-span-1 row-span-1" }, // Bottom right small 2
    ];

    return (
        <>
            <div className="relative">
                {/* Main Bento Grid - 4 columns, 2 rows */}
                <div className="grid grid-cols-4 grid-rows-2 gap-3 md:gap-4 h-[350px] md:h-[450px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSet}
                            className="contents"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {gridItems.map((item, index) => (
                                <GalleryImage
                                    key={`img-${index}`}
                                    src={currentImages[index]}
                                    alt={`Villa View ${index + 1}`}
                                    className={`${item.className} rounded-2xl shadow-lg`}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Slide indicators */}
                <div className="flex justify-center mt-6 space-x-3">
                    {imageSets.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSet(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${currentSet === index
                                ? 'bg-amber-600 w-8'
                                : 'bg-stone-300 hover:bg-stone-400 w-2'
                                }`}
                            aria-label={`View image set ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                        onClick={() => setLightboxOpen(false)}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                            onClick={() => setLightboxOpen(false)}
                        >
                            <SafeIcon icon={FiX} className="w-6 h-6 text-white" />
                        </button>

                        {/* Prev button */}
                        <button
                            className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        >
                            <SafeIcon icon={FiChevronLeft} className="w-6 h-6 text-white" />
                        </button>

                        {/* Next button */}
                        <button
                            className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            <SafeIcon icon={FiChevronRight} className="w-6 h-6 text-white" />
                        </button>

                        {/* Image */}
                        <motion.img
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            src={allImages[lightboxIndex]}
                            alt={`Villa View ${lightboxIndex + 1}`}
                            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Image counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                            <span className="text-white text-sm">{lightboxIndex + 1} / {allImages.length}</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

// FAQ Accordion Component
const FAQAccordion = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
                <h3 className="text-base font-medium text-white pr-4" style={{ fontFamily: "'Marcellus', serif" }}>
                    {faq.question}
                </h3>
                <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4 text-white/60 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <p className="px-5 pb-4 text-stone-300 text-sm leading-relaxed">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};


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
                        <div
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
                        </div>

                        {/* CTA Button */}
                        <div
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
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                >
                    <div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
                    >
                        <div
                            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 bg-amber-400 rounded-full"
                        />
                    </div>
                </div>
            </section>

            {/* About Section - Matching Reference Design */}
            <section className="py-12 md:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Top Row - Heading and Description */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-10 md:mb-14">

                        {/* Left - Label and Heading */}
                        <div>
                            {/* About Us Label */}
                            <div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-2 mb-4"
                            >
                                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                <span className="text-amber-600 text-sm font-medium uppercase tracking-wider">About Us</span>
                            </div>

                            {/* Main Heading */}
                            <h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6"
                                style={{ fontFamily: "'Marcellus', serif" }}
                            >
                                Neo Retro Villa: An Artistic Retreat
                            </h2>

                            {/* View Gallery Button */}
                            <a
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
                            </a>
                        </div>

                        {/* Right - Description */}
                        <div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center"
                        >
                            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
                                Discover the seamless blend of art, luxury, and nature at Neo-Retro Villa, Retrofusion's crown jewel nestled in the tranquil landscape of Lonavala. This spacious <span className="font-semibold text-stone-800">4 BHK Villa in Lonavala with Swimming Pool</span> is not just a place to stay; it's an immersive experience designed for art lovers, romantics, and those seeking a serene escape with <span className="font-semibold text-stone-800">Boutique homestay near Pune</span>.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Row - Images */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                        {/* Left - Large Image */}
                        <div
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
                        </div>

                        {/* Right - Two Stacked Images */}
                        <div className="grid grid-rows-2 gap-6">
                            <div
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
                            </div>
                            <div
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-14">
                    <div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-hidden rounded-3xl shadow-xl"
                    >
                        <picture>
                            {/* Mobile image */}
                            <source
                                media="(max-width: 768px)"
                                srcSet="https://res.cloudinary.com/dprafk917/image/upload/v1768250280/Gemini_Generated_Image_e2c3pke2c3pke2c3_hzl9sx.png"
                            />
                            {/* Desktop image */}
                            <img
                                src="https://res.cloudinary.com/dprafk917/image/upload/v1768244974/Gemini_Generated_Image_mc271umc271umc27_jzlguc.png"
                                alt="Neo Retro Villa Features"
                                className="w-full h-auto object-cover"
                            />
                        </picture>
                    </div>
                </div>
            </section>

            {/* Villa Amenities Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header - Matching About Section Style */}
                    <div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4" style={{ fontFamily: "'Marcellus', serif" }}>
                            Villa <span className="text-amber-600">Amenities</span>
                        </h2>
                        <p className="text-stone-600 font-light text-lg">Everything you need for a perfect stay</p>
                    </div>

                    {/* Amenities Grid - Clean icons without borders */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                        {[
                            {
                                title: "Mesmerising Views",
                                desc: "Mountain landscapes",
                                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                            },
                            {
                                title: "Comfort & Luxury",
                                desc: "Jacuzzi & steam bath",
                                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
                            },
                            {
                                title: "Entertainment",
                                desc: "55\" HDTV & games",
                                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" /></svg>
                            },
                            {
                                title: "Pet-Friendly",
                                desc: "Pets welcome",
                                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                            },
                            {
                                title: "Outdoor",
                                desc: "Patio & BBQ grill",
                                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                            },
                            {
                                title: "OTT Access",
                                desc: "Netflix & more",
                                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
                            },
                            {
                                title: "Essentials",
                                desc: "60 Mbps Wi-Fi",
                                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" /></svg>
                            },
                            {
                                title: "Safety",
                                desc: "24/7 security",
                                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06 }}
                                className="text-center group"
                            >
                                {/* Icon - No border/box */}
                                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-amber-600 group-hover:text-amber-500 group-hover:scale-110 transition-all duration-300">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h4 className="text-base font-semibold text-stone-900 mb-1" style={{ fontFamily: "'Marcellus', serif" }}>
                                    {item.title}
                                </h4>

                                {/* Description */}
                                <p className="text-sm text-stone-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bento Gallery Section with Shatter Animation */}
            <section className="py-12 md:py-16 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4" style={{ fontFamily: "'Marcellus', serif" }}>
                            Villa <span className="text-amber-600">Gallery</span>
                        </h2>
                        <p className="text-stone-600 font-light text-lg">A visual journey through your luxury retreat</p>
                    </div>

                    {/* Bento Grid Gallery */}
                    <BentoGallery />
                </div>
            </section>

            {/* Contact & Booking Section */}
            <section className="py-12 md:py-16 bg-gradient-to-br from-stone-100 via-white to-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-[2px] bg-amber-600"></div>
                            <span className="text-amber-600 text-sm font-medium uppercase tracking-wider">Get in Touch</span>
                            <div className="w-8 h-[2px] bg-amber-600"></div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4" style={{ fontFamily: "'Marcellus', serif" }}>
                            Book Your <span className="text-amber-600">Stay</span>
                        </h2>
                        <p className="text-stone-600 font-light text-lg max-w-2xl mx-auto">Reserve your luxurious escape at Neo-Retro Villa. We'd love to host you.</p>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                        {/* Left Side - Form */}
                        <div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-stone-200/50"
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-stone-900 mb-2" style={{ fontFamily: "'Marcellus', serif" }}>
                                    Reserve Your Villa
                                </h3>
                                <p className="text-stone-500 text-sm">Fill in your details and we'll get back to you shortly</p>
                            </div>

                            <form className="space-y-5">
                                {/* Name Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wide">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            className="w-full px-4 py-3 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none bg-stone-50/50 hover:bg-white"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wide">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            required
                                            className="w-full px-4 py-3 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none bg-stone-50/50 hover:bg-white"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                {/* Email and Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wide">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none bg-stone-50/50 hover:bg-white"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wide">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            className="w-full px-4 py-3 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none bg-stone-50/50 hover:bg-white"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                {/* Guests and Check-in */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wide">
                                            Number of Guests *
                                        </label>
                                        <input
                                            type="number"
                                            name="guests"
                                            required
                                            min="1"
                                            className="w-full px-4 py-3 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none bg-stone-50/50 hover:bg-white"
                                            placeholder="4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wide">
                                            Check-in Date *
                                        </label>
                                        <input
                                            type="date"
                                            name="checkIn"
                                            required
                                            className="w-full px-4 py-3 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none bg-stone-50/50 hover:bg-white"
                                        />
                                    </div>
                                </div>

                                {/* Check-out and Pets */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wide">
                                            Check-out Date *
                                        </label>
                                        <input
                                            type="date"
                                            name="checkOut"
                                            required
                                            className="w-full px-4 py-3 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none bg-stone-50/50 hover:bg-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wide">
                                            Pets (Optional)
                                        </label>
                                        <input
                                            type="number"
                                            name="pets"
                                            min="0"
                                            className="w-full px-4 py-3 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none bg-stone-50/50 hover:bg-white"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wide">
                                        Message (Optional)
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="3"
                                        className="w-full px-4 py-3 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none resize-none bg-stone-50/50 hover:bg-white"
                                        placeholder="Any special requests or questions..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider flex items-center justify-center space-x-2"
                                >
                                    <span>Send Enquiry</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </form>
                        </div>

                        {/* Right Side - Contact Info & Map */}
                        <div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {/* Contact Info Card */}
                            <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-3xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Marcellus', serif" }}>
                                    Contact <span className="text-amber-400">Information</span>
                                </h3>

                                <div className="space-y-5">
                                    {/* Phone */}
                                    <a href="tel:+918999036644" className="flex items-center gap-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-amber-400 text-xs uppercase tracking-wider mb-1">Phone</p>
                                            <p className="text-white font-medium text-lg group-hover:text-amber-300 transition-colors">+91 89990 36644</p>
                                        </div>
                                    </a>

                                    {/* Email */}
                                    <a href="mailto:retrofusion2023@gmail.com" className="flex items-center gap-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-amber-400 text-xs uppercase tracking-wider mb-1">Email</p>
                                            <p className="text-white font-medium text-lg group-hover:text-amber-300 transition-colors">retrofusion2023@gmail.com</p>
                                        </div>
                                    </a>

                                    {/* Address */}
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-amber-400 text-xs uppercase tracking-wider mb-1">Address</p>
                                            <p className="text-white font-medium text-lg">Lonavala, Maharashtra, India</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Element */}
                                <div className="mt-8 pt-6 border-t border-stone-700">
                                    <p className="text-stone-400 text-sm italic">"Experience the perfect blend of luxury and nature at Neo-Retro Villa"</p>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[280px] lg:h-[300px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60463.39696820842!2d73.36854705!3d18.7564659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be801153de5c8d9%3A0x33b9c7df5e4a0f4e!2sLonavala%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Neo-Retro Villa Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ & CTA Section with Background Image */}
            <section className="relative py-12 md:py-14 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://res.cloudinary.com/dprafk917/image/upload/v1768248895/7_c3uz2f.avif"
                        alt="Neo-Retro Villa Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Lighter Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                        {/* Left Side - Accordion FAQs */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Marcellus', serif" }}>
                                Frequently Asked <span className="text-amber-400">Questions</span>
                            </h2>

                            <div className="space-y-3">
                                {faqs.slice(0, 4).map((faq, index) => (
                                    <FAQAccordion key={index} faq={faq} index={index} />
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Side - Compact CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                                {/* CTA Header */}
                                <div className="text-center mb-4">
                                    <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Marcellus', serif" }}>
                                        Ready to Book?
                                    </h3>
                                    <p className="text-stone-300 text-sm">
                                        Experience luxury at Neo-Retro Villa
                                    </p>
                                </div>

                                {/* CTA Buttons */}
                                <div className="space-y-2">
                                    <a
                                        href="tel:+918999036644"
                                        className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                                    >
                                        <SafeIcon icon={FiPhone} className="w-4 h-4" />
                                        <span>Call to Book Now</span>
                                    </a>
                                    <Link
                                        to="/contact"
                                        className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/30 transition-all duration-300 flex items-center justify-center space-x-2"
                                    >
                                        <span>Send Enquiry</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>




        </div>
    );
};

export default NeoVillaPage;