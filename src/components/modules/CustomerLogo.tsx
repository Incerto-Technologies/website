import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export const CustomerLogo = ({ src, alt }: Props) => {
  return (
    <div className="mx-[35px] h-[80px] w-[350px] opacity-70 md:mx-[10px]">
      <Image
        src={src}
        alt={alt}
        width={"300"}
        height={"1080"}
        loading="lazy"
        className="h-full object-contain object-center"
      />
    </div>
  );
};
