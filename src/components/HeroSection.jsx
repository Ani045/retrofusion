import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Banner images from Cloudinary
const bannerImages = [
  'https://res.cloudinary.com/dprafk917/image/upload/v1768230663/9f5dd90d-eb0b-451d-8d08-508c5f69f2c5_rjpdzh.avif',
  'https://res.cloudinary.com/dprafk917/image/upload/v1768230663/a613a1b2-edef-4242-8ee3-79ce77bae0e1_yi24hq.avif',
  'https://res.cloudinary.com/dprafk917/image/upload/v1768230663/5d93e66d-23b4-4578-bb58-35032b8b39b8_cftv5v.avif',
  'https://res.cloudinary.com/dprafk917/image/upload/v1768230664/91a15ba5-b5da-4618-b585-5d7f92fa5df3_yqcadt.avif',
  'https://res.cloudinary.com/dprafk917/image/upload/v1768230663/10b87900-0a8b-418e-9273-d5a11d7732af_diomuk.avif',
];

// Villa data for bottom links
const villas = [
  { name: 'Neo Villa', path: '/neo-villa' },
  { name: 'Viswa Villa', path: '/viswa-villa' },
  { name: 'Retro Villa', path: '/retro-villa' },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dissolveProgress, setDissolveProgress] = useState(0);

  // Touch/swipe state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sectionRef = useRef(null);

  // Scroll debounce state
  const isScrollCooldown = useRef(false);
  const scrollCooldownTimer = useRef(null);

  // Navigate to next slide - works even during transition
  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    setDissolveProgress(0);
  }, [currentIndex]);

  // Navigate to previous slide - works even during transition
  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    setDissolveProgress(0);
  }, [currentIndex]);

  // Animate dissolve progress - smooth 4 second dissolve
  useEffect(() => {
    if (isTransitioning) {
      const duration = 4000; // 4 seconds for smooth diagonal dissolve
      const startTime = Date.now();
      let animationId;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth easing for natural transition
        const eased = 1 - Math.pow(1 - progress, 2.5);
        setDissolveProgress(eased);

        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        } else {
          setIsTransitioning(false);
          setPrevIndex(null);
        }
      };

      animationId = requestAnimationFrame(animate);

      // Cleanup animation frame on unmount or when dependencies change
      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    }
  }, [isTransitioning, currentIndex]); // Re-run when currentIndex changes during transition

  // Auto-advance slides - interval should be longer than dissolve duration
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // 5 seconds between slides (allows 4s dissolve to complete)
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Handle swipe gestures
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Minimum swipe distance to trigger slide change

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }, [nextSlide, prevSlide]);

  // Handle scroll/wheel with proper debouncing - one scroll = one slide change
  const handleWheel = useCallback((e) => {
    // Skip if in cooldown period
    if (isScrollCooldown.current) return;

    // Check for any scroll (vertical or horizontal)
    const scrollAmount = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

    if (Math.abs(scrollAmount) > 20) {
      e.preventDefault();

      // Set cooldown to prevent rapid-fire triggers
      isScrollCooldown.current = true;

      // Clear any existing cooldown timer
      if (scrollCooldownTimer.current) {
        clearTimeout(scrollCooldownTimer.current);
      }

      // Trigger slide change
      if (scrollAmount > 0) {
        nextSlide();
      } else {
        prevSlide();
      }

      // Reset cooldown after 800ms (prevents multiple triggers per scroll gesture)
      scrollCooldownTimer.current = setTimeout(() => {
        isScrollCooldown.current = false;
      }, 800);
    }
  }, [nextSlide, prevSlide]);

  // Cleanup cooldown timer on unmount
  useEffect(() => {
    return () => {
      if (scrollCooldownTimer.current) {
        clearTimeout(scrollCooldownTimer.current);
      }
    };
  }, []);

  // Preload images
  useEffect(() => {
    bannerImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Generate diagonal dissolve mask (top-left to bottom-right)
  // The old image dissolves away, revealing the new one underneath
  const getDiagonalDissolveMask = (progress) => {
    // Progress goes from 0 to 1
    // We create a diagonal gradient that sweeps from top-left to bottom-right
    // The mask starts fully opaque (black = visible) and becomes transparent as progress increases
    const sweepPosition = progress * 200 - 50; // -50% to 150%
    const fadeWidth = 35; // Width of the soft fade zone

    // Inverted mask: black (visible) at the right, transparent (hidden) at the left
    // As progress increases, more of the previous image becomes transparent
    return `linear-gradient(
      135deg,
      transparent ${Math.max(0, sweepPosition)}%,
      rgba(0,0,0,0.2) ${Math.max(0, sweepPosition + fadeWidth * 0.2)}%,
      rgba(0,0,0,0.4) ${Math.max(0, sweepPosition + fadeWidth * 0.4)}%,
      rgba(0,0,0,0.6) ${Math.max(0, sweepPosition + fadeWidth * 0.6)}%,
      rgba(0,0,0,0.8) ${Math.max(0, sweepPosition + fadeWidth * 0.8)}%,
      black ${Math.min(100, sweepPosition + fadeWidth)}%,
      black 100%
    )`;
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
    >
      {/* Image Carousel with Diagonal Dissolve Effect */}
      <div className="absolute inset-0 w-full h-full">
        {/* New Image (appearing from behind) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1 }}
        >
          <img
            src={bannerImages[currentIndex]}
            alt={`Retrofusion Homestay ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Previous Image (dissolving diagonally from top-left to bottom-right) */}
        {prevIndex !== null && (
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              zIndex: 2,
              maskImage: getDiagonalDissolveMask(dissolveProgress),
              WebkitMaskImage: getDiagonalDissolveMask(dissolveProgress),
            }}
          >
            <img
              src={bannerImages[prevIndex]}
              alt={`Retrofusion Homestay ${prevIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Multi-layer Black Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-10"></div>

        {/* Subtle vignette effect */}
        <div className="absolute inset-0 z-10" style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
        }}></div>
      </div>

      {/* Main Content - Retrofusion */}
      <div className="relative z-20 text-center text-white px-4 pointer-events-none">
        {/* Welcome Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-amber-400 text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-light"
        >
          Welcome to
        </motion.p>

        {/* Main Title - Retrofusion */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none"
          style={{ fontFamily: "'Marcellus', serif" }}
        >
          <span
            className="bg-gradient-to-r from-white via-stone-100 to-white bg-clip-text text-transparent drop-shadow-2xl"
            style={{
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
            }}
          >
            Retrofusion
          </span>
        </motion.h1>

        {/* Punchline with theme color */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base md:text-xl text-stone-300/90 font-light tracking-wide max-w-xl mx-auto"
        >
          Experience our <span className="text-amber-400 font-normal">boutique homestays</span> where vintage charm meets modern luxury
        </motion.p>

        {/* Decorative Line Below */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="w-20 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8"
        />
      </div>

      {/* Villa Links at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-24 left-0 right-0 z-20 pointer-events-auto"
      >
        <div className="flex items-center justify-center gap-8 md:gap-16">
          {villas.map((villa, index) => (
            <Link
              key={villa.path}
              to={villa.path}
              className="group relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 + index * 0.15 }}
                className="flex flex-col items-center"
              >
                {/* Villa Name */}
                <span
                  className="text-white/90 text-sm md:text-base lg:text-lg tracking-[0.2em] uppercase font-light transition-all duration-300 group-hover:text-amber-400"
                  style={{ fontFamily: "'Marcellus', serif" }}
                >
                  {villa.name}
                </span>

                {/* Underline animation */}
                <span className="block w-0 h-[1px] bg-amber-400 transition-all duration-500 group-hover:w-full mt-2"></span>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-8 bg-gradient-to-b from-amber-400/50 to-transparent"></div>
        </motion.div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning && index !== currentIndex) {
                setIsTransitioning(true);
                setPrevIndex(currentIndex);
                setCurrentIndex(index);
                setDissolveProgress(0);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-amber-400 w-6'
              : 'bg-white/40 hover:bg-white/60'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Ambient corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-400/5 to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-amber-400/5 to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default HeroSection;