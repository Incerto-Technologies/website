import React from "react";
import { Footer } from "@/components/modules/Footer";
import { ContactRedirectBtn } from "@/components/elements/ContactRedirectBtn";
import { FooterBackground } from "@/components/templates/Home/FooterBackground";

export const BrokerageFooter = (props: {}) => {
  return (
    <div className="mt-[150px] md:mt-[200px]">
      <FooterBackground className="">
        <div className="pt-[150px] md:pt-[126px]">
          <h2 className="text-center text-[44px] font-medium leading-[52px] tracking-[-0.88px] md:text-[64px] md:leading-[80px] md:tracking-[-1.28px]">
            Get in touch to
            <br />
            <span className="text-accent-light">learn more</span>
          </h2>
          <ContactRedirectBtn />
        </div>
        <Footer isBackground />
      </FooterBackground>
    </div>
  );
};
