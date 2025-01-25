import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import GridContainer from "./GridContainer";
import Image from "next/image";
import MotionItem from "./MotionItem";
import ColText from "./ColText";

const AboutUs = () => {
  return (
    <section className=" bg-white">
      {" "}
      <MaxWidthWrapper className=" ">
        <GridContainer className="!gap-8" cols={2}>
          <GridContainer className=" gap-4" motion={true} cols={2}>
            {Array.from({ length: 4 }).map((_, i) => (
              <MotionItem key={i} className=" first:-mt-5 rounded-2xl overflow-hidden w-full h-44 relative">
                <Image
                  src={"/consulting-services-approach-expertise-693x426.jpg.webp"}
                  alt=""
                  fill
                  className=" object-cover"
                />
              </MotionItem>
            ))}
          </GridContainer>{" "}
          <ColText
            linePositions="left"
            about={"💵investment wisdom for a brighter future"}
            title="Unlock for the power of smart invstments now"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maiores molestias magnam minima consequuntur quae ab error ex? Officiis ullam aperiam facilis reprehenderit provident veniam enim temporibus culpa, debitis nisi!"
            buttonText="Grow your wealth with us"
          />
        </GridContainer>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutUs;
