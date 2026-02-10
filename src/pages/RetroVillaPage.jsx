import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiWifi, FiTv, FiCoffee, FiCar, FiPhone, FiMapPin, FiStar, FiCheck, FiDroplet, FiSun, FiHome, FiCamera, FiHeart, FiX, FiChevronLeft, FiChevronRight } = FiIcons;

// Bento Gallery Component
const BentoGallery = () => {
    const [currentSet, setCurrentSet] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const allImages = [
        'https://res.cloudinary.com/dprafk917/image/upload/v1770226533/N34_stewru.jpg',
        'https://res.cloudinary.com/dprafk917/image/upload/v1769868140/B30_yc8rqu.webp',
        'https://res.cloudinary.com/dprafk917/image/upload/v1769868140/C26_j6pstx.webp',
        'https://res.cloudinary.com/dprafk917/image/upload/v1769868140/05_ivb2yz.webp',
        'https://res.cloudinary.com/dprafk917/image/upload/v1770226534/N36_om6t9d.jpg',
        'https://res.cloudinary.com/dprafk917/image/upload/v1769868155/M08_qewdva.webp',
        'https://res.cloudinary.com/dprafk917/image/upload/v1769868143/M01_jjmwdw.webp',
        'https://res.cloudinary.com/dprafk917/image/upload/v1769868142/G31_mdlfjh.webp',
        'https://res.cloudinary.com/dprafk917/image/upload/v1769868143/J24_wrncmb.webp',
        'https://res.cloudinary.com/dprafk917/image/upload/v1769868144/M21_c2fjh0.webp',
        'https://res.cloudinary.com/dprafk917/image/upload/v1769868144/M09_hilzeh.webp',
        'https://res.cloudinary.com/dprafk917/image/upload/v1769868141/I08_mjtxcg.webp',
        'https://res.cloudinary.com/dprafk917/image/upload/v1769868143/F18A_qmvadk.webp',
        'https://res.cloudinary.com/dprafk917/image/upload/v1769868142/H10_byp3oh.webp',
        'https://res.cloudinary.com/dprafk917/image/upload/v1769868142/K17_qzihhb.webp',
        'https://res.cloudinary.com/dprafk917/image/upload/v1769868141/E06_tevptf.webp',
    ];

    const imageSets = [
        allImages.slice(0, 4),
        allImages.slice(4, 8),
        allImages.slice(8, 12),
        allImages.slice(12, 16),
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSet((prev) => (prev + 1) % imageSets.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [imageSets.length]);

    const currentImages = imageSets[currentSet];

    const openLightbox = (imgSrc) => {
        const index = allImages.indexOf(imgSrc);
        setLightboxIndex(index >= 0 ? index : 0);
        setLightboxOpen(true);
    };

    const nextImage = () => setLightboxIndex((prev) => (prev + 1) % allImages.length);
    const prevImage = () => setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);

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

    const GalleryImage = ({ src, alt, className }) => (
        <div className={`relative overflow-hidden group cursor-pointer ${className}`} onClick={() => openLightbox(src)}>
            <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
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

    const gridItems = [
        { className: "col-span-2 row-span-2" },
        { className: "col-span-2 row-span-1" },
        { className: "col-span-1 row-span-1" },
        { className: "col-span-1 row-span-1" },
    ];

    return (
        <>
            <div className="relative">
                <div className="grid grid-cols-4 grid-rows-2 gap-3 md:gap-4 h-[350px] md:h-[450px]">
                    <AnimatePresence mode="wait">
                        <motion.div key={currentSet} className="contents" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
                            {gridItems.map((item, index) => (
                                <GalleryImage key={`img-${index}`} src={currentImages[index]} alt={`Villa View ${index + 1}`} className={`${item.className} rounded-2xl shadow-lg`} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="flex justify-center mt-6 space-x-3">
                    {imageSets.map((_, index) => (
                        <button key={index} onClick={() => setCurrentSet(index)} className={`h-2 rounded-full transition-all duration-500 ${currentSet === index ? 'bg-amber-600 w-8' : 'bg-stone-300 hover:bg-stone-400 w-2'}`} aria-label={`View image set ${index + 1}`} />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
                        <button className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" onClick={() => setLightboxOpen(false)}>
                            <SafeIcon icon={FiX} className="w-6 h-6 text-white" />
                        </button>
                        <button className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                            <SafeIcon icon={FiChevronLeft} className="w-6 h-6 text-white" />
                        </button>
                        <button className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                            <SafeIcon icon={FiChevronRight} className="w-6 h-6 text-white" />
                        </button>
                        <motion.img key={lightboxIndex} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} src={allImages[lightboxIndex]} alt={`Villa View ${lightboxIndex + 1}`} className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
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
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors">
                <h3 className="text-base font-medium text-white pr-4" style={{ fontFamily: "'Marcellus', serif" }}>{faq.question}</h3>
                <motion.svg animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="w-4 h-4 text-white/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                        <p className="px-5 pb-4 text-stone-300 text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const RetroVillaPage = () => {
    const villa = {
        name: 'Retro Villa',
        tagline: 'Explore Luxury Villa Near Lonavala with Swimming Pool and Artistic Retreats',
        subtitle: 'A Vintage Escape',
        description: 'Explore the best villa near Lonavala, featuring private plunge pool and bespoke amenities designed for your comfort and enjoyment.',
        longDescription: 'From the enchanting Retro Villa to the artistic Neo-Retro Villa, immerse yourself in spaces where every detail is crafted for luxury, relaxation, and a genuine connection with art with the best homestay near Mumbai.',
        heroImage: 'https://res.cloudinary.com/dprafk917/image/upload/v1770226533/N34_stewru.jpg',
        heroVideo: 'https://res.cloudinary.com/dprafk917/video/upload/v1770699275/Untitled_design_1_cner56.mp4',
        guests: '8-10',
        bedrooms: '4',
        bathrooms: '4',
        area: '3200 sq ft',
        location: 'Lonavala, Maharashtra',
        highlights: [
            'Private Plunge Pool',
            'Vintage Themed Rooms',
            'Bemisal Terrace Lounge',
            'Mountain Views',
            'BBQ Facilities',
            'Board Games & Library',
            'Pet-Friendly',
            'Near Khandala'
        ],
    };

    const faqs = [
        { question: 'What is the check-in and check-out time?', answer: 'Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out can be arranged subject to availability.' },
        { question: 'What makes Retro Villa special?', answer: 'Retro Villa features authentic vintage décor, period furnishings, and classic design elements that transport you to a bygone era while maintaining modern comfort standards.' },
        { question: 'Are pets allowed?', answer: 'We welcome well-behaved pets with prior approval. Additional charges may apply for pet accommodation.' },
        { question: 'What amenities are included?', answer: 'Your stay includes access to all villa amenities, complimentary WiFi, parking, and 24/7 support. The villa features vintage-inspired interiors and classic furnishings.' },
    ];

    return (
        <div>
            {/* Hero Section - Fullscreen Video */}
            <section className="relative h-screen overflow-hidden">
                <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover" poster={villa.heroImage}>
                    <source src={villa.heroVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="space-y-4 sm:space-y-6 mb-8">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl" style={{ fontFamily: "'Marcellus', serif" }}>{villa.name}</h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-2xl mx-auto">{villa.tagline}</p>
                            <p className="text-sm sm:text-base md:text-lg text-amber-300 font-light italic" style={{ fontFamily: "'Marcellus', serif" }}>{villa.subtitle}</p>
                        </div>
                        <a href="tel:+918999036644" className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-500 inline-flex items-center justify-center space-x-3 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/40">
                            <SafeIcon icon={FiPhone} className="w-5 h-5" />
                            <span>Book Now</span>
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-10 md:mb-14">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                <span className="text-amber-600 text-sm font-medium uppercase tracking-wider">About Us</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6" style={{ fontFamily: "'Marcellus', serif" }}>Retro Villa: <span className="text-amber-600">A Vintage Escape</span></h2>
                            <a href="#gallery" className="inline-flex items-center space-x-2 bg-stone-800 hover:bg-stone-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                                <span>View gallery</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <p className="text-stone-600 text-base md:text-lg leading-relaxed">{villa.description} {villa.longDescription}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        <div className="relative group overflow-hidden rounded-3xl">
                            <img src="https://res.cloudinary.com/dprafk917/image/upload/v1770226533/N34_stewru.jpg" alt="Retro Villa Exterior" className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="grid grid-rows-2 gap-6">
                            <div className="relative group overflow-hidden rounded-3xl">
                                <img src="https://res.cloudinary.com/dprafk917/image/upload/v1769868140/B30_yc8rqu.webp" alt="Retro Villa Interior" className="w-full h-[190px] md:h-[235px] object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="relative group overflow-hidden rounded-3xl">
                                <img src="https://res.cloudinary.com/dprafk917/image/upload/v1769868143/M01_jjmwdw.webp" alt="Retro Villa Pool" className="w-full h-[190px] md:h-[235px] object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Amenities Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4" style={{ fontFamily: "'Marcellus', serif" }}>Our Facilities <span className="text-amber-600">Relax Zone</span></h2>
                        <p className="text-stone-600 font-light text-lg">A timeless blend of retro charm and modern luxuries. Dive into nostalgia!</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                        {[
                            { title: "Nostalgic Views", desc: "Mountain landscapes & Lonavala skyline from terrace", icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
                            { title: "Timeless Luxury", desc: "Private pool, terrace & BBQ", icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg> },
                            { title: "Entertainment", desc: "60 Mbps WiFi, HDTV & OTT, Games", icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" /></svg> },
                            { title: "Pet-Friendly Villa", desc: "We cherish memories with furry friends", icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg> },
                            { title: "Vintage Bedrooms", desc: "Classic themed rooms", icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> },
                            { title: "Small Library", desc: "Books & board games", icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg> },
                            { title: "Khandala Charm", desc: "Vintage spots & classic cafes", icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg> },
                            { title: "Easy Access", desc: "Local transport hubs nearby", icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V5.25c0-.621-.504-1.125-1.125-1.125H6c-.621 0-1.125.504-1.125 1.125v3.78m0 0v8.72M18 6.75v12" /></svg> },
                        ].map((item, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-amber-600 group-hover:text-amber-500 group-hover:scale-110 transition-all duration-300">{item.icon}</div>
                                <h4 className="text-base font-semibold text-stone-900 mb-1" style={{ fontFamily: "'Marcellus', serif" }}>{item.title}</h4>
                                <p className="text-sm text-stone-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-12 md:py-16 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4" style={{ fontFamily: "'Marcellus', serif" }}>Villa <span className="text-amber-600">Gallery</span></h2>
                        <p className="text-stone-600 font-light text-lg">A visual journey through classic charm</p>
                    </div>
                    <BentoGallery />
                </div>
            </section>

            {/* Contact & Booking Section */}
            <section className="py-12 md:py-16 bg-gradient-to-br from-stone-100 via-white to-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-[2px] bg-amber-600"></div>
                            <span className="text-amber-600 text-sm font-medium uppercase tracking-wider">Get in Touch</span>
                            <div className="w-8 h-[2px] bg-amber-600"></div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4" style={{ fontFamily: "'Marcellus', serif" }}>Book Your <span className="text-amber-600">Stay</span></h2>
                        <p className="text-stone-600 font-light text-lg max-w-2xl mx-auto">Reserve your classic retreat at Retro Villa. We'd love to host you.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-stone-200/50">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-stone-900 mb-2" style={{ fontFamily: "'Marcellus', serif" }}>Reserve Your Villa</h3>
                                <p className="text-stone-500 text-sm">Fill in your details and we'll get back to you shortly</p>
                            </div>
                            <form className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wide">First Name *</label>
                                        <input type="text" name="firstName" required className="w-full px-4 py-3 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none bg-stone-50/50 hover:bg-white" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wide">Last Name *</label>
                                        <input type="text" name="lastName" required className="w-full px-4 py-3 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none bg-stone-50/50 hover:bg-white" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wide">Email *</label>
                                        <input type="email" name="email" required className="w-full px-4 py-3 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none bg-stone-50/50 hover:bg-white" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wide">Phone *</label>
                                        <input type="tel" name="phone" required className="w-full px-4 py-3 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none bg-stone-50/50 hover:bg-white" placeholder="+91 98765 43210" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wide">Check-in Date *</label>
                                        <input type="date" name="checkIn" required className="w-full px-4 py-3 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none bg-stone-50/50 hover:bg-white" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wide">Check-out Date *</label>
                                        <input type="date" name="checkOut" required className="w-full px-4 py-3 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none bg-stone-50/50 hover:bg-white" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wide">Message</label>
                                    <textarea name="message" rows="3" className="w-full px-4 py-3 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none resize-none bg-stone-50/50 hover:bg-white" placeholder="Any special requests..."></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider flex items-center justify-center space-x-2">
                                    <span>Send Enquiry</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </button>
                            </form>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-3xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Marcellus', serif" }}>Contact <span className="text-amber-400">Information</span></h3>
                                <div className="space-y-5">
                                    <a href="tel:+918999036644" className="flex items-center gap-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <SafeIcon icon={FiPhone} className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-amber-400 text-xs uppercase tracking-wider mb-1">Phone</p>
                                            <p className="text-white font-medium text-lg group-hover:text-amber-300 transition-colors">+91 89990 36644</p>
                                        </div>
                                    </a>
                                    <a href="mailto:retrofusion2023@gmail.com" className="flex items-center gap-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-amber-400 text-xs uppercase tracking-wider mb-1">Email</p>
                                            <p className="text-white font-medium text-lg group-hover:text-amber-300 transition-colors">retrofusion2023@gmail.com</p>
                                        </div>
                                    </a>
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <SafeIcon icon={FiMapPin} className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-amber-400 text-xs uppercase tracking-wider mb-1">Address</p>
                                            <p className="text-white font-medium text-lg">Lonavala, Maharashtra, India</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-stone-700">
                                    <p className="text-stone-400 text-sm italic">"Step back in time and experience classic elegance at Retro Villa"</p>
                                </div>
                            </div>
                            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[280px] lg:h-[300px]">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60463.39696820842!2d73.36854705!3d18.7564659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be801153de5c8d9%3A0x33b9c7df5e4a0f4e!2sLonavala%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Retro Villa Location"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ & CTA Section */}
            <section className="relative py-12 md:py-14 overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://res.cloudinary.com/dprafk917/image/upload/v1769868142/G31_mdlfjh.webp" alt="Retro Villa Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Marcellus', serif" }}>Frequently Asked <span className="text-amber-400">Questions</span></h2>
                            <div className="space-y-3">
                                {faqs.map((faq, index) => (<FAQAccordion key={index} faq={faq} index={index} />))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                                <div className="text-center mb-4">
                                    <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Marcellus', serif" }}>Ready to Book?</h3>
                                    <p className="text-stone-300 text-sm">Experience timeless elegance at Retro Villa</p>
                                </div>
                                <div className="space-y-2">
                                    <a href="tel:+918999036644" className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                                        <SafeIcon icon={FiPhone} className="w-4 h-4" />
                                        <span>Call to Book Now</span>
                                    </a>
                                    <Link to="/contact" className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/30 transition-all duration-300 flex items-center justify-center space-x-2">
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

export default RetroVillaPage;