import { Cloud } from "@/components/elements/icons/Cloud";
import { Code } from "@/components/elements/icons/Code";
import { Document } from "@/components/elements/icons/Document";

export const productNavRoutes = {
  name: "Products",
  options: [
    {
      name: "Host metrics",
      description: "Infrastructure health",
      path: "/product?product_name=host_metrics",
      icon: Cloud,
    },
    {
      name: "Trace and Logs",
      description: "Detect the Problems ",
      path: "/product?product_name=trace_and_logs",
      icon: Document,
    },
    {
      name: "Root cause Analysis",
      description: "Resolve the Problem",
      path: "/product?product_name=anomaly_detection",
      icon: Code,
    },
  ],
};

export const navRoutes = [
  {
    name: "Brokerage",
    path: "/brokerage",
  },
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
