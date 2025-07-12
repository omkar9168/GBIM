import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const ComponentWrapperSubsection = (): JSX.Element => {
  // Define the design categories as an array to map over
  const designCategories = [
    "Branding",
    "Logo Design",
    "Social Media Design",
    "Ad Creative Design",
    "Landing Page Design",
    "Website UI Design",
    "Mobile App UI Design",
    "Emailer Design",
    "Infographic Design",
    "Motion Graphics",
    "Packaging Design",
    "Visual Strategy",
    "Wireframing",
    "Prototyping",
    "User Interface Design",
  ];

  return (
    <section className="w-full py-4 overflow-hidden">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex items-center gap-4 py-2">
          {designCategories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-6 py-4 rounded-full border-2 border-gray-200 hover:bg-gray-100 cursor-pointer transition-colors"
            >
              <span className="font-bold text-[#012e3e] text-[20px] font-['Poppins',Helvetica]">
                #{category}
              </span>
            </Badge>
          ))}
          {/* Duplicate the categories for continuous scrolling effect */}
          {designCategories.map((category, index) => (
            <Badge
              key={`duplicate-${index}`}
              variant="outline"
              className="px-6 py-4 rounded-full border-2 border-gray-200 hover:bg-gray-100 cursor-pointer transition-colors"
            >
              <span className="font-bold text-[#012e3e] text-[20px] font-['Poppins',Helvetica]">
                #{category}
              </span>
            </Badge>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
