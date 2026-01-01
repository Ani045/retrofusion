import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    // Ensure video plays on load
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, keep muted
        videoRef.current.muted = true;
        videoRef.current.play();
      });
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - Clickable for mute/unmute */}
      <div
        className="absolute inset-0 w-full h-full cursor-pointer z-0"
        onClick={toggleMute}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/retro.webp"
        >
          <source
            src="https://res.cloudinary.com/damfndmrm/video/upload/v1767253558/8wr207mfxnrmy0cvd61bd2gn1g_result__1_mp3iay.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Multi-layer Black Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>

        {/* Subtle vignette effect */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
        }}></div>
      </div>

      {/* Main Content - Retrofusion */}
      <div className="relative z-10 text-center text-white px-4 pointer-events-none">
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-[1px] h-8 bg-gradient-to-b from-amber-400/50 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-400/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-amber-400/5 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;