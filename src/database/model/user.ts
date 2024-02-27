import { Document, Schema, model, Model, models } from "mongoose";
import BlogModel from "./blog";
export type User = {
  email: string;
  password: string;
  userName: string;
  lastLogin: Date;
  isAdmin: boolean;
  verified: boolean;
  profile?: string;
  verificationToken?: string;
  description: string;
};

// Interface to model the User Schema.
export interface IUserDocument extends User, Document {}

// Define the schema
const UserSchema = new Schema<IUserDocument>({
  email: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true, select: false },
  profile: { type: String, required: false },
  description: { type: String, required: true },
  lastLogin: { type: Date, required: true, default: Date.now() },
  isAdmin: { type: Boolean, required: true, default: false },
  verified: { type: Boolean, required: true, default: false },
  verificationToken: { type: String, required: false },
});

// Using the singleton pattern to prevent model redefinition
export default models["User"] || model("User", UserSchema);
