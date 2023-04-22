import SiteLayout from "@/components/Layout/SiteLayout";
import HeroSection from "@/components/digitalPayments/HeroSection";
import React from "react";

const bdp = () => {
  return (
    <SiteLayout pageName={"Digital Payment"}>
      <>
        <HeroSection />
      </>
    </SiteLayout>
  );
};

export default bdp;
