import Image from "next/image";

export type FeatureCardProps = {
  icon: () => React.JSX.Element;
  title: string;
  description: string;
};

export const Card = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div>
      <div className=""></div>
      <div className="">
        <Image
          src={"/backgrounds/app-image.png"}
          alt="app dashboard"
          width={680}
          height={980}
        />
      </div>
    </div>
  );
};
