import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { ContentBox } from '../types';

const boxes: ContentBox[] = [
  {
    "id": 1,
    "title": "About",
    "description": "Learn more about me and my background.",
    "image": "/assets/about2.webp"
  },
  {
    "id": 2,
    "title": "Qualifications",
    "description": "My academic and professional qualifications.",
    "image": "https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 3,
    "title": "Certifications",
    "description": "Certifications I have earned.",
    "image": "https://media.istockphoto.com/id/2164485793/photo/cropped-hands-of-businessman-holding-certificate.jpg?s=2048x2048&w=is&k=20&c=Vr0RidPPf0nca75MlWjSUgyd26-eDENomwsxIeIEDCk="
  },
  {
    "id": 4,
    "title": "Skills",
    "description": "Skills I possess in various technologies.",
    "image": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjM1ODQ2ODQ1&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    "id": 5,
    "title": "Education",
    "description": "My educational background.",
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjM1ODQ2ODk1&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    "id": 6,
    "title": "Gallery",
    "description": "A showcase of my work.",
    "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjM1ODQ2OTQ1&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    "id": 7,
    "title": "Artwork",
    "description": "My artistic creations.",
    "image": "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjM1ODQ3MDA1&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    "id": 8,
    "title": "Journey",
    "description": "My professional journey.",
    "image": "https://images.unsplash.com/photo-1508169351866-777fc0047ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjM1ODQ3MDY1&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    "id": 9,
    "title": "Inspirations",
    "description": "What inspires me.",
    "image": "https://images.unsplash.com/photo-1455849318743-b2233052fcff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjM1ODQ3MTI1&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    "id": 10,
    "title": "Future Goals",
    "description": "My aspirations for the future.",
    "image": "https://images.unsplash.com/photo-1506784365847-bbad939e9335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjM1ODQ3MTg1&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    "id": 11,
    "title": "Fun Facts",
    "description": "Interesting facts about me.",
    "image": "https://images.unsplash.com/photo-1489367874814-f5d040621dd8?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 12,
    "title": "Blog",
    "description": "My thoughts and writings.",
    "image": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjM1ODQ3MzA1&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    "id": 13,
    "title": "Testimonials",
    "description": "What others say about me.",
    "image": "https://plus.unsplash.com/premium_photo-1682310144714-cb77b1e6d64a?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 14,
    "title": "Contact",
    "description": "Get in touch with me.",
    "image": "https://images.unsplash.com/photo-1528747045269-390fe33c19f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjM1ODQ3NDI1&ixlib=rb-1.2.1&q=80&w=400"
  }
];



export default function ContentBoxes({ refs }: { refs: any }) {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isTouchDevice = 'ontouchstart' in window;

  // Handle click to scroll to sections
  const handleBoxClick = (id: number) => {
    const sectionKeys = Object.keys(refs);
    if (sectionKeys[id - 1] && refs[sectionKeys[id - 1]].current) {
      refs[sectionKeys[id - 1]].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto scrolling logic with safety checks
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return; // Ensure container exists

    let startX: number = 0; // Track the starting X position for touch
    let isSwiping: boolean = false; // Track if a swipe is in progress

    const handleMouseMove = (event: MouseEvent) => {
      if (!isMouseOver || !container) return; // Only scroll if mouse is over the boxes
      const { clientX } = event;
      const { left, right, width } = container.getBoundingClientRect();

      const scrollSpeed = 15; // Increased speed for smoother scrolling
      const scrollThreshold = width * 0.15; // Reduced threshold to 15% of width

      if (clientX < left + scrollThreshold) {
        container.scrollBy({ left: -scrollSpeed, behavior: 'smooth' });
      } else if (clientX > right - scrollThreshold) {
        container.scrollBy({ left: scrollSpeed, behavior: 'smooth' });
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (!container) return; // Safety check
      startX = event.touches[0].clientX; // Get the initial touch position
      isSwiping = true; // Set swiping to true
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isMouseOver || !container || !isSwiping) return; // Only scroll if mouse is over the boxes and swiping
      event.preventDefault(); // Prevent default scrolling behavior
      const touch = event.touches[0];
      const deltaX = touch.clientX - startX; // Calculate the distance moved

      // Scroll the container based on the swipe distance
      container.scrollBy({ left: -deltaX, behavior: 'smooth' });
      startX = touch.clientX; // Update the start position for the next move
    };

    const handleTouchEnd = () => {
      isSwiping = false; // Reset swiping state
    };

    document.addEventListener("mousemove", handleMouseMove);
    if (isTouchDevice) {
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove);
      container.addEventListener("touchend", handleTouchEnd);
    }
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (isTouchDevice) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [containerRef, isMouseOver]);

  return (
    <div 
      ref={containerRef} 
      className="w-full py-10 overflow-x-auto bg-white dark:bg-gray-800 scrollbar-hide" // Added scrollbar-hide to both themes
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <div className="flex gap-6">
        <motion.div
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="flex gap-6"
        >
          {boxes.map((box) => (
            <motion.div
              key={box.id}
              whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => setHoveredBox(box.id)}
              onHoverEnd={() => setHoveredBox(null)}
              onClick={() => handleBoxClick(box.id)}
              className="flex-shrink-0 w-72 h-48 rounded-lg overflow-hidden relative group cursor-pointer"
            >
              <img src={box.image} alt={box.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-70">
                <div className="p-4 h-full flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-white dark:text-gray-100">
                    {box.title}
                  </h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-200 dark:text-gray-300">
                    {box.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

