import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../lib/utils';
import type { BlogPost } from '../types';
import ReactMarkdown from 'react-markdown';

type BlogPost = {
  id: string;
  title: string;
  image?: string;
  videoUrl?: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
};

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Spider-Man: Miles Morales – Ultimate Web-Swinging Experience',
    videoUrl: 'https://www.youtube.com/embed/26QPeXoWzLM  ',
    excerpt: 'Watch my thrilling gameplay of Spider-Man: Miles Morales with epic web-swinging and combat!',
    content: `
    # Spider-Man: Miles Morales – Ultimate Web-Swinging Experience
    
    Dive into the streets of New York as I play *Spider-Man: Miles Morales*!
    This gameplay showcases:
    
    - Fluid web-swinging mechanics** across the city  
    - High-energy combat** with electrifying Venom powers  
    - Breathtaking visuals** and cinematic moments  
    - Stealth missions, side quests, and open-world exploration**  
    
    Watch as Miles takes on enemies, saves the city, and embraces his role as Spider-Man! 🕷️🔥
    `
    ,
    date: '2024-03-20',
    author: 'Mausam Kar'
  },
  {
    id: '2',
title: 'BGMI – Intense Battle Royale Action',
videoUrl: 'https://www.youtube.com/embed/W5ueSz1I9cY  ',
excerpt: 'Epic BGMI gameplay showcasing intense gunfights and survival tactics!',
content: `
# BGMI – Battlegrounds Mobile India Gameplay

Watch my action-packed BGMI gameplay featuring:

- **High-intensity gunfights** and tactical strategies  
- **Survival techniques** to secure the Chicken Dinner  
- **Sniping, close combat, and team coordination**  
- **Exciting moments in classic and TDM matches**  

Experience the thrill of BGMI as I take on enemies, explore maps, and push for victory! 🎯🔥
`
,
    date: '2024-03-18',
    author: 'Mausam Kar'
  },
  {
    id: '3',
title: 'Asphalt 9: Legends – High-Speed Racing Action',
videoUrl: 'https://www.youtube.com/embed/diznkP7_iEo ',
excerpt: 'Experience the adrenaline rush of Asphalt 9: Legends with breathtaking races and stunning visuals!',
content: `
# Asphalt 9: Legends – Ultimate Racing Experience

Get ready for high-speed action in my *Asphalt 9: Legends* gameplay! This video features:

- **Thrilling arcade-style racing** with stunning graphics  
- **Nitro boosts, drifts, and jumps** for insane speed  
- **Exotic supercars** and intense multiplayer showdowns  
- **High-octane gameplay** across breathtaking locations  

Watch as I race through the most exciting tracks, pulling off epic drifts and securing first place! 🏎️🔥
`
,
    date: '2024-03-15',
    author: 'Mausam Kar'
  }
];

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section
      id="blog"
      className="py-20 bg-white dark:bg-[radial-gradient(circle_at_center,_#000000_0%,_#111827_100%)] relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: "rgba(255, 255, 204, 0.2)"
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center space-y-4"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-black dark:text-white"
          >
            Gaming
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100 }}
              className={cn(
                "bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm",
                "aspect-square rounded-xl overflow-hidden",
                "shadow-2xl hover:shadow-[0_20px_50px_-12px_rgba(79,70,229,0.3)]",
                "transform transition-all duration-300",
                "border border-white/20 dark:border-gray-700/50",
                "group relative cursor-pointer"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="h-full w-full overflow-hidden relative">
                {post.videoUrl ? (
                  <motion.div
                    className="h-full w-full bg-black"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    <iframe
                      src={post.videoUrl}
                      className="w-full h-full object-cover"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={post.title}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    className="h-full"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </motion.div>
                )}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent z-10">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {post.date} • {post.author}
                </p>
                <motion.button
                  onClick={() => setSelectedPost(post)}
                  whileHover={{ x: 5 }}
                  className={cn(
                    "text-blue-400 font-medium",
                    "hover:text-blue-300",
                    "transition-colors duration-300",
                    "group/link relative flex items-center gap-2"
                  )}
                >
                  <span className="relative z-10">View Content</span>
                  <motion.span
                    className="inline-block"
                    whileHover={{ rotate: 45 }}
                    transition={{ type: 'spring' }}
                  >
                    <X size={18} className="transform rotate-45" />
                  </motion.span>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-hover/link:w-full transition-all duration-300" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/20 dark:border-gray-700/50"
              >
                <div className="sticky top-0 bg-white/95 dark:bg-gray-900/95 p-4 border-b dark:border-gray-700 flex justify-between items-center backdrop-blur-sm">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent dark:text-white">
                    {selectedPost.title}
                  </h3>
                  <motion.button
                    onClick={() => setSelectedPost(null)}
                    whileHover={{ rotate: 90 }}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                <div className="p-6 prose dark:prose-invert max-w-none">
                  {selectedPost.videoUrl && (
                    <div className="aspect-video mb-8 rounded-xl overflow-hidden">
                      <iframe
                        src={selectedPost.videoUrl}
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                        title={selectedPost.title}
                      />
                    </div>
                  )}
                  <ReactMarkdown className="text-gray-700 dark:text-gray-300">
                    {selectedPost.content}
                  </ReactMarkdown>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated background elements */}
        <div className="absolute -top-20 left-1/3 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-20 right-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};