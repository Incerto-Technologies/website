"use client";
import { TextAnimation } from "@/components/elements/TextAnimation";
import { OurVision } from "./OurVision";
import { motion } from "framer-motion";
export const AboutHero = () => {
  return (
    <section className="home-background">
      <div className="px-[25px] pt-[200px] md:px-0">
        <div className="flex items-center justify-center">
          <h1 className="relative text-center font-gotham text-[30px] font-[900]  leading-[40px] tracking-[-1.2px] md:text-[44px] md:leading-[50px] md:tracking-tightest">
            <TextAnimation text={"Meet Our"} once className="" el="span" />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, ease: "easeInOut" }}
              className="animate-gradient-text relative bottom-[8px]"
            >
              Team{" "}
            </motion.span>
          </h1>
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
