export type FeatureCardProps = {
  icon: () => React.JSX.Element;
  title: string;
  description: string;
};

export const Card = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="w-full md:aspect-[281/174] md:w-60">
      <div className="flex flex-col items-center gap-4">
        {icon()}
        <h4 className="text-center text-lg font-semibold tracking-[-0.18px] md:italic">
          {title}
        </h4>
      </div>
      <div className="mt-5 md:mt-6">
        <p className="text-center text-sm leading-5 tracking-wide text-[#959595]">
          {description}
        </p>
      </div>
    </div>
  );
};
