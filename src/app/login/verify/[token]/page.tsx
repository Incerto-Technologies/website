import { getUserVerify } from "@/action/getUserVerify";
import { VerifyUser } from "@/components/modules/VerifyUser";
import { sendMail } from "@/utils/sendMail";
import React from "react";

const Verify = async (Props: { params: { token: string } }) => {
  const { success, message, isMailSent } = await getUserVerify(
    Props.params.token,
  );
  return (
    <div>
      <VerifyUser
        success={success}
        message={message}
        isMailSent={isMailSent || false}
      />
    </div>
  );
};
export default Verify;
