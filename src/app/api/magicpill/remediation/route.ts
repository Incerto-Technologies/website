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
          success: false,
        },
        {
          status: 400,
        },
      );
    }

    const isMailSent = await sendMail(
      `Magic Pill: User Interested in ClickHouse Remediation List - Email: ${email}`,
      `Hi Support team,

      We have a new user interested in our ClickHouse Remediation List through the Magic Pill initiative. Their email is:
      
      ${email}
      
      Please reach out to them with more information or assistance as needed.
      
      Best,
      Incerto Technologies`,
    );

    if (!isMailSent) {
      return Response.json(
        {
          message: "Something went wrong, try again later",
          success: false,
        },
        {
          status: 500,
        },
      );
    }

    return Response.json(
      {
        message:
          "Thanks for showing interest. Our team will reach back to you soon.",
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
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
