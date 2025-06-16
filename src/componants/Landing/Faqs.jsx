"use client";
import React, { useState } from "react";
import { ArrowDown, ChevronDown } from "react-bootstrap-icons";

const Faqs = () => {
  const data = [
    {
      question: "What is Trimmo Bio?",
      answer:
        "Trimmo Bio is a tool that helps you create a personalized bio link to share all your important links in one place.",
    },
    {
      question: "Who can use Trimmo Bio?",
      answer:
        "Anyone can use Trimmo Bio, including influencers, small businesses, content creators, and individuals wanting to manage their online presence.",
    },
    {
      question: "Is Trimmo Bio free?",
      answer:
        "Yes, Trimmo Bio offers a free version. Premium features are available for users who want advanced functionality.",
    },
    {
      question: "How do I create my Trimmo Bio link?",
      answer:
        "Sign up on the Trimmo Bio website, customize your page, add links, and start sharing instantly.",
    },
    {
      question: "Can I customize my Trimmo Bio page?",
      answer:
        "Absolutely! Trimmo Bio allows you to adjust the design, layout, colors, and branding to match your style or business.",
    },
    {
      question: "What types of links can I add to my Trimmo Bio page?",
      answer:
        "You can add social media profiles, websites, videos, online stores, blogs, or any URL you wish to share.",
    },
    {
      question: "Is Trimmo Bio mobile-friendly?",
      answer:
        "Yes, Trimmo Bio is designed to work seamlessly on mobile devices, tablets, and desktops.",
    },
    {
      question: "Can I track how my links perform?",
      answer:
        "Yes, Trimmo Bio provides advanced analytics to help you monitor clicks, traffic sources, and engagement.",
    },
    {
      question: "Can I use my own domain with Trimmo Bio?",
      answer:
        "Yes, Trimmo Bio supports custom domains, giving your page a professional and branded appearance.",
    },
    {
      question: "Is Trimmo Bio secure?",
      answer:
        "Trimmo Bio prioritizes security with encryption and robust measures to protect your data and ensure safe sharing.",
    },
    {
      question: "How do I share my Trimmo Bio link?",
      answer:
        "Simply copy your unique Trimmo Bio link and share it across social media, emails, or other platforms.",
    },
    {
      question: "What makes Trimmo Bio different from other bio link tools?",
      answer:
        "Trimmo Bio stands out with its advanced analytics, customizable designs, custom domain support, and user-friendly interface.",
    },
  ];
  const [open, setOpen] = useState(null);
  return (
    <div className="w-full sm:w-[85%] px-4 mx-auto">
      <div className="text-center">
        <button disabled className="btn-outline mx-auto">
          Faq’s
        </button>
        <h3 className="sec-title text-center">Frequently Asked Questions</h3>
      </div>
      <div className="grid grid-cols-1">
        {data.map((x, i) => {
          return (
            <details key={i} className="group cursor-pointer h-fit py-3 md:py-5 border-b">
              <summary className="flex items-center justify-between ">
                <p className="secondary-font text-sm sm:text-base font-medium">{x.question}</p>
                <ChevronDown className="group-open:rotate-180 ms-3 transition-all duration-150" />
              </summary>
              <p className="text-xs mt-2 sm:text-sm text-[#444]">{x.answer}</p>
            </details>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
