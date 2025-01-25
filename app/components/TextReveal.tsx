"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, skewX: 0 },
};

const TextReveal = ({ text }: { text: string }) => {
  return (
    <motion.h1
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      className=" font-huge  mt-20 text-center text-blue-600 font-bold h-44 overflow-hidden font-huge "
    >
      {text.split(" ").map((word, index) => (
        <motion.span variants={childVariants} key={index} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TextReveal;
