import Link from "next/link";

const ProjectsPageView = () => {
  return (
    <section className="px-[208px] mt-[108px]">
      <header className="flex items-center justify-between pb-[89px] border-b border-white/10">
        <div className="w-[507px]">
          <h2 className="text-[#16FCD2] font-semibold text-[16px]">PROJECTS</h2>
          <h1 className="font-bold text-[36px] leading-[54px]">
            We have completed many amazing projects that you will not believe
          </h1>
        </div>

        <div>
          <select className="h-[40px] w-[174px] bg-white/5 px-1.5 text-[14px] text-white/60 rounded-[3px] border border-white/10 outline-none">
            <option value="technology">Technology</option>
          </select>
        </div>
      </header>

      <div className="grid grid-cols-2 py-[90px] gap-x-[20px] gap-y-[70px]">
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
      </div>

      <div className="flex items-center justify-center mt-[60px]">
        <button className="bg-white/10 px-[55px] py-[15px] rounded-[3px]">
          Load More
        </button>
      </div>
    </section>
  );
};

export default ProjectsPageView;
