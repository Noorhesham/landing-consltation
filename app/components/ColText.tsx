import React, { ReactNode } from "react";
import { TypographyH2, TypographyP } from "./TypoGraphy";
import { Button } from "@/components/ui/button";
import Line from "./Line";
import TitleLine from "./TitleLine";
import Flag from "./Flag";

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
}) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {about && <Flag text={about} />}
      <TitleLine title={title} line={line} linePositions={linePositions} />
      <TypographyP className={`${line && "mt-8"}`}>{paragraph}</TypographyP>
      <div className="flex items-center gap-3">
        <Button size={"lg"} className="flex  items-center gap-2 !rounded-full">
          {buttonText} {iconBtn}
        </Button>
        {children}
      </div>
    </div>
  );
};

export default ColText;
