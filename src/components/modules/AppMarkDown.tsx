"use client";
import Markdown from "react-markdown";
// import Markdown from "markdown-to-jsx";
import remarkGfm from "remark-gfm";
// import rehypeSanitize from "rehype-sanitize";

// import MarkdownEditor from "@uiw/react-markdown-preview";
// import markdownit from "markdown-it";
// import { Marko_One } from "next/font/google";

type Props = {
  markdown: string;
};

export const AppMarkDown = ({ markdown }: Props) => {
  return <Markdown rehypePlugins={[remarkGfm]}>{markdown}</Markdown>;
};
