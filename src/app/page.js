import Aboutus from "@/componants/Landing/Aboutus";
import CaseStudy1 from "@/componants/Landing/CaseStudy1";
import CaseStudy2 from "@/componants/Landing/CaseStudy2";
import CaseStudy3 from "@/componants/Landing/CaseStudy3";
import Counter from "@/componants/Landing/Counter";
import Faqs from "@/componants/Landing/Faqs";
import Footer from "@/componants/Landing/Footer";
import Header from "@/componants/Landing/Header";
import HeroSection from "@/componants/Landing/HeroSection";
import JoinUs from "@/componants/Landing/JoinUs";
import Services from "@/componants/Landing/Services";
import Testimonial from "@/componants/Landing/Testimonial";

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
