import SiteLayout from "@/components/Layout/SiteLayout";
import AboutSection from "@/components/infraServices/AboutSection";
import HeroSection from "@/components/infraServices/HeroSection";
import OurSolutionSection from "@/components/infraServices/OurSolutionSection";
import ReliableSection from "@/components/infraServices/ReliableSection";
import React from "react";

const Isg = () => {
  return (
    <SiteLayout pageName={"Infra Services"}>
      <>
        <HeroSection />
        <AboutSection />
        <ReliableSection />
        <OurSolutionSection />
      </>
    </SiteLayout>
  );
};

export default Isg;
