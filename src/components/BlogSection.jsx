import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogPosts = [
    {
        id: 1,
        title: "Best Places to Travel in November in India:...",
        excerpt: "Places to travel in November in India offer something...",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
        category: "Travel",
    },
    {
        id: 2,
        title: "Corporate Retreats in Diwali: Top 10...",
        excerpt: "Celebrating Diwali as a corporate event combines...",
        image: "https://images.unsplash.com/photo-1478145787956-f6f12c59624d?w=800&h=600&fit=crop",
        category: "Corporate",
    },
    {
        id: 3,
        title: "12 Best Places To Go in October in India That...",
        excerpt: "If you're searching for the best places to travel in...",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        category: "Travel",
    },
    {
        id: 4,
        title: "Luxury Villa Rentals: Your Ultimate Guide",
        excerpt: "Discover the finest luxury villas for your next...",
        image: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&h=600&fit=crop",
        category: "Luxury",
    },
];

const BlogSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
    };

    return (
        <section className="bg-white px-4 sm:px-6 lg:px-16 py-10 lg:py-12">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-8 lg:mb-10">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-3">
                        Blogs
                    </h2>
                </div>

                {/* Blog Cards Container */}
                <div className="relative">

                    {/* Mobile: Horizontal Scroll */}
                    <div className="lg:hidden">
                        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
                            <div className="flex gap-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
                                {blogPosts.map((post) => (
                                    <motion.div
                                        key={post.id}
                                        className="min-w-[280px] sm:min-w-[320px] bg-white rounded-xl shadow-lg overflow-hidden border border-stone-200 hover:shadow-xl transition-shadow duration-300"
                                        style={{ scrollSnapAlign: 'start' }}
                                        whileHover={{ y: -5 }}
                                    >
                                        {/* Image */}
                                        <div className="relative h-40 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-4">
                                            <h3 className="text-base font-bold text-stone-900 mb-2 line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-stone-600 mb-4 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            <Link
                                                to={`/blog/${post.id}`}
                                                className="inline-block px-4 py-2 bg-stone-900 text-white text-sm rounded-lg hover:bg-stone-800 transition-colors duration-200"
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop: Slider with Navigation Arrows */}
                    <div className="hidden lg:block">
                        <div className="flex items-center gap-6">

                            {/* Left Arrow */}
                            <button
                                onClick={prevSlide}
                                className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors duration-200 border border-stone-300"
                                aria-label="Previous"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-stone-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Visible Cards Container - 2 cards per view */}
                            <div className="flex-1 overflow-hidden">
                                <div
                                    className="flex gap-6 transition-transform duration-500 ease-out"
                                    style={{
                                        transform: `translateX(-${currentSlide * 50}%)`,
                                    }}
                                >
                                    {blogPosts.map((post) => (
                                        <motion.div
                                            key={post.id}
                                            className="min-w-[calc(50%-0.75rem)] bg-white rounded-xl shadow-lg overflow-hidden border border-stone-200 hover:shadow-xl transition-shadow duration-300 flex h-40"
                                            whileHover={{ y: -4 }}
                                        >
                                            {/* Image on LEFT - Larger */}
                                            <div className="relative w-48 flex-shrink-0 overflow-hidden">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Content on RIGHT - Larger */}
                                            <div className="flex-1 p-5 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="text-base font-bold text-stone-900 mb-2 line-clamp-2 leading-snug">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-sm text-stone-600 line-clamp-2">
                                                        {post.excerpt}
                                                    </p>
                                                </div>
                                                <Link
                                                    to={`/blog/${post.id}`}
                                                    className="inline-block self-start px-4 py-2 bg-stone-900 text-white text-sm rounded-lg hover:bg-stone-800 transition-colors duration-200"
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Arrow */}
                            <button
                                onClick={nextSlide}
                                className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors duration-200 border border-stone-300"
                                aria-label="Next"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-stone-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BlogSection;
