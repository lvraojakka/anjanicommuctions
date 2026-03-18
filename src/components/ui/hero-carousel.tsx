import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/hero-devices.png",
  "/tv.png",
  "/s26.png",
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg flex items-center justify-center">

      {/* Scan line (same as your code) */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line opacity-40" />
      </div>

      {/* Image Animation */}
   <AnimatePresence mode="wait">
  <motion.div
    key={index}
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -40 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px] h-[320px] sm:h-[360px] md:h-[400px] lg:h-[420px] flex items-center justify-center bg-white rounded-2xl p-4 shadow-xl"
  >
    <img
      src={images[index]}
      alt="Samsung Service"
      className="w-full h-full object-contain animate-float"
    />
  </motion.div>
</AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-4 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition ${
              i === index ? "bg-orange-500 w-4" : "bg-white/60 w-2"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default HeroCarousel;