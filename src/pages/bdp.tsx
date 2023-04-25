import SiteLayout from "@/components/Layout/SiteLayout";
import AboutSection from "@/components/digitalPayments/AboutSection";
import HeroSection from "@/components/digitalPayments/HeroSection";
import React from "react";

const bdp = () => {
  return (
    <SiteLayout pageName={"Digital Payment"}>
      <>
        <HeroSection />
        <AboutSection />
      </>
    </SiteLayout>
  );
};

export default bdp;
