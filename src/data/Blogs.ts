export type Blog = {
  title: string;
  meta_title: string;
  description: string;
  date: string;
  image: string;
  categories: string[];
  author: string;
  tags: string[];
  draft: false;
  markdown: string;
};

export const Tags = ["all", "linux", "observability"];

export type SearchTag = "all" | "linux" | "observability" | null;

export const Blogs: Blog[] = [
  {
    title: "Observability",
    meta_title: "observability",
    description: "observability",
    date: "2023-11-03T05:00:00Z",
    image: "/images/blog/grafana-screenshot.png",
    categories: ["Observability"],
    author: "Shiva Pundir",
    tags: ["observability", "grafana", "opentelemetry", "clickhouse"],
    draft: false,
    markdown: `observability-main.md`,
  },
  {
    title: "Leveraging Persistent Storage for OpenTelemetry OTLP Exporters",
    meta_title: "observability",
    description: "observability",
    date: "2023-11-18T00:00:00Z",
    image: "/images/blog/opentelemetry.png",
    categories: ["Observability"],
    author: "Shiva Pundir",
    tags: ["observability", "opentelemetry"],
    draft: false,
    markdown: `observability-persistent-storage.md`,
  },
  {
    title:
      "Using OpenTelemetry's HTTP Check Receiver for Enhanced Observability",
    meta_title: "observability",
    description: "observability",
    date: "2023-11-25T00:00:00Z",
    image: "/images/blog/opentelemetry.png",
    categories: ["Observability"],
    author: "Shiva Pundir",
    tags: ["observability", "opentelemetry"],
    draft: false,
    markdown: "observability-healthcheck-receiver.md",
  },
  {
    title: "OpenTelemetry Filelog Receiver In Action",
    meta_title: "observability",
    description: "observability",
    date: "2023-11-25T00:00:00Z",
    image: "/images/blog/opentelemetry.png",
    categories: ["Observability"],
    author: "Shiva Pundir",
    tags: ["observability", "opentelemetry"],
    draft: false,
    markdown: "observability-filelog-receiver.md",
  },
  {
    title: "Custom Observability : Alternative to Rigid SaaS products",
    meta_title: "Custom observability",
    description:
      "Custom observability is a tailored observability solution for institutions need",
    date: "2023-12-05T05:00:00Z",
    image: "/images/blog/kid.jpg",
    categories: ["Observability"],
    author: "Anurag Pandey",
    tags: ["observability", "grafana", "opentelemetry", "clickhouse"],
    draft: false,
    markdown: "observability-custom.md",
  },
  {
    title:
      "India’s leading brokerage firm unlocks 85% cost savings using Incerto’s industry-first custom observability solution powered by OpenTelemetry",
    meta_title: "custom observability case study",
    description:
      "India’s leading brokerage firm unlocks 85% cost savings using Incerto’s industry-first custom observability solution powered by OpenTelemetry",
    date: "2023-12-17T05:00:00Z",
    image: "/images/blog/cost-reduction.jpg",
    categories: ["Observability"],
    author: "Shiva Pundir",
    tags: [
      "observability",
      "grafana",
      "opentelemetry",
      "clickhouse",
      "case-study",
    ],
    draft: false,
    markdown: "observability-case-study-brokerage-firm.md",
  },
  {
    title: "Resource Detection Processor in OpenTelemetry Collector",
    meta_title: "observability",
    description: "observability",
    date: "2023-11-18T00:00:00Z",
    image: "/images/blog/opentelemetry.png",
    categories: ["Observability"],
    author: "Shiva Pundir",
    tags: ["observability", "opentelemetry"],
    draft: false,
    markdown: "observability-resourcedetection-processor.md",
  },
  {
    title: "Commercial Linux Screen Casting",
    meta_title: "Linux Screen Casting for Windows 10",
    description: "Roadmap to Linux Screen Casting",
    date: "2023-11-22T05:00:00Z",
    image: "/images/blog/screnshare.jpg",
    categories: ["Linux Development"],
    author: "Anurag Pandey",
    tags: ["problem-solving", "miracast", "windows", "linux"],
    draft: false,
    markdown: "linux-screen-casting.md",
  },
];
