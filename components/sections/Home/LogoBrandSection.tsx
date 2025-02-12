import Image from "next/image";

const LogoBrandSection = () => {
  return (
    <div className="mt-[60px] mx-[208px] h-[106px] border-y border-white/10 flex items-center justify-center gap-[44px]">
      <span>
        <Image
          src="/logo/Github-Logo.svg"
          width={100}
          height={100}
          alt="Logo Brand"
        />
      </span>
      <span>
        <Image
          src="/logo/Forbes.com-Logo.svg"
          width={100}
          height={100}
          alt="Logo Brand"
        />
      </span>
      <span>
        <Image
          src="/logo/Google-Logo.svg"
          width={100}
          height={100}
          alt="Logo Brand"
        />
      </span>
      <span>
        <Image
          src="/logo/Microsoft-Logo.svg"
          width={100}
          height={100}
          alt="Logo Brand"
        />
      </span>
      <span>
        <Image
          src="/logo/Facebook-Logo.svg"
          width={100}
          height={100}
          alt="Logo Brand"
        />
      </span>
    </div>
  );
};

export default LogoBrandSection;
