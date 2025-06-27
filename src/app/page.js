import Aboutus from "@/components/Landing/Aboutus";
import CaseStudy1 from "@/components/Landing/CaseStudy1";
import CaseStudy2 from "@/components/Landing/CaseStudy2";
import CaseStudy3 from "@/components/Landing/CaseStudy3";
import Counter from "@/components/Landing/Counter";
import Faqs from "@/components/Landing/Faqs";
import Footer from "@/components/Landing/Footer";
import Header from "@/components/Landing/Header";
import HeroSection from "@/components/Landing/HeroSection";
import JoinUs from "@/components/Landing/JoinUs";
import Services from "@/components/Landing/Services";
import Testimonial from "@/components/Landing/Testimonial";

export default function Home() {
  return (
    <div className="lending-page">
      <Header />
      <div className="grid grid-cols-1 gap-[60px] md:gap-[100px]">
        <HeroSection />
        <Aboutus />
        <Services />
        <CaseStudy1 />
        <CaseStudy2 />
        <CaseStudy3 />
        <Counter />
        <Testimonial />
        <JoinUs />
        <Faqs />
        <Footer />
      </div>
    </div>
  );
}
