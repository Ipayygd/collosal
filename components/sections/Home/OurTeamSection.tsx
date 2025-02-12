import Image from "next/image";

const OurTeamSection = () => {
  return (
    <div className="mt-[120px] pl-[208px] pr-[197px]">
      <div className="h-[549px] grid grid-cols-2">
        <div className="pt-[66px]">
          <h2 className="text-[#16FCD2] font-semibold text-[16px] leading-[32px]">
            OUR TEAM
          </h2>
          <h1 className="font-bold text-[30px] leading-[48px] mt-[4px]">
            We&apos;re a team of designers, engineers and analysts
          </h1>
          <p className="text-white/60 text-[16px] leading-[32px] font-medium mt-[28px]">
            Our team consists of many creative people. We are committed to
            maintaining quality work as well as speed. These creative people
            work together to create maximum work results.
          </p>

          <button className="w-[196px] h-[52px] bg-white/10 rounded-[3px] mt-[48px]">
            See Our Team
          </button>
        </div>
        <div className="relative">
          <Image
            src={"/images/Team-Illustration.png"}
            alt="Team Illustration"
            width={1000}
            height={1000}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
