import { CustomerLogo } from "./CustomerLogo";
import Marquee from "react-fast-marquee";

const CustomersLogoData = [
  {
    src: "/logos/customers/dhruv.png",
    alt: "dhruv logo",
  },
  {
    src: "/logos/customers/fyers.png",
    alt: "fyers logo",
  },
  {
    src: "/logos/customers/nuva-retail.png",
    alt: "nuva-retail logo",
  },
  {
    src: "/logos/customers/ving.png",
    alt: "ving logo",
  },
];

export const Customers = () => {
  return (
    <div className="mt-40">
      <Marquee autoFill pauseOnHover>
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
