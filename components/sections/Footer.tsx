import Image from "next/image";
import CalloutSection from "./Home/CalloutSection";

const Footer = () => {
  return (
    <>
      <CalloutSection />
      <footer className="mt-[104px]">
        <div className="flex items-start justify-center gap-24">
          {/* 1 */}
          <div>
            <span className="flex gap-[14px]">
              <Image
                src={"/icons/CollectionOutline.svg"}
                alt="Icon Collosal"
                width={23}
                height={22}
              />
              <h1 className="font-bold text-[24px]">Collosal.</h1>
            </span>
            <p className="text-white/60 font-medium text-[16px] mt-[21px]">
              Copyright © 2021 <br /> Design By Collosal LLC
            </p>
          </div>

          {/* 2 */}
          <div className="space-y-[10px]">
            <h1 className="font-medium text-[14px] pb-4">Services</h1>
            <h2 className="text-[16px] text-white/60">Web Development</h2>
            <h2 className="text-[16px] text-white/60">App Development</h2>
            <h2 className="text-[16px] text-white/60">UI Design</h2>
            <h2 className="text-[16px] text-white/60">Consultan</h2>
            <h2 className="text-[16px] text-white/60">Maintenance</h2>
          </div>

          {/* 3 */}
          <div className="space-y-[10px]">
            <h1 className="font-medium text-[14px] pb-4">Company</h1>
            <h2 className="text-[16px] text-white/60">About</h2>
            <h2 className="text-[16px] text-white/60">Contact</h2>
            <h2 className="text-[16px] text-white/60">Send Quote</h2>
            <h2 className="text-[16px] text-white/60">Privacy Policy</h2>
            <h2 className="text-[16px] text-white/60">Term of Service</h2>
            <h2 className="text-[16px] text-white/60">Jobs</h2>
          </div>

          {/* 4 */}
          <div className="space-y-[10px]">
            <h1 className="font-medium text-[14px] pb-4">Resources</h1>
            <h2 className="text-[16px] text-white/60">Support</h2>
            <h2 className="text-[16px] text-white/60">Documentation</h2>
            <h2 className="text-[16px] text-white/60">License</h2>
            <h2 className="text-[16px] text-white/60">Sitemap</h2>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
