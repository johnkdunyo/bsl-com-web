import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ReactNode, useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import Mouse from "@/utils/Mouse";
import ScrollToTop from "../uiComponents/ScrollToTop";
import ChatBot from "../uiComponents/ChatBot";

interface ISiteLayoutProps {
  children: ReactNode;
  pageName:
    | "BSL Home"
    | "Spectrum Fibre"
    | "Infra Services"
    | "Digital Payment"
    | "Business"
    | "About"
    | "Career"
    | "Enquiry"
    | "Galley";
}

export default function SiteLayout({ children, pageName }: ISiteLayoutProps) {
  return (
    <>
      <Head>
        <title>{`BSL Websites | ${pageName}`}</title>
        <meta
          name="description"
          content="Broadspectrum is a proud African Information Communication Technology company that offers a unique range of innovative and advanced communication and digital "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative text-white bg-[#000A26] site_all_wrap">
        {/* <Cursor isGelly={true} cursorBackgrounColor="#C0392B" cursorSize={30} /> */}
        {/* <div className="cursor"></div> */}
        <Navbar pageName={pageName} />
        {children}
        {/* <Mouse /> */}
        <ScrollToTop />
        {/* <ChatBot /> */}
        <Footer />
      </main>
    </>
  );
}
