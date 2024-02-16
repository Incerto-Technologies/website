import Markdown from "react-markdown";
// default unified extension
import remarkGfm from "remark-gfm";

// Theme
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// code High Lighter
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// Video plugin
import rehypeVideo from "rehype-video";

// Math md cplugin
import remarkMath from "remark-math";

// Math Ui components
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

type Props = {
  markdown: string;
};

const AppMarkDown = ({ markdown }: Props) => {
  return (
    <Markdown
      rehypePlugins={[rehypeVideo, rehypeKatex]}
      remarkPlugins={[remarkGfm, remarkMath]}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            // @ts-ignore
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              // children={}
              language={match[1]}
              // showLineNumbers
              // wrapLongLines
              style={oneDark}
              // customStyle={{
              // backgroundColor: "#D5E5DF",
              // border: "1.3px solid #0F937C",
              // borderRadius: "10px 10px 0 0",
              // scrollbarColor: "#0F937C #D5E5DF",
              // }}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        h1(props) {
          return (
            <h1 className="my-[20px] text-[22px] font-bold leading-[46px] tracking-[-0.44px] text-[#0F937C] md:text-[32px] md:tracking-[-0.64px]">
              {props.children}
            </h1>
          );
        },
        h2(props) {
          return (
            <h1 className="my-[20px] text-[22px] font-bold leading-[46px] tracking-[-0.44px] text-[#0F937C] md:text-[32px] md:tracking-[-0.64px]">
              {props.children}
            </h1>
          );
        },
        h3(props) {
          return (
            <h1 className="my-[20px] text-[22px] font-bold leading-[46px] tracking-[-0.44px] text-[#0F937C] md:text-[32px] md:tracking-[-0.64px]">
              {props.children}
            </h1>
          );
        },
        h4(props) {
          return (
            <h1 className="my-[20px] text-[22px] font-bold leading-[46px] tracking-[-0.44px] text-[#0F937C] md:text-[32px] md:tracking-[-0.64px]">
              {props.children}
            </h1>
          );
        },
        h5(props) {
          return (
            <h1 className="my-[20px] text-[22px] font-bold leading-[46px] tracking-[-0.44px] text-[#0F937C] md:text-[32px] md:tracking-[-0.64px]">
              {props.children}
            </h1>
          );
        },
        h6(props) {
          return (
            <h1 className="my-[20px] text-[22px] font-bold leading-[46px] tracking-[-0.44px] text-[#0F937C] md:text-[32px] md:tracking-[-0.64px]">
              {props.children}
            </h1>
          );
        },
        p(props) {
          return (
            <p className="my-[20px] text-[16px] font-medium leading-[28px] tracking-[-0.32px] text-[#5D5D5D]">
              {props.children}
            </p>
          );
        },
        ul(props) {
          return (
            <ul className="my-[20px] ml-5 list-disc text-[16px] font-medium leading-[28px] tracking-[-0.32px] text-[#5D5D5D]">
              {props.children}
            </ul>
          );
        },
        a(props) {
          return props.children?.toString().toLowerCase() == "book a demo" ||
            props.children?.toString().toLowerCase() == "get in touch" ? (
            <span className="flex w-full justify-center">
              <a
                className="rounded-2xl bg-[#0F937C] px-5 py-3 text-secondary"
                href={props.href as string}
              >
                {props.children}
              </a>
            </span>
          ) : (
            <a
              className="text-[#0F937C] hover:underline"
              href={props.href as string}
            >
              {props.children}
            </a>
          );
        },
      }}
    >
      {markdown}
    </Markdown>
  );
};
export default AppMarkDown;
