import Image from "next/image";
import HeroSection from "../components/Hero";
import Number from "../components/Number";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import DigitalAmbition from "../components/DigitalAmbition";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/Blog";
import ContactSection from "../components/Contact";

export default function Home() {
  return (
    <section className=" relative">
      <HeroSection />
      <Number />
      <AboutUs />
      <Services />
      <CaseStudies />
      <DigitalAmbition />
      <Testimonials />
      <BlogSection />
      <ContactSection />
    </section>
  );
}
