import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";

export const OverlapGroupWrapperSubsection = (): JSX.Element => {
  // Contact information data
  const contactCards = [
    {
      title: "Office",
      content: "1404-1405, Rupa Solitaire",
     icon: "📍",
      iconClass: "w-[15px] h-6",
    },
    {
      title: "Phone",
      content: "+91 2368712973",
     icon: "📞",
      iconClass: "w-6 h-6",
    },
    {
      title: "Working hours",
      content: "Mon - Fri , 9:30 am to 6:30 pm",
     icon: "🕒",
      iconClass: "w-6 h-6",
    },
    {
      title: "Email",
      content: "sales@gbim.com",
     icon: "✉️",
      iconClass: "w-6 h-6",
    },
  ];

  // Form fields data
  const formFields = [
    { name: "Name", type: "text", halfWidth: true },
    { name: "Email", type: "email", halfWidth: true },
    { name: "Phone number", type: "tel", halfWidth: true },
    { name: "Website", type: "url", halfWidth: true },
  ];

  // Select fields data
  const selectFields = [
    { name: "Service", halfWidth: true },
    { name: "Marketing budget", halfWidth: true },
    { name: "How did you hear about us?", halfWidth: false },
  ];

  return (
    <section className="relative w-full py-16 bg-[#121212] overflow-hidden">
      <div className="container mx-auto relative">
        {/* Background decorative elements */}
        <div className="absolute w-[1160px] h-[1160px] -top-[719px] -left-[313px] rotate-[161.59deg] opacity-15">
          <div className="relative h-[1160px] top-2 left-[25px] rounded-[580.15px]">
            <div className="absolute w-[1031px] h-[1031px] top-[47px] left-[55px] rounded-[515.46px] border-[1.04px] border-dashed border-white" />
            <div className="absolute w-[1160px] h-[1160px] top-0 left-0 rounded-[580.15px] border-[1.16px] border-dashed border-white" />
          </div>
        </div>

        <div className="absolute w-[555px] h-[555px] -top-[67px] left-[376px] bg-[#b72f29b2] rounded-[277.5px] blur-[152px]" />

        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left side - Contact information */}
          <div className="flex flex-col space-y-8 lg:w-1/2">
            <h2 className="text-[64px] font-bold [font-family:'Open_Sans',Helvetica] text-transparent bg-[linear-gradient(137deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.11)_100%)] bg-clip-text tracking-[-1.92px] leading-[67px]">
              Ready to Grow Your Brand?
            </h2>

            <p className="text-xl text-white [font-family:'Open_Sans',Helvetica] leading-[30px]">
              Partner with GBIM – your trusted healthcare marketing agency.
              <br />
              Let&apos;s Connect. Let&apos;s Grow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactCards.map((card, index) => (
                <Card
                  key={index}
                  className="bg-[#ffffff08] border-none rounded-[20px] overflow-hidden"
                >
                  <CardContent className="p-0 flex items-center">
                    <div className="w-14 h-14 bg-[#ffffff21] rounded-[20px] flex items-center justify-center m-[17px]">
                      <span className="text-2xl">{card.icon}</span>
                    </div>
                    <div className="py-3.5">
                      <div className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-xl leading-[30px]">
                        {card.title}
                      </div>
                      <div className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-base leading-[30px]">
                        {card.content}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex flex-col space-y-6">
                <div className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-xl leading-[30px]">
                  Social media :
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[100%_100%] flex items-center justify-center">
                    <span className="text-2xl text-white">📱</span>
                  </div>
                  <div className="w-12 h-12 bg-[100%_100%] flex items-center justify-center">
                    <span className="text-2xl text-white">💼</span>
                  </div>
                </div>
                <div className="w-full h-px bg-white/20"></div>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="lg:w-1/2">
            <div className="rounded-[36.67px] backdrop-blur-[80px] bg-[linear-gradient(226deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-8 md:p-[34.84px]">
              <h3 className="[font-family:'Poppins',Helvetica] font-medium text-white text-[29.3px] text-center leading-[40.3px] mb-[38.51px]">
                Leave us a message
              </h3>

              <form className="flex flex-col space-y-[25.67px]">
                {/* Name and Email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[25.67px]">
                  <div className="space-y-[1.83px]">
                    <label className="[font-family:'Poppins',Helvetica] font-normal text-white text-[14.7px] leading-[33.7px]">
                      Name
                    </label>
                    <Input className="h-[44.01px] rounded-[4.58px] border-[0.92px] border-[#ffffff66] bg-transparent" />
                  </div>
                  <div className="space-y-[1.83px]">
                    <label className="[font-family:'Poppins',Helvetica] font-normal text-white text-[14.7px] leading-[33.7px]">
                      Email
                    </label>
                    <Input className="h-[44.01px] rounded-[4.58px] border-[0.92px] border-[#ffffff66] bg-transparent" />
                  </div>
                </div>

                {/* Phone and Website row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[25.67px]">
                  <div className="space-y-[1.83px]">
                    <label className="[font-family:'Poppins',Helvetica] font-normal text-white text-[14.7px] leading-[33.7px]">
                      Phone number
                    </label>
                    <Input className="h-[44.01px] rounded-[4.58px] border-[0.92px] border-[#ffffff66] bg-transparent" />
                  </div>
                  <div className="space-y-[1.83px]">
                    <label className="[font-family:'Poppins',Helvetica] font-normal text-white text-[14.7px] leading-[33.7px]">
                      Website
                    </label>
                    <Input className="h-[44.01px] rounded-[4.58px] border-[0.92px] border-[#ffffff66] bg-transparent" />
                  </div>
                </div>

                {/* Service and Budget row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[25.67px]">
                  <div className="space-y-[1.83px]">
                    <label className="[font-family:'Poppins',Helvetica] font-normal text-white text-[14.7px] leading-[33.7px]">
                      Service
                    </label>
                    <Select>
                      <SelectTrigger className="h-[44.01px] rounded-[4.58px] border-[0.92px] border-[#ffffff66] bg-transparent [font-family:'Poppins',Helvetica] font-normal text-[#ffffff80] text-[14.7px]">
                        <SelectValue placeholder="select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="service1">Service 1</SelectItem>
                        <SelectItem value="service2">Service 2</SelectItem>
                        <SelectItem value="service3">Service 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-[1.83px]">
                    <label className="[font-family:'Poppins',Helvetica] font-normal text-white text-[14.7px] leading-[33.7px]">
                      Marketing budget
                    </label>
                    <Select>
                      <SelectTrigger className="h-[44.01px] rounded-[4.58px] border-[0.92px] border-[#ffffff66] bg-transparent [font-family:'Poppins',Helvetica] font-normal text-[#ffffff80] text-[14.7px]">
                        <SelectValue placeholder="select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="budget1">$1,000 - $5,000</SelectItem>
                        <SelectItem value="budget2">
                          $5,000 - $10,000
                        </SelectItem>
                        <SelectItem value="budget3">$10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* How did you hear about us row */}
                <div className="space-y-[1.83px]">
                  <label className="[font-family:'Poppins',Helvetica] font-normal text-white text-[14.7px] leading-[33.7px]">
                    How did you hear about us?
                  </label>
                  <Select>
                    <SelectTrigger className="h-[44.01px] rounded-[4.58px] border-[0.92px] border-[#ffffff66] bg-transparent [font-family:'Poppins',Helvetica] font-normal text-[#ffffff80] text-[14.7px]">
                      <SelectValue placeholder="select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="source1">Search Engine</SelectItem>
                      <SelectItem value="source2">Social Media</SelectItem>
                      <SelectItem value="source3">Referral</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message textarea */}
                <div className="space-y-[1.83px]">
                  <label className="[font-family:'Poppins',Helvetica] font-normal text-white text-[14.7px] leading-[33.7px]">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us more about your project"
                    className="h-[134.78px] rounded-[4.58px] border-[0.92px] border-[#ffffff66] bg-transparent [font-family:'Poppins',Helvetica] font-normal text-[#ffffff80] text-[14.7px]"
                  />
                </div>

                {/* Submit button */}
                <Button className="h-[58.68px] bg-white rounded-[160px] [font-family:'Poppins',Helvetica] font-medium text-[#001431] text-[20.2px] leading-[33.7px]">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
