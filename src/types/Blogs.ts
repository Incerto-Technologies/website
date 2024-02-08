export type Blog = {
  title: string;
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
  _id: string;
};

export const Tags = ["all", "linux", "observability"];

export type SearchTag = "all" | "linux" | "observability" | null;
