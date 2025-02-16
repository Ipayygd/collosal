"use client";

import { DM_Sans, Noto_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DMSans = DM_Sans({ subsets: ["latin"] });
const NotoSans = Noto_Sans({ subsets: ["latin"] });

const NavList = [
  {
    title: "Services",
    link: "/",
  },
  {
    title: "How We Work",
    link: "/",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "About",
    link: "/",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="px-[207px] mt-[53px] flex items-center">
      <div className="w-full flex items-center justify-between">
        <Link href="/" className="h-[39px] flex items-center gap-4">
          <Image
            src={"/icons/icon-collosal.svg"}
            width={23}
            height={22}
            alt="Icon Collosal"
          />
          <h2 className={`${DMSans.className} font-bold text-2xl`}>
            Collosal.
          </h2>
        </Link>

        <div className="flex items-center gap-[50px]">
          {NavList.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`text-[16px] text-white/80 hover:text-white transition duration-300 ease-in-out `}
            >
              <h2
                className={`${NotoSans.className} ${
                  pathname === item.link && "text-white"
                }`}
              >
                {item.title}
              </h2>
            </Link>
          ))}
        </div>

        <span>
          <button className="bg-white/10 text-white rounded-[3px] px-[30px] py-[10px]">
            Contact
          </button>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
