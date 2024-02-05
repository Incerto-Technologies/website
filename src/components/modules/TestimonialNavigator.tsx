import { Dispatch, SetStateAction } from "react";
import { LeftArrow } from "../elements/icons/LeftArrow";
import { Button } from "../elements/Button";
import { RightArrow } from "../elements/icons/RightArrow";

type Props = {
  numberOfSlides: number;
  currentSlide: number;
  onNext: () => void;
  onPrevious: () => void;
  goToSlide: Dispatch<SetStateAction<number>>;
};
export const TestimonialNavigator = ({
  numberOfSlides,
  currentSlide,
  onNext,
  onPrevious,
  goToSlide,
}: Props) => {
  return (
    <section className="flex items-center justify-center gap-12">
      <Button onClick={onPrevious} className="bg-primary focus:outline-none">
        <LeftArrow />
      </Button>

      <div className="">
        {Array(numberOfSlides)
          .fill(0)
          .map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`${
                currentSlide === i ? "bg-[#0F9]" : "bg-[#414141]"
              } mx-1 h-2 w-2 rounded-full`}
            ></button>
          ))}
      </div>
      <Button onClick={onNext} className="bg-primary focus:outline-none">
        <RightArrow />
      </Button>
    </section>
  );
};
