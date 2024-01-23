import Image from "next/image";
import { useInView } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  id: number;
  setCurrentViewSlide: Dispatch<SetStateAction<number>>;
};

export const WhyUsCard = ({
  title,
  description,
  image,
  id,
  setCurrentViewSlide,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) {
      setCurrentViewSlide(id - 1);
    } else {
      setCurrentViewSlide(id);
    }
  }, [isInView, setCurrentViewSlide, id]);

  return (
    <div
      className="top-sticky sticky mx-auto mt-[62px] flex h-full w-full flex-col-reverse gap-6 rounded-3xl bg-black p-4 md:mt-[50px] md:flex-row md:items-center md:justify-between md:gap-0 md:bg-[#121815] md:px-11 md:py-20"
      ref={ref}
    >
      <div className="w-full md:w-1/2">
        <h1 className="font-gotham font-medium leading-6 text-secondary md:text-2xl md:font-bold md:leading-9">
          {title}
        </h1>
        <p className="mt-3 leading-5 tracking-wide text-[#919191] md:mt-8 md:w-4/5 md:font-medium md:leading-6 md:text-[#dedede]">
          {description}
        </p>
      </div>
      <div className="flex w-full justify-end md:w-1/2">
        <Image
          width={1080}
          className="h-full w-full rounded-3xl object-contain"
          height={1080}
          loading="lazy"
          src={image}
          alt="shopping"
        />
      </div>
    </div>
  );
};
