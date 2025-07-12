import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapperSubsection = (): JSX.Element => {
  // Data for marketing creative tags
  const marketingTags = [
    "Banner Design",
    "Social Media Creatives",
    "Campaign Creatives",
    "Creative Infographics",
    "Social Media Creatives",
    "Social Media Creatives",
    "Social Media Creatives",
  ];

  return (
    <section className="flex flex-wrap gap-8 w-full py-8">
      {/* Marketing Creatives Card */}
      <Card className="relative w-full lg:w-[1179px] h-[604px] bg-[#121212] rounded-[20px] overflow-hidden">
        <CardContent className="p-0 h-full">
          <div className="relative h-full">
            {/* Background images */}
            <div className="absolute w-[826px] h-[604px] top-0 left-0 bg-gradient-to-br from-[#a41a1e] to-[#01182f] opacity-80"></div>
            <div className="absolute w-[345px] h-[604px] top-0 left-[834px] bg-gradient-to-bl from-[#01182f] to-[#a41a1e] opacity-80"></div>
            <div className="absolute w-full h-[329px] top-[275px] left-0 bg-black/50"></div>

            {/* Content */}
            <div className="absolute w-[357px] top-[393px] left-12 [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[26.9px]">
              Marketing Creatives
            </div>

            {/* Tags */}
            <div className="flex flex-wrap w-[833px] items-start gap-[16px_16px] absolute top-[451px] left-12">
              {marketingTags.map((tag, index) => (
                <Badge
                  key={`tag-${index}`}
                  className="h-11 px-5 py-2 bg-[#ffffff1a] rounded-[58.42px] border-[0.8px] border-solid border-[#ffffffdb] hover:bg-[#ffffff33]"
                >
                  <span className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[26.9px]">
                    {tag}
                  </span>
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Branding Card */}
      <Card className="relative w-60 h-[604px] bg-[#121212] rounded-[20px] overflow-hidden">
        <CardContent className="p-0 h-full">
          <div className="absolute w-60 h-[604px] top-0 left-0 bg-gradient-to-b from-[#a41a1e] to-[#01182f]">
            <div className="absolute top-[465px] left-[-17px] -rotate-90 [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[26.9px] whitespace-nowrap">
              Branding
            </div>
          </div>
        </CardContent>
      </Card>

      {/* UI/UX Designing Card */}
      <Card className="relative w-60 h-[604px] bg-[#121212] rounded-[20px] overflow-hidden">
        <CardContent className="p-0 h-full">
          <div className="relative w-full h-full">
            <div className="absolute w-60 h-[604px] bg-gradient-to-b from-[#01182f] to-[#a41a1e]"></div>
            <div className="absolute top-[618px] -left-1 -rotate-90 [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[26.9px] whitespace-nowrap">
              UI/UX Designing
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
