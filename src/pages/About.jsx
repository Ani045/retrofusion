import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiHome, FiStar, FiUsers, FiAward, FiArrowRight } = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiHeart,
      title: 'Heartfelt Hospitality',
      description: 'Creating experiences that resonate and leave a lasting impression on every guest.'
    },
    {
      icon: FiHome,
      title: 'Sophisticated Sanctuaries',
      description: 'Our villas blend the warmth of home with the refinement of a high-end boutique hotel.'
    },
    {
      icon: FiStar,
      title: 'Uncompromising Detail',
      description: 'From hand-picked decor to bespoke services, every detail is a testament to our pursuit of perfection.'
    },
    {
      icon: FiUsers,
      title: 'Cultural Connection',
      description: 'We celebrate the local essence of Lonavala, connecting guests with its authentic spirit.'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'The Vision',
      description: 'Retrofusion was born from a desire to redefine luxury homestays in Lonavala.'
    },
    {
      year: '2021',
      title: 'Inaugural Collection',
      description: 'The opening of Retro Villa, setting a new benchmark for vintage-modern aesthetics.'
    },
    {
      year: '2022',
      title: 'Curated Growth',
      description: 'Expanding the collection with Neo Villa and Viswa Villa, each with a distinct personality.'
    },
    {
      year: '2024',
      title: 'Excellence Redefined',
      description: 'Establishing Retrofusion as the premier destination for discerning travelers.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="bg-stone-50 overflow-hidden">
      {/* Immersive Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dprafk917/image/upload/v1768230663/a613a1b2-edef-4242-8ee3-79ce77bae0e1_yi24hq.avif"
            alt="Retrofusion Story"
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
              Our Legacy
            </span>
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl text-white font-bold mb-8 leading-[0.9]"
              style={{ fontFamily: "'Marcellus', serif" }}
            >
              The Story of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-stone-100 to-amber-200">
                Retrofusion
              </span>
            </h1>
            <p className="text-stone-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Where vintage soul meets modern luxury. A journey through the art of curated hospitality.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-amber-400 to-transparent"></div>
        </motion.div>
      </section>

      {/* The Visionaries - Matching Philosophy Section Style */}
      <section className="py-16 md:py-12 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-16 md:mb-24"
          >
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl text-stone-900 font-bold mb-8 leading-tight"
              style={{ fontFamily: "'Marcellus', serif" }}
            >
              The Visionaries Behind <br />
              <span className="text-amber-600">Retrofusion</span>
            </h2>
            <p className="text-xl text-stone-500 font-light leading-relaxed">
              Meet Ruchi and Jitendra Arora, the dynamic duo whose shared passion for design and hospitality brought Retrofusion to life.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Staggered Images */}
            <div className="relative flex items-end gap-6 md:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-1/2 aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200"
              >
                <img 
                  src="https://retrofusion.in/assets/img/custom/ruchi_11zon.webp" 

                  alt="Ruchi Arora"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="w-1/2 aspect-[3/4] rounded-[1.5rem] overflow-hidden shadow-2xl shadow-stone-200 mb-12 md:mb-20"
              >
                <img 
                  src="https://retrofusion.in/assets/img/custom/jidenter_11zon.webp" 
                  alt="Jitendra Arora"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            </div>

            {/* Right: Founder Details */}
            <div className="space-y-0">
              {[
                {
                  name: 'Ruchi Arora',
                  role: 'Founder & Creative Vision',
                  description: 'The aesthetic soul of Retrofusion. With an unerring eye for timeless design, Ruchi curates every artifact, texture, and hue, ensuring each villa tells a unique story of vintage luxury and modern comfort.'
                },
                {
                  name: 'Jitendra Arora',
                  role: 'Founder & Strategy Lead',
                  description: 'The strategic mind behind our excellence. Jitendra combines business acumen with a deep passion for hospitality, architecting the personalized service models that turn stays into lifelong memories.'
                }
              ].map((founder, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  className={`${index !== 0 ? 'border-t border-stone-200 mt-10 pt-10' : ''}`}
                >
                  <h3 
                    className="text-2xl font-bold text-stone-900 mb-4"
                    style={{ fontFamily: "'Marcellus', serif" }}
                  >
                    {founder.name}
                  </h3>
                  <p className="text-sm text-amber-600 uppercase tracking-widest font-bold mb-4">
                    {founder.role}
                  </p>
                  <p className="text-lg text-stone-500 font-light leading-relaxed max-w-xl">
                    {founder.description}
                  </p>
                </motion.div>
              ))}

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="border-t border-stone-200 mt-10 pt-10"
              >
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2" style={{ fontFamily: "'Marcellus', serif" }}>500+</div>
                    <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Guests</p>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2" style={{ fontFamily: "'Marcellus', serif" }}>3</div>
                    <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Villas</p>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2" style={{ fontFamily: "'Marcellus', serif" }}>4.9</div>
                    <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Rating</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message Section - Enhanced Envelope Aesthetic (Image Background) */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dprafk917/image/upload/v1768230663/a613a1b2-edef-4242-8ee3-79ce77bae0e1_yi24hq.avif"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/60"></div>
        </div>

        {/* Subtle ambient lighting for dark mode */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[120px] -mr-64 -mt-64 z-1"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[120px] -ml-64 -mb-64 z-1"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 pt-96 md:pt-80">
          <div className="relative group perspective-1000">
            {/* The Envelope Container - Removed overflow-hidden to allow letter to pop out */}
            <div 
              className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-white rounded-b-3xl shadow-[0_30px_60px_rgba(0,0,0,0.05)] border-b border-x border-stone-200/50"
              style={{ clipPath: 'inset(-300% -50% 0 -50%)' }}
            >
              
              {/* Logo on the Cover (Subtle Watermark/Seal Effect) */}
              <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center pt-[20%]">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 0.15, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  src="https://res.cloudinary.com/damfndmrm/image/upload/v1765779522/Retro_fusion_logo_nmc7kf.png"
                  alt="Retrofusion Seal"
                  className="w-32 md:w-48 h-auto grayscale brightness-0"
                />
              </div>
              
              {/* The Letter Card (Slides out from the pocket) */}
              <motion.div
                initial={{ y: "20%", opacity: 0 }}
                whileInView={{ y: isMobile ? "-75%" : "-55%", opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="absolute inset-x-4 md:inset-x-12 top-0 z-10 bg-white rounded-2xl shadow-2xl border border-stone-100 p-8 pb-24 md:p-14 md:pb-40"
                style={{ height: "auto" }}
              >
                {/* Letter Content */}
                <div className="h-full flex flex-col">
                  {/* Header - Fixed */}
                  <div className="flex justify-between items-center border-b border-stone-100 pb-6 mb-6 shrink-0">
                    <div className="space-y-1">
                      <h4 className="text-amber-600 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">From the desk of Founders</h4>
                      <div className="h-0.5 w-12 bg-amber-400"></div>
                    </div>
                    <span className="text-stone-300 italic text-[10px] md:text-xs tracking-widest">Handcrafted Hospitality</span>
                  </div>

                  {/* Body - Scrollable with fixed height to force overflow */}
                  <div className="max-h-[150px] md:max-h-[300px] overflow-y-auto pr-4 custom-scrollbar mb-8">
                    <div className="space-y-6 text-stone-800 text-base md:text-xl leading-relaxed font-light">
                      <p>
                        Retrofusion was born from a simple yet profound belief: that travel should be more than a change of scenery—it should be a <span className="text-stone-900 font-normal">homecoming for the soul</span>.
                      </p>
                      <p>
                        When we started this journey, we didn't just want to create luxury villas. We wanted to architect environments where vintage charm meets modern ease, and where every guest feels the heartbeat of local culture.
                      </p>
                      <p>
                        Whether it's the carefully curated artifacts, the warmth of our personalized service, or the quiet luxury of a dawn in Lonavala, every element of Retrofusion is a piece of our story that we invite you to share.
                      </p>
                      <p>
                        Every detail, from the hand-picked furnishings to the specialized guest experiences, is crafted with the same love and attention we would give to our own home. Our goal is to create a sanctuary where you can pause, breathe, and rediscover the joy of the present moment.
                      </p>
                    </div>
                  </div>

                  {/* Footer - Fixed */}
                  <div className="pt-8 border-t border-stone-100 shrink-0">
                    <p className="text-stone-400 mb-6 font-light italic text-sm tracking-wide">With gratitude and warmth,</p>
                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                      <div className="relative group/sig">
                        <span className="text-3xl md:text-4xl text-stone-900 block mb-1 transition-colors duration-300 group-hover/sig:text-amber-700" style={{ fontFamily: "'Dancing Script', cursive" }}>Ruchi Arora</span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-bold">Founder & Creative Vision</span>
                      </div>
                      <div className="relative group/sig">
                        <span className="text-3xl md:text-4xl text-stone-900 block mb-1 transition-colors duration-300 group-hover/sig:text-amber-700" style={{ fontFamily: "'Dancing Script', cursive" }}>Jitendra Arora</span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-bold">Founder & Strategy Lead</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Envelope Pocket Front (The visible part that overlaps the bottom of the letter) */}
              <div 
                className="absolute inset-0 z-20 pointer-events-none rounded-b-3xl"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f9f8f6 100%)',
                  clipPath: 'polygon(0 50%, 50% 35%, 100% 50%, 100% 100%, 0 100%)',
                  boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.02)'
                }}
              ></div>

              {/* Decorative Envelope Lines for the Pocket */}
              <div 
                className="absolute inset-0 z-20 pointer-events-none opacity-40 rounded-b-3xl"
                style={{
                  border: '1px solid rgba(217, 119, 6, 0.15)',
                  clipPath: 'polygon(0 50%, 50% 35%, 100% 50%)'
                }}
              ></div>

              {/* Subtle shading inside the pocket */}
              <div className="absolute inset-0 z-0 bg-stone-50 rounded-b-3xl"></div>
            </div>

            {/* Premium Seal/Label */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30 bg-white text-stone-900 px-8 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] text-[10px] uppercase tracking-[0.25em] font-black border-2 border-amber-400 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
              A Legacy of Excellence
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Redesigned Philosophy Section - Based on Mockup */}
      <section className="py-16 md:py-12 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-16 md:mb-24"
          >
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl text-stone-900 font-bold mb-8 leading-tight"
              style={{ fontFamily: "'Marcellus', serif" }}
            >
              Transforming Stays Into <br />
              <span className="text-amber-600">Soulful Memories</span>
            </h2>
            <p className="text-xl text-stone-500 font-light leading-relaxed">
              At Retrofusion, we curate more than just accommodation — we weave together vintage charm, modern comfort, and heartfelt hospitality to deliver spaces that inspire connection.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Staggered Images */}
            <div className="relative flex items-end gap-6 md:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-3/5 aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200"
              >
                <img 
                  src="/images/gallery/Retrofusion1.jpg" 
                  alt="Retrofusion Living Space"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="w-2/5 aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-2xl shadow-stone-200 mb-12 md:mb-20"
              >
                <img 
                  src="/images/pool.png" 
                  alt="Retrofusion Details"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            </div>

            {/* Right: List Items */}
            <div className="space-y-0">
              {[
                {
                  title: 'Immersive Curation',
                  description: 'From hand-picked vintage decor to bespoke modern amenities, every corner is designed to tell a unique story.'
                },
                {
                  title: 'Heartfelt Hospitality',
                  description: 'We believe in the luxury of personal connection, ensuring every guest feels like a welcomed friend in our home.'
                },
                {
                  title: 'Local Essence & Soul',
                  description: 'Discover the authentic spirit of Lonavala through our thoughtfully architected spaces that celebrate local heritage.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  className={`${index !== 0 ? 'border-t border-stone-200 mt-10 pt-10' : ''}`}
                >
                  <h3 
                    className="text-2xl font-bold text-stone-900 mb-4"
                    style={{ fontFamily: "'Marcellus', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-lg text-stone-500 font-light leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey - Vertical Timeline */}
      <section className="py-16 md:py-12 px-4 sm:px-6 lg:px-16 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src=""
            alt="Journey Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/90"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-amber-600 uppercase tracking-widest text-xs font-semibold mb-4 block">Chronicle</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900" style={{ fontFamily: "'Marcellus', serif" }}>
              Our Journey Through Time
            </h2>
          </div>

          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[1px] bg-stone-200 -translate-x-1/2"></div>

            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[19px] md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-amber-400 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0">
                    <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-xl transition-all duration-500 group">
                      <div className="text-amber-600 font-bold text-sm tracking-[0.3em] mb-3 uppercase">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-amber-700 transition-colors duration-300" style={{ fontFamily: "'Marcellus', serif" }}>{milestone.title}</h3>
                      <p className="text-stone-500 font-light leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden md:block w-[45%]"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Invitation - CTA */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image with Parallax-esque effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dprafk917/image/upload/v1768230663/5d93e66d-23b4-4578-bb58-35032b8b39b8_cftv5v.avif"
            alt="Experience Retrofusion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl text-white font-bold mb-8" style={{ fontFamily: "'Marcellus', serif" }}>
              Ready to create your <br />
              <span className="text-amber-400">own story?</span>
            </h2>
            <p className="text-white text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Step into a space where every moment is curated, every corner has a narrative, and every guest is family.
            </p>
            <a 
              href="/gallery" 
              className="inline-flex items-center gap-3 bg-white text-stone-900 px-10 py-5 rounded-full font-medium text-lg hover:bg-amber-400 hover:text-stone-900 transition-all duration-300 group shadow-2xl"
            >
              Explore Our Collection
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;