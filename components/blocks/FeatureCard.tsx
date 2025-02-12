import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  icon_url: string;
}

const FeatureCard = ({ title, description, icon_url }: FeatureCardProps) => {
  return (
    <div className="w-[328] h-[276px] px-[40px] py-[32px] bg-white/5 rounded-[5px]">
      <div className="w-[50px] h-[50px] relative flex items-center justify-center bg-white/[3%] rounded-[3px]">
        <Image src={icon_url} width={24} height={24} alt={"Icon"} />
      </div>
      <h2 className="text-[18px] font-bold mt-[29px]">{title}</h2>
      <p className="text-[16px] leading-[32px] font-medium text-white/60 mt-[8px]">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
