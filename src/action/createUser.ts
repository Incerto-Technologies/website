"use server";
import { connectDb } from "@/database";
import { UserModel } from "@/database/model/user";
import { sendMail } from "@/utils/sendMail";
import bycrpt from "bcrypt";
import jwt from "jsonwebtoken";
export const createUser = async (user: {
  email: string;
  password: string;
  profile: string;
  userName: string;
}) => {
  if (
    !user.email ||
    !user.password ||
    user.profile === "" ||
    user.userName === ""
  )
    return {
      message: "All fields are required",
      success: false,
    };

  // ? if user does not exists then create new user
  const password = await bycrpt.hash(
    user.password,
    parseInt(process.env.SALT_ROUNDS!),
  );

  const isIncertoEmailId = user.email.includes("incerto.in");

  const verificationToken = jwt.sign(user.email, process.env.JWT_SECRET!);

  await connectDb();
  const [isMailSent, newUser] = await Promise.all([
    sendMail(
      "Icerto verification",
      `
Dear Admin,

Enthusiastic writer here, interested in contributing to Incerto Technologies! I would like to add some blogs. Kindly grant me access.
Click here: https://${process.env.VERCEL_URL!}/login/verify/${verificationToken}  `,
    ),
    UserModel.create({
      email: user.email,
      password: password,
      userName: user.userName,
      profile: user.profile,
      isAdmin: isIncertoEmailId,
      verificationToken,
    }),
  ]);

  if (!isMailSent) {
    return {
      message: "Unable to send mail now, Try again later",
      success: false,
    };
  }

  if (!newUser) {
    return {
      message: "Failed to create user",
      success: false,
    };
  }

  const token = jwt.sign(user.email, process.env.JWT_SECRET!);

  return {
    message: "User created",
    success: true,
    token,
    user: newUser.toJSON(),
  };
};
