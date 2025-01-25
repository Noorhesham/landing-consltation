import React from "react";
import Slider from "./Overlapslider";
import Image from "next/image";
import { TypographyH2, TypographyH4 } from "./TypoGraphy";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  return (
    <>
      <Slider
        spaceBetween={20}
        title="our recent case studies"
        flag="case studies"
        height="h-80"
        items={Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="group w-full h-96 relative">
            <div className=" absolute w-full h-full inset-0 opacity-0 group-hover:opacity-80 z-10 bg-primary/60 duration-200"></div>
            <div className="py-1.5  left-1/2  -translate-x-1/2 justify-between bg-white z-10 absolute bottom-3 w-[88%] rounded-2xl px-3 flex items-center">
              <div className="   flex flex-col  items-start">
                <TypographyH4 className=" font-semibold text-base">invest solutions</TypographyH4>
                <TypographyH2 className=" text-xl font-bold">invest guidance</TypographyH2>
              </div>
              <div className=" group-hover:-rotate-3 duration-150 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <ArrowRight className=" text-white" />
              </div>
            </div>
            <Image
              src={"/consulting-services-process-analysis-693x426.jpg.webp"}
              alt=""
              fill
              className=" object-cover"
            />
          </div>
        ))}
      />
    </>
  );
};

export default CaseStudies;
