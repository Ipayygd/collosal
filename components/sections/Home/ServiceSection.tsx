const ServiceSection = () => {
  return (
    <div className="px-[66px] mt-[110px]">
      <div className="bg-[#221048] h-[911px] rounded-[30px]">
        <div className="flex flex-col items-center max-w-[507px] mx-auto pt-[90px]">
          <h2 className="text-[#16FCD2] font-semibold text-[16px] leading-[32px]">
            GET STARTED
          </h2>
          <div>
            <h1 className="text-[30px] leading-[48px] font-bold text-center mt-[4px]">
              What do you need? Choose a service that can help you
            </h1>
          </div>
        </div>

        <div className="px-[100px] mt-[70px] flex items-center gap-[20px]">
          {/* 1 */}
          <div className="w-full bg-[#3f2379] rounded-[10px]">
            <div className="pt-[58px] flex gap-[53px] justify-center">
              <h1 className="text-[16px] font-bold">UI Design</h1>
              <div>
                <h2 className="text-[12px] text-white/60">Starting from</h2>
                <h1 className="font-bold text-[36px] text-end">1200$</h1>
              </div>
            </div>

            <div className="mt-[37px] border-t border-white/5 mx-[40px]">
              <div className="mx-auto mt-[37px]">
                <p className="text-center font-medium text-[16px] leading-[36px]">
                  10 design pages <br /> Well-documented <br /> 4 revisions{" "}
                  <br /> $100/additional page
                </p>
              </div>
              <button className="bg-white text-[#3f2379] font-semibold h-[52px] w-full mt-[50px] mb-[29px] rounded-[3px]">
                Detail
              </button>
            </div>
          </div>
          {/* 2 */}
          <div className="w-full bg-[#233679] rounded-[10px]">
            <div className="pt-[58px] flex gap-[53px] justify-center">
              <h1 className="text-[16px] font-bold">Development</h1>
              <div>
                <h2 className="text-[12px] text-white/60">Starting from</h2>
                <h1 className="font-bold text-[36px] text-end">5000$</h1>
              </div>
            </div>

            <div className="mt-[37px] border-t border-white/5 mx-[40px]">
              <div className="mx-auto mt-[37px]">
                <p className="text-center font-medium text-[16px] leading-[36px]">
                  Web & Mobile <br /> Well-documented <br /> 8 revisions
                  <br /> $1000/additional page
                </p>
              </div>
              <button className="bg-white text-[#233679] font-semibold h-[52px] w-full mt-[50px] mb-[29px] rounded-[3px]">
                Detail
              </button>
            </div>
          </div>
          {/* 3 */}
          <div className="w-full bg-[#792366] rounded-[10px]">
            <div className="pt-[58px] flex gap-[53px] justify-center">
              <h1 className="text-[16px] font-bold">Maintenance</h1>
              <div>
                <h2 className="text-[12px] text-white/60">Starting from</h2>
                <h1 className="font-bold text-[36px] text-end">3000$</h1>
              </div>
            </div>

            <div className="mt-[37px] border-t border-white/5 mx-[40px]">
              <div className="mx-auto mt-[37px]">
                <p className="text-center font-medium text-[16px] leading-[36px]">
                  Daily backup <br /> 3 hourse of maintenance <br /> Including
                  fixing
                  <br /> $50/additional hour
                </p>
              </div>
              <button className="bg-white text-[#792366] font-semibold h-[52px] w-full mt-[50px] mb-[29px] rounded-[3px]">
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
