import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const DivWrapperSubsection = (): JSX.Element => {
  // Design category buttons data
  const designCategories = [
    { name: "Graphic design", active: true },
    { name: "Motion graphics", active: false },
    { name: "Brand video", active: false },
  ];

  // Gallery images data
  const galleryImages = [
    { id: 1, className: "w-[252px] h-[480px]", src: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=252&h=480" },
    { id: 2, className: "w-[259px] h-[406px]", src: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=259&h=406" },
    { id: 3, className: "w-[259px] h-[360px]", src: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=259&h=360" },
    { id: 4, className: "w-[259px] h-[331px]", src: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=259&h=331" },
    { id: 5, className: "w-[259px] h-[361px]", src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=259&h=361" },
    { id: 6, className: "w-[265px] h-[412px]", src: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=265&h=412" },
    { id: 7, className: "w-[251px] h-[479px]", src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=251&h=479" },
  ];

  return (
    <section className="relative w-full py-16 overflow-hidden bg-gradient-to-br from-[#121212] to-[#01182f]">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="font-['Poppins',Helvetica] text-white text-[40px] text-center leading-[54px] max-w-[711px]">
          <span className="font-normal">Discover the </span>
          <span className="font-bold">AI-Powered</span>
          <span className="font-semibold"> </span>
          <span className="font-normal">Designs</span>
          <span className="font-medium"> </span>
          <span className="font-normal">We've Brought to Life</span>
        </h2>

        {/* Subheading */}
        <p className="mt-8 font-['Poppins',Helvetica] font-normal text-[#ffffffe6] text-base text-center leading-6 max-w-[397px]">
          Showcasing real, creative designs crafted through cutting-edge AI
          tools.
        </p>

        {/* Category buttons */}
        <div className="flex items-center gap-[12.76px] mt-12">
          {designCategories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className={`px-[36.88px] py-[13.47px] rounded-[49.64px] border border-solid ${
                category.active
                  ? "bg-[#ffffff1a] backdrop-blur-[2px] backdrop-brightness-[100%]"
                  : "bg-transparent border-[#c4c4c4]"
              }`}
            >
              <span
                className={`font-['Poppins',Helvetica] font-medium text-[14.2px] leading-[19.1px] whitespace-nowrap ${
                  category.active ? "text-white" : "text-[#ffffff94]"
                }`}
              >
                {category.name}
              </span>
            </Button>
          ))}
        </div>

        {/* Gallery */}
        <ScrollArea className="w-full mt-10 pb-4">
          <div className="flex space-x-4 py-4">
            {galleryImages.map((image) => (
              <Card
                key={image.id}
                className={`flex-shrink-0 ${image.className} rounded-md overflow-hidden`}
              >
                <img
                  src={image.src}
                  className="w-full h-full"
                  alt={`Design example ${image.id}`}
                />
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};
