import { FlowGraphDesktop } from "@/components/modules/FlowGraphDesktop";
import { FlowGraphMobile } from "@/components/modules/FlowGraphMobile";

export const FlowGraph = () => {
  return (
    <div className="bg- mt-[200px]  ">
      <div className="w-container px-10 pt-[100px] md:pb-28">
        <h3 className=" mx-auto text-center font-gotham text-[24px] font-medium leading-[33px] tracking-[-0.48px] md:text-[34px] md:leading-[48px] md:tracking-[-0.68px]">
          Observability That’s Built for{" "}
          <span className="text-accent-light">Developers Like YOU</span>
        </h3>
        <p className="mx-auto my-6 text-center font-medium  xl:w-4/6">
          Incerto’s unique approach leverages the trifecta of OpenTelemetry for
          unified telemetry collection, Clichouse to speed up queries from any
          data source, and Grafana to visualise Metrics, Logs, and Traces in a
          single frame
        </p>
      </div>
      <div className="mt-11">
        <div className="mx-auto hidden w-full justify-center md:flex">
          <FlowGraphDesktop />
        </div>
        <div className="md:hidden">
          <FlowGraphMobile />
        </div>
      </div>
    </div>
  );
};
