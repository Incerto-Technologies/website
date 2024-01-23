import { TechnoMapGraph } from "@/components/modules/TechnoMapGraph";

export const TechnoMap = () => {
  return (
    <div className="mt-52 bg-accent">
      <div className="w-container py-28">
        <h3 className=" mx-auto w-3/5 text-center font-gotham text-[34px] font-medium leading-10 tracking-[-0.68px]">
          How does Incerto Bridge the Gap while Delivering{" "}
          <span className="text-accent-light">Exceptional Value</span> ?
        </h3>
      </div>
      <div className=" mt-16">
        <TechnoMapGraph />
      </div>
    </div>
  );
};
