import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Footer from "@/components/Footer";
import HappyClients from "@/components/homePage/HappyClients";
import TrustedBy from "@/components/homePage/TrustedBy";
import OurCultureSection from "@/components/homePage/OurCultureSection";
import CertifiedSection from "@/components/homePage/CertifiedSection2";
import HeroSection from "@/components/homePage/HeroSection";

const inter = Inter({ subsets: ["latin"] });

const WhyChooseUsComponent = ({
  imageURL,
  title,
  description,
  orderText,
}: {
  imageURL: string;
  title: string;
  description: string;
  orderText: "first" | "last";
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-24">
      <div className="w-full  flex justify-center">
        <img src={imageURL} className="w-full sm:p-3 md:p-6" />
      </div>

      <div
        className={`flex flex-col justify-center gap-6 w-full order-last ${
          orderText === "first" ? "sm:order-first" : "sm:order-last"
        } `}
      >
        <h1 className="text-3xl font-medium">{title}</h1>
        <p className="text-lg tracking-wide">{description}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const [textSize, setTextSize] = useState("8rem");
  return (
    <>
      <Head>
        <title>BSL Websites</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative text-white">
        <Navbar pageName={"BSL Home"} />
        {/* hero */}
        <HeroSection />

        <section className="custom-section-bg flex flex-col   pt-20 -mt-10 pb-8">
          <section className="flex w-full flex-col justify-center items-center  container mx-auto px-4 sm:px-0 mt-16 mb-5">
            <div className=" max-w-2xl text-center">
              <h1 className="uppercase text-[#AB2346] text-xl mb-10 tracking-wide font-medium ">
                You can count on us
              </h1>
              <p className="text-white tracking-wide text-base">
                Our determination as a business is to offer world class
                connectivity and digital services to our clients and this has
                enabled us to build a dynamic 360 solution approach for
                connectivity, digital payment services, internet service
                provision value added and messaging services.
              </p>
            </div>
          </section>
          <section className="my-8  h-16 flex items-center">
            <h1
              className={`text-4xl sm:text-[8rem]  hover:text-[10rem]  w-full text-[#AB2346]  inline-block text-center tracking-wider `}
            >
              Why <span className="uppercase font-bold">Choose</span> us?
            </h1>
          </section>

          <section className="flex flex-col custom-container gap-10  my-10">
            <WhyChooseUsComponent
              imageURL="/assets/img/whyChooseUs/picture1.png"
              title="We Plan for Success and connect your business to the digital world"
              description="Our team of experts are comprised of specialists with years of
          experience that hail from various backgrounds in the technology
          industry. We identify our clients’ needs through detailed discussions
          and assessments of their business and provide them with our vast
          solutions."
              orderText="last"
            />
            <WhyChooseUsComponent
              imageURL="/assets/img/whyChooseUs/picture2.png"
              title="We Transform"
              description="We assist businesses to have a seamless workflow across all units through our subsidiaries and multiple digital services and solutions."
              orderText="first"
            />
          </section>
        </section>

        <section className=" mission-section h-[75vh] sm:h-[50vh]">
          <div className="custom-container flex flex-col sm:flex-row justify-center gap-8 sm:gap-20 h-full w-full">
            <div className="w-full h-full flex flex-col justify-center gap-3 pl-0 sm:pl-20">
              <h1 className="font-medium text-3xl mt-0 sm:-mt-6">Mission</h1>
              <p className="text-lg">
                To be Africa’s communication and digital partner of choice.
              </p>
            </div>

            <div className="w-full h-full flex flex-col justify-center gap-3 pl-0 sm:pl-20">
              <h1 className="font-medium text-3xl">Vision</h1>
              <p className="text-lg">
                To be a world class communication and Digital partner of choice
                from Africa by Africans.
              </p>
            </div>
          </div>
        </section>
        <CertifiedSection />
        <OurCultureSection />
        <TrustedBy />
        <HappyClients />
        <Footer />
      </main>
    </>
  );
}
