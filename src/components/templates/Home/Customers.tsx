import Image from "next/image";

const CustomersLogoData = [
  {
    src: "/logos/customers/dhruv.svg",
    alt: "dhruv logo",
    height: 80,
    width: 120
  },
  {
    src: "/logos/customers/fyers.svg",
    alt: "fyers logo",
    height: 80,
    width: 120
  },
  {
    src: "/logos/customers/dhan.svg",
    alt: "dhan logo",
    height: 80,
    width: 120
  },
  {
    src: "/logos/customers/ving.svg",
    alt: "ving logo",
    height: 80,
    width: 120
  },
  {
    src: "/logos/customers/kevit.svg",
    alt: "kevit logo",
    height: 80,
    width: 120
  },
  {
    src: "/logos/customers/astra.svg",
    alt: "astra logo",
    height: 80,
    width: 120
  },
];

export const Customers = () => {
  return (
    <div>
      <h2 className="text-center font-gotham text-2xl font-medium leading-[33px] tracking-[-0.48px] md:text-[34px] md:leading-[48px] md:tracking-[-0.68px]">
        Trusted by{" "}
        <span className="features-title text-clip-all">
          teams
        </span>
        {" "}
        at
      </h2>
      <div className="grid grid-cols-2 max-w-[1000px] gap-y-7 gap-x-8 md:gap-10 w-3/4 md:w-1/2 mx-auto md:grid-cols-3 mt-2 md:mt-20">
        {CustomersLogoData.map(({ src, alt, width, height }, i) => (
          <div className={`md:h-[120px] mt-10 md:mt-0 flex justify-start`} key={i}>
            <Image src={src} className="h-[50px] w-full object-contain" height={height} width={width} alt={alt} />
          </div >
        ))}

      </div >
    </div>
  );
};
