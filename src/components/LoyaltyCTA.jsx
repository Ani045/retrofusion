import React from 'react';
import { motion } from 'framer-motion';

const LoyaltyCTA = () => {
    return (
        <section className="bg-white px-4 sm:px-6 lg:px-16 py-8 lg:py-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=400&fit=crop)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/85 to-stone-900/70"></div>

                    {/* Content */}
                    <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
                        {/* Left Content */}
                        <div className="flex-1 text-white">
                            <div className="mb-4">
                                <span className="text-lg sm:text-xl font-light tracking-[0.3em] text-amber-400 uppercase">
                                    Retrofusion
                                </span>

                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
                                The Loyalty Program
                            </h2>
                            <p className="text-base sm:text-lg text-stone-300 max-w-xl leading-relaxed">
                                Book your next dream villa to earn points and redeem exclusive deals on your next stay.
                            </p>
                        </div>

                        {/* Right CTA Button */}
                        <div className="flex-shrink-0">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-base sm:text-lg rounded-lg shadow-lg transition-all duration-300 uppercase tracking-wide"
                            >
                                KNOW MORE
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LoyaltyCTA;
