'use client';
import React from "react";
import { motion } from "framer-motion";

const Line3 = ({ className }: { className: string }) => {
  const pathVariants = {
    hidden: { pathLength: 0, stroke: "#006838" },
    visible: {
      pathLength: 1,
      stroke: ["#006838", "#00a23a", "#006838"],
      transition: {
        pathLength: { duration: 1, ease: "easeInOut" },
        stroke: { duration: 0.4, ease: "easeInOut", loop: Infinity },
      },
    },
  };

  return (
    <div className={`${className||""}`}>
      <motion.svg 
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 104.62 60.66"
        className="w-32 h-36"
      >
        <motion.path
          d="M1.5,14.31c13.81,11.55,21.75,22.83,26.55,31.54,3.01,5.45,6.9,13.74,8.08,13.29.87-.33-.7-5.11-1.44-13.04-.69-7.41-1.2-12.86.51-18.65.62-2.11,4.74-15.1,16.34-18.12,7.26-1.88,13.4,1.19,14.81,1.89,3.45,1.73,9.24,5.81,8.61,9.18-.04.24-.19.95-.76,1.32-1.97,1.28-7.95-2.15-8.55-5.77-.94-5.67,11.37-11.39,11.93-11.64,9.75-4.43,19.69-2.72,25.53-1.05"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
        />
      </motion.svg>
    </div>
  );
};

export default Line3;
