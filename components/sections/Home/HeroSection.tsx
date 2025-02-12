import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full mt-[101px] flex flex-col items-center justify-center">
      <div className="w-[601px]">
        <h2 className={`text-[16px] text-[#16FCD2] text-center`}>
          CLIENT-DEVELOPMENT DRIVEN
        </h2>
        <h1 className="text-[36px] leading-[54px] mt-[13px] font-bold text-center">
          We Design. We Develop. We Ship. In The Same Day.
        </h1>
        <p className="text-white/60 font-medium text-center mt-[24px]">
          We are committed to not making clients wait. We will deliver the work
          as quickly as possible. Even on the same day. Even so, we do not
          reduce the quality of our work.
        </p>
      </div>

      <div className="flex gap-[23px] mt-[40px]">
        <Link href="/quote">
          <button className="w-[202px] h-[52px] bg-[#6016FC] rounded-[3px]">
            Send Quote
          </button>
        </Link>
        <button className="w-[202px] h-[52px] bg-white/10 rounded-[3px]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
