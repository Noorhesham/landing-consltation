import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import GridContainer from "./GridContainer";
import Image from "next/image";
import MotionItem from "./MotionItem";
import ColText from "./ColText";
import { getTranslations } from "next-intl/server";

const AboutUs = async () => {
  const t = await getTranslations();
  return (
    <section className=" bg-white">
      {" "}
      <MaxWidthWrapper className=" ">
        <GridContainer className="!gap-8" cols={2}>
          <GridContainer className=" gap-4" motion={true} cols={2}>
            {Array.from({ length: 4 }).map((_, i) => (
              <MotionItem key={i} className=" first:-mt-5 rounded-2xl overflow-hidden w-full h-44 relative">
                <Image src={`ai${i + 1}.jpg`} alt="" fill className=" object-cover" />
              </MotionItem>
            ))}
          </GridContainer>{" "}
          <ColText
            linePositions="left"
            about={t("Differentiation")}
            title={t("differentiation.title")}
            paragraph={t("differentiation.description")}
            buttonText="Grow your wealth with us"
          />
        </GridContainer>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutUs;
