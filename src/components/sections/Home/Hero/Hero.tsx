import { Customers } from "./Customers/Customers";
import { Heading } from "./Heading";

export const Hero = () => {
  return (
    <div className="home-background min-h-[100vh] w-full pt-20">
      <Heading />
      <Customers />
    </div>
  );
};
