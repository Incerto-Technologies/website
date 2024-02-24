import { Activity } from "@/components/elements/icons/Activity";
import { Cloud } from "@/components/elements/icons/Cloud";
import { Code } from "@/components/elements/icons/Code";
import { Document } from "@/components/elements/icons/Document";

const CloudMetrics = {
  hero: {
    title: "Host/ metrics",
    description: "Monitor complete machine behavior",
    icon_title: "Host Metrics",
    icon: Cloud,
    video: {
      src: "https://res.cloudinary.com/dnjh5jsmh/video/upload/v1708082911/TracesLogs_whnqm4.mp4",
      type: "video/mp4",
      thumbnail: "/video/hm-thumbnail.webp",
    },
  },
  products: [
    {
      image: "/images/products/hm1.gif",
      title: "Important/ Numbers",
      lists: [
        "See important metrics like CPU Load, Network throughput, free RAM, etc on top",
        "Time Series graphs for memory, disk, and networks.",
        "Aggregated Avg, Maximum, and Minimum alongside all Timeseries",
        "Explore the flame graph to find out the most time-consuming functions",
        "Filter based on hostname and service names.",
      ],
    },
    {
      image: "/images/products/hm2.gif",
      title: "All/ Integration",
      lists: [
        "Check the process details like threads, physical or virtual memory per PID and more",
        "Have a separate dashboard for all your managed services, orchestration tools, databases, and more.",
      ],
    },
  ],
  otherProducts: {
    title: "Explore Our /Other Products",
    products: [
      {
        icon: Activity,
        image: "/images/products/card.webp",
        title: "Distributed Tracing and Centralised Logging",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        path: "/product?product_name=trace_and_logs",
      },
      {
        icon: Code,
        image: "/images/products/card.webp",
        title: "Root Cause Analysis",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        path: "/product?product_name=anomaly_detection",
      },
    ],
  },
};

const tracesAndLogs = {
  hero: {
    title: "Distributed Tracing/ and Centralised Logging",
    description:
      "Detects and resolves infrastructure wide issues from a single dashboard",
    icon_title: "Trace and Logs",
    icon: Document,
    video: {
      src: "https://res.cloudinary.com/dnjh5jsmh/video/upload/v1708082911/TracesLogs_whnqm4.mp4",
      type: "video/mp4",
      thumbnail: "/video/thumbnail.webp",
    },
  },
  products: [
    {
      title: "Distributed/ Tracing",
      image: "/images/products/trace1.gif",
      lists: [
        "Trace the user request across service and infrastructure",
        "Limitless custom dimension for each span",
        "Filter based on dimension, latency, errors, services and more",
        "Correlated with corresponding logs",
      ],
    },
    {
      image: "/images/products/trace2.gif",
      title: "Centralised/ logs",
      lists: [
        "See logs from every service",
        "Every log is colour coded based on the severity text",
        "Pinpoint the logs via different filters present in realtime",
        "High dimensionality data giving all the context without instrumentation",
      ],
    },
    {
      image: "/images/products/trace3.gif",
      title: "Correlation/ &  Filtering",
      lists: [
        "Overview of various important metrics helping you to choose the time interval when the error occurred",
        "Correlated traces, metrics and logs based on spanId, TraceID and time",
        "Search for any attribute, resource, substring in logs to filter relevant data",
        "See the aggregated dimensions having errors e.g. ports, urls, traces, hosts",
      ],
    },
  ],
  otherProducts: {
    title: "Explore Our /Other Products",
    products: [
      {
        icon: Cloud,
        image: "/images/products/card.webp",
        title: "Host mertics",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        path: "/product?product_name=host_metrics",
      },

      {
        icon: Code,
        image: "/images/products/card.webp",
        title: "Root Cause Analysis",
        path: "/product?product_name=anomaly_detection",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
  },
};

const anomalyDetection = {
  hero: {
    title: "Root Cause/ Analysis",
    description: "Dynamically narrow down on root cause.",
    icon_title: "Root Cause Analysis",
    icon: Code,
    video: {
      src: "https://res.cloudinary.com/dnjh5jsmh/video/upload/v1708082911/TracesLogs_whnqm4.mp4",
      type: "video/mp4",
      thumbnail: "/video/rca-thumbnail.webp",
    },
  },
  products: [
    {
      image: "/images/products/rca1.gif",
      title: "Error/ Status",
      lists: [
        "Errors across traces and logs grouped by Service.",
        "Quickly spot dimensions that caused errors e.g hosts, urls etc.",
        "Filter based on dimensions and more.",
      ],
    },
    {
      image: "/images/products/rca2.gif",
      title: "Dynamic/ distribution",
      lists: [
        "Select the dimensions and dynamically see the pie charts.",
        `A clear distinction between “what” and “where”.`,
        "Dynamically group based on dimensions which have majority values.",
        "Analyze the heatmap and time series to see the root cause.",
      ],
    },
  ],
  otherProducts: {
    title: "Explore Our /Other Products",
    products: [
      {
        icon: Cloud,
        image: "/images/products/card.webp",
        title: "Host mertics",
        path: "/product?product_name=host_metrics",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },

      {
        icon: Document,
        image: "/images/products/card.webp",
        path: "/product?product_name=trace_and_logs",
        title: "Distributed Tracing and Centralised Logging",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
  },
};
export const productData = {
  CloudMetrics,
  tracesAndLogs,
  anomalyDetection,
};
