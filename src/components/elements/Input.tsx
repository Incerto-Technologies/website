"use client";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
}

export const Input = ({ className, labelName, ...props }: InputProps) => {
  return (
    <div className="relative w-full ">
      <input
        className="w-full rounded border border-[#5C5C5C] bg-inherit py-2 pl-4 focus:outline-none"
        {...props}
      />
      <label
        htmlFor={props.id}
        className="absolute left-[12px] top-[-20%] bg-[#121815] px-1 text-xs leading-4 text-[#5C5C5C]"
      >
        {labelName}
      </label>
    </div>
  );
};
