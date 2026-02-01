import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
    const sections = [
        {
            title: '1. Introduction',
            content: 'Welcome to Retrofusion! By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.'
        },
        {
            title: '2. Use of the Website/Service',
            content: 'You agree to use the Retrofusion website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else\'s use and enjoyment of the website. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.'
        },
        {
            title: '3. Intellectual Property Rights',
            content: 'The content, layout, design, data, graphics and other materials on this website are protected by copyright and intellectual property laws and are owned by Retrofusion or its licensors. You may not reproduce, redistribute, transmit, or exploit any content on this website without explicit written consent from Retrofusion.'
        },
        {
            title: '4. User Obligations',
            content: 'When creating an account on Retrofusion, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.'
        },
        {
            title: '5. Limitation of Liability',
            content: 'Retrofusion will not be liable for any indirect, special, incidental, or consequential damages that may result from the use of, or the inability to use, the website and its content.'
        },
        {
            title: '6. Links to Other Websites',
            content: 'Our website may contain links to third-party websites or services that are not owned or controlled by Retrofusion.'
        },
        {
            title: '7. Amendments',
            content: 'Retrofusion reserves the right to modify these terms and conditions at any time.'
        },
        {
            title: '8. Governing Law and Jurisdiction',
            content: 'These terms and conditions are governed by and construed in accordance with the laws of India.'
        }
    ];

    return (
        <div className="bg-stone-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://res.cloudinary.com/dprafk917/image/upload/v1768230663/a613a1b2-edef-4242-8ee3-79ce77bae0e1_yi24hq.avif"
                        alt="Terms & Conditions"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <span className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4 block font-light">
                            Legal
                        </span>
                        <h1
                            className="text-4xl md:text-6xl text-white font-bold mb-4"
                            style={{ fontFamily: "'Marcellus', serif" }}
                        >
                            Terms & Conditions
                        </h1>
                        <p className="text-stone-300 text-lg font-light max-w-xl mx-auto">
                            Please read these terms carefully before using our services
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-2xl shadow-lg border border-stone-100 p-8 md:p-12"
                    >
                        <div className="space-y-10">
                            {sections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`${index !== 0 ? 'pt-10 border-t border-stone-100' : ''}`}
                                >
                                    <h2
                                        className="text-xl md:text-2xl font-bold text-stone-900 mb-4"
                                        style={{ fontFamily: "'Marcellus', serif" }}
                                    >
                                        {section.title}
                                    </h2>
                                    <p className="text-stone-600 leading-relaxed">
                                        {section.content}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Last Updated */}
                        <div className="mt-12 pt-8 border-t border-stone-100">
                            <p className="text-stone-400 text-sm">
                                Last updated: February 2026
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TermsConditions;
