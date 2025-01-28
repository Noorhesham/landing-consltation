"use client";
import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";
import React from "react";
export const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export const childVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};
const StaggerList = ({ list, text, children }: { list: string[]; text: string; children?: React.ReactNode }) => {
  return (
    <div className="flex text-left flex-col gap-2">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="  text-lg capitalize my-2  font-bold relative"
      >
        {" "}
        {text.split("<b>")[0]}
        <b className=" font-bold text-2xl"> {text.split("<b>")[1]}</b>
        <span className=" absolute -bottom-2 left-10 w-24 h-[1px] bg-orange-500"></span>
      </motion.h2>
      {children}
      <motion.ul variants={containerVariants} initial="initial" whileInView="animate" className="  flex-col gap-2 flex">
        {list.map(({ title, para }, i) => (
          <motion.li variants={childVariants} key={i} className=" flex flex-col items-start py-2 border-input border-b">
            <b className="font-semibold text-base flex items-start gap-1">
              <CheckCheck className="  text-primary w-4 h-4" />
              {title}
            </b>
            {para}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default StaggerList;
