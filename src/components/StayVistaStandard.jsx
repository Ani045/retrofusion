import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiWine, 
  FiChef, 
  FiDroplet, 
  FiMapPin, 
  FiUserCheck, 
  FiGamepad, 
  FiBell, 
  FiTree,
  FiChevronLeft,
  FiChevronRight 
} = FiIcons;

const featuresData = [
  { icon: FiWine, label: 'Personalised Celebrations' },
  { icon: FiChef, label: 'In-house Chef' },
  { icon: FiDroplet, label: 'Private Pool' },
  { icon: FiMapPin, label: 'Local Experiences' },
  { icon: FiUserCheck, label: 'Caretaker Onsite' },
  { icon: FiGamepad, label: 'Games & Recreation' },
  { icon: FiBell, label: 'Butler Service' },
  { icon: FiTree, label: 'Green Open Spaces' },
];

const sliderImages = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop", 
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
];

const StayVistaStandard = () => {
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
    <motion.section 
      className="py-8 bg-gradient-to-br from-stone-50 via-white to-stone-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-display">
            The Retrofusion Standard
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
            Enjoy our signature features that make every stay effortless and enjoyable.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Gallery Section */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src={sliderImages[0]}
                    alt="Luxury Villa Feature 1"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src={sliderImages[1]}
                    alt="Luxury Villa Feature 2"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="mt-8">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src={sliderImages[2]}
                    alt="Luxury Villa Feature 3"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid Section */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 gap-8">
              {featuresData.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center text-center group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full group-hover:from-amber-100 group-hover:to-amber-200 transition-all duration-300 shadow-lg hover:shadow-xl border border-amber-200">
                    <SafeIcon icon={feature.icon} className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-base font-bold text-stone-800 leading-tight font-display">
                    {feature.label}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default StayVistaStandard;