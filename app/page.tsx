import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import HomepageView from "@/components/views/HomepageView";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative hidden lg:block">
      <div className="absolute h-full w-full z-10">
        <Image
          src="/images/Background.png"
          alt="Background"
          width={1000}
          height={1000}
          sizes="100vw"
          priority
          style={{ width: "100%", height: "auto" }}
          className="object-cover"
        />
      </div>
      <div className="absolute w-full h-auto z-20 pb-32">
        <Navbar />
        <HomepageView />
        <Footer />
      </div>
    </section>
  );
}
