import Image from "next/image";
import Flag from "./Flag";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MotionContainer from "./MotionContainer";
import MotionItem from "./MotionItem";
import { getTranslations } from "next-intl/server";

const BlogSection = async () => {
  const t = await getTranslations();
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
                    <div className=" relative rounded-xl overflow-hidden h-64 my-2 w-full ">
                      <Image src={`/blogs.jpg`} alt="Blog" fill className="object-cover" />
                    </div>
                    <h3 className="text-xl text-left font-semibold text-gray-900 mt-4">
                      {i === 0
                        ? t("provenIndustryExperience")
                        : i === 1
                        ? t("highCaliberTalent")
                        : i == 2
                        ? t("flexibleDeliveryModels")
                        : t("continuousInnovation")}
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
