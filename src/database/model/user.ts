import { Document, Schema, model, Model } from "mongoose";
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
let UserModel: Model<IUserDocument>;

try {
  // check model is already defined
  UserModel = model<IUserDocument>("User");
} catch {
  // is not defined, define it
  UserModel = model<IUserDocument>("User", UserSchema);
}

export { UserModel };
