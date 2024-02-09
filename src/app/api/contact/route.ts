import { connectDb } from "@/database";
import { ContactModel } from "@/database/model/contact";

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
          status: 200,
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
        status: 200,
      },
    );
  }
}
