"use client";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <motion.h1
        className="text-7xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }} // Start hidden and move up
        animate={{ opacity: 1, y: 0 }} // Animate to visible and in position
        transition={{ duration: 0.8 }} // Animation duration
      >
        من نحن ؟
      </motion.h1>
      <motion.p
        className="text-xl text-center max-w-lg my-5"
        initial={{ opacity: 0, x: 50 }} // Start hidden and slide from right
        animate={{ opacity: 1, x: 0 }} // Animate to visible and in position
        transition={{ duration: 1.0, delay: 0.3 }} // Delay the animation a bit
      >
        في هذه الصفحة سوف تتعرف أكثر عنا
      </motion.p>
    </div>
  );
}

export default Hero;
