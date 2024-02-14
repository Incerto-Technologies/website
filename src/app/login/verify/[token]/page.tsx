import { getUserVerify } from "@/action/getUserVerify";
import { VerifyUser } from "@/components/modules/VerifyUser";
import { sendMail } from "@/utils/sendMail";
import React from "react";

const Verify = async (Props: { params: { token: string } }) => {
  const { success, message, user } = await getUserVerify(Props.params.token);
  const isMailSent = (await sendMail(
    "Your account is Verified",
    `
  Hi ${user?.email.split("@")[0]},
  Your account is successfully verified. Now you can add your blog.
  Blog Link: https://${process.env.WEB_URL!}/blog/add
  `,
    user?.email,
  )) as boolean;
  return (
    <div>
      <VerifyUser success={success} message={message} isMailSent={isMailSent} />
    </div>
  );
};
export default Verify;
