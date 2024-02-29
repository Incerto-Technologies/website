import { User } from "@/database/model/user";
import { Types } from "mongoose";

export type Blog = {
  title: string;
  meta_title: string;
  _id: string;
  description: string;
  date: string;
  image: string;
  categories: string[];
  author: User;
  tags: string[];
  draft: false;
  markdown: string;
  createdBy?: Types.ObjectId;
};

export const Tags = ["all", "linux", "observability"];

export type SearchTag = "all" | "linux" | "observability" | null;
