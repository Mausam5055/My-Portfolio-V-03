import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const greetings = [
  'Namaste', 'Hello', 'こんにちは', 'Hola', 'Ciao', 
  , '안녕하세요', '你好'
];

interface FlashIntroProps { // Updated interface name
  onComplete: () => void;
}

export default function FlashIntro({ onComplete }: FlashIntroProps) { // Updated function name
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 300);

    const timeout = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearInterval(greetingInterval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentGreeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-white text-7xl font-bold"
        >
          {greetings[currentGreeting]}
        </motion.h1>
      </AnimatePresence>
    </motion.div>
  );
}
