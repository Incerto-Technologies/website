import { Customers } from "./Customers";
import { Heading } from "../../modules/Heading";

export const Hero = () => {
  return (
    <div className="home-background flex min-h-screen w-full flex-col items-center justify-center pb-[50px] pt-32 md:pb-[100px]">
      {/* <div className="flex h-full items-center justify-center"> */}
      <div className="h-full w-full overflow-hidden">
        <Heading />
        <div className="overflow-hidded w-full">
          <Customers />
        </div>
      </div>
    </div>
  );
};
``;
