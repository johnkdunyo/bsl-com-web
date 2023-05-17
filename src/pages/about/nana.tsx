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
                <img src="/assets/img/board/nana-main.png" className="" />
              </div>

              <div className="flex flex-col gap-4 w-full sm:w-[60%] sm:mt-4">
                <h1 className="font-medium text-2xl">Nana Dwemoh Benneh</h1>
                <h2 className="text-[#AB2346] font-medium text-4xl">
                  Chairman.
                </h2>

                <p className="paragraphText1 mt-2 z-20">
                  Dwemoh Benneh has considerable local and international
                  expertise in banking. He collaborated briefly with Merchant
                  Bank Ltd after his graduate studies in Economics and
                  Philosophy from the University of Ghana in June 1996. Whilst
                  in Legon he was a resident member of Commonwealth Hall.
                  <br />
                  <br />
                  In September 1998 Nana Dwemoh moved to join Barclays Bank on
                  Barclays Plc’s International Business Leadership Program
                  designed to develop Business Leaders with global and
                  significant Pan African experience. Whilst with Barclays he
                  had the opportunity to work in various management roles across
                  several countries in Africa and the UK. His 15-year career
                  with Barclays Bank spanned leadership roles across Africa. He
                  was appointed as Head of Retail in Uganda and was part of the
                  Management team for Barclays in that country. There he led the
                  Retail team to expand their footprint and portfolio of
                  customers. From there he moved to Kenya as East Africa
                  Regional Sales Manager with oversight over Consumer sales
                  machinery in the Banks East African businesses. Subsequently
                  in 2003 Nana Dwemoh was appointed as Director of the SME Local
                  Business Segment for Barclays Africa based in Johannesburg,
                  South Africa with responsibility for the Banks SME strategy
                  for Africa.
                  <br />
                  <br />
                  In 2005 Nana Dwemoh Benneh moved to London to work in
                  Corporate Banking in Barclays Plc as Sales Director for
                  International Trade and Cash Solutions Barclays PLC, London.
                  He returned to Barclays Bank Ghana in 2007 as the Consumer
                  Banking Director and is credited with consolidating the gains
                  in the Bank’s consumer banking business post the Bank’s rapid
                  expansion of the franchise that was undertaken between 2006
                  and 2007. He joined Stanbic Ghana Ltd as Executive Director
                  for Personal and Business Banking in October 2013. There he
                  led the team in significantly growing market share and
                  profitability for the Bank’s Personal and Business Banking
                  franchise. In January 2021, Nana Dwemoh was appointed Managing
                  Director of UMB Bank. Nana holds an Executive MBA from London
                  Business School. He is also a member of the International
                  Academy of Retail Banking. He is a proud Akora of Achimota
                  School and member of the 1989-year group.
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
