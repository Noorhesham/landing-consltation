import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TitleLine from "./TitleLine";
import MotionContainer from "./MotionContainer";
import MotionItem from "./MotionItem";

const DigitalAmbition = () => {
  const cards = [
    {
      title: "Create influential digital experiences",
      details: [
        "Delight customers, employees, and shareholders ➤",
        "Transform the customer experience at scale ➤",
        "Pinpoint customers’ attitudes—and tailor experiences accordingly ➤",
      ],
    },
    { title: "Accelerate digital marketing and sales" },
    { title: "Streamline operations" },
    { title: "Build and scale new businesses" },
    { title: "Modernize core technology" },
    { title: "Harness the power of AI" },
  ];

  return (
    <MaxWidthWrapper className="flex flex-col gap-14 py-10 items-center bg-white">
      <TitleLine className="  font-bold !text-4xl !text-center" title="What’s your digital ambition?" />
      <MotionContainer className="grid grid-cols-1 h-72 md:grid-cols-2 lg:grid-cols-3 gap-6  w-full">
        {cards.map((card, index) => (
          <MotionItem
            key={index}
            className="relative group bg-black text-white p-6 rounded-md shadow-lg overflow-hidden transition-all duration-300"
          >
            {/* Default state */}
            <h3 className="text-xl font-bold transition-opacity duration-300 group-hover:opacity-0">{card.title}</h3>
            {index === 0 && (
              <ul className="hidden group-hover:block   text-sm">
                {card.details?.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
            {/* Hover state */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 z-0 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-start p-6 z-10 opacity-0 delay-100  duration-300 group-hover:opacity-100">
              {index === 0 && (
                <>
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <ul className="space-y-2 text-sm">
                    {card.details?.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </MotionItem>
        ))}
      </MotionContainer>
    </MaxWidthWrapper>
  );
};

export default DigitalAmbition;
