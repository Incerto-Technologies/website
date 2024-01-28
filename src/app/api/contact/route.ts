import { ContactModel } from "@/database/model/contact";
import { connectDb } from "./../../../database/index";

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return Response.json(
        { message: "Missing email or message" },
        { status: 400 },
      );
    }

    await connectDb();

    const Contact = await ContactModel.create({ message });

    if (!Contact) {
      return Response.json(
        { message: "Something went wrong!, try again later" },
        { status: 500 },
      );
    }

    const data = {
      message:
        "Your Thanks for showing interest. Our engineers will reach back soon",
    };

    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Something went wrong!, try again later" },
      { status: 500 },
    );
  }
}
