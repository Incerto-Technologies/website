import { Cloud } from "@/components/elements/icons/Cloud";
import { Code } from "@/components/elements/icons/Code";
import { Document } from "@/components/elements/icons/Document";

const productsBreif = [
  {
    id: 0,
    title: "Distributed Tracing and Centralised Logging",
    icon: Document,
    image: "/images/products/card.webp",
    description:
      "Detect and resolve infrastructure wide issues from a single dashboard",
    path: "/product?product_name=trace_and_logs",
  },
  {
    id: 1,
    icon: Code,
    image: "/images/products/card.webp",
    title: "Root Cause Analysis",
    description: "Dynamically narrow down on root cause.",
    path: "/product?product_name=anomaly_detection",
  },
  {
    id: 2,
    icon: Cloud,
    image: "/images/products/card.webp",
    title: "Host mertics",
    path: "/product?product_name=host_metrics",
    description: "Monitor complete machine behavior",
  },
  {
    id: 3,
    icon: Cloud,
    image: "/images/products/card.webp",
    title: "Host mertics",
    path: "/product?product_name=host_metrics",
    description: "Monitor complete machine behavior",
  },
];

const CloudMetrics = {
  hero: {
    title: "Host/ metrics",
    description: "Monitor complete machine behavior",
    icon_title: "Host Metrics",
    icon: Cloud,
    video: {
      src: "https://res.cloudinary.com/dcpurzjra/video/upload/v1708866429/WhatsApp_Video_2024-02-24_at_9.01.35_PM_ucuikh.mp4",
      type: "video/mp4",
      thumbnail: "/video/hm-thumbnail.webp",
    },
    btnLink:
      "https://play.incerto.in/d/d4fa3dfc-caf7-4b96-bfd1-e307b09f2dc2/host-metrics?orgId=1&from=now-6h&to=now&var-traceID=All&var-spanID=All&var-SeverityText=All&var-ServiceName=All&var-SpanTypes=All&var-AttributeValue=All",
    btnName: "Host metrics",
  },
  products: [
    {
      image: "/images/products/hm1.mp4",
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
      image: "/images/products/hm2.mp4",
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
        icon: Document,
        image: "/images/products/card.webp",
        title: "Distributed Tracing and Centralised Logging",
        description:
          "Detect and resolve infrastructure wide issues from a single dashboard",
        path: "/product?product_name=trace_and_logs",
      },
      {
        icon: Code,
        image: "/images/products/card.webp",
        title: "Root Cause Analysis",
        description: "Dynamically narrow down on root cause.",
        path: "/product?product_name=anomaly_detection",
      },
    ],
  },
};

const tracesAndLogs = {
  hero: {
    title: "Distributed Tracing/ and Centralised Logging",
    description:
      "Detect and resolve infrastructure wide issues from a single dashboard",
    icon_title: "Trace and Logs",
    icon: Document,
    video: {
      src: "https://res.cloudinary.com/dnjh5jsmh/video/upload/v1708082911/TracesLogs_whnqm4.mp4",
      type: "video/mp4",
      thumbnail: "/video/thumbnail.webp",
    },
    btnLink:
      "https://play.incerto.in/d/c2b6ab52-c500-4cc6-93a0-1871b9207a8a/traces-and-logs?orgId=1&from=now-6h&to=now&var-ServiceName=All&var-HostName=All",
    btnName: "Traces & logs",
  },
  products: [
    {
      title: "Distributed/ Tracing",
      image: "/images/products/trace1.mp4",
      lists: [
        "Trace the user request across service and infrastructure",
        "Limitless custom dimension for each span",
        "Filter based on dimension, latency, errors, services and more",
        "Correlated with corresponding logs",
      ],
    },
    {
      image: "/images/products/trace2.mp4",
      title: "Centralised/ logs",
      lists: [
        "See logs from every service",
        "Every log is colour coded based on the severity text",
        "Pinpoint the logs via different filters present in realtime",
        "High dimensionality data giving all the context without instrumentation",
      ],
    },
    {
      image: "/images/products/trace3.mp4",
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
        description: "Monitor complete machine behavior",
        path: "/product?product_name=host_metrics",
      },

      {
        icon: Code,
        image: "/images/products/card.webp",
        title: "Root Cause Analysis",
        path: "/product?product_name=anomaly_detection",
        description: "Dynamically narrow down on root cause.",
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
      src: "https://res.cloudinary.com/drghyxg2r/video/upload/v1708783447/RootCauseAnalysis_zv5n8x.mp4",
      type: "video/mp4",
      thumbnail: "/video/rca-thumbnail.webp",
    },
    btnLink:
      "https://play.incerto.in/d/a9ad271e-8686-4f1a-9e72-88e10db510ad/anomly-detection-dashboard?orgId=1",
    btnName: "Root Cause Analysis",
  },
  products: [
    {
      image: "/images/products/rca1.mp4",
      title: "Error/ Status",
      lists: [
        "Errors across traces and logs grouped by Service.",
        "Quickly spot dimensions that caused errors e.g hosts, urls etc.",
        "Filter based on dimensions and more.",
      ],
    },
    {
      image: "/images/products/rca2.mp4",
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
        description: "Monitor complete machine behavior",
      },

      {
        icon: Document,
        image: "/images/products/card.webp",
        path: "/product?product_name=trace_and_logs",
        title: "Distributed Tracing and Centralised Logging",
        description:
          "Detect and resolve infrastructure wide issues from a single dashboard",
      },
    ],
  },
};

