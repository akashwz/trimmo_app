import CreatorsSection from "@/components/appLending/CreatorsSection";
import { FAQSection } from "@/components/appLending/FAQSection";
import { FeatureCardsBottom } from "@/components/appLending/FeatureCardsBottom";
import FeatureCardSection from "@/components/appLending/FeatureCardSection";
import FinalCTASectionBg from "@/components/appLending/FinalCTASectionBg";
import Header from "@/components/appLending/Header";
import StatisticsSection from "@/components/appLending/StatisticsSection";
import TestimonialsSection from "@/components/appLending/TestimonialsSection";
import LetsChatSection from "@/components/bioLanding/LetsChatSection";
import Footer from "@/components/common/Footer";
import FeaturesSection from "@/components/socialMediaLanding/FeaturesSection";
import HeroSection from "@/components/socialMediaLanding/HeroSection";
import SocialMediaGridSection from "@/components/socialMediaLanding/SocialMediaGridSection";

//add meta data
export async function metadata() {
    const metaTitle = "All Your Social Media Links, One Simple Bio Link.";
    const metaDescription =
        "Trimo.bio helps you set up and manage all of your social media links in one spot. Create a personalized, shareable bio link for Instagram, TikTok, Twitter, and other platforms.";
    const articleUrl = "https://trimmo.bio";
    return {
        title: metaTitle,
        description: metaDescription,
        metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL), // Fixes metadataBase error
        alternates: {
            canonical: articleUrl, // Canonical URL added here
        },
        openGraph: {
            title: metaTitle,
            description: metaDescription,
            url: articleUrl,
            type: "website",
            images: [
                {
                    url: "/trimmo-bio-image.webp",
                    width: 1200,
                    height: 630,
                    alt: "Profile Image",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: metaTitle,
            description: metaDescription,
            images: [
                {
                    url: "/trimmo-bio-image.webp",
                    width: 1200,
                    height: 630,
                    alt: "Profile Image",
                },
            ],
        },
    };
}

export default function HomePage() {
    return (
      <>
        <Header socialMedia={true} />
        <HeroSection />
        <SocialMediaGridSection />
        <CreatorsSection />
        <StatisticsSection />
        <FeaturesSection />
        {/* <FeatureCardSection />
        <FeatureCardsBottom /> */}
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASectionBg />
        <LetsChatSection />
        <Footer />
      </>
    );
}
