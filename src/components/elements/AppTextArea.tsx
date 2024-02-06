"use client";

import TextAreaAutoSize from "react-textarea-autosize";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelName: string;
}
export const AppTextArea = ({
  className,
  labelName,
  id,
  ...props
}: TextAreaProps) => {
  return (
    <div className="relative w-full ">
      <TextAreaAutoSize
        className="min-h-[120px] w-full rounded border border-[#5C5C5C] bg-[#121815] px-4 py-2 focus:outline-none"
        id={id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
      <label
        htmlFor={id}
        className="absolute left-[12px] top-[-8px] bg-[#121815] px-1 text-xs leading-4 text-[#5C5C5C]"
      >
        {labelName}
      </label>
    </div>
  );
};
