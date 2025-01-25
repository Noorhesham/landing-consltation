import React from "react";
import { TypographyH2 } from "./TypoGraphy";
import Line from "./Line";

const TitleLine = ({ title, line = true, linePositions,className }: { title: string; line?: boolean; linePositions?: string, className?: string }) => {
  return (
    <TypographyH2
      className={` ${line && "border-none"} capitalize ${className||""} flex relative font-extrabold text-6xl max-w-2xl flex-col gap-2`}
    >
      {title.split("<br>").map((t, i) => (
        <span key={i}>{t}</span>
      ))}
      {line && <Line className={linePositions} />}
    </TypographyH2>
  );
};

export default TitleLine;
