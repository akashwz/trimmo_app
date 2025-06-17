"use client";
import Header from "@/componants/Bio/lending/Header";
import HeroSection from "@/componants/Bio/lending/HeroSection";
import Services from "@/componants/Bio/lending/Services";
import Cms1 from "@/componants/Bio/lending/Cms1";
import Socialmedia from "@/componants/Bio/lending/Socialmedia";
import Faqs from "@/componants/Bio/lending/Faqs";
import ImageSlider from "@/componants/Bio/lending/imageSlider";
import Testimonials from "@/componants/Bio/lending/Testimonials";
import Footer from "@/componants/Bio/lending/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SocialMediaCms1 from "@/componants/Bio/lending/SocialMediaCms1";
import SocialMediaCms2 from "../lending/SocialMediaCms2";
import JoinCommunity from "../lending/JoinCommunity";
export default function Home() {
  const router = useRouter();
  // const { userData } = useSelector((state) => state?.authReducer || {});

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
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <Services />
      <Cms1 />
      {/* <Socialmedia /> */}
      <SocialMediaCms1 />
      <SocialMediaCms2 />
      <JoinCommunity />
      <Faqs />
      {/* <ImageSlider /> */}
      <Testimonials />
      <Footer />
    </div>
  );
}
