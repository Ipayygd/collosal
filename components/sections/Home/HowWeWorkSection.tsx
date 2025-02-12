import Image from "next/image";

const HowWeWorkSection = () => {
  return (
    <div className="pl-[166px] pr-[208px] mt-[130px]">
      <div className=" grid grid-cols-2">
        <div className="relative aspect-square h-auto">
          <Image
            src={"/images/How-We-Work-Illustration.png"}
            alt="How We Work"
            fill
            objectFit="cover"
          />
        </div>

        <div className="mt-[78px]">
          <h2 className="text-[#16FCD2] font-semibold h-[16px] leading-[32px]">
            HOW WE WORK?
          </h2>
          <h1 className="font-bold text-[30px] leading-[48px] mt-[4px]">
            Everything is well planned, well designed and developed
            wholeheartedly
          </h1>
          <p className="text-white/60 text-[16px] leading-[32px] font-medium mt-[28px]">
            Careful planning makes us confident, developed with best practices
            so that the project can be maintained. We always test projects
            before they are shipped.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkSection;
