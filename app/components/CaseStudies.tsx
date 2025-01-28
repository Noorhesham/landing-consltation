import React from "react";
import Slider from "./Overlapslider";
import Image from "next/image";
import { TypographyH2, TypographyH4, TypographyP } from "./TypoGraphy";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

const CaseStudies = async () => {
  const t = await getTranslations();

  return (
    <>
      <Slider
        spaceBetween={20}
        title={t("caseStudies.title")}
        flag={t("caseStudies.flag")}
        height="h-80"
        items={Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="group w-full h-80 relative">
            <div className="absolute w-full h-full inset-0 opacity-0 group-hover:opacity-80 z-10 bg-primary/60 duration-200"></div>
            <div className="py-1.5 left-1/2 h-1/2 -translate-x-1/2 justify-between bg-white z-10 absolute bottom-3 w-[88%] rounded-2xl px-3 flex flex-col items-start">
              <TypographyH4 className="font-semibold !text-base">{t(`caseStudies.step${i + 1}`)}</TypographyH4>
              <TypographyP className="!text-sm">{t(`caseStudies.description${i + 1}`)}</TypographyP>
            </div>
            <Image src={i !== 2 ? `/p${i + 1}.webp` : `/p3.jpg`} alt="" fill className="object-cover" />
          </div>
        ))}
      />
    </>
  );
};

export default CaseStudies;
