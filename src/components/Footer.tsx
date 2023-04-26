import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const SocialMediaButtons = ({ name, href }: { name: string; href: string }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
    >
      <Link href={href}>
        <img
          src={`/assets/icons/social-media/${name}.svg`}
          alt={name}
          className="h-[90%]"
        />
      </Link>
    </motion.button>
  );
};

const Footer = () => {
  return (
    <section className=" bg-[#11233C]">
      {/* mobile */}
      <div className=" md:hidden custom-container pt-20 flex flex-col gap-16 text-sm">
        <div className="flex flex-col justify-center items-center gap-14">
          <h1 className="text-4xl text-center font-extralight leading-[3rem]">
            Ready to <span className="font-medium">transform</span> your
            <span className="font-medium"> business</span> with us with
            <span className="font-medium"> speed</span>?
          </h1>
          <button className="custom-button1">
            <Link href="/enquiry">Get in Touch</Link>
          </button>
        </div>

        <div>
          <h1 className="uppercase text-[#82AEC9] text-sm font-medium tracking-widest">
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
              <h1 className="uppercase text-[#82AEC9] text-sm font-medium tracking-widest">
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
              <h1 className="uppercase text-[#82AEC9] text-sm font-medium tracking-widest">
                Phone
              </h1>
              <h1 className="whitespace-nowrap">+233(0) 593 808 064</h1>
            </div>
            <div className="flex gap-2 flex-col  h-full">
              <h1 className="uppercase text-[#82AEC9] text-sm font-medium tracking-widest">
                Email
              </h1>
              <h1>contact@bsl.com.gh</h1>
            </div>
          </div>
        </div>

        <motion.div
          className="flex gap-4 items-center"
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <img src="/assets/icons/directions-right.svg" alt="get directions" />
          <h1 className="uppercase tracking-widest text-lg">GET DIRECTIONS </h1>
        </motion.div>

        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-[#82AEC9] text-sm uppercase tracking-widest font-medium">
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
          <hr className="-mx-4 border-[0.1px] border-gray-400 " />
          <div className=" justify-center items-center flex flex-col text-center text-xs gap-4 my-4 mb-8">
            <p>No 24 Botwe Dzorwulu Road, Dzorwulu-Accra</p>
            <p>
              © Copyright 2023 Broadspectrum Ltd. <br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden md:flex flex-col custom-container pt-20 pb-10 gap-20 text-lg">
        <div className="flex justify-between  gap-[10%]">
          <div className="w-[55%] flex flex-col items-start gap-12 h-full ">
            <h1 className="text-5xl font-extralight leading-[4.5rem]">
              Ready to <span className="font-medium">transform</span> your
              <span className="font-medium"> business</span> with us with
              <span className="font-medium " style={{ whiteSpace: "pre-line" }}>
                {" "}
                speed
              </span>
              ?
            </h1>
            <button className="custom-button1 text-2xl">
              <Link href="/enquiry">Get in Touch</Link>
            </button>
          </div>

          <div className="w-[43%] flex flex-col justify-between items-end  gap-16 ">
            {/* row one */}
            <div className="flex justify-between  w-full gap-6  ">
              <div className="w-full flex gap-6 flex-col">
                <div className="flex gap-2 flex-col ">
                  <h1 className="uppercase text-[#82AEC9] text-sm font-medium tracking-widest">
                    Contact Us
                  </h1>
                  <h1 className="">Broadspectrum Ltd.</h1>
                </div>
                <div className="flex gap-1 flex-col  ">
                  <h1 className="uppercase  font-medium">HEAD OFFICE</h1>
                  <h1 className="">
                    No 24 Botwe <br /> Dzorwulu Road, <br />
                    Dzorwulu-Accra
                  </h1>
                </div>
              </div>

              <div className="w-full ">
                <h1 className="uppercase text-[#82AEC9] text-sm font-medium tracking-widest">
                  Business
                </h1>
                <ul className="uppercase flex flex-col gap-2.5  mt-3">
                  <li>About</li>
                  <li>CAREERS</li>
                  <li>PARTNERS</li>
                  <li>PRIVACY POLICY</li>
                </ul>
              </div>
            </div>

            {/* row two */}
            <div className="flex justify-between  w-full gap-6 ">
              <div className="w-full ">
                <motion.div
                  className="flex gap-4 items-center"
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                >
                  <img
                    src="/assets/icons/directions-right.svg"
                    alt="get directions"
                  />
                  <h1 className="uppercase tracking-widest text-lg">
                    GET DIRECTIONS{" "}
                  </h1>
                </motion.div>
                <div className="mt-4  flex flex-col gap-6">
                  <div className="flex gap-2 flex-col  h-full">
                    <h1 className="uppercase text-[#82AEC9] text-sm font-medium tracking-widest">
                      Phone
                    </h1>
                    <h1>+233(0) 593 808 064</h1>
                  </div>
                  <div className="flex gap-2 flex-col  h-full">
                    <h1 className="uppercase text-[#82AEC9] text-sm font-medium tracking-widest">
                      Email
                    </h1>
                    <h1>contact@bsl.com.gh</h1>
                  </div>
                </div>
              </div>
              <div className="w-full ">
                <h1 className="text-[#82AEC9] text-sm uppercase tracking-widest font-medium">
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
          <hr className="  border-[0.1px] border-gray-500 " />
          <div className="flex justify-between mt-3 text-xs tracking-wide">
            <p>No 24 Botwe Dzorwulu Road, Dzorwulu-Accra</p>
            <p>© Copyright 2023 Broadspectrum Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
