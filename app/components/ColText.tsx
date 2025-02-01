"use client";
import React, { ReactNode } from "react";
import { TypographyH2, TypographyP } from "./TypoGraphy";
import { Button } from "@/components/ui/button";
import TitleLine from "./TitleLine";
import Flag from "./Flag";
import Link from "next/link";
import { useLocale } from "next-intl";

const ColText = ({
  paragraph,
  title,
  buttonText,
  className,
  children,
  linePositions,
  line = true,
  about,
  iconBtn,
  link,
  icon,
  children1,
}: {
  paragraph: string;
  title: string;
  buttonText: string;
  className?: string;
  children?: React.ReactNode;
  linePositions?: string;
  line?: boolean;
  about?: string;
  iconBtn?: ReactNode;
  link?: string;
  icon?: ReactNode;
  children1: ReactNode;
}) => {
  const locale = useLocale();
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {children1}
      {about && <Flag className="  w-fit z-20" text={about} />}
      {title && (
        <TitleLine className=" lg:text-5xl" icon={icon} title={title} line={line} linePositions={linePositions} />
      )}
      <TypographyP className={` lg:text-base ${line && "mt-8"}`}>{paragraph}</TypographyP>
      <div
        className={` ${
          locale === "en" ? "flex-row-reverse mr-auto" : "flex-row ml-auto"
        } flex  w-fit  items-center gap-3`}
      >
        <Button size={"lg"} className="flex  items-center gap-2 !rounded-full">
          <Link href={link ? link : `#`} className="flex items-center gap-2">
            {buttonText} {iconBtn}
          </Link>
        </Button>
        {children}
      </div>
    </div>
  );
};

export default ColText;
