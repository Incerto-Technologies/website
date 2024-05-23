import { Cloud } from "@/components/elements/icons/Cloud";
import { Code } from "@/components/elements/icons/Code";
import { Document } from "@/components/elements/icons/Document";

export const productsName = [
  "host_metrics",
  "trace_and_logs",
  "anomaly_detection",
  "rum",
];

export const productNavRoutes = {
  name: "Products",
  options: [
    {
      name: "Host Metrics",
      description: "Infrastructure health",
      path: "/product/host_metrics",
      icon: Cloud,
    },
    {
      name: "Trace and Logs",
      description: "Detect the Problems ",
      path: "/product/trace_and_logs",
      icon: Document,
    },
    {
      name: "Root Cause Analysis",
      description: "Resolve the Problem",
      path: "/product/anomaly_detection",
      icon: Code,
    },
    {
      name: "Real User Monitoring",
      description: "Monitor user experience",
      path: "/product/rum",
      icon: Code,
    },
  ],
};

export const solutionsNavRoutes = {
  name: "Solution",
  description: "lorem loremloremlorem",
  options: [
    {
      name: "By industry",
      links: [
        {
          name: "Brokerage",
          path: "/solution/brokerage",
          description: "Solutions for Brokerage firms",
        },
      ],
    },
  ],
};

export const navRoutes = [
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Blogs",
    path: "/blog",
  },
  {
    name: "Contact us",
    path: "/",
  },
];
