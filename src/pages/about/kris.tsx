import SiteLayout from "@/components/Layout/SiteLayout";
import CustomBackground1 from "@/components/animations/CustomBackground1";
import React from "react";
import Image from "next/image";

const Razak = () => {
  return (
    <SiteLayout pageName={"About"}>
      <>
        <div className=" py-36 sm:py-48  relative ">
          <CustomBackground1 />
          <div className="custom-container  z-10  ">
            <div className="flex flex-col sm:flex-row gap-10 mx-3 sm:mx-28 ">
              <div className="w-full sm:w-[40%] flex flex-col items-end">
                <Image
                  src="https://res.cloudinary.com/diek2uivi/image/upload/v1686065715/bsl-website/bsl/board/kris-main_emy7v4.png"
                  height={952}
                  width={621}
                  alt="kris"
                  className=""
                  placeholder="blur"
                  blurDataURL="https://res.cloudinary.com/diek2uivi/image/upload/v1686065715/bsl-website/bsl/board/kris-main_emy7v4.png"
                />
              </div>

              <div className="flex flex-col gap-4 w-full sm:w-[60%] sm:mt-4">
                <h1 className="font-medium text-2xl">Kris Senanu</h1>
                <h2 className="text-[#AB2346] font-medium text-4xl">
                  Executive Member.
                </h2>

                <p className="paragraphText1 mt-2 z-20">
                  Kris is an accomplished business leader with 20+ years of
                  experience in creating enabling environments and building
                  high-performance teams. Kris is enthusiastic about the
                  entrepreneurial ecosystem and has helped to grow many tech
                  businesses and mentored many tech entrepreneurs on the
                  continent. More specifically, he has experience working with
                  and helping to grow Startups, FinTech and Tertiary Educational
                  Institutions. He is a transformational leader and respected
                  ICT champion with a passion for finding, grooming, and
                  coaching talent, and can navigate ambiguity within multi-level
                  and matrixed organizations.
                  <br />
                  <br />
                  He has a tenacious commitment to driving revenue and
                  market-share growth. He is also able to explicitly envision,
                  enable, and successfully execute high-value complex projects.
                  He is currently the Managing Director — of Digital Division,
                  at Telkom Kenya, leading the charge to grow the company’s
                  Corporate Market share in a highly competitive environment,
                  through the introduction of more innovative solutions and
                  strategic value addition. Prior to this, he worked with Access
                  Kenya (Now Internet Solutions) for close to 15 years, getting
                  that business to become the first ICT firm to list on the
                  Nairobi Securities Exchange, expanding the business’s
                  footprint into East Africa and steering its acquisition by
                  Internet Solutions in 2014, before exiting as its Deputy CEO,
                  in 2016. Before that, in 1996, he had collaborated with a
                  pioneer tech company, Swift Global, where his career in
                  Technology began.
                  <br />
                  <br />
                  Kris is a distinguished fellow of both the Chartered Institute
                  of Marketing and the Kenya Institute of Management. He holds
                  an MBA in Strategic Management from Warwick Business School as
                  well as an International Business Administration Degree,
                  majoring in Marketing, from USIU — Africa. Kris is also the
                  Chair of the United States International University Council.
                  Other past and present Chairmanships he holds include: The
                  Governing Council at the Kenya Institute of Management, the
                  Chair of the Pan African agency BTL Africa, headquartered in
                  Ghana, and the financial solution provider Craft Silicon. More
                  recently, he accepted a cause that is close to his heart;
                  Board membership at the Amahoro Coalition, an African-led
                  initiative of which he is also co-founder, who is championing
                  the economic inclusion of refugees on the continent, majorly
                  by way of post-secondary education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </SiteLayout>
  );
};

export default Razak;
