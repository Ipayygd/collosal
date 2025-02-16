import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import ProjectDetailPageView from "@/components/views/Projects/ProjectDetailPageView";
import Image from "next/image";

export default function ProjectDetailPage() {
  return (
    <>
      <section className="relative hidden lg:block">
        <div className="absolute min-h-screen w-full z-10">
          <Image
            src="/images/BackgroundProjectDetail.png"
            alt="Background"
            height={100}
            width={100}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            priority
            className="object-contain"
          />
        </div>
        <div className="absolute w-full h-auto z-20 pb-32">
          <Navbar />
          <ProjectDetailPageView />
          <Footer />
        </div>
      </section>
    </>
  );
}
