import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import GridContainer from "./GridContainer";
import CounterAnimation from "./CounterAnimation";
import { TypographyH3, TypographyP } from "./TypoGraphy";
import Image from "next/image";
import Line3 from "./Line3";
import { childVariants, containerVariants } from "./StaggerList";
import MotionItem from "./MotionItem";

const Number = () => {
  return (
    <MaxWidthWrapper>
      <GridContainer cols={2}>
        <div className="flex relative items-center">
          {" "}
          <Line3 className=" absolute -top-10 -left-28 w-10 " />
          <div className=" max-w-80 flex flex-col items-start">
            <TypographyH3 className=" font-bold">Our Successfull Invstor</TypographyH3>
            <TypographyP className=" text-sm">
              Our team of experienced investment management experts here to guide .
            </TypographyP>
          </div>
          <MotionItem
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            className="flex items-center gap-2"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <MotionItem key={i}
                variants={childVariants}
                className=" w-14 rounded-full overflow-hidden border-2 border-primary h-14 relative"
              >
                <Image alt="" src={"/Blank-Avatar.webp"} fill className=" object-cover" />
              </MotionItem>
            ))}
          </MotionItem>
        </div>
        <GridContainer cols={3}>
          {" "}
          {[
            { number: 12, title: "Years Of Experience", prefix: "+" },
            { number: 641, title: "Projects", prefix: "+" },
            { number: 600, title: "Clients", prefix: "+" },
          ].map((numb: any) => (
            <div className=" flex items-center flex-col gap-4 relative">
              <span className=" absolute  -top-5 text-main2 right-10">{numb.prefix}</span>
              <CounterAnimation from={0} to={parseInt(numb.number)} />
              <p className=" text-gray-800 capitalize  font-semibold">{numb.title}</p>
            </div>
          ))}{" "}
        </GridContainer>
      </GridContainer>
    </MaxWidthWrapper>
  );
};

export default Number;
