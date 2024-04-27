import React from "react";

import testimonial from "@/data/Testimonial.json";
import { SingleTestimonialCard } from "@/components/modules/SingleTestimonialCard";
export const FyersTestimonialCard = () => {
  return (
    <div className="mt-[160px] flex flex-col items-center justify-center gap-10">
      <h3 className="font-medium leading-6 text-opacity-85 md:text-[40px] md:font-bold md:leading-[44px]">
        Testimonial
      </h3>
      <SingleTestimonialCard testimonial={testimonial.data[0]} />
    </div>
  );
};
