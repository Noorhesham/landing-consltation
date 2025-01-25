"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ReactNode, useState } from "react";
import Image from "next/image";
import { TypographyH2 } from "./Typography";
import { Autoplay } from "swiper/modules"; // Correct import for Autoplay
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type SwiperType from "swiper";
import Flag from "./Flag";
import TitleLine from "./TitleLine";

export const Slider = ({
  height = "h-96",
  slidesPerView = 3,
  spaceBetween = 50,
  autoplay = 2000,
  loop = true,
  items,
  title,
  flag,
}: {
  title: string;
  flag?: string;
  height?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: number;
  loop?: boolean;
  items: ReactNode[];
}) => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);

  return (
    <section id="projects">
      <MaxWidthWrapper className=" relative">
        <div className="flex  relative flex-col gap-4">
          <MaxWidthWrapper noPadding className="flex items-center flex-col gap-2 mx-auto">
            {flag && <Flag className="!w-fit" text={flag} />}
            <TitleLine className="text-center" title={title} />
          </MaxWidthWrapper>

          {/* Navigation Buttons */}
        </div>
        {/* Swiper Slider */}
        <Swiper
          onSwiper={(swiper) => setSwiper(swiper)}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: slidesPerView || 2 },
            1024: { slidesPerView: slidesPerView || 3 },
            1280: { slidesPerView: slidesPerView || 3.4 },
          }}
          autoplay={autoplay !== 0 ? { delay: autoplay } : false}
          loop={loop}
          spaceBetween={spaceBetween}
          className="appear mt-8"
          slidesPerView={slidesPerView}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>{item}</SwiperSlide>
          ))}
        </Swiper>{" "}
        <div className="flex justify-between items-center mt-4">
          <Button
            onClick={() => swiper?.slidePrev()}
            variant="outline"
            className="p-5 absolute   left-0 bg-primary top-1/2 -translate-y-1/2  text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={() => swiper?.slideNext()}
            variant="outline"
            className="p-5 absolute   right-0 top-1/2 -translate-y-1/2  bg-primary text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Slider;
