"use client";

import { TestimonialCard } from "./TestimonialCard";
import { ICard } from "./TestimonialCarousel";

export const SingleTestimonialCard = ({
  testimonial,
}: {
  testimonial: Omit<Omit<ICard, "getCurrentCardId">, "currentCardId">;
}) => {
  return (
    <TestimonialCard
      getCurrentCardId={() => 0}
      currentCardId={0}
      {...testimonial}
    />
  );
};
