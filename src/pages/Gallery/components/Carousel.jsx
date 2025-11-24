// React Hooks
import { useState, useEffect } from "react";

// Framer Motion (Animations)
import { motion, AnimatePresence } from "framer-motion";

// Styles
import styles from "./Carousel.module.css";

function Carousel() {
  const IMAGES = [
    "https://res.cloudinary.com/dbelpwtoy/image/upload/f_auto,q_auto/v1755788988/WhatsApp_Image_2025-01-04_at_9.35.42_PM_nqzntl.jpg",
    "https://res.cloudinary.com/dbelpwtoy/image/upload/f_auto,q_auto/v1755789049/WhatsApp_Image_2025-01-29_at_14.28.25_ee3a9bd1_wv8bjy.jpg",
    "https://res.cloudinary.com/dbelpwtoy/image/upload/f_auto,q_auto/v1755789336/WhatsApp_Image_2025-08-21_at_8.44.51_PM_bmoyp5.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div>
      <div className="relative">
        <div className={styles.Display}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={activeIndex}
              src={IMAGES[activeIndex]}
              alt={`Slide ${activeIndex + 1}`}
              className="w-full h-full object-cover"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              loading="lazy"
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
          {IMAGES.map((_, index) => (
            <span
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`${styles.Changers} transition ${
                index === activeIndex ? "bg-green-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
