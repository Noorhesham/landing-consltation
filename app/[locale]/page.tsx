import HeroSection from "../components/Hero";
import Number from "../components/Number";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import DigitalAmbition from "../components/DigitalAmbition";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/Blog";
import ContactSection from "../components/Contact";
import Methodology from "../components/Methodology";
import { FeaturesSectionDemo } from "../components/OutSourcing";
import OurCompany from "../components/OurCompany";

export default function Home() {
  return (
    <section className=" overflow-hidden relative">
      <HeroSection />
      <Number />
      <AboutUs />
      <Services />
      <Methodology />
      <CaseStudies />
      <DigitalAmbition />
      <FeaturesSectionDemo />
      <Testimonials />
      <BlogSection />
      <OurCompany />
      <ContactSection />
    </section>
  );
}
