import Link from "next/link";

const ProjectSection = () => {
  return (
    <div className="px-[208px] mt-[108px]">
      <div className="border-t border-white/10 pt-[118px]">
        <div className="max-w-[507px] mx-auto flex flex-col justify-center text-center">
          <h2 className="text-[#16FCD2] font-semibold text-[16px] leading-[32px]">
            PROJECTS
          </h2>
          <h1 className="font-bold text-[30px] leading-[48px] mt-[4px] ">
            We have completed many amazing projects that you will not believe
          </h1>
        </div>

        <div className="mt-[71px] grid grid-cols-2 gap-[20px]">
          {/* Mobile */}
          <div className="h-[636px] ">
            <div className=" aspect-square bg-[#161629] rounded-[3px] border border-white/10">
              <div className="flex flex-col gap-[14px] items-center justify-center mt-[53px]">
                <div className="h-[26px] w-[154px] bg-[#212136] rounded-full" />
                <div className="h-[26px] w-[94px] bg-[#212136] rounded-full" />

                <div className="mt-[40px]">
                  <div className="w-[194px] h-[240px] bg-[#2c2c46] rounded-t-3xl" />
                </div>
              </div>
            </div>
            <div className="pt-[40px] text-center">
              <h1 className="font-bold text-[20px] leading-[34px]">
                The Mobile App Landing Page
              </h1>
              <p className="text-[16px] leading-[34px] text-white/60">
                A landing page for mobile app
              </p>

              <Link href="/projects/detail">
                <button className="rounded-full w-[100px] h-[39px] mt-[38px] border">
                  Detail
                </button>
              </Link>
            </div>
          </div>
          {/* Desktop */}
          <div className="h-[636px] ">
            <div className=" aspect-square bg-[#161629] rounded-[3px] border border-white/10">
              <div className="flex flex-col gap-[14px] items-center justify-center mt-[53px]">
                <div className="h-[26px] w-[154px] bg-[#212136] rounded-full" />
                <div className="h-[26px] w-[94px] bg-[#212136] rounded-full" />

                <div className="mt-[40px]">
                  <div className="w-[340px] h-[240px] bg-[#2c2c46] rounded-t-3xl" />
                </div>
              </div>
            </div>
            <div className="pt-[40px] text-center">
              <h1 className="font-bold text-[20px] leading-[34px]">
                The Desktop App Landing Page
              </h1>
              <p className="text-[16px] leading-[34px] text-white/60">
                A landing page for desktop app
              </p>

              <Link href="/projects/detail">
                <button className="rounded-full w-[100px] h-[39px] mt-[38px] border">
                  Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
