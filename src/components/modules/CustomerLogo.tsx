import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export const CustomerLogo = ({ src, alt }: Props) => {
  return (
    <div className="mx-[35px] h-[50px] opacity-70 md:mx-[80px]">
      <Image
        src={src}
        alt={alt}
        width={"100"}
        height={"48"}
        loading="lazy"
        className="h-full object-contain object-center"
      />
    </div>
  );
};
