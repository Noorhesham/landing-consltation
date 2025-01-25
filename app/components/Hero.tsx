import React from "react";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ColText from "./ColText";
import Line2 from "./Line2";
import { TypographyP } from "./TypoGraphy";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { FcMoneyTransfer } from "react-icons/fc";
import Line3 from "./Line3";

const HeroSection: React.FC = () => {
  return (
    <section className="">
      {" "}
      <MaxWidthWrapper className="  flex justify-center items-center  h-screen ">
        <div className=" flex  justify-between w-full items-start relative">
          <div className="flex flex-col gap-3">
            <ColText
              about={"💵investment wisdom for a brighter future"}
              className=" relative max-w-2xl"
              buttonText="Investment Options"
              paragraph="Our team of experienced investment management experts is here to guide you on your journey towards
              building & securing your wealth. With a deep commitment to our clients' financial well-being."
              title=" Investments, Our Expertise <br>On Winning Combination"
            >
              {" "}
              <div className=" absolute -right-32 text-5xl -top-14">
                <span className=" absolute bg-primary/50 z-10 w-5 h-5 rounded-full"></span>
                <FcMoneyTransfer className=" z-20" />
              </div>
              <Line2 className=" absolute -right-10  -top-6" />
              <Button size={"lg"} className=" bordermain !rounded-full" variant={"secondary"}>
                Contact Us
              </Button>
            </ColText>
          </div>
          {/* Right Content */}
          <div className="relative max-w-80 flex flex-col self-end">
            <div className=" w-full h-64 relative">
              <Image src="/Consulting-services-526x589.png.webp" alt="hero" fill className=" object-contain" />
            </div>
            <div className="p-4 relative rounded-md mt-6">
              {" "}
              <Line3 className=" absolute -top-10 -left-20 w-10 " />
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar className="text-yellow-500" />
                ))}
              </div>
              <TypographyP className="text-gray-700  lg:text-lg italic">
                "Success is not the key to happiness. Happiness is the key to success."
              </TypographyP>
              <p className="text-gray-900 font-bold mt-2">Shakib Mahmud @Finance Consalt</p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
