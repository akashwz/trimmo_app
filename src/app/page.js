// import Aboutus from "@/components/Landing/Aboutus";
// import CaseStudy1 from "@/components/Landing/CaseStudy1";
// import CaseStudy2 from "@/components/Landing/CaseStudy2";
// import CaseStudy3 from "@/components/Landing/CaseStudy3";
// import Counter from "@/components/Landing/Counter";
// import Faqs from "@/components/Landing/Faqs";
// import Footer from "@/components/Landing/Footer";
// import Header from "@/components/Landing/Header";
// import HeroSection from "@/components/Landing/HeroSection";
// import JoinUs from "@/components/Landing/JoinUs";
// import Services from "@/components/Landing/Services";
// import Testimonial from "@/components/Landing/Testimonial";

// export default function Home() {
//   return (
//     <div className="lending-page">
//       <Header />
//       <div className="grid grid-cols-1 gap-[60px] md:gap-[100px]">
//         <HeroSection />
//         <Aboutus />
//         <Services />
//         <CaseStudy1 />
//         <CaseStudy2 />
//         <CaseStudy3 />
//         <Counter />
//         <Testimonial />
//         <JoinUs />
//         <Faqs />
//         <Footer />
//       </div>
//     </div>
//   );
// }


'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import ExpandableList from '@/components/ui/ExpandableList';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/appLending/HeroSection';
import StatisticsSection from '@/components/appLending/StatisticsSection';
import HelpSection from '@/components/appLending/HelpSection';
import CreatorsSection from '@/components/appLending/CreatorsSection';
import ReviewsSection from '@/components/appLending/ReviewsSection';
import VideoSection from '@/components/appLending/VideoSection';
import TestimonialsSection from '@/components/appLending/TestimonialsSection';
import FinalCtaSection from '@/components/appLending/FinalCtaSection';
import FeatureCardsBottom from '@/components/appLending/FeatureCardsBottom';
import SocialMediaPowerSection from '@/components/appLending/SocialMediaPowerSection';
import FinalCTASectionBg from '@/components/appLending/FinalCTASectionBg';
import FAQSection from '@/components/appLending/FAQSection';
import FeatureCardSection from '@/components/appLending/FeatureCardSection';
export default function TrimmoHomePage() {
 
  return (
    <div className="flex flex-col w-full min-h-screen bg-global-19">
      {/* Hero Section - Made Responsive */}
      <HeroSection />
      <FeatureCardSection />
      {/* <StatisticsSection />
      <HelpSection />
      <CreatorsSection />
      <ReviewsSection />
      <VideoSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <FeatureCardsBottom />
      <SocialMediaPowerSection />
      <FAQSection />
      <FinalCTASectionBg />
      <Footer /> */}
    </div>
  );
}