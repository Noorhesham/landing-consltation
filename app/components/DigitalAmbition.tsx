import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TitleLine from "./TitleLine";
import MotionContainer from "./MotionContainer";
import MotionItem from "./MotionItem";
import { useTranslations } from "next-intl";
import { IoMdPersonAdd } from "react-icons/io";

const CoreValues = () => {
  const t = useTranslations("coreValues");

  const values = [
    {
      title: t("values.clientFocus.title"),
      description: t("values.clientFocus.description"),
    },
    {
      title: t("values.integrity.title"),
      description: t("values.integrity.description"),
    },
    {
      title: t("values.innovation.title"),
      description: t("values.innovation.description"),
    },
    {
      title: t("values.sustainableExcellence.title"),
      description: t("values.sustainableExcellence.description"),
    },
  ];

  return (
    <MaxWidthWrapper className="flex flex-col gap-14 py-10 items-center bg-white">
      <TitleLine icon={<IoMdPersonAdd className=" text-blue-300"/>} className="font-bold !text-4xl !text-center" title={t("title")} />
      <MotionContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {values.map((value, index) => (
          <MotionItem
            key={index}
            className="relative group bg-black text-white p-6 rounded-md shadow-lg overflow-hidden transition-all duration-300 h-72"
          >
            {/* Default state */}
            <h3 className="text-xl font-bold transition-opacity duration-300 group-hover:opacity-0">{value.title}</h3>

            {/* Hover state */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-foreground opacity-0 group-hover:opacity-100 z-0 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-start p-6 z-10 opacity-0 delay-100 duration-300 group-hover:opacity-100">
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-sm">{value.description}</p>
            </div>
          </MotionItem>
        ))}
      </MotionContainer>
    </MaxWidthWrapper>
  );
};

export default CoreValues;
