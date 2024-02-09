"use server";

import { connectDb } from "@/database";
import { ContactModel } from "@/database/model/contact";

export const contactUs = async (email: string) => {
  try {
    await connectDb();

    const contactData = await ContactModel.create({
      email,
    });
    if (!contactData)
      return {
        message: "Something went wrong try again later",
        success: false,
      };

    return {
      message:
        "Thanks for showing interest. Our engineers will reach back soon.",
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Something went wrong try again later",
      success: false,
    };
  }
};
