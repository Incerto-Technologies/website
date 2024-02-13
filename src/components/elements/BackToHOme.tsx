"use client";

import { useRouter } from "next/navigation";

export const BackToHOme = () => {
  const router = useRouter();
  router.replace("/");
  return <div>BackToHOme</div>;
};
