import Image from "next/image";

const CustomersLogoData = [
  {
    src: "/logos/customers/dhruv.svg",
    alt: "dhruv logo",
    height: 80,
    width: 120,
  },
  {
    src: "/logos/customers/fyers.png",
    alt: "fyers logo",
    height: 80,
    width: 120,
  },
  {
    src: "/logos/customers/dhan.svg",
    alt: "dhan logo",
    height: 80,
    width: 120,
  },
  {
    src: "/logos/customers/ving.svg",
    alt: "ving logo",
    height: 80,
    width: 120,
  },
  {
    src: "/logos/customers/kevit.svg",
    alt: "kevit logo",
    height: 80,
    width: 120,
  },
  {
    src: "/logos/customers/astra.svg",
    alt: "astra logo",
    height: 80,
    width: 120,
  },
];

export const Customers = () => {
  return (
    <div>
      <h2 className="text-center font-gotham text-2xl font-medium leading-[33px] tracking-[-0.48px] md:text-[34px] md:leading-[48px] md:tracking-[-0.68px]">
        Trusted by <span className="features-title text-clip-all">teams</span>{" "}
        at
      </h2>
      <div className="mx-auto mt-2 grid w-3/4 max-w-[1000px] grid-cols-2 gap-x-8 gap-y-7 md:mt-20 md:w-1/2 md:grid-cols-3 md:gap-10">
        {CustomersLogoData.map(({ src, alt, width, height }, i) => (
          <div
            className={`mt-10 flex justify-start md:mt-0 md:h-[120px]`}
            key={i}
          >
            <Image
              src={src}
              className="h-[50px] w-full object-contain"
              height={height}
              width={width}
              alt={alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
