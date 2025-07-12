import React from "react";
import { Button } from "../../../../components/ui/button";

export const BannerSubsection = (): JSX.Element => {
  // Define the frame data for the grid cells
  const frameData = [
    { src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64", alt: "Design" },
    { src: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=64&h=64", alt: "Creative" },
    { src: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=64&h=64", alt: "Brand" },
    { src: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=64&h=64", alt: "Digital" },
    { src: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=64&h=64", alt: "Marketing" },
  ];

  // Create a component for the atom/molecule icon that repeats
  const AtomIcon = () => (
    <div className="relative w-16 h-16">
      <div className="relative h-16">
        <div className="absolute w-[57px] h-[57px] top-0 left-[7px]">
          <div className="absolute w-0.5 h-0.5 top-[30px] left-[25px] bg-[100%_100%]" />
          <div className="absolute w-3 h-3 top-[13px] left-8 bg-[100%_100%]" />
          <div className="absolute w-[52px] h-[52px] top-0 left-[5px] bg-[100%_100%]" />
          <div className="absolute w-1.5 h-1.5 top-[51px] left-[18px] bg-[100%_100%]" />
          <div className="absolute w-1.5 h-1.5 top-[34px] left-0 bg-[100%_100%]" />
          <div className="absolute w-1 h-1 top-[25px] left-7 bg-[100%_100%]" />
        </div>
        <div className="absolute w-[22px] h-[22px] top-[42px] left-0">
          <div className="absolute w-[11px] h-[11px] top-[11px] left-[11px] bg-[100%_100%]" />
          <div className="absolute w-[11px] h-[11px] top-[11px] left-px bg-[100%_100%]" />
          <div className="absolute w-[11px] h-[11px] top-0 left-0 bg-[100%_100%]" />
        </div>
      </div>
    </div>
  );

  // Create a grid cell component
  const GridCell = ({
    children,
    highlight = false,
  }: {
    children: React.ReactNode;
    highlight?: boolean;
  }) => (
    <div
      className={`h-[166px] border border-solid relative self-stretch w-full border-[#a41a1e14] ${
        highlight ? "bg-[#a41a1e12]" : ""
      }`}
    >
      <div className="absolute w-16 h-16 top-[51px] left-[59px]">
        {children}
      </div>
    </div>
  );

  // Create a grid column component
  const GridColumn = ({
    cells,
  }: {
    cells: Array<{
      type: "image" | "atom";
      src?: string;
      alt?: string;
      highlight?: boolean;
    }>;
  }) => (
    <div className="flex flex-col w-[183px] items-start">
      {cells.map((cell, index) => (
        <GridCell key={index} highlight={cell.highlight}>
          {cell.type === "image" ? (
            <img
              className="w-16 h-16"
              alt={cell.alt || "Frame"}
              src={cell.src}
            />
          ) : (
            <AtomIcon />
          )}
        </GridCell>
      ))}
    </div>
  );

  return (
    <section className="relative w-full h-[935px] overflow-hidden">
      <div className="relative w-full h-[1917px]">
        {/* Background pattern grid */}
        <div className="absolute w-full h-[897px] top-[119px] left-0 opacity-65 flex flex-row overflow-hidden">
          {/* Grid columns - simplified with components */}
          <div className="flex flex-row">
            {/* Column 1 */}
            <GridColumn
              cells={[
                { type: "image", src: frameData[0].src },
                { type: "atom" },
                { type: "image", src: frameData[1].src },
                { type: "image", src: frameData[2].src, highlight: true },
                { type: "image", src: frameData[3].src },
              ]}
            />

            {/* Column 2 */}
            <GridColumn
              cells={[
                { type: "image", src: frameData[2].src },
                { type: "atom", highlight: true },
                { type: "image", src: frameData[3].src },
                { type: "atom" },
                { type: "image", src: frameData[2].src },
              ]}
            />

            {/* Column 3 */}
            <GridColumn
              cells={[
                { type: "image", src: frameData[1].src },
                { type: "image", src: frameData[3].src },
                { type: "image", src: frameData[2].src },
                { type: "image", src: frameData[0].src },
                { type: "image", src: frameData[1].src },
              ]}
            />

            {/* Column 4 */}
            <GridColumn
              cells={[
                { type: "image", src: frameData[0].src },
                { type: "atom" },
                { type: "image", src: frameData[1].src },
                { type: "image", src: frameData[2].src },
                { type: "image", src: frameData[3].src },
              ]}
            />

            {/* Column 5 */}
            <GridColumn
              cells={[
                { type: "image", src: frameData[1].src },
                { type: "image", src: frameData[0].src },
                { type: "image", src: frameData[3].src },
                { type: "atom" },
                { type: "image", src: frameData[2].src },
              ]}
            />

            {/* Column 6 */}
            <GridColumn
              cells={[
                { type: "atom" },
                { type: "image", src: frameData[3].src },
                { type: "image", src: frameData[2].src },
                { type: "image", src: frameData[0].src },
                { type: "image", src: frameData[1].src },
              ]}
            />

            {/* Column 7 */}
            <GridColumn
              cells={[
                { type: "image", src: frameData[0].src, highlight: true },
                { type: "atom" },
                { type: "image", src: frameData[1].src },
                { type: "image", src: frameData[2].src },
                { type: "image", src: frameData[3].src },
              ]}
            />

            {/* Column 8 */}
            <GridColumn
              cells={[
                { type: "image", src: frameData[1].src },
                { type: "image", src: frameData[0].src },
                { type: "image", src: frameData[3].src },
                { type: "atom" },
                { type: "image", src: frameData[2].src },
              ]}
            />

            {/* Column 9 */}
            <GridColumn
              cells={[
                { type: "atom" },
                { type: "image", src: frameData[0].src },
                { type: "image", src: frameData[2].src },
                { type: "image", src: frameData[4].src, highlight: true },
                { type: "image", src: frameData[1].src },
              ]}
            />

            {/* Column 10 */}
            <GridColumn
              cells={[
                { type: "image", src: frameData[0].src },
                { type: "atom" },
                { type: "image", src: frameData[1].src },
                { type: "image", src: frameData[2].src },
                { type: "image", src: frameData[3].src },
              ]}
            />
          </div>
        </div>

        {/* White glow effect */}
        <div className="absolute w-full max-w-[1816px] h-[471px] top-[502px] left-0 right-0 mx-auto bg-white rounded-[908px/235.5px] blur-[140px]" />

        {/* Main content container */}
        <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center">
          {/* Circular decorative elements */}
          <div className="relative w-full max-w-[1426px] h-[1653px]">
            <div className="absolute w-[1214px] h-[1214px] top-[295px] left-1/2 -translate-x-1/2 rounded-[607.07px] border-[0.98px] border-solid border-[#a41a1e29]" />
            <div className="absolute w-[1091px] h-[1214px] top-[388px] left-1/2 -translate-x-1/2 rounded-[545.33px/607.07px] border-[0.98px] border-dashed border-[#a41a1e29]" />
            <div className="absolute w-[1014px] h-[1214px] top-[439px] left-1/2 -translate-x-1/2 rounded-[507px/607px] border-[0.98px] border-dashed border-[#a41a1e29]" />
            <div className="absolute w-[1154px] h-[1214px] top-[340px] left-1/2 -translate-x-1/2 rounded-[577px/607px] border-[0.98px] border-dashed border-[#a41a1e29]" />

            {/* Decorative dots */}
            <div className="absolute w-[22px] h-[22px] top-[458px] left-[406px] bg-[#a41a1e38] rounded-[10.78px]" />
            <div className="absolute w-[22px] h-[22px] top-[553px] left-[1192px] bg-[#a41a1e38] rounded-[10.78px]" />
            <div className="absolute w-[15px] h-[15px] top-[472px] left-[251px] bg-[#a41a1e59] rounded-[7.35px]" />
            <div className="absolute w-[15px] h-[15px] top-[509px] left-[1019px] bg-[#a41a1e59] rounded-[7.35px]" />
            <div className="absolute w-[15px] h-[15px] top-[432px] left-[629px] bg-[#a41a1e59] rounded-[7.35px]" />
            <div className="absolute w-[22px] h-[22px] top-[295px] left-[792px] bg-[#a41a1e38] rounded-[10.78px]" />

            {/* Decorative lines */}
            <div className="absolute w-[595px] h-[536px] top-[149px] left-[830px] opacity-20">
              <svg viewBox="0 0 595 536" className="w-full h-full">
                <path d="M0,268 Q297.5,0 595,268" stroke="#a41a1e" strokeWidth="2" fill="none" opacity="0.3"/>
              </svg>
            </div>
            <div className="absolute w-[437px] h-[470px] top-[147px] left-[725px] opacity-20">
              <svg viewBox="0 0 437 470" className="w-full h-full">
                <path d="M0,235 Q218.5,0 437,235" stroke="#a41a1e" strokeWidth="2" fill="none" opacity="0.3"/>
              </svg>
            </div>

            {/* Decorative components */}
            <div className="absolute w-28 h-[123px] top-[190px] left-[37px] bg-gradient-to-br from-[#a41a1e] to-[#01182f] rounded-lg opacity-60"></div>
            <div className="absolute w-28 h-[115px] top-[72px] left-[1311px] bg-gradient-to-br from-[#01182f] to-[#a41a1e] rounded-lg opacity-60"></div>
            <div className="absolute w-[114px] h-[117px] top-[340px] left-[1265px] bg-gradient-to-br from-[#a41a1e] to-[#01182f] rounded-lg opacity-60"></div>
            <div className="absolute w-[97px] h-[98px] top-0 left-0 bg-gradient-to-br from-[#01182f] to-[#a41a1e] rounded-lg opacity-60"></div>
            <div className="absolute w-[114px] h-[119px] top-[186px] left-[270px] bg-gradient-to-br from-[#a41a1e] to-[#01182f] rounded-lg opacity-60"></div>
            <div className="absolute w-[97px] h-[100px] top-[164px] left-[1116px] bg-gradient-to-br from-[#01182f] to-[#a41a1e] rounded-lg opacity-60"></div>

            {/* Gradient glow effect */}
            <div className="absolute w-[724px] h-[161px] top-[516px] left-1/2 -translate-x-1/2 rounded-[362px/80.5px] blur-[100px] bg-[linear-gradient(180deg,rgba(164,26,30,0.05)_36%,rgba(164,26,30,0.05)_49%,rgba(164,26,30,0.5)_86%)]" />
          </div>

          {/* Main hero content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
            <h1 className="text-6xl md:text-7xl font-bold text-[#012e3e] mb-6">
              <span className="block">Creative</span>
              <span className="block text-[#a41a1e]">Design</span>
              <span className="block">Thinking</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Transforming Ideas into Visual Masterpieces with Innovative Design Solutions
            </p>
          </div>

          {/* Call to action buttons */}
          <div className="absolute w-auto h-[67px] top-[422px] left-1/2 -translate-x-1/2 flex items-center gap-6">
            <Button className="px-[29.4px] py-[16.66px] bg-[#012e3e] rounded-[68.6px] font-['Poppins',Helvetica] font-semibold text-white text-[19.6px] leading-[33.3px] backdrop-blur-[9.8px]">
              Get service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
