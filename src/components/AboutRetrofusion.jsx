import { motion } from 'framer-motion';

const AboutRetrofusion = () => {
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
      className="bg-white px-4 sm:px-6 lg:px-16 py-8 lg:py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading Section */}
        <motion.div className="mb-12 lg:mb-16" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
            About Retrofusion
          </h2>
          <p className="text-base sm:text-lg text-stone-500 max-w-2xl">
            Where vintage charm meets modern luxury to create unforgettable experiences
          </p>
        </motion.div>

        {/* Content Grid: Text Left, Image Collage Right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* LEFT: Content */}
          <div className="w-full lg:w-1/2 space-y-8">

            {/* Main Description */}
            <motion.div variants={itemVariants}>
              <p className="text-lg leading-relaxed text-stone-700 mb-6">
                We don't just offer stays—we craft experiences that become cherished memories.
                Each villa in our collection tells a story of vintage charm reimagined for modern luxury,
                creating intimate sanctuaries where time slows down and connections deepen.
              </p>
            </motion.div>

            {/* Key Highlights Grid */}
            <motion.div className="grid grid-cols-2 gap-4" variants={itemVariants}>

              <div className="bg-stone-50 p-5 rounded-xl border border-stone-200">
                <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                <div className="text-sm text-stone-600">Happy Guests</div>
              </div>
              <div className="bg-stone-50 p-5 rounded-xl border border-stone-200">
                <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
                <div className="text-sm text-stone-600">Concierge Service</div>
              </div>

            </motion.div>

            {/* Feature Cards */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                <h3 className="font-bold text-stone-800 mb-2 text-lg">Our Heritage</h3>
                <p className="text-stone-600 text-base leading-relaxed">
                  Preserving architectural legacy while embracing modern comforts for discerning travelers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-stone-50 to-stone-100 p-6 rounded-xl border border-stone-200">
                <h3 className="font-bold text-stone-800 mb-2 text-lg">Curated Experiences</h3>
                <p className="text-stone-600 text-base leading-relaxed">
                  Every detail thoughtfully designed to create unforgettable moments and connections.
                </p>
              </div>
            </motion.div>

          </div>

          {/* RIGHT: Image Collage */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              {/* Top Left - Tall */}
              <div className="row-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/gallery/Retrofusion1.jpg"
                  alt="Retrofusion Villa 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Top Right */}
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/gallery/image2.jpg"
                  alt="Retrofusion Villa 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Right */}
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/gallery/image4.jpg"
                  alt="Retrofusion Villa 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Decorative Quote */}
            {/* <motion.div
              className="mt-6 bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-stone-700 italic text-base leading-relaxed">
                "Every corner has a story, every moment, a memory"
              </p>
              <p className="text-amber-700 font-semibold mt-2 text-sm text-right">
                — The Retrofusion Team
              </p>
            </motion.div> */}
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default AboutRetrofusion;