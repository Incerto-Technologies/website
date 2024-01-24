import { FlowGraphDesktop } from "@/components/modules/FlowGraphDesktop";
import { FlowGraphMobile } from "@/components/modules/FlowGraphMobile";

export const FlowGraph = () => {
  return (
    <div className="mt-52 ">
      <div className="w-container pt-28">
        <h3 className=" mx-auto w-3/5 text-center font-gotham text-[24px] font-medium leading-[33px] tracking-[-0.48px] md:text-[34px] md:leading-[48px] md:tracking-[-0.68px]">
          Observability That’s Built for{" "}
          <span className="text-accent-light">Developers Like YOU</span>
        </h3>
        <p className="mx-auto my-6 w-3/6 text-center font-medium">
          Incerto’s unique approach leverages the trifecta of OpenTelemetry for
          unified telemetry collection, Clichouse to speed up queries from any
          data source, and Grafana to visualise Metrics, Logs, and Traces in a
          single frame
        </p>
      </div>
      <div className="mt-8">
        <div className="mx-auto hidden justify-center md:flex md:pb-28">
          <FlowGraphDesktop />
        </div>
        <div className="md:hidden">
          <FlowGraphMobile />
        </div>
      </div>
    </div>
  );
};
