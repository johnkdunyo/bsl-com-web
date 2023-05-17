import SiteLayout from "@/components/Layout/SiteLayout";
import CustomBackground1 from "@/components/animations/CustomBackground1";
import React from "react";

const Razak = () => {
  return (
    <SiteLayout pageName={"About"}>
      <>
        <div className=" py-36 sm:py-48  relative ">
          <CustomBackground1 />
          <div className="custom-container  z-10  ">
            <div className="flex flex-col sm:flex-row gap-10 mx-3 sm:mx-28">
              <div className="w-full sm:w-[40%] flex flex-col items-end">
                <img src="/assets/img/board/sam-main.png" className="" />
              </div>

              <div className="flex flex-col gap-4 w-full sm:w-[60%] sm:mt-4">
                <h1 className="font-medium text-2xl">
                  Samuel <br /> Osew – Kwatia
                </h1>
                <h2 className="text-[#AB2346] font-medium text-4xl">
                  Executive Member.
                </h2>

                <p className="paragraphText1 mt-2 z-20">
                  Samuel has over 18 years of professional experience in
                  finance, accounting, taxation, and banking. He has worked in
                  several institutions with multinational, regional and local
                  backgrounds and has been involved in key schemes of mergers,
                  acquisitions, and integrations in Ghana. Samuel commenced his
                  career at Ernst and Young (EY) where he rose to the position
                  of an Assistant Manager with direct oversight over 10 key
                  accounts including British Telecoms, St Lambert Drilling,
                  General Electric and Stanbic Bank.
                  <br />
                  <br />
                  At (EY) Samuel won the third-place position in Global Managing
                  Partner award challenge in the Asia Middle East and Africa)
                  Region (AMEA). Also, at EY he participated in several donor
                  funded project assurance reviews including IBIS and has worked
                  in different managerial positions in Six (6) Banking and
                  Financial institutions i.e., Intercontinental Bank, Access
                  Bank, Fidelity Bank, Beige, First Bank of Nigeria (FBN) and
                  OmniBSIC Bank.
                  <br />
                  <br />
                  He managed the following positions and portfolios: Chief
                  Inspector (Head Internal Audit), Group Head Retail Banking,
                  Group Head Corporate Banking, Group Head Operations,
                  Information Technology (COO) and Chief Finance Officer (CFO).
                  Samuel is very experienced and has solved many complex
                  problems and led several projects including leading the recent
                  merger between OmniBank and Sahel Sahara Bank (BSIC).
                  Throughout his career, he has designed and implemented several
                  solutions.He is a Chartered Accountant with Institute of
                  Chartered Accountants Ghana (ICA-GH). He holds a First-Class
                  Degree in Bachelor of Commerce from University of Coast, and a
                  Bachelor of Laws Degree from Mountcrest University College
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
