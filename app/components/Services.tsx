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
const tabs = [
  {
    tab: { img: "/5956592.png", title: "lorem ipsum", para: "lorem ipsum" },
    content: {
      img: "/Consulting-services-526x589.png.webp",
      para: "personalized financial advice to help you navigate the complex world of investments",
      title: "financial advisory services",
      list: [
        { title: "lorem ipsum", para: "lorem ipsum" },
        { title: "lorem ipsum", para: "lorem ipsum" },
        { title: "lorem ipsum", para: "lorem ipsum" },
        { title: "lorem ipsum", para: "lorem ipsum" },
      ],
      listitle: "text",
    },
  },
  {
    tab: { img: "/2098402.png", title: "lorem ipsum", para: "lorem ipsum" },
    content: {
      img: "/consulting-services-approach-expertise-693x426.jpg.webp",
      para: "personalized financial advice to help you navigate the complex world of investments",
      title: "financial advisory services",
      list: [
        { title: "lorem ipsum", para: "lorem ipsum" },
        { title: "lorem ipsum", para: "lorem ipsum" },
        { title: "lorem ipsum", para: "lorem ipsum" },
        { title: "lorem ipsum", para: "lorem ipsum" },
      ],
      listitle: "text",
    },
  },
  {
    tab: { img: "/2098402.png", title: "lorem ipsum", para: "lorem ipsum" },
    content: {
      img: "/consulting-services-approach-expertise-693x426.jpg.webp",
      para: "personalized financial advice to help you navigate the complex world of investments",
      title: "financial advisory services",
      list: [
        { title: "lorem ipsum", para: "lorem ipsum" },
        { title: "lorem ipsum", para: "lorem ipsum" },
        { title: "lorem ipsum", para: "lorem ipsum" },
        { title: "lorem ipsum", para: "lorem ipsum" },
      ],
      listitle: "text",
    },
  },
  {
    tab: { img: "/2098402.png", title: "lorem ipsum", para: "lorem ipsum" },
    content: {
      img: "/consulting-services-approach-expertise-693x426.jpg.webp",
      para: "personalized financial advice to help you navigate the complex world of investments",
      title: "financial advisory services",
      list: [
        { title: "lorem ipsum", para: "lorem ipsum" },
        { title: "lorem ipsum", para: "lorem ipsum" },
        { title: "lorem ipsum", para: "lorem ipsum" },
        { title: "lorem ipsum", para: "lorem ipsum" },
      ],
      listitle: "text",
    },
  },
  {
    tab: { img: "/2098402.png", title: "lorem ipsum", para: "lorem ipsum" },
    content: {
      img: "/consulting-services-approach-expertise-693x426.jpg.webp",
      para: "personalized financial advice to help you navigate the complex world of investments",
      title: "financial advisory services",
      list: [
        { title: "lorem ipsum", para: "lorem ipsum" },
        { title: "lorem ipsum", para: "lorem ipsum" },
        { title: "lorem ipsum", para: "lorem ipsum" },
        { title: "lorem ipsum", para: "lorem ipsum" },
      ],
      listitle: "text",
    },
  },
];
const Services = () => {
  const [currentTab, setCurrentTab] = React.useState(0);
  return (
    <section className="flex items-center flex-col">
      <Slider
        spaceBetween={10}
        slidesPerView={4}
        title="our best professional investment services"
        flag="💵investment wisdom "
        items={tabs.map(({ tab: { img, title, para } }, i) => (
          <div
            onClick={() => setCurrentTab(i)}
            className={`"flex rounded-2xl ${
              i === currentTab ? "bg-primary" : " bg-white"
            } flex-col cursor-pointer hover:opacity-80  duration-300 items-center py-5 px-10"`}
          >
            <div className={`   w-full block  h-20 relative `}>
              <Image src={img} alt="" fill className=" object-contain" />
            </div>
            <TypographyH2
              className={` ${
                i === currentTab && "!text-white"
              } text-center border-none lg:text-lg text-sm mt-2 text-muted-foreground`}
            >
              {title}
            </TypographyH2>
          </div>
        ))}
      />
      <AnimatePresence>
        <MotionItem className=" bg-primary-foreground/50 w-full" key={currentTab}>
          <MaxWidthWrapper>
            <GridContainer cols={2}>
              <div className="duration-300 w-full h-96 relative">
                <Image
                  src={tabs[currentTab].content.img ?? tabs[0].content.img}
                  alt="hero"
                  fill
                  className="duration-300 object-cover"
                />
              </div>
              <div className="flex flex-col items-start">
                <TypographyH2>{tabs[currentTab].content.title ?? tabs[0].content.title}</TypographyH2>
                <TypographyP> </TypographyP>
                <StaggerList
                  list={tabs[currentTab].content.list ?? tabs[0].content.list}
                  text={tabs[currentTab].content.listitle ?? tabs[0].content.listitle}
                />
              </div>
            </GridContainer>
          </MaxWidthWrapper>
        </MotionItem>
      </AnimatePresence>
    </section>
  );
};

export default Services;
