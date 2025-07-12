import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const DivSubsection = (): JSX.Element => {
  // Define the tags data to make the code more maintainable
  const designTags = [
    "User Experience Design",
    "Creative Direction",
    "Illustration Design",
    "Typography Design",
    "Digital Campaign Design",
    "Interactive Design",
    "Brand Guideline Design",
    "Pitch Deck Design",
    "Product Mockup Design",
    "Retail Display Design",
    "Visual Audit",
    "GenAI",
    "VoiceAI",
    "SmartVisuals",
  ];

  // Create a component for the tag to ensure consistency
  const DesignTag = ({ text }: { text: string }) => (
    <Badge className="h-[60px] px-8 rounded-[65.46px] bg-transparent border border-[#012e3e]/10 hover:bg-[#012e3e]/5">
      <span className="[font-family:'Poppins',Helvetica] font-bold text-[#012e3e] text-[20.1px] leading-[30px]">
        #{text}
      </span>
    </Badge>
  );

  return (
    <section className="w-full py-4 overflow-hidden">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="inline-flex items-center gap-[17.26px] animate-[scroll_60s_linear_infinite]">
          {/* First set of tags */}
          {designTags.map((tag, index) => (
            <DesignTag key={`tag-1-${index}`} text={tag} />
          ))}

          {/* Duplicate set for continuous scrolling effect */}
          {designTags.map((tag, index) => (
            <DesignTag key={`tag-2-${index}`} text={tag} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};
