import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import GridContainer from "./GridContainer";
import CounterAnimation from "./CounterAnimation";
import { TypographyH3, TypographyP } from "./TypoGraphy";
import Image from "next/image";
import Line3 from "./Line3";
import { childVariants, containerVariants } from "./StaggerList";
import MotionItem from "./MotionItem";
import { getTranslations } from "next-intl/server";

const Number = async () => {
  const t = await getTranslations();
  return (
    <MaxWidthWrapper>
      <GridContainer cols={2}>
        <div className="flex lg:flex-row flex-col relative items-center">
          {" "}
          <Line3 className=" lg:block hidden absolute -top-10 -left-28 w-10 " />
          <div className=" max-w-80 flex flex-col items-start">
            <TypographyH3 className=" font-bold">{t("investmentTeam")}</TypographyH3>
            <TypographyP className=" text-sm">{t("investmentTeam")}</TypographyP>
          </div>
          <MotionItem
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            className="flex items-center gap-2"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <MotionItem
                key={i}
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
            { number: 12, title: t('"Years Of Experience"'), prefix: "+" },
            { number: 641, title: t("Projects"), prefix: "+" },
            { number: 600, title: t("Clients"), prefix: "+" },
          ].map((numb: any) => (
            <div className=" flex items-center flex-col gap-4 relative">
              <span className=" absolute lg:block hidden -top-5 text-main2 right-10">{numb.prefix}</span>
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
