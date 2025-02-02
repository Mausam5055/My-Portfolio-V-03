import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import { cn } from '../lib/utils';
import type { Inspiration } from '../types';

const inspirations: Inspiration[] = [
  {
    id: "1",
    name: "Bill Gates",
    role: "Microsoft Co-founder",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg/800px-Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg",
    quote: "Your most unhappy customers are your greatest source of learning.",
    category: "tech",
    link: "https://en.wikipedia.org/wiki/Bill_Gates"
  },
  {
    id: "2",
    name: "Pablo Picasso",
    role: "Cubist Painter",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Pablo_picasso_1.jpg",
    quote: "I dream of painting and then I paint my dream.",
    category: "art",
    link: "https://en.wikipedia.org/wiki/Pablo_Picasso"
  },
  {
    id: "3",
    name: "Mark Zuckerberg",
    role: "Facebook Co-founder",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/800px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    quote: "The biggest risk is not taking any risk.",
    category: "tech",
    link: "https://en.wikipedia.org/wiki/Mark_Zuckerberg"
  },
  {
    id: "4",
    name: "Frida Kahlo",
    role: "Surrealist Artist",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Guillermo_Kahlo_-_Frida_Kahlo%2C_June_15%2C_1919_-_Google_Art_Project.jpg/800px-Guillermo_Kahlo_-_Frida_Kahlo%2C_June_15%2C_1919_-_Google_Art_Project.jpg",
    quote: "I paint self-portraits because I am so often alone, because I am the person I know best.",
    category: "art",
    link: "https://en.wikipedia.org/wiki/Frida_Kahlo"
  },
  {
    id: "5",
    name: "Elon Musk",
    role: "Tech Entrepreneur",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    category: "business",
    link: "https://en.wikipedia.org/wiki/Elon_Musk"
  },
  {
    id: "6",
    name: "Steve Jobs",
    role: "Apple Co-founder",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/330px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
    quote: "Innovation distinguishes between a leader and a follower.",
    category: "business",
    link: "https://en.wikipedia.org/wiki/Steve_Jobs"
  },
  {
    id: "7",
    name: "Marie Curie",
    role: "Physicist & Chemist",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/1200px-Marie_Curie_c._1920s.jpg",
    quote: "Nothing in life is to be feared, it is only to be understood.",
    category: "personal",
    link: "https://en.wikipedia.org/wiki/Marie_Curie"
  },
  {
    id: "8",
    name: "Nelson Mandela",
    role: "Civil Rights Leader",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/1200px-Nelson_Mandela_1994.jpg",
    quote: "It always seems impossible until it's done.",
    category: "personal",
    link: "https://en.wikipedia.org/wiki/Nelson_Mandela"
  }
];

export const Inspirations: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);
  const categories = ['all', 'tech', 'art', 'business', 'personal'];

  const filteredInspirations = selectedCategory === 'all'
    ? inspirations
    : inspirations.filter(inspiration => inspiration.category === selectedCategory);

  // Determine how many inspirations to show
  const displayedInspirations = showAll ? filteredInspirations : filteredInspirations.slice(0, 3);

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden bg-[#fffbe6] dark:bg-[radial-gradient(ellipse_at_top,_#0f172a_0%,_#1e293b_100%)]"
    >
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center space-y-4"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-black dark:text-white"
          >
            Inspirations
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { staggerChildren: 0.1 } }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300 } }}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 25px -8px rgba(99,102,241,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full font-medium",
                "flex items-center gap-2 transition-all duration-300",
                "group relative overflow-hidden backdrop-blur-sm",
                "border border-blue-200/30 dark:border-gray-700",
                selectedCategory === category
                  ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-blue-50/50 dark:hover:bg-gray-700/50"
              )}
            >
              <Filter size={16} className={cn("transition-colors", selectedCategory === category ? "text-white" : "text-blue-600 dark:text-purple-400")} />
              <span className="capitalize relative">
                {category}
                <motion.span
                  className={cn("absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400", "group-hover:w-full transition-all duration-300")}
                  animate={{ width: selectedCategory === category ? "100%" : "0%", transition: { duration: 0.3 } }}
                />
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Inspirations Grid with Smooth Zoom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedInspirations.map((inspiration, index) => (
            <motion.div
              key={inspiration.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, transition: { delay: index * 0.15, type: 'spring', stiffness: 150, damping: 15 } }}
              exit={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true, margin: "-100px" }}
              className={cn("bg-white/80 dark:bg-gray-800/80 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 relative group")}
            >
                {/* Image Section with Enhanced Zoom Animation */}
                <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={inspiration.image}
                  alt={inspiration.name}
                  className="w-full h-full object-cover cursor-pointer"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ 
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      mass: 0.5
                    }
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    transition: {
                      type: "spring",
                      stiffness: 250,
                      damping: 10,
                      mass: 0.5,
                      velocity: 0.5
                    }
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  exit={{
                    scale: 0.9,
                    opacity: 0,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    willChange: "transform",
                    transformOrigin: "center center",
                  }}
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {inspiration.name}
                    </h3>
                    <p className="text-gray-200 text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      {inspiration.role}
                    </p>
                  </div>
                </div>
                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
                  className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-black text-sm capitalize backdrop-blur-sm shadow-md"
                >
                  {inspiration.category}
                </motion.div>
              </div>

              {/* Content Section */}
              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.blockquote 
                  className="text-gray-700 dark:text-gray-300 italic mb-4 text-lg leading-relaxed font-serif"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring' }}
                >
                  "{inspiration.quote}"
                </motion.blockquote>

                {inspiration.link && (
                  <motion.a
                    href={inspiration.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className={cn(
                      "inline-flex items-center gap-2",
                      "text-blue-600 dark:text-purple-400 font-medium",
                      "hover:text-blue-700 dark:hover:text-purple-300",
                      "transition-colors duration-300"
                    )}
                  >
                    <span>Explore Legacy</span>
                    <motion.span
                      whileHover={{ rotate: 45, scale: 1.1 }}
                      transition={{ type: 'spring' }}
                    >
                      <ExternalLink size={18} className="stroke-current" />
                    </motion.span>
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex justify-center mt-8">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className={cn(
              "px-6 py-2 rounded-full font-medium text-white",
              "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            )}
          >
            {showAll ? "Show Less" : "Show More"}
          </motion.button>
        </div>
      </div>
    </section>
  );
};