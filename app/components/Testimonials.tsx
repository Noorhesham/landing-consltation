import React from "react";
import Image from "next/image";
import Slider from "./Overlapslider"; // Assuming you use this for your slider
import MotionContainer from "./MotionContainer";
import MotionItem from "./MotionItem";
const testimonials = [
  {
    rating: 99,
    stars: 5,
    review:
      "At Consult Our Company Name, we & take pride in the relationships we've built with our clients and the results we've achieved together.",
    name: "Shakib Al Hasan",
    designation: "@finance consult",
    image: "/user1.jpg",
  },
  {
    rating: 99,
    stars: 5,
    review:
      "I've been with Your Company Name for five years now, and I couldn't be happier. Their team took the time to best understand my financial goals.",
    name: "Tanzid Tamim",
    designation: "@investment consult",
    image: "/user2.jpg",
  },
  {
    rating: 99,
    stars: 5,
    review:
      "I was looking for a partner who could help me navigate the complexities of retirement planning. Your Company Name did just that.",
    name: "Taskin Ahmed",
    designation: "@retirement consult",
    image: "/user3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <Slider
        flag="Our Testimonials"
        title="Client Successful Story"
        spaceBetween={20}
        height="h-auto"
        loop
        items={testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white z-30 relative rounded-lg shadow-md p-6 flex flex-col items-center gap-4 text-center"
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
              <span className="ml-2 text-sm text-gray-600">({testimonial.stars} Rating)</span>
            </MotionContainer>

            {/* Review */}
            <p className="text-gray-600 text-sm italic">{`"${testimonial.review}"`}</p>

            {/* User Info */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image src={testimonial.image} alt={testimonial.name} className="rounded-full object-cover" fill />
              </div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      />
    </section>
  );
};

export default Testimonials;
