import { Customers } from "./Customers";
import { Heading } from "../../modules/Heading.tmp";

export const Hero = () => {
  return (
    <div className="home-background flex min-h-screen w-full flex-col justify-between pb-44 pt-20 md:pb-40">
      <Heading />
      <Customers />
    </div>
  );
};
