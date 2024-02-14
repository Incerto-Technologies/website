"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const VerifyUser = ({
  success,
  isMailSent,
}: {
  success: boolean;
  isMailSent: boolean;
}) => {
  const router = useRouter();

  useEffect(() => {
    success ? router.push("/blog/add") : router.push("/login");
  });
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-3">
      <h1 className="text-center text-3xl">Account verified</h1>
      <br />
      {isMailSent ? (
        <h1 className="text-center text-3xl">Email is Sent!</h1>
      ) : (
        <h1 className="text-center text-3xl">Unable to send email now.</h1>
      )}
    </div>
  );
};
