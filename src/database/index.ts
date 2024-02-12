import mongoose from "mongoose";

let cachedConnection: typeof mongoose | undefined;

export const connectDb = async () => {
  try {
    if (cachedConnection) {
      console.log("Using existing database connection");
      return cachedConnection;
    }

    const connection = await mongoose.connect(
      process.env.MONGODB_URI!.replace("myFirstDatabase", "incerto") as string,
      {
        retryWrites: false,
      },
    );

    console.log("Database connected");
    cachedConnection = connection;
    return connection;
  } catch (error) {
    console.log(error);
  }
};
