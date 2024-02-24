"use client";
import { OurVision } from "./OurVision";
export const AboutHero = () => {
  return (
    <section className="home-background">
      <div className="px-[25px] pt-[200px] md:px-0">
        <div className="flex items-center justify-center">
          <h1 className="text-center text-[34px] font-semibold leading-10 tracking-[-0.68px] md:text-[44px] md:leading-[60px]">
            Meet Our Team
          </h1>{" "}
        </div>
        <p className="mt-[32px] text-center font-medium leading-7 tracking-[0.34px] md:mt-[34px] md:text-sm md:leading-7 md:tracking-wide">
          Together, we strive to deliver the best solutions for our clients,
          while also supporting each other’s growth and development.
        </p>
      </div>
      <OurVision />
    </section>
  );
};
