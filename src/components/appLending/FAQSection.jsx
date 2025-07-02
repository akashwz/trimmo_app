import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export const FAQSection = () => {
  // FAQ data for the left column
  const leftFaqItems = [
    {
      id: "item-1",
      question: "01. All In One Chat - Lorem Ipsum is.",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      id: "item-2",
      question: "01. All In One Chat - Lorem Ipsum is.",
      answer: "",
    },
    {
      id: "item-3",
      question: "01. All In One Chat - Lorem Ipsum is.",
      answer: "",
    },
    {
      id: "item-4",
      question: "01. All In One Chat - Lorem Ipsum is.",
      answer: "",
    },
    {
      id: "item-5",
      question: "01. All In One Chat - Lorem Ipsum is.",
      answer: "",
    },
  ];

  // FAQ data for the right column
  const rightFaqItems = [
    {
      id: "item-6",
      question: "01. All In One Chat - Lorem Ipsum is.",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      id: "item-7",
      question: "01. All In One Chat - Lorem Ipsum is.",
      answer: "",
    },
    {
      id: "item-8",
      question: "01. All In One Chat - Lorem Ipsum is.",
      answer: "",
    },
    {
      id: "item-9",
      question: "01. All In One Chat - Lorem Ipsum is.",
      answer: "",
    },
    {
      id: "item-10",
      question: "01. All In One Chat - Lorem Ipsum is.",
      answer: "",
    },
  ];

  return (
    <section className="w-full max-w-[1530px] mx-auto py-16">
      <div className="mb-16">
        <div className="flex justify-between items-center">
          <h2 className="[font-family:'PolySans-Regular',Helvetica] text-[44px] leading-normal font-normal tracking-[0]">
            <span className="text-black">
              Lorem Ipsum is simply dummy text of the
              <br />
              printing and{" "}
            </span>
            <span className="text-[#00000080]">typesetting industry.</span>
          </h2>

          <div className="flex items-center cursor-pointer">
            <span className="[font-family:'PolySans-Median',Helvetica] font-normal text-black text-base tracking-[0] leading-normal whitespace-nowrap mr-2">
              Read More
            </span>
            <ChevronRightIcon className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
            {leftFaqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className={`bg-bg-color rounded-[${
                  item.id === "item-1" ? "20px" : "10px"
                }] overflow-hidden border-none`}
              >
                <AccordionTrigger className="px-5 py-3 [font-family:'PolySans-Neutral',Helvetica] font-normal text-black text-xl">
                  {item.question}
                </AccordionTrigger>
                {item.answer && (
                  <AccordionContent className="px-[57px] py-2">
                    <p className="[font-family:'Inter',Helvetica] font-normal text-description-color text-base leading-6">
                      {item.answer}
                    </p>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Right Column */}
        <div>
          <Accordion type="single" collapsible defaultValue="item-6" className="space-y-4">
            {rightFaqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className={`bg-bg-color rounded-[${
                  item.id === "item-6" ? "20px" : "10px"
                }] overflow-hidden border-none`}
              >
                <AccordionTrigger className="px-5 py-3 [font-family:'PolySans-Neutral',Helvetica] font-normal text-black text-xl">
                  {item.question}
                </AccordionTrigger>
                {item.answer && (
                  <AccordionContent className="px-[57px] py-2">
                    <p className="[font-family:'Inter',Helvetica] font-normal text-description-color text-base leading-6">
                      {item.answer}
                    </p>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
