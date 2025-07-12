import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ComponentSubsection = (): JSX.Element => {
  // Category data for the filter buttons
  const categories = [
    { name: "E-Commerce", active: true },
    { name: "Education", active: false },
    { name: "Finance", active: false },
    { name: "Health", active: false },
    { name: "Manufacturing", active: false },
    { name: "Real Estate", active: false },
    { name: "Technology", active: false },
  ];

  // Testimonial card data
  const testimonials = [
    {
      size: "large", // Main card
      logoSrc: "", // Replace with actual image path
      clientName: "CLIENT FULL NAME",
      designation: "DESIGNATION",
      testimonial:
        "Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centurie",
      avatarSrc: "", // Replace with actual image path
    },
    {
      size: "medium", // Medium sized card
      logoSrc: "", // Replace with actual image path
      clientName: "CLIENT FULL NAME",
      designation: "DESIGNATION",
      testimonial:
        "Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centurie",
      avatarSrc: "", // Replace with actual image path
    },
    {
      size: "small", // Small card
      logoSrc: "", // Replace with actual image path
      clientName: "CLIENT FULL NAME",
      designation: "DESIGNATION",
      testimonial:
        "Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centurie",
      avatarSrc: "", // Replace with actual image path
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-12 justify-center">
        {categories.map((category, index) => (
          <Button
            key={`category-${index}`}
            variant={category.active ? "default" : "outline"}
            className={`rounded-full px-12 py-5 text-xl ${
              category.active
                ? "bg-[#121212] text-white"
                : "border-[#c4c4c4] text-[#8b8b8b]"
            }`}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Testimonial Cards Container */}
      <div className="relative flex justify-center items-center">
        <div className="relative w-full max-w-5xl">
          {/* Main Large Card */}
          <Card className="relative mx-auto w-[324px] h-[439px] bg-white rounded-[32px] border-[0.5px] border-[#00000033] shadow-md">
            <CardContent className="p-0 h-full relative">
              {/* Logo Badge */}
              <Badge className="absolute top-0 left-5 w-[287px] h-[63px] rounded-[22px] border-[0.66px] border-[#a41a1e3d] bg-white shadow-sm flex items-center justify-center">
                <div className="w-[172px] h-[49px] bg-gradient-to-r from-[#a41a1e] to-[#01182f] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CLIENT LOGO</span>
                </div>
              </Badge>

              {/* Avatar */}
              <div className="absolute top-[79px] left-5 w-[98px] h-[98px] rounded-full border-[1px] border-[#a41a1e7a] flex items-center justify-center">
                <Avatar className="w-[86px] h-[86px]">
                  <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=86&h=86" alt="Client" />
                  <AvatarFallback className="bg-[#a41a1e] text-white">CN</AvatarFallback>
                </Avatar>
              </div>

              {/* Client Info */}
              <div className="absolute top-[99px] left-[130px]">
                <h3 className="font-medium text-[16px] tracking-[1.9px] leading-[36px] [font-family:'Poppins',Helvetica]">
                  CLIENT FULL NAME
                </h3>
                <p className="text-[13px] tracking-[2.5px] leading-[36px] [font-family:'Poppins',Helvetica]">
                  DESIGNATION
                </p>
              </div>

              {/* Testimonial Text */}
              <p className="absolute top-[184px] left-[37px] w-[267px] text-sm leading-[25px] [font-family:'Poppins',Helvetica] font-light">
                Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
                Since The 1500s, When An Unknown Printer Took A Galley Of Type
                And Scrambled It To Make A Type Specimen Book. It Has Survived
                Not Only Five Centurie
              </p>

              {/* Quote Icon */}
              <div className="absolute bottom-[8px] right-[25px] w-[50px] h-[45px] flex items-center justify-center">
                <svg viewBox="0 0 50 45" className="w-full h-full text-[#a41a1e] opacity-20">
                  <path fill="currentColor" d="M0 25h10v20H0V25zm5-10c0-5.5 4.5-10 10-10v5c-2.8 0-5 2.2-5 5h5v10H5V15zm20 10h10v20H20V25zm5-10c0-5.5 4.5-10 10-10v5c-2.8 0-5 2.2-5 5h5v10H25V15z"/>
                </svg>
              </div>
            </CardContent>
          </Card>

          {/* Medium Card */}
          <Card className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[270px] h-[366px] bg-white rounded-[27px] border-[0.41px] border-[#00000033] shadow-md">
            <CardContent className="p-0 h-full relative">
              {/* Logo Badge */}
              <Badge className="absolute top-0 left-[17px] w-[239px] h-[53px] rounded-[19px] border-[0.55px] border-[#a41a1e3d] bg-white shadow-sm flex items-center justify-center">
                <div className="w-[130px] h-[37px] bg-gradient-to-r from-[#a41a1e] to-[#01182f] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CLIENT LOGO</span>
                </div>
              </Badge>

              {/* Avatar */}
              <div className="absolute top-[66px] left-[17px] w-[82px] h-[82px] rounded-full border-[0.82px] border-[#a41a1e7a] flex items-center justify-center">
                <Avatar className="w-[72px] h-[72px]">
                  <AvatarImage src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=72&h=72" alt="Client" />
                  <AvatarFallback className="bg-[#a41a1e] text-white">CN</AvatarFallback>
                </Avatar>
              </div>

              {/* Client Info */}
              <div className="absolute top-[82px] left-[109px]">
                <h3 className="font-medium text-[13px] tracking-[1.6px] leading-[30px] [font-family:'Poppins',Helvetica]">
                  CLIENT FULL NAME
                </h3>
                <p className="text-[11px] tracking-[2.1px] leading-[30px] [font-family:'Poppins',Helvetica]">
                  DESIGNATION
                </p>
              </div>

              {/* Testimonial Text */}
              <p className="absolute top-[149px] left-[36px] w-[212px] text-[11px] leading-[21px] [font-family:'Poppins',Helvetica] font-light">
                Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
                Since The 1500s, When An Unknown Printer Took A Galley Of Type
                And Scrambled It To Make A Type Specimen Book. It Has Survived
                Not Only Five Centurie
              </p>

              {/* Quote Icon */}
              <div className="absolute bottom-[7px] right-[21px] w-[42px] h-[37px] flex items-center justify-center">
                <svg viewBox="0 0 42 37" className="w-full h-full text-[#a41a1e] opacity-20">
                  <path fill="currentColor" d="M0 20h8v16H0V20zm4-8c0-4.4 3.6-8 8-8v4c-2.2 0-4 1.8-4 4h4v8H4V12zm16 8h8v16h-8V20zm4-8c0-4.4 3.6-8 8-8v4c-2.2 0-4 1.8-4 4h4v8h-8V12z"/>
                </svg>
              </div>
            </CardContent>
          </Card>

          {/* Small Card */}
          <Card className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[245px] h-[332px] bg-white rounded-[25px] border-[0.37px] border-[#00000033] shadow-sm">
            <CardContent className="p-0 h-full relative">
              {/* Logo Badge */}
              <Badge className="absolute top-0 left-[15px] w-[217px] h-[48px] rounded-[17px] border-[0.5px] border-[#a41a1e3d] bg-white shadow-sm flex items-center justify-center">
                <div className="w-[126px] h-[36px] bg-gradient-to-r from-[#a41a1e] to-[#01182f] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">CLIENT LOGO</span>
                </div>
              </Badge>

              {/* Avatar */}
              <div className="absolute top-[60px] left-[15px] w-[74px] h-[74px] rounded-full border-[0.74px] border-[#a41a1e7a] flex items-center justify-center">
                <Avatar className="w-[65px] h-[65px]">
                  <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=65&h=65" alt="Client" />
                  <AvatarFallback className="bg-[#a41a1e] text-white">CN</AvatarFallback>
                </Avatar>
              </div>

              {/* Client Info */}
              <div className="absolute top-[75px] left-[99px]">
                <h3 className="font-medium text-xs tracking-[1.44px] leading-[27px] [font-family:'Poppins',Helvetica]">
                  CLIENT FULL NAME
                </h3>
                <p className="text-[10px] tracking-[1.9px] leading-[27px] [font-family:'Poppins',Helvetica]">
                  DESIGNATION
                </p>
              </div>

              {/* Testimonial Text */}
              <p className="absolute top-[137px] left-[40px] w-[180px] text-[8px] leading-5 [font-family:'Poppins',Helvetica] font-light">
                Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
                Since The 1500s, When An Unknown Printer Took A Galley Of Type
                And Scrambled It To Make A Type Specimen Book. It Has Survived
                Not Only Five Centurie
              </p>

              {/* Quote Icon */}
              <div className="absolute bottom-[5px] right-[19px] w-[38px] h-[34px] flex items-center justify-center">
                <svg viewBox="0 0 38 34" className="w-full h-full text-[#a41a1e] opacity-20">
                  <path fill="currentColor" d="M0 18h7v14H0V18zm3.5-7c0-3.9 3.1-7 7-7v3.5c-1.9 0-3.5 1.6-3.5 3.5h3.5v7H3.5V11zm14 7h7v14h-7V18zm3.5-7c0-3.9 3.1-7 7-7v3.5c-1.9 0-3.5 1.6-3.5 3.5h3.5v7H17.5V11z"/>
                </svg>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
