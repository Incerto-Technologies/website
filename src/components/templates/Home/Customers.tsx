import Image from "next/image";

const CustomersLogoData = [
  {
    src: "/logos/customers/dhruv.svg",
    alt: "dhruv logo",
    height: 80,
    width: 120
  },
  {
    src: "/logos/customers/fyers.png",
    alt: "fyers logo",
    height: 80,
    width: 120
  },
  {
    src: "/logos/customers/dhan.png",
    alt: "dhan logo",
    height: 80,
    width: 120
  },
  {
    src: "/logos/customers/nuvoretail.svg",
    alt: "nuva-retail logo",
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
    src: "/logos/customers/Kevit.svg",
    alt: "kevit logo",
    height: 50,
    width: 100
  },
  {
    src: "/logos/customers/astra.svg",
    alt: "astra logo",
    height: 50,
    width: 100
  },
];

export const Customers = () => {
  return (
    <div className="w-container grid-cols-1 gap-10 md:grid md:grid-cols-4">
      {CustomersLogoData.map(({ src, alt, width, height }, i) => (
        <div className={`h-[${height}px] w-full flex items-center justify-center`}>
          <div className={`max-w-[${width}px]`}>
            <Image src={src} height={height} className={`object-contain h-[${height}] w-[${width}]`} width={width} alt={alt} />
          </div>
        </div >
      ))}

    </div >
  );
};
