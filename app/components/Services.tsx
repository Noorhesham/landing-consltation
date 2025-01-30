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
import ModalCustom from "./ModalCustom";
import ContactSection from "./Contact";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";
import { FaServicestack } from "react-icons/fa";

const Services = () => {
  const t = useTranslations("services");
  const [currentTab, setCurrentTab] = React.useState(0);

  const tabs = [
    {
      tab: {
        img: "/digital.jpg",
        title: t("digitalTransformation.title"),
        para: t("digitalTransformation.businessProcess"),
      },
      content: {
        img: "/digital.jpg",
        title: t("digitalTransformation.title"),
        para: t("digitalTransformation.businessProcess"),
        list: [
          { title: t("digitalTransformation.pmoEstablishment"), para: "" },
          { title: t("digitalTransformation.solutionsAutomation"), para: "" },
          { title: t("digitalTransformation.dataDecision"), para: "" },
        ],
        listitle: t("digitalTransformation.title"),
      },
    },
    {
      tab: {
        img: "/pmo.png",
        title: t("pmo.title"),
        para: t("pmo.endToEnd"),
      },
      content: {
        img: "/pmo.png",
        title: t("pmo.title"),
        para: t("pmo.endToEnd"),
        list: [
          { title: t("pmo.projectCharter.title"), para: t("pmo.projectCharter.description") },
          { title: t("pmo.planning.title"), para: t("pmo.planning.description") },
          { title: t("pmo.stakeholders.title"), para: t("pmo.stakeholders.description") },
        ],
        listitle: t("pmo.title"),
      },
    },
    {
      tab: {
        img: "/out.webp",
        title: t("techOutsourcing.title"),
        para: t("techOutsourcing.specializedTeams"),
      },
      content: {
        img: "/out.webp",
        title: t("techOutsourcing.title"),
        para: t("techOutsourcing.specializedTeams"),
        list: [
          { title: t("techOutsourcing.scalableModels"), para: "" },
          { title: t("techOutsourcing.qualityAssurance"), para: "" },
        ],
        listitle: t("techOutsourcing.title"),
      },
    },
  ];

  return (
    <section className="flex items-center flex-col">
      <Slider
        icon={<FaServicestack  className=" text-blue-500"/>}
        spaceBetween={10}
        slidesPerView={3}
        title={t("title")}
        flag={t("title")}
        items={tabs.map(({ tab: { img, title, para } }, i) => (
          <ModalCustom
            title={title}
            btn={
              <div
                key={i}
                onClick={() => setCurrentTab(i)}
                className={`flex rounded-2xl ${
                  i === currentTab ? "bg-primary" : "bg-white"
                } flex-col cursor-pointer hover:opacity-80 duration-300 items-center py-5 px-10`}
              >
                <TypographyH2
                  className={`${
                    i === currentTab && "!text-white"
                  } text-center border-none lg:text-lg text-sm mt-2 text-muted-foreground`}
                >
                  {title}
                </TypographyH2>
              </div>
            }
            content={
              <MotionItem
                exit={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-primary-foreground/50 w-full"
                key={currentTab}
              >
                <MaxWidthWrapper noPadding>
                  <div className="flex flex-col gap-5">
                    <div className="duration-300 overflow-hidden rounded-xl w-full h-96 relative">
                      <Image src={tabs[currentTab].content.img} alt="hero" fill className="duration-300 object-cover" />
                    </div>
                    <div className="flex flex-col  rtl:items-start">
                      <TypographyH2>{tabs[currentTab].content.title}</TypographyH2>
                      <TypographyP>{tabs[currentTab].content.para}</TypographyP>
                      <StaggerList list={tabs[currentTab].content.list} text={tabs[currentTab].content.listitle} />
                      <ModalCustom
                        title={tabs[currentTab].content.title}
                        content={<ContactForm services={tabs[currentTab].content.title} />}
                        btn={<Button className=" my-4">{t("Apply")}</Button>}
                      />
                    </div>
                  </div>
                </MaxWidthWrapper>
              </MotionItem>
            }
          />
        ))}
      />
    </section>
  );
};

export default Services;
