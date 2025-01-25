"use client";
import React from "react";
import { motion } from "framer-motion";

const Line = ({ className }: { className?: string }) => {
  const pathAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      className={`${className} w-80 absolute -bottom-8 left-1/2 -translate-x-1/2`}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 849 74.03"
    >
      <defs></defs>
      <motion.path
        variants={pathAnimation}
        initial="hidden"
        whileInView="visible"
        className="cls-1"
        viewport={{ once: true }}
        d="M105.28,4.05c604.06-.57,739.66,4.18,739.72,9,.06,5.1-151.59,12.41-280.33,15C254.05,34.31,3.94,14.62,4,13.05c.11-2.66,713.65,30.5,713.49,36-.12,4.4-456.98-11.57-457.58,2-.14,3.31,26.77,8.92,124.79,19"
      />
    </motion.svg>
  );
};

export default Line;
