"use client";
import { Quotes } from "@/components/elements/icons/Quotes";
import { TestimonialCard } from "@/components/modules/TestimonialCard";
import { TestimonialCarousel } from "@/components/modules/TestimonialCarousel";
import { TestimonialNavigator } from "@/components/modules/TestimonialNavigator";
import testimonialData from "@/data/Testimonial.json";
import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Testimonial = () => {
  const [currentCardId, setCurrentCardId] = useState(0);
  const [goToSlide, setGoToSlide] = useState(0);

  const getCurrentCardId = useCallback(() => {
    return goToSlide;
  }, [goToSlide]);

  const TestimonialCards = testimonialData.data.map((card) => {
    return {
      key: uuidv4(),
      content: (
        // @ts-ignore
        <TestimonialCard
          currentCardId={goToSlide}
          getCurrentCardId={getCurrentCardId}
          {...card}
          key={uuidv4()}
        />
      ),
    };
  });

  const onPrevious = () => {
    if (goToSlide > 0) {
      setGoToSlide(goToSlide - 1);
    } else setGoToSlide(TestimonialCards.length - 1);
  };

  const onNext = () => {
    if (goToSlide < TestimonialCards.length - 1) {
      setGoToSlide(goToSlide + 1);
    } else setGoToSlide(0);
  };

  return (
    <div className="w-container relative">
      <div className="">
        <h3 className="mx-auto w-5/6 text-center font-gotham text-2xl font-medium leading-8 tracking-tighter md:text-4xl md:leading-[3rem] md:tracking-tight">
          Ready for the real world –{" "}
          <span className="features-title text-clip-all">
            Hear from our customers
          </span>
        </h3>
      </div>

      <div className=" mx-auto mt-14 h-[350px] w-[290px] md:mt-36 md:w-[80%] md:max-w-[900px]">
        <TestimonialCarousel
          cards={TestimonialCards}
          setCurrentCardId={setCurrentCardId}
          offset={2}
          showArrows={false}
          width="100%"
          height="100%"
          margin="0 auto"
          goToSlide={goToSlide}
          setGoToSlide={setGoToSlide}
        />
      </div>

      <div className="mt-10 md:mt-2">
        <TestimonialNavigator
          numberOfSlides={TestimonialCards.length}
          currentSlide={goToSlide}
          onNext={onNext}
          onPrevious={onPrevious}
          goToSlide={setGoToSlide}
        />
      </div>
    </div>
  );
};
{
  /* <div className="absolute  left-[390px] top-[50%] z-40">
<Quotes />
</div> */
}
