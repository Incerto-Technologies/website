import mongoose, { Document, Schema, model, models } from "mongoose";
import userModel, { User } from "./user";

export type Blog = {
  title: { type: String; required: true };
  meta_title: string;
  description: string;
  date: string;
  image: string;
  categories: string[];
  author: User;
  tags: string[];
  draft: false;
  markdown: string;
  createdBy?: mongoose.Schema.Types.ObjectId;
};

// Interface to model the User Schema.
export interface IBlogDocument extends Blog, Document {}

// Define the schema
const BlogSchema = new Schema<IBlogDocument>({
  title: { type: String, required: true },
  meta_title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: false, default: new Date().toISOString() },
  image: { type: String, required: true },
  categories: { type: [String], required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  tags: { type: [String], required: true },
  draft: { type: Boolean, required: false, default: false },
  markdown: { type: String, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// Using the singleton pattern to prevent model redefinition
//

export default models["Blog"] || model("Blog", BlogSchema);
