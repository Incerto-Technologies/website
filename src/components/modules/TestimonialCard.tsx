import { Quotes } from "../elements/icons/Quotes";

type Props = {
  name: string;
  message: string;
  companyLogo: string;
  position: string;
  id: number;
  profile: string;
  currentTestimonialId: number;
  handleNext: () => void;
  handlePrev: () => void;
};
export const TestimonialCard = ({
  name,
  message,
  companyLogo,
  position,
  profile,
  id,
  currentTestimonialId,
  handleNext,
  handlePrev,
}: Props) => {
  return (
    <div
      className={`blur-card z-30 aspect-[3/4] w-[650px] rounded-3xl bg-[121815] px-16  py-8`}
    >
      <div
        className={id === currentTestimonialId ? "relative block" : "hidden"}
      >
        <div className="absolute left-[-54px] top-[-20px] z-20">
          <Quotes />
        </div>
      </div>

      <div className="">
        <p className="leading-7">{message}</p>
      </div>
    </div>
  );
};
