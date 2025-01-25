import React from "react";

const Flag = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={`${className || ""} py-1  capitalize font-semibold rounded-full w-[60%] bg-blue-200 text-blue-800  px-6`}>
      {text}
    </div>
  );
};

export default Flag;
