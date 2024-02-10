import { connectDb } from "@/database";
import { ContactModel } from "@/database/model/contact";
import { sendMail } from "@/utils/sendMail";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return Response.json(
        {
          message: "Email is required",
          success: false,
        },
        {
          status: 400,
        },
      );
    }

    await connectDb();
    const data = await ContactModel.create({
      email,
    });

    if (!data) {
      return Response.json(
        {
          message: "Something went wrong, try again later",
          success: true,
        },
        {
          status: 400,
        },
      );
    }

    const isMailSent = await sendMail(
      `New Interest in Our Product - User's Email:  ${email}`,
      `Hi Support team,

      Great news! A user has shown interest in our product through the website's contact form. Please find their details below:
      
      User's Email: ${email}
      
      Feel free to reach out and provide any additional information or assistance they might need.
      
      Best,
      Incerto Technologies`,
    );

    if (!isMailSent) {
      return Response.json(
        {
          message: "Something went wrong, try again later",
          success: true,
        },
        {
          status: 500,
        },
      );
    }

    return Response.json(
      {
        message:
          "Thanks for showing interest. Our engineers will reach back soon.",
        success: true,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log(error, "error form contact api");

    return Response.json(
      {
        message: "Something went wrong, try again later",
        success: true,
      },
      {
        status: 500,
      },
    );
  }
}
