// "use client";
// import dynamic from "next/dynamic";
import { CustomerLogo } from "../../modules/CustomerLogo";
import Marquee from "react-fast-marquee";
// const Marquee = dynamic(() =>
//   import("react-fast-marquee").then((mod) => mod.default),
// );

const CustomersLogoData = [
  {
    src: "/logos/customers/dhruv.svg",
    alt: "dhruv logo",
  },
  {
    src: "/logos/customers/fyers.svg",
    alt: "fyers logo",
  },
  {
    src: "/logos/customers/nuvoretail.svg",
    alt: "nuva-retail logo",
  },
  {
    src: "/logos/customers/ving.svg",
    alt: "ving logo",
  },
];

export const Customers = () => {
  return (
    // <div className="mt-10 md:mt-[171px]">
    <div className="">
      <Marquee autoFill>
        {CustomersLogoData.map((logo, index) => (
          <CustomerLogo
            src={logo.src}
            alt={logo.alt}
            key={`${logo.src}--${index}`}
          />
        ))}
      </Marquee>
    </div>
  );
};
