import { getTranslations } from "next-intl/server";
import Logo from "./Logo";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TitleLine from "./TitleLine";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default async function Footer() {
  const t = await getTranslations();
  return (
    <footer className="bg-gray-50 ">
      <MaxWidthWrapper>
        <div className="text-center flex items-center justify-between  mb-12">
          <TitleLine
            line={false}
            className=" !w-full text-3xl lg:text-5xl text-left"
            title="Join Us today and let us help you to grow your business"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Logo />
          <div>
            {/* <div className="flex gap-4 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
            </div> */}
          </div>

          {/* <div>
            <h4 className="font-semibold text-gray-800">Learn</h4>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>
                <a href="/about-us" className="hover:text-blue-500">
                  Schedule a demo
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-blue-500">
                  Our Blog
                </a>
              </li>
            </ul>
          </div> */}
<div></div>
          {/* <div>
            <h4 className="font-semibold text-gray-800">Our Company</h4>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  User Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Help Centre
                </a>
              </li>
            </ul>
          </div> */}

          <div>
            <h4 className="font-semibold text-gray-800">Get in touch</h4>
            <ul className="mt-4 text-gray-600 space-y-2">
              <a href="tel:+20 102 418 9899" className="flex items-center gap-4">
                <Phone className="w-6 h-6" />
                <p className="text-lg">+20 102 418 9899</p>
              </a>
              <a href="mailto:Info@qbseg.com" className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <p className="text-lg">Info@qbseg.com</p>
              </a>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
