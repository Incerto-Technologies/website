import { FlowGraphDesktop } from "@/components/modules/FlowGraphDesktop";
import { FlowGraphMobile } from "@/components/modules/FlowGraphMobile";

export const FlowGraph = () => {
  return (
    <div className="mt-[200px] bg-accent pb-[100px]">
      <div className="w-container px-2 pt-[100px] md:px-10">
        <h3 className="mx-auto text-center font-gotham text-[24px] font-medium leading-[33px] tracking-[-0.48px] md:text-[34px] md:leading-[48px] md:tracking-[-0.68px]">
          Observability that&apos;s Built for{" "}
          <span className="text-accent-light">Developers like You</span>
        </h3>
        <p className="mx-auto my-6 px-2 text-center font-semibold xl:w-4/6">
          Incerto’s unique approach leverages the trifecta of OpenTelemetry for
          unified telemetry collection, Clickhouse to speed up queries from any
          data source, and Grafana for dynamic visualisation of Metrics, Logs,
          and Traces in a single frame
        </p>
      </div>
      <div className="mt-11">
        {/* <div className="mx-auto hidden w-full justify-center md:flex md:w-5/6 lg:w-full">*/}
        <div className="mx-auto hidden w-full justify-center md:flex md:w-3/6 lg:w-full">
          <FlowGraphDesktop />
        </div>
        <div className="flex items-center justify-center md:hidden">
          <FlowGraphMobile />
        </div>
      </div>
    </div>
  );
};
// visualise
