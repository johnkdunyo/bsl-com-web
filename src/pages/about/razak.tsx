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
                <img src="/assets/img/board/razak-main.png" className="" />
              </div>

              <div className="flex flex-col gap-4 w-full sm:w-[60%] sm:mt-4">
                <h1 className="font-medium text-2xl">Razak Awudulai</h1>
                <h2 className="text-[#AB2346] font-medium text-4xl">
                  Group C.E.O.
                </h2>

                <p className="paragraphText1 mt-2 z-20">
                  Razak Awudulai has significant public and private sector
                  experiences in managerial capacity. Razak is the Chief
                  Executive Officer (CEO) of Broadspectrum Limited. He is a
                  Founding Director and Shareholder of ACAP Consult Limited, the
                  holding company of Lebara Ghana Limited.
                  <br />
                  <br />
                  He is a lecturer at the Ghana Technology University, Graduate
                  school. Razak’s previous experience includes being the
                  Municipal Chief Executive of Kintampo, at a record age of
                  twenty-six (26) from August 2005 to March 2009.
                  <br />
                  <br />
                  As Municipal Chief Executive, he directed the affairs of a
                  Municipality with a 160,000 population and provided leadership
                  and managerial responsibilities to 20-line departments, 200
                  core staff, and 500 allied employees. He served as the Vice
                  President of the National Association of Local Authorities of
                  Ghana (NALAG), the umbrella body of all local authorities in
                  Ghana from September 2006 to October 2008.
                  <br />
                  <br />
                  Razak’s other previous experience is Management Consultant for
                  Accenture, UK, advisory support services to the Government of
                  South Sudan including the deployment of Software for
                  admissions into all public universities and the setting up of
                  a Home Finance Bank.
                  <br />
                  <br />
                  Razak holds a B. ED. Honors Degree (Arts) and an MBA (Oil and
                  Gas Management) from the Aberdeen Business School of the
                  Robert Gordon University, Scotland, UK, and a Certificate in
                  Public Sector Management and Governance from the Institute of
                  Public Private Partnership International, Washington, DC.
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
