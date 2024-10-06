"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Card = ({ img, title }) => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="border-white border-2 rounded-lg shadow-lg p-4 w-full text-center cursor-pointer"
    >
      <h2 className="text-xl">{title}</h2>
      <Image
        src={img}
        width={500}
        height={500}
        className="w-full h-full mt-5"
        alt="Project"
      />
    </motion.div>
  );
};

export default Card;
