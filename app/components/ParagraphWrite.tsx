"use client";
import React from "react";
import { motion } from "framer-motion";
const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};
const childVariants = {
  initial: { opacity: 0.6, color: "d1d5db" },
  animate: { opacity: 1, color: "black", ease: "easeOut" },
};
const ParagraphWrite = ({ text }: { text: string }) => {
  return (
    <motion.p
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      className="flex flex-row-reverse flex-wrap items-center max-w-4xl mx-auto lg:text-xl text-xl"
    >
      {text.split(" ").map((word, index) => (
        <motion.span variants={childVariants} key={index} className="inline-block  mr-2">
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default ParagraphWrite;
