import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Data Structure: Organized by COLUMNS to ensure vertical alignment control
// All images and titles are project-related (Retrofusion homestay villas)
const columnsData = [
  // Column 1: Tall Top, Short Bottom
  [
    {
      id: 1,
      title: "Retro Villa",
      image: "https://res.cloudinary.com/dprafk917/image/upload/v1770226533/N34_stewru.jpg",
      heightType: "tall",
      tag: "Featured",
      link: "/retro-villa"
    },
    {
      id: 2,
      title: "Private Pool",
      image: "https://res.cloudinary.com/dprafk917/image/upload/v1769863054/03.1_c7vcel.jpg",
      heightType: "short",
      link: "/retro-villa"
    }
  ],
  // Column 2: Short Top, Tall Bottom
  [
    {
      id: 3,
      title: "Mountain Views",
      image: "https://res.cloudinary.com/dprafk917/image/upload/v1769868140/B30_yc8rqu.webp",
      heightType: "short",
      link: "/retro-villa"
    },
    {
      id: 4,
      title: "Neo-Retro Villa",
      image: "https://res.cloudinary.com/dprafk917/image/upload/v1769863039/01_qwhl8a.jpg",
      heightType: "tall",
      tag: "Artistic Retreat",
      link: "/neo-retro-villa"
    }
  ],
  // Column 3: Tall Top, Short Bottom
  [
    {
      id: 5,
      title: "Retro Visawa",
      image: "https://res.cloudinary.com/dprafk917/image/upload/v1769862646/pool_ckwldd.png",
      heightType: "tall",
      tag: "Group Getaway",
      link: "/retro-visawa"
    },
    {
      id: 6,
      title: "Pet-Friendly Stays",
      image: "https://res.cloudinary.com/dprafk917/image/upload/v1769868142/G31_mdlfjh.webp",
      heightType: "short",
      link: "/retro-villa"
    }
  ],
  // Column 4: Short Top, Tall Bottom
  [
    {
      id: 7,
      title: "Vintage Interiors",
      image: "https://res.cloudinary.com/dprafk917/image/upload/v1769863043/08.1_cth2qs.jpg",
      heightType: "short",
      link: "/neo-retro-villa"
    },
    {
      id: 8,
      title: "Lonavala Escape",
      image: "https://res.cloudinary.com/dprafk917/image/upload/v1769863044/14_w8imzc.jpg",
      heightType: "tall",
      link: "/retro-visawa"
    }
  ]
];

const CollectionSection = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-white via-stone-50/30 to-stone-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-3">
            Collections For You
          </h2>
          <p className="text-base sm:text-lg text-stone-500 max-w-2xl leading-relaxed">
            Discover our curated collection of luxury villas in Lonavala for unforgettable homestay experiences!
          </p>
        </div>

        {/* MOBILE: Horizontal Scroll Container */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
            {columnsData.map((column, colIndex) => (
              <div
                key={colIndex}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: colIndex * 0.1 }}
                className="flex flex-col gap-4 min-w-[280px] sm:min-w-[320px]"
                style={{ scrollSnapAlign: 'start' }}
              >
                {column.map((item) => (
                  <Link
                    key={item.id}
                    to={item.link}
                    className={`relative w-full rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-200 block
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



                    {/* Text Content */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold font-display tracking-wide drop-shadow-lg">{item.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP: Grid Layout */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {columnsData.map((column, colIndex) => (
            <div
              key={colIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: colIndex * 0.1 }}
              className="flex flex-col gap-6 h-[600px]"
            >
              {column.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className={`
                    relative w-full rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-stone-200 block
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



                  {/* Text Content */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold font-display tracking-wide drop-shadow-lg">{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;