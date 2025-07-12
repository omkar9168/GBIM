import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const ContentSubsection = (): JSX.Element => {
  // Data for statistics to enable mapping
  const stats = [
    {
      number: "20+",
      description: "Years of Design Innovation",
      icon: <div className="w-6 h-6 bg-white rounded"></div>,
    },
    {
      number: "50+",
      description: "Brands Launched from Scratch",
      icon: <div className="w-6 h-6 bg-white rounded-full"></div>,
    },
    {
      number: "30+",
      description: "Industries Designed For",
      icon: <div className="w-6 h-6 bg-white rounded-sm"></div>,
    },
    {
      number: "100+",
      description: "Digital Interfaces Crafted",
      icon: <div className="w-6 h-6 bg-white rounded"></div>,
    },
    {
      number: "200+",
      description: "Clients Collaborated With",
      icon: <div className="w-6 h-6 bg-white rounded-full"></div>,
    },
  ];

  return (
    <Card className="w-full max-w-[1722px] h-[175px] mx-auto rounded-[30px] shadow-[0px_1px_24px_#00000012]">
      <CardContent className="p-0">
        <div className="flex items-center justify-between h-full px-12 py-[53px]">
          {stats.map((stat, index) => (
            <React.Fragment key={`stat-${index}`}>
              <div className="flex items-center gap-[13.86px]">
                <div className="relative w-[69.28px] h-[69.28px] bg-[#02182e] rounded-[55.42px] overflow-hidden">
                  {stat.icon}
                </div>
                <div className="flex flex-col w-[200.21px] items-start">
                  <div className="w-fit mt-[-0.69px] font-['Open_Sans',Helvetica] font-bold text-[#001929] text-[37.4px] text-center tracking-[-0.75px] leading-[41.6px] whitespace-nowrap">
                    {stat.number}
                  </div>
                  <div className="w-fit font-['Open_Sans',Helvetica] font-semibold text-[#001929] text-sm tracking-[-0.28px] leading-[27.7px] whitespace-nowrap">
                    {stat.description}
                  </div>
                </div>
              </div>
              {index < stats.length - 1 && (
                <Separator orientation="vertical" className="h-[55.42px]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
