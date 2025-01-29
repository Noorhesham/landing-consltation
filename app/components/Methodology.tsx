"use client";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Slider from "./Overlapslider";
import Image from "next/image";
import { TypographyH2, TypographyP } from "./TypoGraphy";
import GridContainer from "./GridContainer";
import StaggerList from "./StaggerList";
import { AnimatePresence } from "framer-motion";
import MotionItem from "./MotionItem";
import { useTranslations } from "next-intl";

const Methodology = () => {
  const t = useTranslations("methodology");
  const [currentTab, setCurrentTab] = React.useState(0);

  const tabs = [
    {
      tab: {
        img: "/phase1.png",
        title: t("asIs.title"),
        para: t("asIs.description"),
      },
      content: {
        img: "/phase1.png",
        title: t("asIs.title"),
        para: t("asIs.description"),
        list: [
          { title: t("asIs.phases.phase1.title"), para: t("asIs.phases.phase1.description") },
          { title: t("asIs.phases.phase2.title"), para: t("asIs.phases.phase2.description") },
          { title: t("asIs.phases.phase3.title"), para: t("asIs.phases.phase3.description") },
        ],
        listitle: t("asIs.title"),
      },
    },
    {
      tab: {
        img: "/phase3.png",
        title: t("standardProcedures.title"),
        para: t("standardProcedures.description"),
      },
      content: {
        img: "/phase3.png",
        title: t("standardProcedures.title"),
        para: t("standardProcedures.description"),
        list: [],
        listitle: t("standardProcedures.title"),
      },
    },
    {
      tab: {
        img: "/phase2.png",
        title: t("gap.title"),
        para: t("gap.description"),
      },
      content: {
        img: "/phase2.png",
        title: t("gap.title"),
        para: t("gap.description"),
        list: [
          { title: t("gap.phases.phase1.title"), para: t("gap.phases.phase1.description") },
          { title: t("gap.phases.phase2.title"), para: t("gap.phases.phase2.description") },
        ],
        listitle: t("gap.title"),
      },
    },
    {
      tab: {
        img: "/a07d1ba04905165fe7a8de3b5edff6a9956d77ac-1920x1280.avif",
        title: t("toBe.title"),
        para: t("toBe.description"),
      },
      content: {
        img: "/a07d1ba04905165fe7a8de3b5edff6a9956d77ac-1920x1280.avif",
        title: t("toBe.title"),
        para: t("toBe.description"),
        list: [
          { title: t("toBe.phases.phase1.title"), para: t("toBe.phases.phase1.description") },
          { title: t("toBe.phases.phase2.title"), para: t("toBe.phases.phase2.description") },
          { title: t("toBe.phases.phase3.title"), para: t("toBe.phases.phase3.description") },
          { title: t("toBe.phases.phase4.title"), para: t("toBe.phases.phase4.description") },
        ],
        listitle: t("toBe.title"),
      },
    },
    {
      tab: {
        img: "/2098402.png",
        title: t("conclusion.title"),
        para: t("conclusion.description"),
      },
      content: {
        img: "/consulting-services-approach-expertise-693x426.jpg.webp",
        title: t("conclusion.title"),
        para: t("conclusion.description"),
        list: [],
        listitle: t("conclusion.title"),
      },
    },
  ];

  return (
    <section className="flex items-center flex-col">
      <Slider
        spaceBetween={10}
        slidesPerView={4}
        title={t("title")}
        flag={t("Methodology")}
        items={tabs.map(({ tab: { img, title, para } }, i) => (
          <div
            key={i}
            onClick={() => setCurrentTab(i)}
            className={`flex rounded-2xl ${
              i === currentTab ? "bg-primary" : "bg-white"
            } flex-col bg-gray-100 cursor-pointer hover:opacity-80 duration-300 items-center py-5 px-10`}
          >
            <div className="w-full block h-20 relative">
              <Image src={img} alt="" fill className="object-contain" />
            </div>
            <TypographyH2
              className={`${
                i === currentTab && "!text-white"
              } text-center border-none lg:text-lg text-sm mt-2 text-muted-foreground`}
            >
              {title}
            </TypographyH2>
          </div>
        ))}
      />
      <AnimatePresence>
        <MotionItem className="bg-primary-foreground/50 w-full" key={currentTab}>
          <MaxWidthWrapper>
            <GridContainer cols={2}>
              <div className="duration-300 w-full h-96 relative">
                <Image src={tabs[currentTab].content.img} alt="hero" fill className="duration-300 object-cover" />
              </div>
              <div className="flex flex-col items-start">
                <TypographyH2>{tabs[currentTab].content.title}</TypographyH2>
                <TypographyP>{tabs[currentTab].content.para}</TypographyP>
                <StaggerList list={tabs[currentTab].content.list} text={tabs[currentTab].content.listitle} />
              </div>
            </GridContainer>
          </MaxWidthWrapper>
        </MotionItem>
      </AnimatePresence>
    </section>
  );
};

export default Methodology;
