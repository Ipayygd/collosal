const QuotePageView = () => {
  return (
    <div className="px-[203px] mt-[101px]">
      <div className="flex items-center w-full gap-10">
        <div>
          <h2 className="text-[#16FCD2] font-semibold text-[16px] leading-[32px]">
            SEND QUOTE
          </h2>
          <h1 className="font-bold text-[36px] leading-[54px] mt-[13px]">
            Tell us about your problem and how we can help
          </h1>
          <p className="text-white/60 font-medium text-[16px] leading-[32px] mt-[24px]">
            We are happy to help you, tell us what is the problem with your
            company, and we are ready to answer these problems. It usually takes
            a few minutes for us to respond.
          </p>
          <button className="w-[162px] h-[52px] bg-white/10 rounded-[3px] mt-[40px]">
            Ask Us
          </button>
        </div>

        <div className="rounded-[5px] bg-white/5 px-[24px] w-[412px] pt-[52px] pb-[32px] space-y-[28px]">
          <div className="flex gap-x-[17px] w-auto">
            <div className="space-y-[6px]">
              <label htmlFor="name" className="text-white/60 text-[14px]">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="bg-white/10 rounded-[3px] p-2 outline-none w-[161px]"
              />
            </div>
            <div className="space-y-[6px]">
              <label htmlFor="email" className="text-white/60 text-[14px]">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="bg-white/10 rounded-[3px] p-2 outline-none w-[161px]"
              />
            </div>
          </div>

          <div className="flex gap-x-[17px] w-auto">
            <div className="space-y-[6px]">
              <label htmlFor="company" className="text-white/60 text-[14px]">
                Company
              </label>
              <input
                id="company"
                type="text"
                className="bg-white/10 rounded-[3px] p-2 outline-none w-[161px]"
              />
            </div>
            <div className="space-y-[6px]">
              <label
                htmlFor="company_size"
                className="text-white/60 text-[14px]"
              >
                Company Size
              </label>
              <select
                name="company_size"
                id="company_size"
                className="bg-white/10 rounded-[3px] p-2 outline-none w-[161px]"
              >
                <option value="1-10" className="text-black ">
                  1-10
                </option>
                <option value="11-50" className="text-black ">
                  11-50
                </option>
                <option value="51-200" className="text-black ">
                  51-200
                </option>
              </select>
            </div>
          </div>

          <div>
            <div className="space-y-[6px] flex flex-col w-full">
              <label htmlFor="name" className="text-white/60 text-[14px]">
                Tell Us Your Problem
              </label>
              <textarea
                id="name"
                className="bg-white/10 rounded-[3px] p-2 h-[130px] outline-none"
              />
            </div>
          </div>

          <button className="w-full h-[52px] bg-[#6016FC] rounded-[3px]">
            Send Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuotePageView;
