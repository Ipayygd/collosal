import Image from "next/image";

const TestimonialSection = () => {
  return (
    <div className="px-[66px] mt-[120px]">
      <div className="w-full flex items-center justify-center">
        <div className="text-center max-w-[507px]">
          <h2 className="text-[#16FCD2] font-semibold text-[16px]">
            TESTIMONIAL
          </h2>
          <h1 className="font-bold text-[30px]">
            What do our clients say that we never let down?
          </h1>
        </div>
      </div>
      <div className="flex justify-center gap-[31px] mt-[94px]">
        {/* 1 */}
        <div className="w-[415px] h-[415px] bg-white/5 mt-[42px] rounded-[3px]">
          <div className="flex flex-col justify-center items-center pt-[61px]">
            <div className="w-[90px] h-[90px] relative">
              <Image
                src={"/logo/Avatar.svg"}
                alt="Avatar"
                fill
                objectFit="cover"
              />
            </div>

            <div className="mt-[21px]">
              <h1 className="font-bold text-[18px]">Courtney Henry</h1>
              <h2 className="text-white/60 font-medium text-[14px] mt-[8px]">
                Biffco Enterprises Ltd.
              </h2>
            </div>

            <div className="text-center pt-[24px]">
              <p className="text-white/60 font-medium text-[16px] leading-[32px]">
                &quot;Very easy to use. I made back the <br /> purchase price in
                just 48 hours! It&apos;s great. <br /> It&apos;s is both
                attractive and highly <br /> adaptable.&quot;
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="w-[415px] h-[415px] bg-white/5 rounded-[3px] border-[2px] border-[#6016FC]">
          <div className="flex flex-col justify-center items-center pt-[61px]">
            <div className="w-[90px] h-[90px] relative">
              <Image
                src={"/logo/Avatar2.svg"}
                alt="Avatar"
                fill
                objectFit="cover"
              />
            </div>

            <div className="mt-[21px]">
              <h1 className="font-bold text-[18px]">Esther Howard</h1>
              <h2 className="text-white/60 font-medium text-[14px] mt-[8px]">
                Abstergo Ltd.
              </h2>
            </div>

            <div className="text-center pt-[24px]">
              <p className="text-white/60 font-medium text-[16px] leading-[32px]">
                &quot;Your company is truly upstanding and is <br /> behind its
                product 100%. It&apos;s the perfect <br /> solution for our
                business. It has really <br /> helped our business.&quot;
              </p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="w-[415px] h-[415px] bg-white/5 mt-[42px] rounded-[3px]">
          <div className="flex flex-col justify-center items-center pt-[61px]">
            <div className="w-[90px] h-[90px] relative">
              <Image
                src={"/logo/Avatar3.svg"}
                alt="Avatar"
                fill
                objectFit="cover"
              />
            </div>

            <div className="mt-[21px]">
              <h1 className="font-bold text-[18px]">Ronald Richards</h1>
              <h2 className="text-white/60 font-medium text-[14px] mt-[8px]">
                Barone LLC.
              </h2>
            </div>

            <div className="text-center pt-[24px]">
              <p className="text-white/60 font-medium text-[16px] leading-[32px]">
                &quot;I am really satisfied with it. I&apos;m good to <br /> go.
                It really saves me time and effort. It&apos;s <br /> is exactly
                what our business has been <br /> lacking.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[75px]">
        <div className="flex gap-[8px]">
          <div className="w-[10px] h-[10px] rounded-full bg-white" />
          <div className="w-[10px] h-[10px] rounded-full bg-white opacity-20" />
          <div className="w-[10px] h-[10px] rounded-full bg-white opacity-20" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
