import Image from "next/image";

export type FeatureCardProps = {
  icon: () => React.JSX.Element;
  title: string;
  description: string;
};

export const Card = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="aspect-[281/174] w-56">
      <div className="flex flex-col items-center gap-4">
        {icon()}
        <h4 className="font-semibold">{title}</h4>
      </div>
      <div className="mt-6">
        <p className="text-center text-sm leading-5 tracking-wide text-[#959595]">
          {description}
        </p>
      </div>
    </div>
  );
};
