import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const FrameSubsection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What is creative design thinking?",
      answer:
        "Creative design thinking is an approach that combines analytical thinking and creative problem-solving techniques to generate innovative solutions. It involves applying empathy, experimentation, and collaboration to understand the needs of users, redefine problems, and explore new possibilities.",
      defaultOpen: true,
    },
    {
      question: "How can creative design thinking benefit my design projects?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "How can creative design thinking benefit my design projects?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "How can creative design thinking benefit my design projects?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "How can creative design thinking benefit my design projects?",
      answer: "",
      defaultOpen: false,
    },
  ];

  // Category tabs data
  const categoryTabs = [
    {
      name: "Marketing Creatives",
      active: true,
    },
    {
      name: "Branding",
      active: false,
    },
    {
      name: "UI/UX Designing",
      active: false,
    },
  ];

  // Create grid cells for background pattern
  const gridColumns = 10;
  const gridRows = 5;

  return (
    <section className="relative w-full py-16 px-4 md:px-12 lg:px-16">
      {/* Background grid pattern with opacity */}
      <div className="absolute right-0 top-1/4 w-full md:w-3/5 h-[897px] overflow-hidden opacity-60 z-0">
        <div className="grid grid-cols-5 grid-rows-5 h-full">
          {Array.from({ length: gridColumns * gridRows }).map((_, index) => (
            <div
              key={`grid-cell-${index}`}
              className="border border-solid border-[#a41a1e14] h-[166px]"
            />
          ))}
        </div>
      </div>

      {/* Section header */}
      <div className="relative text-center mb-16 z-10">
        <h3 className="font-semibold text-[#adadad] text-xl text-center tracking-[4px] mb-2">
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <div className="flex items-center justify-center w-full max-w-[437px] mx-auto">
          <div className="h-px bg-[#adadad] flex-grow mr-2"></div>
          <div className="w-6 h-6 bg-[#a41a1e] rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>

        <h2 className="mt-10 text-4xl font-medium">
          <span className="font-medium">Got Questions? </span>
          <span className="font-bold">We've Got Answers</span>
          <span className="font-medium">!</span>
        </h2>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 z-10 relative">
        {categoryTabs.map((tab, index) => (
          <Button
            key={`tab-${index}`}
            variant={tab.active ? "outline" : "outline"}
            className={`rounded-[70px] px-[52px] py-[19px] text-xl font-medium ${
              tab.active
                ? "border-[#a41a1e40] bg-gradient-to-br from-[rgba(164,26,30,0.1)] to-[rgba(31,0,104,0.1)]"
                : "border-[#c4c4c4] bg-transparent"
            }`}
          >
            <span
              className={
                tab.active
                  ? "bg-gradient-to-br from-[#a41a1e] to-[#1f0068] bg-clip-text text-transparent"
                  : "text-[#8b8b8b]"
              }
            >
              {tab.name}
            </span>
          </Button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-[1043px] mx-auto relative z-10">
        <Accordion type="single" collapsible defaultValue="item-0">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`faq-${index}`}
              value={`item-${index}`}
              className="mb-4"
            >
              <Card
                className={`rounded-[20px] overflow-hidden ${
                  index === 0 ? "bg-[#a41a1e]" : "bg-[#f3f3f3]"
                }`}
              >
                <AccordionTrigger
                  className={`p-6 flex items-center justify-between w-full ${
                    index === 0
                      ? "text-white font-semibold"
                      : "text-[#535353] font-medium"
                  } text-xl`}
                >
                  <span className="text-left">{item.question}</span>
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full ${
                      index === 0 ? "bg-white" : "bg-[#a41a1e]"
                    }`}
                  >
                    <img
                      className={`w-[30px] h-[30px] transition-transform ${
                        index === 0 ? "rotate-180" : ""
                      }`}
                      alt="Expand icon"
                    />
                    <div className={`w-6 h-6 flex items-center justify-center ${
                      index === 0 ? "text-[#a41a1e]" : "text-white"
                    }`}>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M7 10l5 5 5-5z"/>
                      </svg>
                    </div>
                  </div>
                </AccordionTrigger>
                {item.answer && (
                  <AccordionContent
                    className={`px-6 pb-6 ${
                      index === 0 ? "text-white" : "text-[#535353]"
                    } text-base leading-7 max-w-[834px]`}
                  >
                    {item.answer}
                  </AccordionContent>
                )}
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
