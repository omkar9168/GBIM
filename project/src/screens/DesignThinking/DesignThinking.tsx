import React from "react";
import { Separator } from "../../components/ui/separator";
import { BannerSubsection } from "./sections/BannerSubsection/BannerSubsection";
import { ComponentSubsection } from "./sections/ComponentSubsection";
import { ComponentWrapperSubsection } from "./sections/ComponentWrapperSubsection";
import { ContentSubsection } from "./sections/ContentSubsection";
import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";
import { OverlapGroupWrapperSubsection } from "./sections/OverlapGroupWrapperSubsection";
import { OverlapWrapperSubsection } from "./sections/OverlapWrapperSubsection";

export const DesignThinking = (): JSX.Element => {
  // Pattern grid data
  const gridPatternData = Array(5).fill(null);

  return (
    <div className="relative w-full bg-white overflow-x-hidden">
      <div className="relative w-full">
        {/* Background pattern grid */}
        <div className="absolute w-full top-0 left-0 opacity-[0.08] overflow-hidden pointer-events-none">
          <div className="grid grid-cols-5 gap-0">
            {[...Array(5)].map((_, colIndex) => (
              <div key={`col-${colIndex}`} className="flex flex-col">
                {gridPatternData.map((_, rowIndex) => (
                  <div
                    key={`cell-${colIndex}-${rowIndex}`}
                    className={`h-[159.74px] border-[0.96px] border-solid border-[#a41a1e14] ${
                      (colIndex % 2 === 0 && rowIndex % 2 === 2) ||
                      (colIndex % 2 === 1 && rowIndex % 2 === 1) ||
                      (colIndex % 2 === 0 && rowIndex % 2 === 4) ||
                      (colIndex % 2 === 1 && rowIndex % 2 === 3)
                        ? "bg-[#a41a1e26]"
                        : ""
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {/* Banner Section */}
          <BannerSubsection />

          {/* What We Offer Section */}
          <section className="relative w-full mt-20">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-4">
                <Separator className="w-[245px] h-px bg-[#a41a1e14]" />
                <div className="w-6 h-6 bg-[#a41a1e] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#adadad] text-xl text-center tracking-[4.00px] leading-[30px] mb-8">
                WHAT WE OFFER
              </h2>
              <div className="w-full max-w-[1293px] text-center mb-16">
                <p className="[font-family:'Poppins',Helvetica] text-[40px] leading-[54px]">
                  <span className="font-medium text-black">
                    Transforming Ideas into Visual Masterpieces,
                  </span>{" "}
                  <span className="font-bold text-black">
                    Elevating Brands to New Heights
                  </span>{" "}
                  <span className="font-medium text-black">
                    with Innovative and Impactful Designs.
                  </span>
                </p>
              </div>
            </div>
            <FrameSubsection />
            <ComponentSubsection />
          </section>

          {/* Design Beyond Boundaries Section */}
          <section className="relative w-full mt-20">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-4">
                <Separator className="w-[361px] h-px bg-[#a41a1e14]" />
                <div className="w-6 h-6 bg-[#a41a1e] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#adadad] text-xl text-center tracking-[4.00px] leading-[30px] mb-8">
                DESIGN BEYOND BOUNDARIES
              </h2>
              <div className="w-full max-w-[1083px] text-center mb-16">
                <p className="[font-family:'Poppins',Helvetica] text-[40px] leading-[54px]">
                  <span className="font-medium text-black">
                    We help you solve complex problems through human-centered
                  </span>
                  <span className="font-semibold text-black">, </span>
                  <span className="font-bold text-black">
                    creative design solutions
                  </span>
                </p>
              </div>
            </div>
            <FrameWrapperSubsection />
          </section>

          {/* Our Creative Process Section */}
          <section className="relative w-full mt-20">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-4">
                <Separator className="w-[324px] h-px bg-[#a41a1e14]" />
                <div className="w-6 h-6 bg-[#a41a1e] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#adadad] text-xl text-center tracking-[4.00px] leading-[30px] mb-8">
                OUR CREATIVE PROCESS
              </h2>
              <div className="w-full max-w-[1083px] text-center mb-16">
                <p className="[font-family:'Poppins',Helvetica] text-[40px] leading-[54px]">
                  <span className="font-medium text-black">
                    Our creative process blends curiosity, collaboration, and
                    innovation
                  </span>{" "}
                  <span className="font-bold text-black">
                    to bring bold ideas to life.
                  </span>
                </p>
              </div>
            </div>
            <OverlapWrapperSubsection />
            <DivWrapperSubsection />
          </section>

          {/* Our Featured Work Section */}
          <section className="relative w-full mt-20">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-4">
                <Separator className="w-[289px] h-px bg-[#a41a1e14]" />
                <div className="w-6 h-6 bg-[#a41a1e] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#adadad] text-xl text-center tracking-[4.00px] leading-[30px] mb-8">
                OUR FEATURED WORK
              </h2>
              <div className="w-full max-w-[813px] text-center mb-16">
                <p className="[font-family:'Poppins',Helvetica] text-[40px] leading-[54px]">
                  <span className="font-medium text-black">
                    A showcase of strategies that turned vision into{" "}
                  </span>
                  <span className="font-bold text-black">
                    measurable success.
                  </span>
                </p>
              </div>
            </div>

            {/* Portfolio Filter */}
            <div className="flex flex-col space-y-4 ml-[228px]">
              <div className="flex items-center space-x-4">
                <div className="w-[60px] h-[60px] bg-[#a41a1e] rounded-[30px] flex items-center justify-center">
                  <div className="w-6 h-6 bg-[100%_100%]" />
                </div>
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#012e3e] text-xl tracking-[2.40px] leading-[30px]">
                  DIGITAL CREATIVES
                </h3>
              </div>
              <Separator className="w-[225px] h-[5px] bg-[#a41a1e]" />

              <div className="flex items-center space-x-4 mt-8">
                <div className="w-[60px] h-[60px] bg-[#a41a1e26] rounded-[30px] flex items-center justify-center">
                  <div className="w-6 h-6 top-[17px] left-[18px]">
                    <div className="h-5 top-0.5 bg-[100%_100%]" />
                  </div>
                </div>
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#012e3eb2] text-xl tracking-[2.40px] leading-[30px]">
                  BRANDING
                </h3>
              </div>

              <div className="flex items-center space-x-4 mt-8">
                <div className="w-[60px] h-[60px] bg-[#a41a1e26] rounded-[30px] flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#a41a1e] rounded"></div>
                </div>
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#012e3eb2] text-xl tracking-[2.40px] leading-[30px]">
                  PRINT DESIGN
                </h3>
              </div>

              <div className="flex items-center space-x-4 mt-8">
                <div className="w-[60px] h-[60px] bg-[#a41a1e26] rounded-[30px] flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#a41a1e] rounded"></div>
                </div>
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#012e3eb2] text-xl tracking-[2.40px] leading-[30px]">
                  WEBSITE DESIGN
                </h3>
              </div>

              <div className="flex items-center space-x-4 mt-8">
                <div className="w-[60px] h-[60px] bg-[#a41a1e26] rounded-[30px] flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#a41a1e] rounded"></div>
                </div>
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#012e3eb2] text-xl tracking-[2.40px] leading-[30px]">
                  APP DESIGN
                </h3>
              </div>
            </div>

            {/* Portfolio Display */}
            <div className="w-full mt-8">
              <div className="w-full max-w-[1320px] h-[782px] mx-auto bg-[#01182f] rounded-[20px] overflow-hidden border border-solid border-[#012e3e33]">
                <div className="relative w-full h-full overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-white text-2xl font-medium">Portfolio Content</div>
                  </div>
                </div>
              </div>
            </div>

            <ComponentWrapperSubsection />
            <DivSubsection />
          </section>

          {/* Our Happy Clients Section */}
          <section className="relative w-full mt-20">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-4">
                <Separator className="w-[276px] h-px bg-[#a41a1e14]" />
                <div className="w-6 h-6 bg-[#a41a1e] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#adadad] text-xl text-center tracking-[4.00px] leading-[30px] mb-8">
                OUR HAPPY CLIENTS
              </h2>
              <div className="w-full text-center mb-16">
                <p className="[font-family:'Poppins',Helvetica] text-[40px] leading-[54px]">
                  <span className="font-medium text-black">
                    Our Success Starts With Their{" "}
                  </span>
                  <span className="font-bold text-black">Satisfaction.</span>
                </p>
              </div>
            </div>
            <ContentSubsection />
            <OverlapGroupWrapperSubsection />
          </section>
        </div>

        {/* Footer */}
        <div className="w-full mt-20 bg-[#121212] h-[935px]">
          <div className="flex items-center justify-center h-full">
            <div className="text-white text-2xl font-medium">Footer Content</div>
          </div>
        </div>

        {/* Fixed Header */}
        <div className="fixed w-full h-[135px] top-0 left-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-full px-8">
            <div className="text-2xl font-bold text-[#a41a1e]">GBIM</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#a41a1e]">Home</a>
              <a href="#" className="text-gray-700 hover:text-[#a41a1e]">Services</a>
              <a href="#" className="text-gray-700 hover:text-[#a41a1e]">Portfolio</a>
              <a href="#" className="text-gray-700 hover:text-[#a41a1e]">Contact</a>
            </nav>
          </div>
        </div>

        {/* Scroll buttons */}
        <div className="fixed bottom-8 left-[146px] w-[60px] h-[60px] bg-[#012e3e1a] rounded-[30px] flex items-center justify-center z-50">
          <div className="w-6 h-6 border-2 border-[#012e3e] border-b-0 border-r-0 transform rotate-45"></div>
        </div>
        <div className="fixed bottom-8 right-[110px] w-[60px] h-[60px] bg-[#012e3e1a] rounded-[30px] flex items-center justify-center rotate-180 z-50">
          <div className="w-6 h-6 border-2 border-[#012e3e] border-b-0 border-r-0 transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};
