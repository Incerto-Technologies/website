"use client";
import { TestimonialCard } from "@/components/modules/TestimonialCard";
import testimonial from "@/data/Testimonial.json";
import { useCallback, useState } from "react";

export const Testimonial = () => {
  const [currentTestimonialId, setCurrentTestimonialId] = useState(1);

  const handleNext = useCallback(() => {
    if (currentTestimonialId === testimonial.data.length - 1) {
      setCurrentTestimonialId(0);
    } else {
      setCurrentTestimonialId(currentTestimonialId + 1);
    }
  }, [currentTestimonialId]);

  const handlePrev = useCallback(() => {
    if (currentTestimonialId === 0) {
      setCurrentTestimonialId(testimonial.data.length - 1);
    } else {
      setCurrentTestimonialId(currentTestimonialId - 1);
    }
  }, [currentTestimonialId]);

  return (
    <section className="w-container mt-52">
      <div>
        <h3 className="mx-auto w-4/5 text-center font-gotham text-2xl font-medium leading-8 tracking-tighter md:text-[34px] md:leading-[48px] md:tracking-[-0.68px]">
          <span>Hear how Incerto has Transformed Businesses by Turning </span>{" "}
          <span className="features-title text-clip-all">
            Challenges into Triumphs
          </span>
        </h3>
      </div>
      <div className="relative mx-auto mb-60 mt-24 flex">
        {testimonial.data.map((item, index) => (
          <TestimonialCard
            key={index}
            {...item}
            currentTestimonialId={currentTestimonialId}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        ))}
      </div>
    </section>
  );
 
};
