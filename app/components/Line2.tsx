"use client";
import React from "react";
import { motion } from "framer-motion";

const Line2 = ({ className }: { className: string }) => {
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
    <div className={className}>
      <motion.svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 57.72 58.18"
        className="w-16 h-16"
      >
        <motion.path
          d="M3,30.71c2.61-9.24,5.21-18.47,7.82-27.71"
          className="cls-1"
          fill="none"
          stroke="#014da1"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathAnimation}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M29.02,55.18c7.89-5.46,15.78-10.92,23.67-16.39"
          className="cls-1"
          fill="none"
          stroke="#014da1"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathAnimation}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M15.22,44.26c13.17-13.18,26.33-26.36,39.5-39.55"
          className="cls-1"
          fill="none"
          stroke="#014da1"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathAnimation}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>
    </div>
  );
};

export default Line2;
