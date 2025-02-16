import Link from "next/link";

const ProjectDetailPageView = () => {
  return (
    <section className="px-[195px] mt-[108px]">
      <header className="pb-[73px] border-b border-white/10">
        <div className="w-[501px] mx-auto text-center">
          <h2 className="text-[#16FCD2] font-semibold text-[16px]">
            PROJECT DETAIL
          </h2>
          <h1 className="font-bold text-[30px] leading-[48px]">
            The Dekstop App Landing Page
          </h1>
        </div>
      </header>

      <div className="grid grid-cols-2 py-[90px] gap-x-[40px] border-b border-white/10">
        <div className=" aspect-square bg-[#161629] rounded-[3px] border border-white/10">
          <div className="flex flex-col gap-[14px] items-center justify-center mt-[53px]">
            <div className="h-[26px] w-[154px] bg-[#212136] rounded-full" />
            <div className="h-[26px] w-[94px] bg-[#212136] rounded-full" />

            <div className="mt-[40px]">
              <div className="w-[340px] h-[252px] bg-[#2c2c46] rounded-t-3xl" />
            </div>
          </div>
        </div>

        <div className="space-y-[40px]">
          <p className="text-[15px] leading-[28px] font-medium text-white/60">
            Something has always existed. According to physics, there can never
            be true physical nothingness—though there can be times when
            existence resembles nothing.
          </p>
          <div>
            <h2 className="text-white/60 text-[14px]">CATEGORY</h2>
            <h2 className="text-[16px] font-semibold">Development</h2>
          </div>
          <div>
            <h2 className="text-white/60 text-[14px]">CLIENT</h2>
            <h2 className="text-[16px] font-semibold">Acme, Inc</h2>
          </div>
          <div>
            <h2 className="text-white/60 text-[14px]">TECHNOLOGY</h2>
            <h2 className="text-[16px] font-semibold">Javascript, HTML, CSS</h2>
          </div>
        </div>
      </div>

      <div className="py-[90px]">
        <header className="pb-[73px]">
          <div className="w-[501px] mx-auto text-center">
            <h2 className="text-[#16FCD2] font-semibold text-[16px]">
              PROJECTS
            </h2>
            <h1 className="font-bold text-[30px] leading-[48px]">
              Other Amazing Projects
            </h1>
          </div>
        </header>

        <div className="grid grid-cols-2 gap-[20px]">
          <div>
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

          <div>
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
    </section>
  );
};

export default ProjectDetailPageView;
