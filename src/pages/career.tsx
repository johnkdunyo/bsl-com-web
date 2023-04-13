import SiteLayout from "@/components/Layout/SiteLayout";
import HeroSection from "@/components/careerPage/HeroSection";
import React from "react";

const career = () => {
  return (
    <SiteLayout pageName={"Career"}>
      <>
        <HeroSection />
      </>
    </SiteLayout>
  );
};

export default career;
