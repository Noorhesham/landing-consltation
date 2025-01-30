import React, { ReactNode } from "react";
import { TypographyH2 } from "./TypoGraphy";
import Line from "./Line";

const TitleLine = ({
  title,
  line = true,
  linePositions,
  className,
  icon,
}: {
  title: string;
  line?: boolean;
  linePositions?: string;
  className?: string;
  icon?: ReactNode;
}) => {
  return (
    <TypographyH2
      className={` ${line && "border-none"} capitalize ${
        className || ""
      } flex relative font-extrabold text-3xl lg:text-4xl max-w-2xl items-center gap-3 `}
    >
      <div className="flex flex-col">
        {" "}
        {title.split("<br>").map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      {line && <Line className={linePositions} />}
      {icon}
    </TypographyH2>
  );
};

export default TitleLine;
