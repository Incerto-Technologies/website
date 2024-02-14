import nodemailer from "nodemailer";
export const sendMail = async (subject: string, body: string, to?: string) => {
  return new Promise((reslove) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL!,
        pass: process.env.APP_PASSKEY!,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL!,
      to: to ? to : process.env.SEND_MAILS_TO!.split(","),
      subject: subject,
      text: body,
    };

    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        console.log(error);
        reslove(false);
      } else {
        console.log("Email Sent");
        reslove(true);
      }
    });
  });
};
