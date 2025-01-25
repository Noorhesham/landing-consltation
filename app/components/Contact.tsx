import { Mail, Phone } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TitleLine from "./TitleLine";
import Flag from "./Flag";

const ContactSection: FC = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/consulting-services-approach-expertise-693x426.jpg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="  relative   text-white"
    >
      <div className=" absolute bg-gray-900/60 inset-0 w-full h-full"></div>
      <MaxWidthWrapper className=" z-40 relative mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex gap-4 flex-col">
          <div className="flex flex-col  items-start">
            <Flag className="!w-fit" text="Contact Us" />
            <TitleLine title="  Send you Proposal to Us" />
          </div>
          <form className="mt-8 grid grid-cols-1 gap-2">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full  p-2 rounded-lg bg-gray-800 text-white border border-gray-600"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full  p-2 rounded-lg bg-gray-800 text-white border border-gray-600"
            />
            <input
              type="tel"
              placeholder="Phone*"
              className="w-full  p-2 rounded-lg bg-gray-800 text-white border border-gray-600"
            />
            <input
              type="text"
              placeholder="Subject*"
              className="w-full  p-2 rounded-lg bg-gray-800 text-white border border-gray-600"
            />
            <textarea
              placeholder="Message*"
              className="w-full  p-2 rounded-lg bg-gray-800 text-white border border-gray-600 h-32"
            ></textarea>
            <button type="submit" className="bg-red-500 text-white py-4 px-6 rounded-lg font-bold hover:bg-red-600">
              Send Request Now
            </button>
          </form>
        </div>

        <div className="">
          <div>
            <h3 className="text-2xl font-semibold">Contact us</h3>
            <p className="mt-2">8708 Technology Forest Pl Suite 125 -G, The Woodlands, TX 77381</p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6" />
            <p className="text-lg">123-456-7890</p>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6" />
            <p className="text-lg">info@taxvice.com</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
export default ContactSection;
