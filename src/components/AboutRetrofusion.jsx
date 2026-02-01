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
    <section
      className="bg-white px-4 sm:px-6 lg:px-16 py-8 lg:py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading Section */}
        <div className="mb-12 lg:mb-16" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
            About Retrofusion
          </h2>
          <p className="text-base sm:text-lg text-stone-500 max-w-2xl">
            Your home away from home in the hills of Lonavala
          </p>
        </div>

        {/* Content Grid: Text Left, Image Collage Right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* LEFT: Content */}
          <div className="w-full lg:w-1/2 space-y-8">

            {/* Main Description */}
            <div variants={itemVariants}>
              <p className="text-lg leading-relaxed text-stone-700 mb-6">
                Started as a passion project by a group of friends who fell in love with Lonavala's misty hills, Retrofusion is now home to three beautiful villas. We wanted to create spaces where families could gather, friends could reconnect, and couples could escape the city chaos.
              </p>
            </div>

            {/* Key Highlights Grid */}
            <div className="grid grid-cols-2 gap-4" variants={itemVariants}>

              <div className="bg-stone-50 p-5 rounded-xl border border-stone-200">
                <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                <div className="text-sm text-stone-600">Happy Guests</div>
              </div>
              <div className="bg-stone-50 p-5 rounded-xl border border-stone-200">
                <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
                <div className="text-sm text-stone-600">Caretaker Support</div>
              </div>

            </div>

            {/* Feature Cards */}
            <div className="space-y-4" variants={itemVariants}>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                <h3 className="font-bold text-stone-800 mb-2 text-lg">What Makes Us Different</h3>
                <p className="text-stone-600 text-base leading-relaxed">
                  We live in Lonavala. We know the best chai spots, the hidden viewpoints, and we're always a call away if you need anything during your stay.
                </p>
              </div>

              <div className="bg-gradient-to-br from-stone-50 to-stone-100 p-6 rounded-xl border border-stone-200">
                <h3 className="font-bold text-stone-800 mb-2 text-lg">Perfect For</h3>
                <p className="text-stone-600 text-base leading-relaxed">
                  Birthday celebrations, anniversary getaways, family reunions, corporate offsites, or just a weekend away with your loved ones.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT: Image Collage */}
          <div
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              {/* Top Left - Tall */}
              <div className="row-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://res.cloudinary.com/dprafk917/image/upload/v1769863039/01_qwhl8a.jpg"
                  alt="Neo Villa Living Area"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Top Right */}
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://res.cloudinary.com/dprafk917/image/upload/v1769868143/M01_jjmwdw.webp"
                  alt="Retro Villa Pool"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Right */}
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://res.cloudinary.com/dprafk917/image/upload/v1769862646/pool_ckwldd.png"
                  alt="Visawa Villa Pool"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutRetrofusion;