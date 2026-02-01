import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    const sections = [
        {
            title: '1. Introduction',
            content: 'At Retrofusion, we are committed to protecting the privacy and security of our customers\' information.'
        },
        {
            title: '2. Information Collection and Use',
            content: 'We collect personal information (like names, addresses, email addresses, etc.) only when voluntarily submitted by our visitors. This information is used only to fulfill your specific request, unless you give us permission to use it in another manner.'
        },
        {
            title: '3. Data Storage and Security',
            content: 'We implement a variety of security measures to maintain the safety of your personal information.'
        },
        {
            title: '4. Sharing of Data',
            content: 'We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.'
        },
        {
            title: '5. User Rights',
            content: 'You may request to see the personal data we hold about you and ask us to correct or delete this data.'
        },
        {
            title: '6. Cookies and Tracking Technologies',
            content: 'We use cookies to help us remember and process the items in your shopping cart and understand and save your preferences for future visits.'
        },
        {
            title: '7. Policy Updates',
            content: 'Our Privacy Policy may change from time to time and all updates will be posted on this page.'
        },
        {
            title: '8. Contact Information',
            content: 'If you have any questions about our privacy practices, please contact us at contact@retrofusion.in.'
        }
    ];

    return (
        <div className="bg-stone-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://res.cloudinary.com/dprafk917/image/upload/v1768230663/5d93e66d-23b4-4578-bb58-35032b8b39b8_cftv5v.avif"
                        alt="Privacy Policy"
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
                            Privacy Policy
                        </h1>
                        <p className="text-stone-300 text-lg font-light max-w-xl mx-auto">
                            Your privacy matters to us
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

export default PrivacyPolicy;
