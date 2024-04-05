"use server";

import { cookies } from "next/headers";
import { getUserByToken } from "./getUserByToken";

export const getUser = async () => {
  try {
    const token = cookies().get("token")?.value;
    if (!token)
      return {
        message: "User not logged in, try after login.",
        redirect: "/login",
        success: false,
      };

    const data = await getUserByToken(token || "");

    if (!data) {
      return {
        message: "User not found, try after sometime",
        redirect: "/login",
        success: false,
      };
    }

    if (!data?.user?.verified) {
      return {
        message: "User not found, try after login.",
        redirect: "/login/verify",
        success: false,
      };
    }

    return {
      success: true,
      user: data.user,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "Unable to fetch the user",
      success: false,
    };
  }
};
