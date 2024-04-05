"use server";
import { getUser } from "@/action/getUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const NeedVerification = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    getUser().then((res) => {
      if (res?.user?.verified && res?.user.isAdmin) router.push("/blog/add");
    });
  }, [router]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-3">
      <h1 className="text-center text-3xl">Need verification to Add blog</h1>
    </div>
  );
};
