import { motion } from 'framer-motion';

// Data Structure: Organized by COLUMNS to ensure vertical alignment control
const columnsData = [
  // Column 1: Tall Top, Short Bottom
  [
    {
      id: 1,
      title: "Villas",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      heightType: "tall", // 60% height
      tag: "Introducing" // Optional tag like in screenshot
    },
    {
      id: 2,
      title: "Wellness Retreats",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
      heightType: "short", // 40% height
    }
  ],
  // Column 2: Short Top, Tall Bottom
  [
    {
      id: 3,
      title: "Infinity Pool",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      heightType: "short",
    },
    {
      id: 4,
      title: "Off-beat Getaway",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      heightType: "tall",
    }
  ],
  // Column 3: Tall Top, Short Bottom
  [
    {
      id: 5,
      title: "1 Bedroom Offerings",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
      heightType: "tall",
    },
    {
      id: 6,
      title: "Senior Citizen-Friendly",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
      heightType: "short",
    }
  ],
  // Column 4: Short Top, Tall Bottom
  [
    {
      id: 7,
      title: "Pet-friendly",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      heightType: "short",
    },
    {
      id: 8,
      title: "Event-friendly",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      heightType: "tall",
    }
  ]
];

const CollectionSection = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-white via-stone-50/30 to-stone-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-3">
            Collections For You
          </h2>
          <p className="text-base sm:text-lg text-stone-500 max-w-2xl leading-relaxed">
            Discover our curated collections of stunning villas for luxurious and unforgettable escapes!
          </p>
        </motion.div>

        {/* MOBILE: Horizontal Scroll Container */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
            {columnsData.map((column, colIndex) => (
              <motion.div
                key={colIndex}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: colIndex * 0.1 }}
                className="flex flex-col gap-4 min-w-[280px] sm:min-w-[320px]"
                style={{ scrollSnapAlign: 'start' }}
              >
                {column.map((item) => (
                  <div
                    key={item.id}
                    className={`relative w-full rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-200
                      ${item.heightType === 'tall' ? 'h-64' : 'h-48'}
                    `}
                  >
                    {/* Background Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                    {/* Optional Tag (like "Introducing") */}
                    {item.tag && (
                      <div className="absolute top-3 left-3 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-200">
                        {item.tag}
                      </div>
                    )}

                    {/* Text Content */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold font-display tracking-wide drop-shadow-lg">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>

        {/* DESKTOP: Grid Layout */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {columnsData.map((column, colIndex) => (
            <motion.div
              key={colIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: colIndex * 0.1 }}
              className="flex flex-col gap-6 h-[600px]"
            >
              {column.map((item) => (
                <motion.div
                  key={item.id}
                  className={`
                    relative w-full rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-stone-200
                    ${item.heightType === 'tall' ? 'flex-[1.4]' : 'flex-1'}
                  `}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  {/* Optional Tag (like "Introducing") */}
                  {item.tag && (
                    <div className="absolute top-4 left-4 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-2 rounded-full border border-amber-200">
                      {item.tag}
                    </div>
                  )}

                  {/* Text Content */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold font-display tracking-wide drop-shadow-lg">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;