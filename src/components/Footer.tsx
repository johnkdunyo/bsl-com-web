import Link from "next/link";
import React from "react";

const SocialMediaButtons = ({ name, href }: { name: string; href: string }) => {
  return (
    <button>
      <Link href={href}>
        <img src={`/assets/icons/social-media/${name}.svg`} alt={name} />
      </Link>
    </button>
  );
};

const Footer = () => {
  return (
    <section className=" bg-[#11233C]">
      {/* mobile */}
      <div className=" sm:hidden custom-container pt-20 flex flex-col gap-16">
        <div className="flex flex-col justify-center items-center gap-14">
          <h1 className="text-4xl text-center font-extralight leading-10">
            Ready to <span className="font-medium">transform</span> your
            <span className="font-medium"> business</span> with us with
            <span className="font-medium"> speed</span>?
          </h1>
          <button className="custom-button1">
            <Link href="/enquiry">Get in Touch</Link>
          </button>
        </div>

        <div>
          <h1 className="uppercase text-[#82AEC9] text-lg font-medium tracking-widest">
            Business
          </h1>
          <ul className="uppercase flex flex-col gap-2.5 text-lg mt-3">
            <li>About</li>
            <li>CAREERS</li>
            <li>PARTNERS</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>

        <div className="w-full flex justify-betweenh-full  items-start text-lg ">
          <div className="flex flex-col items-start w-full justify-between gap-4">
            <div className="flex gap-2 flex-col  h-full">
              <h1 className="uppercase text-[#82AEC9] text-lg font-medium tracking-widest">
                Contact Us
              </h1>
              <h1 className="text-lg">Broadspectrum Ltd.</h1>
            </div>
            <div className="flex gap-2 flex-col  h-full">
              <h1 className="uppercase text-lg">HEAD OFFICE</h1>
              <h1>No 24 Botwe Dzorwulu Road, Dzorwulu-Accra</h1>
            </div>
          </div>

          <div className="flex flex-col items-start w-full justify-between gap-4">
            <div className="flex gap-2 flex-col  h-full">
              <h1 className="uppercase text-[#82AEC9] text-lg font-medium tracking-widest">
                Phone
              </h1>
              <h1>+233(0) 593 808 064</h1>
            </div>
            <div className="flex gap-2 flex-col  h-full">
              <h1 className="uppercase text-[#82AEC9] text-lg font-medium tracking-widest">
                Email
              </h1>
              <h1>contact@bsl.com.gh</h1>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <img src="/assets/icons/directions-right.svg" alt="get directions" />
          <h1 className="uppercase tracking-widest text-lg">GET DIRECTIONS </h1>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-[#82AEC9] text-lg uppercase tracking-widest font-medium">
            Follow Us
          </h1>
          <div className="flex gap-3">
            <SocialMediaButtons href="/" name="instagram" />
            <SocialMediaButtons href="/" name="linkedin" />
            <SocialMediaButtons href="/" name="twitter" />
            <SocialMediaButtons href="/" name="facebook" />
            <SocialMediaButtons href="/" name="youtube" />
          </div>
        </div>

        <div className="flex flex-col ">
          <hr className="-mx-4 border border-gray-400 " />
          <div className=" justify-center items-center flex flex-col text-center text-sm gap-4 my-10">
            <p>No 24 Botwe Dzorwulu Road, Dzorwulu-Accra</p>
            <p>
              © Copyright 2023 Broadspectrum Ltd. <br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden sm:flex flex-col custom-container pt-20 pb-10 gap-20">
        <div className="flex">
          <div className="w-full flex flex-col items-start gap-12 h-full ">
            <h1 className="text-6xl font-extralight">
              Ready to <span className="font-medium">transform</span> your
              <span className="font-medium"> business</span> with us with
              <span className="font-medium"> speed</span>?
            </h1>
            <button className="custom-button1 text-2xl">
              <Link href="/enquiry">Get in Touch</Link>
            </button>
          </div>

          <div className="w-full flex flex-col justify-between items-start  pl-10 gap-16">
            {/* row one */}
            <div className="flex justify-between  w-full gap-4 ">
              <div className="w-full flex gap-6 flex-col">
                <div className="flex gap-2 flex-col ">
                  <h1 className="uppercase text-[#82AEC9] text-lg font-medium tracking-widest">
                    Contact Us
                  </h1>
                  <h1 className="text-lg">Broadspectrum Ltd.</h1>
                </div>
                <div className="flex gap-1 flex-col  ">
                  <h1 className="uppercase text-lg font-medium">HEAD OFFICE</h1>
                  <h1 className="text-lg">
                    No 24 Botwe <br /> Dzorwulu Road, <br />
                    Dzorwulu-Accra
                  </h1>
                </div>
              </div>

              <div className="w-full ">
                <h1 className="uppercase text-[#82AEC9] text-lg font-medium tracking-widest">
                  Business
                </h1>
                <ul className="uppercase flex flex-col gap-2.5 text-lg mt-3">
                  <li>About</li>
                  <li>CAREERS</li>
                  <li>PARTNERS</li>
                  <li>PRIVACY POLICY</li>
                </ul>
              </div>
            </div>

            {/* row two */}
            <div className="flex justify-between  w-full gap-4 ">
              <div className="w-full ">
                <div className="flex gap-4 items-center">
                  <img
                    src="/assets/icons/directions-right.svg"
                    alt="get directions"
                  />
                  <h1 className="uppercase tracking-widest text-lg">
                    GET DIRECTIONS{" "}
                  </h1>
                </div>
                <div className="mt-4  flex flex-col gap-6">
                  <div className="flex gap-2 flex-col  h-full">
                    <h1 className="uppercase text-[#82AEC9] text-lg font-medium tracking-widest">
                      Phone
                    </h1>
                    <h1>+233(0) 593 808 064</h1>
                  </div>
                  <div className="flex gap-2 flex-col  h-full">
                    <h1 className="uppercase text-[#82AEC9] text-lg font-medium tracking-widest">
                      Email
                    </h1>
                    <h1>contact@bsl.com.gh</h1>
                  </div>
                </div>
              </div>
              <div className="w-full ">
                <h1 className="text-[#82AEC9] text-lg uppercase tracking-widest font-medium">
                  Follow Us
                </h1>
                <div className="flex gap-3 mt-3">
                  <SocialMediaButtons href="/" name="instagram" />
                  <SocialMediaButtons href="/" name="linkedin" />
                  <SocialMediaButtons href="/" name="twitter" />
                  <SocialMediaButtons href="/" name="facebook" />
                  <SocialMediaButtons href="/" name="youtube" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <hr className="border border-gray-400 " />
          <div className="flex justify-between mt-4">
            <p>No 24 Botwe Dzorwulu Road, Dzorwulu-Accra</p>
            <p>© Copyright 2023 Broadspectrum Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
