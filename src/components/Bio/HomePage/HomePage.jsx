"use client";
import Header from "@/components/Bio/lending/Header";
import HeroSection from "@/components/Bio/lending/HeroSection";
import Services from "@/components/Bio/lending/Services";
import Cms1 from "@/components/Bio/lending/Cms1";
import Socialmedia from "@/components/Bio/lending/Socialmedia";
import Faqs from "@/components/Bio/lending/Faqs";
import ImageSlider from "@/components/Bio/lending/imageSlider";
import Testimonials from "@/components/Bio/lending/Testimonials";
import Footer from "@/components/Bio/lending/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SocialMediaCms1 from "@/components/Bio/lending/SocialMediaCms1";
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
