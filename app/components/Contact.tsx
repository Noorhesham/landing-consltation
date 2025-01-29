"use client";
import { Mail, Phone } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TitleLine from "./TitleLine";
import Flag from "./Flag";
import ContactForm from "./ContactForm";
import { useLocale, useTranslations } from "next-intl";

const ContactSection: FC = () => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section
      style={{
        backgroundImage: "url('/consulting-services-approach-expertise-693x426.jpg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "fixed",
      }}
      className="  relative   text-white"
    >
      <div className=" absolute bg-gray-900/60 inset-0 w-full h-full"></div>
      <MaxWidthWrapper className=" z-40 relative mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex gap-8 flex-col">
          <div className={` ${locale === "en" ? "items-start" : "items-end"} flex flex-col  `}>
            <Flag className="!w-fit" text={t("contactUs")} />
            <TitleLine title={t("Send You Proposal To Us")} />
          </div>
          <ContactForm />
        </div>

        <div className={`${locale === "en" ? "items-start" : "items-end"} flex flex-col `}>
          <div>
            <h3 className="text-2xl font-semibold">{t("contactUs")}</h3>
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
