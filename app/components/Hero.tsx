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
    <section className=" pt-32 lg:pt-20">
      {" "}
      <MaxWidthWrapper className="  flex justify-center items-center  h-full lg:h-screen ">
        <div className="auto-flex-dir  gap-10 lg:gap-4 justify-between w-full items-start relative">
          <div className="flex  !items-start flex-col gap-3">
            <ColText
              children1={
                <div className=" w-full  mt-20 h-96  relative rounded-2xl overflow-hidden">
                  <Image fill className=" object-cover" src={"/network-connection-background_23-2148879892.png"} />
                </div>
              }
              link={"#services"}
              about={t("invest")}
              className=" relative  max-w-2xl"
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
          </div>
          {/* Right Content */}
          <div className="relative overflow-hidden max-w-md flex flex-col self-end">
            <div className=" w-full h-64 relative">
              <Image src="/Consulting-services-526x589.png.webp" alt="hero" fill className=" object-contain" />
            </div>
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
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
