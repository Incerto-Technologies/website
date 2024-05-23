// "use client";
import { CustomerLogo } from "../../modules/CustomerLogo";
import Marquee from "react-fast-marquee";

const CustomersLogoData = [
  {
    src: "/logos/customers/dhruv.svg",
    alt: "dhruv logo",
  },
  {
    src: "/logos/customers/fyers.png",
    alt: "fyers logo",
  },
  {
    src: "/logos/customers/dhan.png",
    alt: "dhan logo",
  },
  {
    src: "/logos/customers/nuvoretail.svg",
    alt: "nuva-retail logo",
  },
  {
    src: "/logos/customers/ving.png",
    alt: "ving logo",
  },
  {
    src: "/logos/customers/Kevit.svg",
    alt: "kevit logo",
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
