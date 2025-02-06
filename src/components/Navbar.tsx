import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, User } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  scrollToSection: (section: string) => void; // Add this line
}

export default function Navbar({ isDark, toggleTheme, scrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Ensure all sections are included
  const navItems = [
    'Home',
    'About',
    'Skills',
    'Gallery',
    'Artwork',
    'Journey',
    'Projects', // Added Projects
    'Testimonials', // Added Testimonials
    'Contact'
  ];

  const handleLinkClick = (section: string) => {
    scrollToSection(section.toLowerCase()); // Ensure the section name is in lowercase
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 bg-black text-white bg-opacity-90 backdrop-blur-sm transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <User  className="w-6 h-6" />
            <h1 className="text-xl font-bold" style={{ fontFamily: "'Dancing Script', cursive" }}>Mausam Kar</h1>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  onClick={() => handleLinkClick(item)}
                  className="hover:text-blue-500 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-2">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <motion.a
              key={item}
              onClick={() => handleLinkClick(item)}
              className="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            onClick={toggleTheme}
            className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </motion.button>
        </div>
      </motion.div>
    </nav>
  );
}