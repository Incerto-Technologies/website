"use client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

import MarkdownEditor from "@uiw/react-markdown-preview";
import markdownit from "markdown-it";
import { Marko_One } from "next/font/google";

type Props = {
  markdown: string;
};
export const AppMarkDown = ({ markdown }: Props) => {
  //   const markdown = "# Hello, *Markdown*!";
  console.log(markdown);
  const md = markdownit();
  const result = md.render(markdown);
  const rehypePlugins = [remarkGfm];

  //   return <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>;
  {
    /* {markdown.toString().trim()} */
  }
  {
    /* {markdown.slice(2, markdown.length - 4).replaceAll("\n'", "\n")} */
  }
  {
    /* {markdown.replaceAll("\n", " ").replaceAll("'", " ").toString().trim()} */
  }
  return (
    // <Markdown rehypePlugins={rehypePlugins}>{markdownit(markdown)}</Markdown>
    <div>{markdown}</div>
  );
  //   return <div className="">{result}</div>;
};
{
  /* {markdown.replaceAll("\n", "s")} */
}
{
  /* {markdown.replaceAll('""', "")} */
}
