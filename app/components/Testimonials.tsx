import React from "react";
import Image from "next/image";
import Slider from "./Overlapslider"; // Assuming you use this for your slider
import MotionContainer from "./MotionContainer";
import MotionItem from "./MotionItem";
import { useTranslations } from "next-intl"; // Placeholder for translations

const Testimonials = () => {
  const t = useTranslations("testimonials"); // Assumes a translation namespace for testimonials

  const testimonials = [
    {
      rating: 99,
      stars: 5,
      review: t("testimonial1.review"),
      name: t("testimonial1.name"),
      designation: t("testimonial1.designation"),
      image: "/user1.jpg",
    },
    {
      rating: 99,
      stars: 5,
      review: t("testimonial2.review"),
      name: t("testimonial2.name"),
      designation: t("testimonial2.designation"),
      image: "/user2.jpg",
    },
    {
      rating: 99,
      stars: 5,
      review: t("testimonial3.review"),
      name: t("testimonial3.name"),
      designation: t("testimonial3.designation"),
      image: "/user3.jpg",
    },
    {
      rating: 99,
      stars: 5,
      review: t("testimonial4.review"),
      name: t("testimonial4.name"),
      designation: t("testimonial4.designation"),
      image: "/user3.jpg",
    },
  ];

  return (
    <section className=" bg-gray-50">
      <Slider
        flag={t("flag")}
        title={t("title")}
        spaceBetween={20}
        height="h-auto"
        loop
        items={testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white h-full z-30 relative rounded-lg shadow-md p-6 flex flex-col items-center gap-2 text-center"
          >
            {/* Rating Circle */}
            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-primary">
              {testimonial.rating}
            </div>

            {/* Stars */}
            <MotionContainer className="flex items-center justify-center">
              {Array.from({ length: testimonial.stars }).map((_, i) => (
                <MotionItem key={i} className="text-yellow-400 text-lg">
                  ★
                </MotionItem>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                ({testimonial.stars} {t("ratingLabel")})
              </span>
            </MotionContainer>

            {/* Review */}
            <p className="text-gray-600 text-sm italic">{`"${testimonial.review}"`}</p>

            {/* User Info */}
            <div className="flex w-full mt-auto ml-auto items-center gap-3">
              <div className="relative w-10 h-10">
                <Image src={"/Blank-Avatar.webp"} alt={testimonial.name} className="rounded-full object-cover" fill />
              </div>
              <div className="flex flex-col items-start">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-xs text-gray-500 mr-auto">{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      />
    </section>
  );
};

export default Testimonials;
