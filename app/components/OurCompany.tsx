import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TitleLine from "./TitleLine";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Slider from "./Overlapslider";

const OurCompany = async () => {
  // Array of logo images (example placeholder links)
  const logos = ["/logo2.svg", "/logo3.svg", "/logo5.svg", "/logo6.svg", "/logo7.svg", "/logo9.svg", "/logo10.svg"];
  const t = await getTranslations();
  return (
    <MaxWidthWrapper className=" w-full flex flex-col gap-4 items-center">
      <Slider
        slidesPerView={4}
        loop
        spaceBetween={20}
        title={t("parteners")}
        height="h-80"
        items={logos.map((logo, index) => (
          <div key={index} className="  h-44 w-full relative items-center">
            <Image fill src={logo} alt={`Partner Logo ${index + 1}`} />
          </div>
        ))}
      />
    </MaxWidthWrapper>
  );
};

export default OurCompany;
