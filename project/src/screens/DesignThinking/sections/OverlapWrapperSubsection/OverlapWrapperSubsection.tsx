import { BarChartIcon, LightbulbIcon, TimerIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const OverlapWrapperSubsection = (): JSX.Element => {
  const designThinkingLevels = [
    {
      level: "Level 1",
      title: "Research",
      description:
        "Until iron is hot with the research, our design head specialists never command the designers to hit",
      color: "#a41a1e",
      icon: <BarChartIcon className="w-[22px] h-[22px] text-white" />,
      gradientClass:
        "bg-[linear-gradient(181deg,rgba(1,46,62,0.28)_6%,rgba(1,46,62,0)_64%)]",
    },
    {
      level: "Level 2",
      title: "Idea",
      description:
        "Ideation is a very necessary step to optimize the process. An idea must be well-versed with the research.",
      color: "#01182f",
      icon: <LightbulbIcon className="w-[19px] h-[21px] text-white" />,
      gradientClass:
        "bg-[linear-gradient(181deg,rgba(1,46,62,0.28)_6%,rgba(1,46,62,0)_64%)]",
    },
    {
      level: "Level 3",
      title: "Strategy",
      description:
        "Strategic planning is a crucial step to deliver the projects on time. Never underestimate the strategy makers",
      color: "#a41a1e",
      icon: <img className="w-[17px] h-[22px]" alt="Group" />,
      gradientClass:
        "bg-[linear-gradient(181deg,rgba(164,26,30,0.28)_6%,rgba(164,26,30,0)_64%)]",
    },
    {
      level: "Level 4",
      title: "Process",
      description:
        "Processing the project with detailed research, ideas, and pre-planning is always a cherry on the cake.",
      color: "#01182f",
      icon: (
        <div className="w-[23px] h-[23px] bg-white rounded"></div>
      ),
      gradientClass:
        "bg-[linear-gradient(181deg,rgba(1,46,62,0.28)_6%,rgba(1,46,62,0)_64%)]",
    },
    {
      level: "Level 5",
      title: "Time",
      description:
        "We value your time. Playing with client's deadlines is not our area. Timeline delivery is our First priority.",
      color: "#a41a1e",
      icon: <TimerIcon className="w-[17px] h-[22px] text-white" />,
      gradientClass:
        "bg-[linear-gradient(181deg,rgba(164,26,30,0.28)_6%,rgba(164,26,30,0)_64%)]",
    },
    {
      level: "Level 6",
      title: "Goal",
      description:
        "Our goal-oriented vision always gives us fruitful results. Connect with us to achieve your design goals.",
      color: "#01182f",
      icon: <img className="w-[21px] h-[21px]" alt="Layer" />,
      gradientClass:
        "bg-[linear-gradient(181deg,rgba(1,46,62,0.28)_6%,rgba(1,46,62,0)_64%)]",
    },
  ];

  // Background images for the section
  const backgroundElements = [
    "w-[219px] h-[168px] top-56 left-[133px]",
    "w-[179px] h-[154px] top-[119px] left-[421px]",
    "w-[173px] h-[143px] top-[143px] left-[959px]",
    "w-[195px] h-[162px] top-[197px] left-[672px]",
    "w-44 h-[133px] top-[218px] left-[1242px]",
  ];

  return (
    <section className="w-full py-16 relative">
      <div className="container relative h-[472px]">
        {/* Background decorative images */}
        {backgroundElements.map((className, index) => (
          <div
            key={`bg-element-${index}`}
            className={`absolute ${className} bg-gradient-to-br from-[#a41a1e] to-[#01182f] rounded-lg opacity-20`}
          />
        ))}

        {/* Design thinking levels */}
        <div className="flex flex-wrap justify-between">
          {designThinkingLevels.map((level, index) => {
            const isRedAccent = index % 2 === 0;
            const position =
              index === 0
                ? "mt-[58px] ml-0"
                : index === 1
                  ? "mt-[184px] ml-[299px]"
                  : index === 2
                    ? "mt-0 ml-[545px]"
                    : index === 3
                      ? "mt-[184px] ml-[817px]"
                      : index === 4
                        ? "mt-[62px] ml-[1094px]"
                        : "mt-[184px] ml-[1386px]";

            return (
              <div key={level.level} className={`relative ${position}`}>
                {/* Level card */}
                <Card
                  className={`relative w-[225px] h-[200px] rounded-[39px] border-[0.75px] border-solid border-[#0000005e] bg-white`}
                >
                  <CardContent className="p-5 text-center">
                    {/* Icon circle */}
                    <div
                      className={`absolute w-[58px] h-[58px] top-[-29px] left-1/2 transform -translate-x-1/2 bg-white rounded-full border-[1.1px] border-dashed border-[${level.color}]`}
                    >
                      <div
                        className={`absolute w-[47px] h-[47px] top-[5px] left-[5px] bg-[${level.color}] rounded-full flex items-center justify-center`}
                      >
                        {level.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`mt-8 font-bold text-[${level.color}] text-[17px] font-['Poppins',Helvetica]`}
                    >
                      {level.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-[12px] leading-[17px] font-['Poppins',Helvetica] text-black">
                      {level.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Level indicator */}
                <div
                  className={`absolute ${index % 2 === 0 ? "top-[240px]" : "top-[-40px]"} left-1/2 transform -translate-x-1/2 ${level.gradientClass} [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Inter',Helvetica] font-extrabold text-transparent text-[40px]`}
                >
                  {level.level}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
