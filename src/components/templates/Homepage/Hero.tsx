import { Customers } from "./Customers";
import { Heading } from "../../modules/Heading";

export const Hero = () => {
  return (
    <div className="home-background w-full pt-20">
      <Heading />
      <Customers />
    </div>
  );
};
