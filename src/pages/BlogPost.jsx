import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiUser, FiClock, FiArrowLeft, FiShare2, FiHeart } = FiIcons;

const BlogPost = () => {
  const { postId } = useParams();

  // Sample blog post data - in a real app, this would be fetched based on postId
  const post = {
    id: postId,
    title: 'The Ultimate Guide to Lonavala: Hidden Gems and Must-Visit Spots',
    excerpt: 'Discover the secret corners of Lonavala that most tourists never see. From secluded waterfalls to ancient caves, explore the hill station like a local with our comprehensive insider guide.',
    content: `
      <p>Lonavala, nestled in the Western Ghats of Maharashtra, is more than just a popular hill station. Beyond the crowded viewpoints and tourist hotspots lies a treasure trove of hidden gems waiting to be discovered by adventurous travelers.</p>

      <h2>The Secret Waterfalls</h2>
      <p>While most visitors flock to the famous Bhushi Dam, there are several lesser-known waterfalls that offer a more intimate experience with nature. Kune Falls, though not entirely hidden, provides a spectacular view especially during the monsoon season.</p>

      <p>For the truly adventurous, there's a hidden cascade near Rajmachi Fort that requires a moderate trek but rewards you with pristine pools and the sound of cascading water echoing through the valleys.</p>

      <h2>Ancient Caves and Historical Wonders</h2>
      <p>The Karla and Bhaja Caves are well-known, but did you know about the smaller cave complexes scattered throughout the region? These ancient Buddhist monasteries tell stories of a time when this region was a crucial stop on ancient trade routes.</p>

      <p>The Bedsa Caves, located about 10 km from Lonavala, offer similar architectural marvels with fewer crowds, making them perfect for photography and peaceful exploration.</p>

      <h2>Local Food Experiences</h2>
      <p>Beyond the famous chikki shops, Lonavala offers authentic Maharashtrian cuisine that most tourists miss. Visit the local homes-turned-restaurants in nearby villages where you can enjoy traditional thalis prepared with locally sourced ingredients.</p>

      <h2>Best Time to Visit</h2>
      <p>While Lonavala is beautiful year-round, each season offers unique experiences. The monsoon season transforms the landscape into a lush green paradise, while winter provides clear skies perfect for trekking and outdoor activities.</p>

      <h2>Staying at Retrofusion</h2>
      <p>Our villas serve as the perfect base for exploring these hidden gems. With local knowledge and personalized recommendations, we help our guests discover the Lonavala that guidebooks don't show you.</p>
    `,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    author: 'Ruchi Arora',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Travel Guide',
    tags: ['Lonavala', 'Hidden Gems', 'Travel Guide', 'Maharashtra', 'Waterfalls']
  };

  const relatedPosts = [
    {
      id: '2',
      title: 'Monsoon Magic: Why Lonavala is Perfect During Rainy Season',
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop',
      author: 'Jitendra Arora',
      date: '2024-01-12'
    },
    {
      id: '3',
      title: 'Local Cuisine Adventures: Food You Must Try in Lonavala',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
      author: 'Ruchi Arora',
      date: '2024-01-10'
    },
    {
      id: '4',
      title: 'Adventure Activities Around Retrofusion Villas',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop',
      author: 'Jitendra Arora',
      date: '2024-01-08'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-stone-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${post.image})` }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 mb-6"
            >
              <SafeIcon icon={FiArrowLeft} className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
            
            <div className="mb-4">
              <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-stone-300 mb-8 max-w-3xl">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-stone-300">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiUser} className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiClock} className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="prose prose-lg prose-stone max-w-none">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-2xl mb-8"
                />
                
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className="text-stone-700 leading-relaxed"
                />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-stone-200">
                <h3 className="text-lg font-semibold text-stone-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm hover:bg-amber-100 hover:text-amber-800 cursor-pointer transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-stone-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-stone-900">Share this article</h3>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-stone-600 hover:text-amber-600 transition-colors">
                      <SafeIcon icon={FiHeart} className="w-5 h-5" />
                      <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-2 text-stone-600 hover:text-amber-600 transition-colors">
                      <SafeIcon icon={FiShare2} className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-1"
            >
              {/* Author Bio */}
              <div className="bg-stone-50 p-6 rounded-2xl mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-stone-900">{post.author}</h4>
                    <p className="text-stone-600 text-sm">Co-founder, Retrofusion</p>
                  </div>
                </div>
                <p className="text-stone-600 text-sm">
                  Travel enthusiast and hospitality expert sharing insights about Lonavala and creating memorable experiences.
                </p>
              </div>

              {/* Newsletter */}
              <div className="bg-amber-50 p-6 rounded-2xl mb-8">
                <h4 className="font-semibold text-stone-900 mb-3">Stay Updated</h4>
                <p className="text-stone-600 text-sm mb-4">
                  Get the latest travel tips and stories delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                  <button className="w-full bg-amber-700 hover:bg-amber-800 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Related Stories</h2>
            <p className="text-stone-600">Discover more insights and tips for your Lonavala adventure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-stone-900 mb-3 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-stone-500 mb-4">
                    <span>{relatedPost.author}</span>
                    <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                  </div>
                  <Link
                    to={`/blog/${relatedPost.id}`}
                    className="text-amber-700 hover:text-amber-800 font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Explore Lonavala?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Book your stay at Retrofusion and let us help you discover these hidden gems in person.
            </p>
            <a
              href="tel:+919876543210"
              className="bg-white text-amber-700 hover:bg-stone-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Book Your Stay Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;