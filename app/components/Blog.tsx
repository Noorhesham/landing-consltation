import Image from "next/image";
import Flag from "./Flag";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MotionContainer from "./MotionContainer";
import MotionItem from "./MotionItem";

const BlogSection = () => {
  return (
    <section className="bg-gray-50 ">
      <div className=" mx-auto text-center">
        <div className="flex flex-col items-center">
          <Flag text="Our Blog" className=" !w-fit" />
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Recent From <span className="text-rose-600">News Room</span>
          </h2>
        </div>

        <MaxWidthWrapper>
          <MotionContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <MotionItem key={i} className="bg-white shadow-lg flex flex-col items-start rounded-lg overflow-hidden">
                  <div className="flex py-4 px-4 flex-col items-start">
                    <span className="text-sm text-left font-bold bg-rose-50 rounded-lg p-1 text-rose-600">
                      #Investment Managements
                    </span>
                    <p className="text-sm text-gray-400  font-semibold mt-2 flex items-start gap-2">
                      <span>{16 + i} October 2023</span> · <span>Dawid Malan</span>
                    </p>
                    <div className=" relative rounded-xl overflow-hidden h-64 my-2 w-full ">
                      <Image src={`/blogs.jpg`} alt="Blog" fill className="object-cover" />
                    </div>
                    <h3 className="text-xl text-left font-semibold text-gray-900 mt-4">
                      {i === 0
                        ? "Demystifying Risk: Understanding and Managing Investment Risk"
                        : i === 1
                        ? "The Impact of Economic Trends on Your Investment Portfolio"
                        : "Evaluating Investment Options: Stocks, Bonds, and More"}
                    </h3>
                    <a href="#" className="mt-4 inline-flex items-start mr-auto  text-rose-600 font-medium">
                      Read More <span className="ml-2">→</span>
                    </a>
                  </div>
                </MotionItem>
              ))}
          </MotionContainer>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};
export default BlogSection;
