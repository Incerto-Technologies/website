import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | undefined;

export const connectDb = async () => {
  try {
    if (cachedConnection) {
      console.log("Using existing database connection");
      return cachedConnection;
    }

    const connection = await mongoose.connect(
      process.env.MONGODB_URI!.replace("myFirstDatabase", "incerto") as string,
    );

    console.log("Database connected");
    cachedConnection = connection.connection; // Use `connection.connection` to get the underlying Connection object
    return cachedConnection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error; // Rethrow the error to indicate that the connection failed
  }
};
