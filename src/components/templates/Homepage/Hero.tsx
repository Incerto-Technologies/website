import { Customers } from "./Customers";
import { Heading } from "../../modules/Heading";

export const Hero = () => {
  return (
    <div className="home-background  min-h-screen w-full flex-col justify-between pb-44 pt-20 md:pb-40">
      <Heading />
      <Customers />
    </div>
  );
};
``;
