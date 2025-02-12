import HeroSection from "@/components/sections/Home/HeroSection";
import FeatureSection from "@/components/sections/Home/FeatureCard";
import LogoBrandSection from "@/components/sections/Home/LogoBrandSection";
import HowWeWorkSection from "@/components/sections/Home/HowWeWorkSection";
import OurTeamSection from "@/components/sections/Home/OurTeamSection";
import ProjectSection from "@/components/sections/Home/ProjectSection";
import ServiceSection from "@/components/sections/Home/ServiceSection";
import TestimonialSection from "@/components/sections/Home/TestimonialSection";

const HomepageView = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <FeatureSection />
      <LogoBrandSection />
      <HowWeWorkSection />
      <OurTeamSection />
      <ProjectSection />
      <ServiceSection />
      <TestimonialSection />
    </div>
  );
};

export default HomepageView;
