"use server";

import { cookies } from "next/headers";
import { getUserByToken } from "./getUserByToken";

export const getUser = async () => {
  try {
    const token = cookies().get("token")?.value;
    const data = await getUserByToken(token || "");
    if (!data) {
      return {
        message: "Unable to fetch the user",
        success: false,
      };
    }
    return {
      message: "successfully fetch user data",
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
