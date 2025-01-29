import { getTranslations } from "next-intl/server";
import Logo from "./Logo";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TitleLine from "./TitleLine";
import Link from "next/link";

export default async function Footer() {
  const t = await getTranslations();
  return (
    <footer className="bg-gray-50 ">
      <MaxWidthWrapper>
        <div className="text-center flex items-center justify-between  mb-12">
          <TitleLine
            line={false}
            className=" text-5xl text-left"
            title="Join Us today and let us help you to grow your business"
          />

          {/* <div className="mt-4">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600">
              Subscribe
            </button>
          </div> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-2 text-gray-600">{t("about")}</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
            <p className="mt-4 text-gray-400">©2025 </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">Learn</h4>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Schedule a demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Our Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
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
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">Get in touch</h4>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>
                <span className="block font-semibold">USA:</span> +91 02 2585 0556
              </li>
              <li>
                <span className="block font-semibold">UK:</span> +61 02 2585 0556
              </li>
              <li>
                <span className="block font-semibold">Email:</span> Contacthelp@Demoui.co
              </li>
              <li>
                <span className="block font-semibold">Info:</span> Info@constia.co
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
