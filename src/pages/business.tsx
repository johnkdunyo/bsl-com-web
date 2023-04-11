import SiteLayout from "@/components/Layout/SiteLayout";
import DataCenterSection from "@/components/businessPage/DataCenterSection";
import HeroSection from "@/components/businessPage/HeroSection";
import InfoMageSystems from "@/components/businessPage/InfoMageSystems";
import React from "react";

const Business = () => {
  return (
    <SiteLayout pageName={"Business"}>
      <>
        <HeroSection />
        <InfoMageSystems />
        <DataCenterSection />
      </>
    </SiteLayout>
  );
};

export default Business;
