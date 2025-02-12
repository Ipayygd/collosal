const CalloutSection = () => {
  return (
    <div className="px-[193px] mt-[120px] ">
      <div className="flex items-center justify-between gap-[61px] py-[47px] border-y border-white/10">
        <h1 className="font-bold text-[30px] leading-[48px]">
          We&apos;ve prepared everything, it&apos;s time for you to tell the
          problem
        </h1>
        <div className="flex items-center gap-[10px]">
          <button className="px-[55px] py-[15px] w-[202px] h-[52px] bg-[#6016FC] rounded-[3px]">
            Send Quote
          </button>
          <button className="px-[55px] py-[15px] w-[162px] h-[52px] bg-white/10 rounded-[3px]">
            Ask Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalloutSection;
