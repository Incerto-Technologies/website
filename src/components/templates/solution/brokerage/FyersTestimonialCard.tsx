import React from "react";

import testimonial from "@/data/Testimonial.json";
import { SingleTestimonialCard } from "@/components/modules/SingleTestimonialCard";
export const FyersTestimonialCard = () => {
  return (
    <div className="mt-[160px] flex flex-col items-center justify-center gap-10">
      <h3 className="mx-auto text-center font-gotham text-[24px] font-medium leading-[33px] tracking-[-0.48px] md:text-[34px] md:leading-[48px] md:tracking-[-0.68px]">
        Testimonial
      </h3>
      <SingleTestimonialCard testimonial={testimonial.data[0]} />
    </div>
  );
};
