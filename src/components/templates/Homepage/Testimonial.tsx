"use client";
import { TestimonialCard } from "@/components/modules/TestimonialCard";
import { TestimonialCarousel } from "@/components/modules/TestimonialCarousel";
import { TestimonialNavigator } from "@/components/modules/TestimonialNavigator";
import testimonialData from "@/data/Testimonial.json";
import { useCallback, useState } from "react";
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
    <div className="w-container relative mt-[100px]">
      <div className="">
        <h3 className="mx-auto w-5/6 text-center font-gotham text-2xl font-medium leading-8 tracking-tighter md:text-[34px] md:leading-[3rem] md:tracking-[-0.68]">
          Ready for the real world –{" "}
          <span className="features-title text-clip-all">
            Hear from our customers
          </span>
        </h3>
      </div>

      <div className="mx-auto mt-14 h-[600px] w-[300px] md:h-[400px] md:w-[500px] lg:mt-36 lg:w-[80%] lg:max-w-[900px]">
        <TestimonialCarousel
          cards={TestimonialCards}
          setCurrentCardId={setCurrentCardId}
          offset={1}
          showArrows={false}
          width="100%"
          height="100%"
          margin="0 auto"
          goToSlide={goToSlide}
          setGoToSlide={setGoToSlide}
        />
      </div>

      <div className="mt-8 md:mt-2">
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
