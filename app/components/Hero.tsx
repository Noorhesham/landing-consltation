import React from "react";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ColText from "./ColText";
import Line2 from "./Line2";
import { TypographyBlockquote, TypographyP } from "./TypoGraphy";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { FcMoneyTransfer } from "react-icons/fc";
import Line3 from "./Line3";
import { getTranslations } from "next-intl/server";
import Slider from "./Overlapslider";
import Link from "next/link";

const HeroSection: React.FC = async () => {
  const t = await getTranslations();
  return (
    <section className="">
      {" "}
      <div className="">
        <div className=" w-full lg:mt-0 mt-24  h-64 lg:h-screen relative  overflow-hidden">
          <Image fill className=" object-contain" src={"/photo_2025-02-08_17-22-47.jpg"} />
        </div>
      </div>
      <MaxWidthWrapper className="  flex justify-center items-center   h-full ">
        <div className="auto-flex-dir  gap-10 lg:gap-4 justify-between w-full items-start relative">
          <div className="flex lg:flex-row flex-col   w-full !items-start justify-between  gap-3">
            <ColText
              link={"#services"}
              about={t("invest")}
              className=" relative  max-w-xl "
              buttonText={t("servicest")}
              paragraph={t("about")}
            >
              {" "}
              <Line2 className=" absolute -right-10  -top-6" />
              <Button size={"lg"} className="flex   items-center gap-2 !rounded-full">
                <Link href={`#contact`} className="flex items-center gap-2">
                  {t("contactUs")}
                </Link>
              </Button>
            </ColText>
            <div className="relative overflow-hidden w-full max-w-md h-fit flex flex-col ">
              <Slider
                maxwidth={false}
                btn={false}
                slidesPerView={1}
                items={[
                  <div className="p-4 relative rounded-md mt-6">
                    {" "}
                    <Line3 className=" absolute -top-10 -left-20 w-10 " />
                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                    </div>
                    <TypographyBlockquote className="text-gray-700  lg:text-base italic">
                      {t("Vision")}
                    </TypographyBlockquote>
                    <p className="text-gray-900 font-bold mt-2">{t("Our Vision")}</p>
                  </div>,
                  <div className="p-4 relative rounded-md mt-6">
                    {" "}
                    <Line3 className=" absolute -top-10 -left-20 w-10 " />
                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                    </div>
                    <TypographyBlockquote className="text-gray-700  lg:text-base italic">
                      {t("Vision")}
                    </TypographyBlockquote>
                    <p className="text-gray-900 font-bold mt-2">{t("Our Mission")}</p>
                  </div>,
                ]}
              />
            </div>
          </div>
          {/* Right Content */}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
