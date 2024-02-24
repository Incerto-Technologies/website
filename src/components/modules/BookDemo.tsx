"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/elements/Button";
export const BookDemo = () => {
  const router = useRouter();
  return (
    <div className="mt-10 flex w-full items-center justify-center">
      <Button
        className="transition-all duration-200 ease-in hover:bg-[#035749]"
        onClick={() => {
          router.push("/#contact");
        }}
      >
        Book a meeting
      </Button>
    </div>
  );
};
