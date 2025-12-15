import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiMapPin, FiPhone, FiMail, FiEdit3, FiCheckCircle, FiCreditCard } = FiIcons;

const BookingContactSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        guests: '',
        pets: '',
        villa: '',
        checkIn: '',
        checkOut: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const bookingSteps = [
        {
            icon: FiEdit3,
            title: 'Fill the form',
            description: 'Complete your booking details'
        },
        {
            icon: FiCheckCircle,
            title: 'Get a swift reply',
            description: 'Our team contacts you promptly'
        },
        {
            icon: FiCreditCard,
            title: 'Confirm payment',
            description: 'Secure your reservation'
        }
    ];

    const contactInfo = [
        {
            icon: FiClock,
            label: 'Check-in',
            value: '2:00 PM'
        },
        {
            icon: FiClock,
            label: 'Check-out',
            value: '11:00 AM'
        },
        {
            icon: FiMapPin,
            label: 'Address',
            value: 'Lonavala, Maharashtra'
        },
        {
            icon: FiPhone,
            label: 'Phone',
            value: '+91 89990 36644'
        },
        {
            icon: FiMail,
            label: 'Email',
            value: 'retrofusion2023@gmail.com'
        }
    ];

    return (
        <section className="bg-stone-50 px-4 sm:px-6 lg:px-16 py-10 lg:py-12">
            <div className="max-w-7xl mx-auto">

                {/* Heading - Matching Other Sections */}
                <div className="mb-8 lg:mb-10">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-3">
                        Effortless Booking in 3 Steps
                    </h2>
                </div>

                {/* Main Grid - Left Info, Right Form */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left Side - Steps + Contact Info */}
                    <div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* 3 Steps - Compact Cards */}
                        <div className="space-y-4">
                            {bookingSteps.map((step, index) => (
                                <div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-stone-200 flex items-center gap-4"
                                >
                                    {/* Step Number Badge */}
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-md">
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                        <SafeIcon icon={step.icon} className="w-6 h-6 text-amber-700" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-base font-bold text-stone-900 mb-1">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-stone-600">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact Information - Compact Card */}
                        <div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-xl p-6 shadow-xl"
                        >
                            <h3 className="text-lg font-bold text-white mb-5 pb-3 border-b border-amber-600/50">
                                Contact Information
                            </h3>

                            <div className="space-y-3">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-10 h-10 bg-amber-600/20 rounded-full flex items-center justify-center">
                                            <SafeIcon icon={info.icon} className="w-4 h-4 text-amber-400" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs text-amber-400 uppercase tracking-wide mb-0.5">
                                                {info.label}
                                            </p>
                                            <p className="text-sm text-white font-medium truncate">
                                                {info.value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Compact Form */}
                    <div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-xl shadow-xl p-6 lg:p-8 border border-stone-200">
                            <h3 className="text-xl lg:text-2xl font-bold text-stone-900 mb-6">
                                Reserve Your Villa
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                {/* Email and Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                {/* Guests and Pets */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                                            Total Guests *
                                        </label>
                                        <input
                                            type="number"
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            required
                                            min="1"
                                            className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none"
                                            placeholder="4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                                            Pets
                                        </label>
                                        <input
                                            type="number"
                                            name="pets"
                                            value={formData.pets}
                                            onChange={handleChange}
                                            min="0"
                                            className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>

                                {/* Villa Selection */}
                                <div>
                                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                                        Select Villa *
                                    </label>
                                    <select
                                        name="villa"
                                        value={formData.villa}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none bg-white"
                                    >
                                        <option value="">Choose a villa</option>
                                        <option value="villa1">Luxury Villa with Pool</option>
                                        <option value="villa2">Cozy Mountain Retreat</option>
                                        <option value="villa3">Panoramic Valley View</option>
                                        <option value="villa4">Premium Lake House</option>
                                    </select>
                                </div>

                                {/* Check-in and Check-out */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                                            Check In *
                                        </label>
                                        <input
                                            type="date"
                                            name="checkIn"
                                            value={formData.checkIn}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                                            Check Out *
                                        </label>
                                        <input
                                            type="date"
                                            name="checkOut"
                                            value={formData.checkOut}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="3"
                                        className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none resize-none"
                                        placeholder="Any special requests..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-sm rounded-lg shadow-lg transition-all duration-300 uppercase tracking-wide"
                                >
                                    Contact Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingContactSection;
