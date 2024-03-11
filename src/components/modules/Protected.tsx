import { getUser } from "@/action/getUser";
import { User } from "@/database/model/user";
import { redirect } from "next/navigation";

export const Protected = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const res = await getUser();

  if (!res.user) {
    redirect("/login");
  }

  return <>{children}</>;
};
