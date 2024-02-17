import { Activity } from "@/components/elements/icons/Activity";
import { Cloud } from "@/components/elements/icons/Cloud";
import { Code } from "@/components/elements/icons/Code";
import { Document } from "@/components/elements/icons/Document";

export const productNavRoutes = {
  name: "Our Products",
  options: [
    {
      name: "Host metrics",
      description: "Infrastructure health",
      path: "/about",
      icon: Cloud,
    },
    {
      name: "Trace and Logs",
      description: "Detect the Problems ",
      path: "/about",
      icon: Document,
    },
    {
      name: "Anomaly Detection",
      description: "Resolve the Problem",
      path: "/about",
      icon: Code,
    },
  ],
};

export const navRoutes = [
  {
    name: "About us",
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
