import FeatureCard from "@/components/blocks/FeatureCard";

const FeatureSection = () => {
  return (
    <div className="flex items-center justify-center gap-[20px] mt-[101px] px-[100px] ">
      <FeatureCard
        title="Design"
        description="The project interface will be designed first, our favorite tool is Figma."
        icon_url="/icons/figma.svg"
      />
      <FeatureCard
        title="Develop"
        description="Transform design and write business logic here. Choose the technology you want."
        icon_url="/icons/code.svg"
      />
      <FeatureCard
        title="Ship"
        description="After the work is complete, we will send the project and all its assets to you."
        icon_url="/icons/box.svg"
      />
    </div>
  );
};

export default FeatureSection;
