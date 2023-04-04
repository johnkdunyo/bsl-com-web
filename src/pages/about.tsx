import BlueLearnMore from "@/components/aboutPage/BlueLearnMore";
import HeroSection from "@/components/aboutPage/HeroSection";
import LeadershipTeam from "@/components/aboutPage/LeadershipTeam";
import OurSubsidiaries from "@/components/aboutPage/OurSubsidiaries";
import ProudlyGhanaian from "@/components/aboutPage/ProudlyGhanaian";
import SiteLayout from "@/components/Layout/SiteLayout";
import React from "react";

export default function About() {
  return (
    <SiteLayout pageName={"About"}>
      <>
        <HeroSection />
        <ProudlyGhanaian />
        <BlueLearnMore />
        <OurSubsidiaries />
        <LeadershipTeam />
      </>
    </SiteLayout>
  );
}
