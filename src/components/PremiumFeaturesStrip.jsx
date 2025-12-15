import { motion } from 'framer-motion';

const PremiumFeaturesStrip = () => {
  const CustomIcons = {
    Villa: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main villa structure */}
        <path d="M2 20 L4 18 L6 18 L8 16 L16 16 L18 18 L20 18 L22 20 L2 20" stroke="currentColor" strokeWidth="1.5" fill="none" />

        {/* Central building */}
        <rect x="8" y="12" width="8" height="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M7 12 L12 8 L17 12" stroke="currentColor" strokeWidth="1.5" fill="none" />

        {/* Side wings */}
        <rect x="4" y="14" width="4" height="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="16" y="14" width="4" height="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M3 14 L6 12 L9 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M15 14 L18 12 L21 14" stroke="currentColor" strokeWidth="1.5" fill="none" />

        {/* Columns */}
        <line x1="10" y1="13" x2="10" y2="15" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="13" x2="12" y2="15" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="13" x2="14" y2="15" stroke="currentColor" strokeWidth="1.5" />

        {/* Entrance */}
        <path d="M10 16 Q12 15 14 16" stroke="currentColor" strokeWidth="1.5" fill="none" />

        {/* Palm trees */}
        <path d="M5 18 L5 15" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 16 Q5 15 6 16" stroke="currentColor" strokeWidth="1" />

        <path d="M19 18 L19 15" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 16 Q19 15 20 16" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    Architecture: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main roof structure */}
        <path d="M3 8 L3 6 L21 6 L21 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 8 L4 6.5 L20 6.5 L20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Columns */}
        <line x1="6" y1="8" x2="6" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="9" y1="8" x2="9" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="8" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="15" y1="8" x2="15" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="18" y1="8" x2="18" y2="20" stroke="currentColor" strokeWidth="1.5" />

        {/* Base */}
        <path d="M2 20 L22 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Arched entrance */}
        <path d="M10 20 L10 16 Q12 14 14 16 L14 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="11" y="18" width="2" height="2" stroke="currentColor" strokeWidth="1.5" fill="none" />

        {/* Decorative pattern on right */}
        <rect x="16.5" y="10" width="1" height="1" stroke="currentColor" strokeWidth="1" fill="none" />
        <rect x="16.5" y="11.5" width="1" height="1" stroke="currentColor" strokeWidth="1" fill="none" />
        <rect x="18" y="10" width="1" height="1" stroke="currentColor" strokeWidth="1" fill="none" />
        <rect x="18" y="11.5" width="1" height="1" stroke="currentColor" strokeWidth="1" fill="none" />

        {/* Palm tree */}
        <path d="M20 20 L20 16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 17 Q20 16 21 17" stroke="currentColor" strokeWidth="1" />
        <path d="M19 18 Q20 17 21 18" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    Pool: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pool/jacuzzi container */}
        <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />

        {/* Jacuzzi bubbles/jets */}
        <circle cx="8" cy="12" r="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="14" r="0.8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="12" r="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="16" r="0.6" stroke="currentColor" strokeWidth="1" />
        <circle cx="14" cy="16" r="0.6" stroke="currentColor" strokeWidth="1" />

        {/* Water level indicator */}
        <path d="M4 10 Q8 11 12 10 Q16 9 20 10" stroke="currentColor" strokeWidth="1.5" fill="none" />

        {/* Jets/controls */}
        <rect x="3" y="6" width="2" height="2" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="19" y="6" width="2" height="2" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    Concierge: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 5-star arrangement */}
        <path d="M7 6 L7.5 7.5 L9 7.5 L7.8 8.5 L8.2 10 L7 9 L5.8 10 L6.2 8.5 L5 7.5 L6.5 7.5 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M12 4 L12.5 5.5 L14 5.5 L12.8 6.5 L13.2 8 L12 7 L10.8 8 L11.2 6.5 L10 5.5 L11.5 5.5 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M17 6 L17.5 7.5 L19 7.5 L17.8 8.5 L18.2 10 L17 9 L15.8 10 L16.2 8.5 L15 7.5 L16.5 7.5 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M9.5 10 L10 11.5 L11.5 11.5 L10.3 12.5 L10.7 14 L9.5 13 L8.3 14 L8.7 12.5 L7.5 11.5 L9 11.5 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M14.5 10 L15 11.5 L16.5 11.5 L15.3 12.5 L15.7 14 L14.5 13 L13.3 14 L13.7 12.5 L12.5 11.5 L14 11.5 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />

        {/* Service bell */}
        <path d="M8 16 Q12 14 16 16" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="11" y="16" width="2" height="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M6 19 L18 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

        {/* Bell handle */}
        <circle cx="12" cy="15" r="0.8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    Nature: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Mountain peaks */}
        <path d="M3 15 L7 8 L11 12 L15 6 L19 10 L21 15" stroke="currentColor" strokeWidth="1.5" fill="none" />

        {/* Trees */}
        <path d="M6 15 L6 19" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 14 Q6 12 8 14" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M4.5 15 Q6 13 7.5 15" stroke="currentColor" strokeWidth="1.2" fill="none" />

        <path d="M18 15 L18 19" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 14 Q18 12 20 14" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M16.5 15 Q18 13 19.5 15" stroke="currentColor" strokeWidth="1.2" fill="none" />

        {/* Moon/sun */}
        <path d="M16 8 Q17 7 18 8 Q17 9 16 8" stroke="currentColor" strokeWidth="1.2" fill="none" />

        {/* Leaves/foliage */}
        <path d="M10 16 Q11 15 12 16" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M13 17 Q14 16 15 17" stroke="currentColor" strokeWidth="1" fill="none" />

        {/* Ground line */}
        <path d="M2 19 L22 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  };

  const features = [
    {
      icon: CustomIcons.Villa,
      text: "Private Luxury\nVillas"
    },
    {
      icon: CustomIcons.Architecture,
      text: "Exclusive Retro\nArchitecture"
    },
    {
      icon: CustomIcons.Pool,
      text: "Private Pool &\nJacuzzi"
    },
    {
      icon: CustomIcons.Concierge,
      text: "5-Star Concierge\nExperience"
    },
    {
      icon: CustomIcons.Nature,
      text: "Nature-Surrounded,\nQuiet Location"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      className="py-8 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with Decorative Lines */}
        <div
          className="flex items-center justify-center mb-12 gap-4"
          variants={itemVariants}
        >
          <div className="relative flex-1 max-w-48 h-px bg-amber-200">
            <div className="absolute -right-1 -top-1 w-2 h-2 bg-amber-200 transform rotate-45"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 tracking-wide whitespace-nowrap font-display">
            The Retrofusion Experience
          </h2>
          <div className="relative flex-1 max-w-48 h-px bg-amber-200">
            <div className="absolute -left-1 -top-1 w-2 h-2 bg-amber-200 transform rotate-45"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-stone-50 border border-stone-200 rounded-full flex items-center justify-center mb-5 group-hover:bg-amber-50 transition-colors">
                <div className="text-stone-600">
                  <feature.icon />
                </div>
              </div>

              {/* Feature Text */}
              <div className="text-stone-700 text-sm md:text-base lg:text-lg font-medium leading-relaxed whitespace-pre-line">
                {feature.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default PremiumFeaturesStrip;