const rum = {
  hero: {
    title: "Real User Monitoring",
    description:
      "Detects and resolves infrastructure wide issues from a single dashboard",
    icon_title: "Real User Monitoring",
    icon: Code,
    video: {
      src: "https://res.cloudinary.com/drghyxg2r/video/upload/v1714558453/SirRumDraft4_-_Made_with_Clipchamp_nralrn.mp4",
      type: "video/mp4",
      thumbnail: "/video/rum-thumbnail.webp",
    },
    btnLink: "/#contact",
    btnName: "Contact us",
  },
  products: [
    {
      image: "/images/products/rum/SessionReplayWeb.mp4",
      title: "Session/ Replays",
      lists: [
        "Record Interactions:\b Capture user actions in your app for analysis.",
        "Targeted Retrieval:\b Retrieve specific sessions by user ID and timestamp.",
        "Event Insights:\b Get detailed breakdowns of user actions during replays.",
        "API Tracking:\b Trace API calls alongside user interactions for seamless journey analysis. ",
      ],
    },
    {
      image: "/images/products/rum/HeatMapsWeb.mp4",
      title: "Heatmaps",
      lists: [
        "Visualization:\b Visualize user engagement, optimizing web page design.",
        `Increase Engagement:\b Guide content and marketing strategies for audience engagement.`,
        "Identify Trends:\b Refine content for audience preferences.",
        "Coldspots:\b Highlight areas needing attention for improved engagement.",
      ],
    },
    {
      image: "/images/products/rum/WebTracesWeb.mp4",
      title: "Web/ Traces",
      lists: [
        "Filtering Options:\b Filter via span attributes and resource attributes for precise analysis.",
        "Comprehensive Visibility:\b Access all user session traces and logs to gain contextual insights into specific issues or errors.",
      ],
    },
    {
      image: "/images/products/rum/MetricsWeb.mp4",
      title: "Metrics",
      lists: [
        "Load Time Insights:\b See how fast users access your site, without any changes made to speed it up.",
        "Request Count Transparency:\b Understand clearly how your server communicates with your site, without any optimization changes.",
        "Rendering Analysis:\b Know how different elements affect how quickly your site shows up on screen, without any tweaks.",
        "Content Visibility:\b Learn how quickly your content appears to users, without any adjustments to speed.",
      ],
    },
    {
      image: "/images/products/rum/EndToEndCorrelationWeb.mp4",
      title: "End to End/ Correlations",
      lists: [
        "Effortless Sync:\b Sync every API request and response, ensuring no gaps in tracing between frontend and backend.",
        "Holistic Performance Insight:\b Enable faster issue resolution and performance optimization.",
      ],
    },
    {
      image: "/images/products/rum/UserAnalyticsWeb.mp4",
      title: "User/ Analytics",
      lists: [
        "Session Tracking:\b Monitor the total number of sessions to gauge user engagement and measure overall site activity.",
        "Page View Analysis:\b Understand user navigation patterns and identify popular content areas or potential bottlenecks.",
        "Error Monitoring:\b Keep a close eye on errors encountered by users to promptly address issues and ensure a smooth browsing experience.",
        "Action Tracking:\b Analyze actions performed within each session to gain insights into user behavior and meet users' needs effectively.",
      ],
    },
    {
      image: "/images/products/rum/WebVitalsWeb.mp4",
      title: "Web/ Vitals",
      lists: [
        "Largest Contentful Paint:\b Measure page loading speed with the largest content element.",
        "First Input Delay: Gauge:\b User interactivity by assessing response delay.",
        "Cumulative Layout Shift:\b Evaluate visual stability by quantifying layout shifts during page load.",
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
        description: "Monitor complete machine behavior",
      },

      {
        icon: Document,
        image: "/images/products/card.webp",
        path: "/product?product_name=trace_and_logs",
        title: "Distributed Tracing and Centralised Logging",
        description:
          "Detect and resolve infrastructure wide issues from a single dashboard",
      },
    ],
  },
};

export const productData = {
  CloudMetrics,
  tracesAndLogs,
  anomalyDetection,
  rum,
};
