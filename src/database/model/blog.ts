import { Document, Schema, model, Model } from "mongoose";

export type Blog = {
  title: { type: String; required: true };
  meta_title: string;
  description: string;
  date: string;
  image: string;
  categories: string[];
  author: string;
  tags: string[];
  draft: false;
  markdown: string;
  profile?: string;
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
  author: { type: String, required: true },
  tags: { type: [String], required: true },
  draft: { type: Boolean, required: false, default: false },
  markdown: { type: String, required: true },
  profile: { type: String, required: false },
});

// Using the singleton pattern to prevent model redefinition
let BlogModel: Model<IBlogDocument>;

try {
  // check model is already defined
  BlogModel = model<IBlogDocument>("blog");
} catch {
  // is not defined, define it
  BlogModel = model<IBlogDocument>("blog", BlogSchema);
}

export { BlogModel };
