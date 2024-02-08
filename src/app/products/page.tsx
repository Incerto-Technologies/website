"use client";

import { useRouter } from "next/navigation";

export default function Product() {
  const router = useRouter();
  router.replace("/");
  return <div>page</div>;
}
