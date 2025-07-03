"use client";
import Header from "@/components/appLending/Header";
import StatisticsSection from "@/components/appLending/StatisticsSection";
import HeroSection from "@/components/bioLanding/HeroSection";
import { useRouter } from "next/navigation";
import Services from "../lending/Services";
import Cms1 from "../lending/Cms1";
import Socialmedia from "../lending/Socialmedia";
import SocialMediaCms1 from "../lending/SocialMediaCms1";
import SocialMediaCms2 from "../lending/SocialMediaCms2";
import JoinCommunity from "../lending/JoinCommunity";
import Faqs from "../lending/Faqs";
import ImageSlider from "../lending/ImageSlider";
import Testimonials from "../lending/Testimonials";
import CmsSection from "@/components/bioLanding/CmsSection";
import TestimonialsSection from "@/components/appLending/TestimonialsSection";
import LetsChatSection from "@/components/bioLanding/LetsChatSection";
import { FAQSection } from "@/components/appLending/FAQSection";
import FinalCTASectionBg from "@/components/appLending/FinalCTASectionBg";
import Footer from "@/components/common/Footer";

export default function Home() {
  const router = useRouter();
  // const { userData } = useSelector((state) => state?.authSlice || {});

  // useEffect(() => {
  //   localStorage.removeItem("persist:root");
  // }, []);

  // useEffect(() => {
  //   if (!userData) return;

  //   if (userData.data?.profile) {
  //     router.push("/edit-profile");
  //   } else if (userData.data?.token) {
  //     router.push("/about-yourself");
  //   }
  // }, [userData]);
  return (
    <div className="flex flex-col w-full min-h-screen bg-global-19">
      {/* <Header />
      <HeroSection />
      <Services />
      <Cms1 />
      <Socialmedia />
      <SocialMediaCms1 />
      <SocialMediaCms2 />
      <JoinCommunity />
      <Faqs />
      <ImageSlider />
      <Testimonials />
      <Footer /> */}
      <Header bio={true} />
      <HeroSection />
      <StatisticsSection />
      <Cms1 />
      <Socialmedia />
      <CmsSection />
      <JoinCommunity />
      <TestimonialsSection />
      <LetsChatSection />
      <FAQSection />
      <FinalCTASectionBg />
      <Footer />
    </div>
  );
}
