export type FeatureCardProps = {
  icon: () => React.JSX.Element;
  title: string;
  description: string;
};

export const Card = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col items-center gap-4">
        {icon()}
        <h4 className="text-center text-lg font-bold leading-normal tracking-[-0.18px]">
          {title}
        </h4>
      </div>
      <div className="mt-[22px]">
        <p className="text-center text-sm leading-5 tracking-wide text-[#959595]">
          {description}
        </p>
      </div>
    </div>
  );
};
