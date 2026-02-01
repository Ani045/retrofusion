import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAlertCircle, FiClock, FiCalendar, FiDollarSign, FiRefreshCw, FiHome } = FiIcons;

const CancellationPolicy = () => {
    const policies = [
        {
            icon: FiCalendar,
            title: 'Standard Reservation Policy',
            content: 'A 50% deposit is required at the time of booking, with the remaining 50% due upon check-in.'
        },
        {
            icon: FiRefreshCw,
            title: 'Standard Cancellation Policy',
            points: [
                'Cancellations are accepted up to four weeks before the scheduled arrival date, with a full refund of the deposit.',
                'Cancellations made less than four weeks prior are non-refundable.',
                'Bookings cannot be postponed to a different weekend. However, in case of an emergency, postponements to a weekday during the off-season may be possible, subject to availability, at the same rate.'
            ]
        },
        {
            icon: FiAlertCircle,
            title: 'Cancellation by Retrofusion Boutique Homestays',
            points: [
                'A full refund if the cancellation is initiated by Retrofusion Boutique Homestays.',
                'Appropriate penalties will be applied, including some refund deduction, if the cause of cancellation is undue or provocative act or communication carried out by the client.'
            ]
        },
        {
            icon: FiHome,
            title: 'Relocation Policy',
            content: 'Relocation to another home is not permitted after a booking is confirmed.'
        },
        {
            icon: FiClock,
            title: 'Early Check-in and Late Check-out Policy',
            points: [
                'Our standard check-in time is 2 pm, and check-out time is 11 am.',
                'We offer complimentary early check-in by 1 pm if the villa is not booked the previous night. Confirm a day before check-in.',
                'If you desire an earlier check-in (earliest at 9:00 am), charges apply at 20% of the nightly tariff. Again, do confirm availability a day before check-in.',
                'Late check-outs are not available due to instant online and last-minute bookings.',
                'Extended check outs are only possible when there are no back-to-back reservations. For extended checkouts (past 11:00 am) charges apply: 20% of the nightly tariff up to 3 pm, 40% up to 6 pm, and full night charges thereafter.',
                'Early check-in or late check-out is at the discretion of Retrofusion Boutique Homestays.'
            ]
        },
        {
            icon: FiDollarSign,
            title: 'Terms & Conditions',
            points: [
                'Retrofusion Boutique Homestays will process any owed refunds within 5-7 working days, with a 5% cancellation fee for covering gateway charges and minimal processing fees.',
                'GST at applicable rates will be charged on the cancellation fee.',
                'A reservation is officially deemed \'cancelled\' when both the guest and reservations personnel confirm it through direct communication.',
                'For early check-outs, the accommodation and cleaning fee refund will be determined by Retrofusion Boutique Homestays.'
            ]
        }
    ];

    return (
        <div className="bg-stone-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://res.cloudinary.com/dprafk917/image/upload/v1769863039/01_qwhl8a.jpg"
                        alt="Cancellation Policy"
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
                            Policies
                        </span>
                        <h1
                            className="text-4xl md:text-6xl text-white font-bold mb-4"
                            style={{ fontFamily: "'Marcellus', serif" }}
                        >
                            Cancellation Policy
                        </h1>
                        <p className="text-stone-300 text-lg font-light max-w-xl mx-auto">
                            Reservation and cancellation guidelines for your stay
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-8 bg-amber-50 border-y border-amber-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                            <SafeIcon icon={FiAlertCircle} className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-stone-900 mb-1">Important Notice</h3>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                Guests are urged to carefully read and comprehend the Cancellation, Refund, Relocation, Rescheduling, and other Policies before confirming a booking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        {policies.map((policy, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg border border-stone-100 p-8 md:p-10 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
                                        <SafeIcon icon={policy.icon} className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h2
                                            className="text-xl md:text-2xl font-bold text-stone-900 mb-4"
                                            style={{ fontFamily: "'Marcellus', serif" }}
                                        >
                                            {policy.title}
                                        </h2>

                                        {policy.content && (
                                            <p className="text-stone-600 leading-relaxed">
                                                {policy.content}
                                            </p>
                                        )}

                                        {policy.points && (
                                            <ul className="space-y-3">
                                                {policy.points.map((point, pointIndex) => (
                                                    <li key={pointIndex} className="flex items-start gap-3">
                                                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span>
                                                        <span className="text-stone-600 leading-relaxed">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact for Questions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-12 bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-8 md:p-10 text-center"
                    >
                        <h3
                            className="text-2xl font-bold text-white mb-3"
                            style={{ fontFamily: "'Marcellus', serif" }}
                        >
                            Have Questions?
                        </h3>
                        <p className="text-stone-300 mb-6">
                            Our team is here to help with any questions about our policies.
                        </p>
                        <a
                            href="tel:+918999036644"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
                        >
                            Contact Us
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CancellationPolicy;
