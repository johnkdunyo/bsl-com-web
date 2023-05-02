import SiteLayout from "@/components/Layout/SiteLayout";
import HeroSection from "@/components/spectrumFibrePage/HeroSection";
import OurRolloutSection from "@/components/spectrumFibrePage/OurRolloutSection";
import PartnerShipSection from "@/components/spectrumFibrePage/PartnerShipSection";
import RollingTextSection from "@/components/spectrumFibrePage/RollingTextSection";
import React from "react";

const Spectrumfibre = () => {
  return (
    <SiteLayout pageName={"Spectrum Fibre"}>
      <>
        <HeroSection />
        <RollingTextSection />
        <OurRolloutSection />
        <PartnerShipSection />
      </>
    </SiteLayout>
  );
};

export default Spectrumfibre;
