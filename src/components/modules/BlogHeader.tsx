import { NoteIcon } from "../elements/icons/NoteIcon";
import { Folder } from "../elements/icons/Folder";
import { Calendar } from "../elements/icons/Calendar";
import { Blog } from "@/types/Blogs";

export const BlogHeader = ({ title, author, tags, date }: Blog) => {
  const inputDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long", // Full month name
    day: "numeric",
  };

  const formatedDate = inputDate.toLocaleDateString("en-US", options);

  return (
    <div className="mb-[50px] mt-5 text-black md:mb-[100px] md:mt-[40px]">
      <h1 className="text-[22px] font-bold leading-8 tracking-tighter md:text-[32px] md:leading-[46px] md:tracking-[-0.64px]">
        {`${title}`}
      </h1>
      <div className="mt-[22px] hidden gap-8 md:flex">
        <div className="flex gap-1.5">
          <NoteIcon />
          <p className="text-[18px] font-medium text-[#5D5D5D]">{author}</p>
        </div>
        <div className="flex gap-1.5">
          <Folder />
          <p className="text-[18px] font-medium capitalize text-[#5D5D5D]">
            {/* {tags.join(" - ")} */}
            {tags[0]}
          </p>
        </div>
        <div className="flex gap-1.5">
          <Calendar />
          <p className="text-[18px] font-medium text-[#5D5D5D]">
            {formatedDate}
          </p>
        </div>
      </div>
      <div className="mt-[22px] text-sm font-semibold md:hidden">
        <div className="flex h-full gap-1.5">
          <div className="flex h-full min-h-7 min-w-7 justify-center ">
            <Folder />
          </div>
          <p className="text-[18px] font-medium capitalize text-[#5D5D5D]">
            {/* {tags.join(" - ")} */}
            {tags[0]}
          </p>
        </div>
        <div className="mt-2.5 flex h-full gap-5">
          <div className="flex items-center gap-1.5">
            <NoteIcon />
            <p className="text-[18px] font-medium text-[#5D5D5D]">{author}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar />
            <p className="text-[18px] font-medium text-[#5D5D5D]">
              {formatedDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
