import nodemailer from "nodemailer";
export const sendMail = async (subject: string, body: string) => {
  return new Promise((reslove, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL!,
        pass: process.env.APP_PASSKEY!,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL!,
      to: [
        "shiva@incerto.in",
        "shikhar.sharma@incerto.in",
        "anurag@incerto.in",
      ],
      subject: subject,
      text: body,
    };

    transporter.sendMail(mailOptions, function (error, info) {
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
