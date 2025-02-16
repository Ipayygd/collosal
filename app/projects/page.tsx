import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import ProjectsPageView from "@/components/views/Projects/ProjectsPageView";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <section className="relative hidden lg:block">
      <div className="absolute min-h-screen w-full z-10">
        <Image
          src="/images/BackgroundProjects.png"
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
        <ProjectsPageView />
        <Footer />
      </div>
    </section>
  );
}
