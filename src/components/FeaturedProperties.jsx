import { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiHome, FiMapPin } = FiIcons;

const VillaCard = ({ image, name, location, guests, bedrooms, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[400px] w-full cursor-pointer group overflow-hidden rounded-[2rem] shadow-2xl hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] transition-all duration-700 transform hover:scale-[1.03] border-2 border-white/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Subtle bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Villa Name - Always Visible */}
      <div className="absolute bottom-8 left-8">
        <h3 className="text-2xl font-display text-white tracking-wide mb-2 font-bold">{name}</h3>
        <div className="flex items-center text-white/90 text-sm gap-2">
          <SafeIcon icon={FiMapPin} className="w-4 h-4" />
          <span className="uppercase tracking-widest font-medium">{location}</span>
        </div>
      </div>

      {/* Slide-up Luxury Details on Hover */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-8 transform transition-all duration-700 ease-out backdrop-blur-sm ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
        <div className="space-y-6 pt-16">
          {/* Villa Name (repeated for animation) */}
          <div>
            <h3 className="text-3xl font-display text-white tracking-wide mb-2 font-bold">{name}</h3>
            <div className="flex items-center text-white/90 text-sm gap-2 mb-4">
              <SafeIcon icon={FiMapPin} className="w-4 h-4" />
              <span className="uppercase tracking-widest font-medium">{location}</span>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
          </div>

          {/* Description */}
          <p className="text-white/95 text-sm leading-relaxed font-light">{description}</p>

          {/* Luxury Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md p-4 rounded-2xl border border-white/30 hover:bg-white/20 transition-colors duration-300">
              <SafeIcon icon={FiUsers} className="w-5 h-5 text-amber-300" />
              <div>
                <span className="text-white font-semibold text-base">{guests}</span>
                <p className="text-white/80 text-xs uppercase tracking-wider">Guests</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md p-4 rounded-2xl border border-white/30 hover:bg-white/20 transition-colors duration-300">
              <SafeIcon icon={FiHome} className="w-5 h-5 text-amber-300" />
              <div>
                <span className="text-white font-semibold text-base">{bedrooms}</span>
                <p className="text-white/80 text-xs uppercase tracking-wider">BHK</p>
              </div>
            </div>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-2xl transition-all duration-300 uppercase tracking-wider text-sm shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Explore Villa
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProperties = () => {

  const villas = [
    {
      id: 1,
      name: "Retro Villa",
      location: "Lonavala",
      guests: 12,
      bedrooms: 4,
      description: "Step into vintage charm with modern luxury. Features classic architecture with contemporary amenities.",
      image: "https://res.cloudinary.com/dprafk917/image/upload/v1770226534/N36_om6t9d.jpg"
    },
    {
      id: 2,
      name: "Neo Retro Villa",
      location: "Lonavala",
      guests: 8,
      bedrooms: 3,
      description: "Contemporary design meets timeless comfort. Perfect blend of modern aesthetics and cozy elegance.",
      image: "https://res.cloudinary.com/dprafk917/video/upload/so_2/v1768241694/1874704f-2b23-41a2-aa21-ca77ce4aaecd_ipao9k.jpg"
    },
    {
      id: 3,
      name: "Retro Visawa",
      location: "Lonavala",
      guests: 15,
      bedrooms: 5,
      description: "Serene escape surrounded by nature. Spacious villa offering tranquil moments and premium amenities.",
      image: "https://res.cloudinary.com/dprafk917/image/upload/v1770225615/8492832a-d4f1-4821-90d7-8ebaf7c90dce_mbiuqk.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <section
        className="py-8 bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Luxury Header Section */}
          <div className="mb-12">
            <h2
              className="text-4xl md:text-5xl font-display text-stone-800 mb-6 tracking-wider font-bold"
              variants={itemVariants}
            >
              Featured Properties
            </h2>
            <p
              className="text-lg text-stone-600 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              Discover our luxury villas
            </p>
          </div>

          {/* Cards Section */}
          <div
            className="w-full"
            variants={itemVariants}
          >
            {/* Luxury Villa Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
              {villas.map((villa) => (
                <VillaCard key={villa.id} {...villa} />
              ))}
            </div>
          </div>

        </div>
      </section>


    </>
  );
};

export default FeaturedProperties;