import { Customers } from "./Customers";
import { Heading } from "../../modules/Heading";

export const Hero = () => {
  return (
    <div className="home-background flex min-h-screen w-full flex-col justify-between pb-40 pt-20">
      <Heading />
      <Customers />
    </div>
  );
};
