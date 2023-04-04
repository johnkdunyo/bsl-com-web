import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Footer from "@/components/Footer";
import HappyClients from "@/components/homePage/HappyClients";
import TrustedBy from "@/components/homePage/TrustedBy";
import OurCultureSection from "@/components/homePage/OurCultureSection";
import CertifiedSection from "@/components/homePage/CertifiedSection";
import HeroSection from "@/components/homePage/HeroSection";
import SiteLayout from "@/components/Layout/SiteLayout";
import MissionVission from "@/components/homePage/MissionVission";
import VideoSection from "@/components/homePage/VideoSection";
import YouCanCountOnUs from "@/components/homePage/YouCanCountOnUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [textSize, setTextSize] = useState("8rem");
  return (
    <SiteLayout pageName={"BSL Home"}>
      <>
        <HeroSection />
        <YouCanCountOnUs />
        <MissionVission />
        <CertifiedSection />
        <OurCultureSection />
        <TrustedBy />
        <HappyClients />
      </>
    </SiteLayout>
  );
}
