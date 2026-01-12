import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiUser, FiArrowRight, FiClock } = FiIcons;

const Blog = () => {
  const featuredPost = {
    id: '1',
    title: 'The Ultimate Guide to Lonavala: Hidden Gems and Must-Visit Spots',
    excerpt: 'Discover the secret corners of Lonavala that most tourists never see. From secluded waterfalls to ancient caves, explore the hill station like a local with our comprehensive insider guide.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    author: 'Ruchi Arora',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Travel Guide'
  };

  const blogPosts = [
    {
      id: '2',
      title: 'Monsoon Magic: Why Lonavala is Perfect During Rainy Season',
      excerpt: 'Experience the transformation of Lonavala during monsoons when the hills come alive with cascading waterfalls and lush green landscapes.',
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop',
      author: 'Jitendra Arora',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Seasonal Guide'
    },
    {
      id: '3',
      title: 'Local Cuisine Adventures: Food You Must Try in Lonavala',
      excerpt: 'From famous chikki to authentic Maharashtrian thali, discover the culinary delights that make Lonavala a food lover\'s paradise.',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop',
      author: 'Ruchi Arora',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'Food & Culture'
    },
    {
      id: '4',
      title: 'Adventure Activities Around Retrofusion Villas',
      excerpt: 'Thrilling adventures await right at your doorstep. Explore trekking trails, rock climbing spots, and water sports near our villas.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop',
      author: 'Jitendra Arora',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Adventure'
    },
    {
      id: '5',
      title: 'Photography Guide: Capturing Lonavala\'s Beauty',
      excerpt: 'Professional tips for photographing Lonavala\'s stunning landscapes, from golden hour shots to monsoon photography techniques.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      author: 'Ruchi Arora',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Photography'
    },
    {
      id: '6',
      title: 'Wellness Retreat: Rejuvenating Mind and Body in Nature',
      excerpt: 'Transform your villa stay into a wellness retreat with meditation spots, yoga practices, and natural healing experiences.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
      author: 'Ruchi Arora',
      date: '2024-01-03',
      readTime: '6 min read',
      category: 'Wellness'
    },
    {
      id: '7',
      title: 'Family Fun: Activities for All Ages in Lonavala',
      excerpt: 'Create lasting memories with activities that entertain both kids and adults, from theme parks to nature walks and cultural experiences.',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop',
      author: 'Jitendra Arora',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Family Travel'
    }
  ];

  const categories = [
    'All',
    'Travel Guide',
    'Seasonal Guide',
    'Food & Culture',
    'Adventure',
    'Photography',
    'Wellness',
    'Family Travel'
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dprafk917/image/upload/v1768230663/a613a1b2-edef-4242-8ee3-79ce77bae0e1_yi24hq.avif"
            alt="Travel Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-900/90"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-amber-400 uppercase tracking-[0.4em] text-sm md:text-base mb-6 block font-light">
              Stories & Insights
            </span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 leading-[0.9]"
              style={{ fontFamily: "'Marcellus', serif" }}
            >
              Travel Blog
            </h1>
            <p className="text-stone-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Discover Lonavala through our eyes. Local insights, hidden gems, and travel tips to make your stay unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Featured Story</h2>
          </div>

          <div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                {featuredPost.title}
              </h3>
              <p className="text-lg text-stone-600 mb-6">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center space-x-6 mb-8 text-stone-500">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiUser} className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                  <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiClock} className="w-4 h-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              <Link
                to={`/blog/${featuredPost.id}`}
                className="inline-flex items-center space-x-2 bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <span>Read Full Story</span>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white hover:bg-amber-700 hover:text-white text-stone-700 rounded-full font-medium transition-colors border border-stone-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Latest Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex h-32"
              >
                {/* Image on LEFT */}
                <div className="relative w-32 flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content on RIGHT */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 mb-2 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-xs bg-stone-900 hover:bg-stone-800 text-white px-3 py-1 rounded font-medium transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Our Stories
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Get the latest travel tips, local insights, and exclusive updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border-0 focus:ring-2 focus:ring-white"
              />
              <button className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;