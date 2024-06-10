import React from "react";
import Image from "next/image";
export default function PrePrimaryCommunity() {
  return (
    <>
      
      <div className=" md:relative md:left-[50%] lg:left-0  lg:mx-0 md:mt-4  lg:mt-0 shadow-lg  w-full  rounded-lg h-auto border-2 border-bordercolor">
            <div className="">
              <Image
                className=" mt-10 mx-auto"
                src="/images/pricing-icon-03.webp.png"
                alt="images"
                width="100"
                height="100"
              />
            </div>
            <div>
              <h1 className=" font-title text-lg text-center font-extrabold">
                Advanced Level
              </h1>
            </div>
            <div>
              <h1 className=" px-4 py-2 text-lg font-title text-center bg-textc bg-clip-text text-transparent">
                AI Master
              </h1>
            </div>
            <div>
              <h1 className="text-3xl sm:text-3xl font-semibold my-10 font-title text-headcolor text-center ">
                15k
                <span className="font-title font-medium text-2xl">/Month</span>
              </h1>
            </div>
            <div className="">
              <h1 className=" font-title text-center bg-textc bg-clip-text text-transparent">
                <span className="font-bold ">Duration:</span> 10 Weeks
              </h1>
            </div>
            <div className="mt-3">
              <h1 className=" font-title text-center bg-textc bg-clip-text text-transparent">
                <span className="font-bold ">Session:</span> 24 (Twice a week){" "}
              </h1>
            </div>
            <div className="mt-3">
              <h1 className=" font-title text-center bg-textc bg-clip-text text-transparent">
                <span className="font-bold ">Age Group:</span> 12-16 years{" "}
              </h1>
            </div>
            <div className="mt-3 px-3 h-[150px] ">
              <h1 className=" font-title text-center bg-textc bg-clip-text text-transparent">
                <span className="font-bold ">Features:</span> Advanced AI and
                machine learning concepts Complex coding projects Real-world AI
                applications Collaboration on group projects Access to AI tools
                and software Ongoing support and resources Certificate of
                mastery
              </h1>
            </div>
            <div className=" w-fit mx-auto">
              <button className=" my-10 px-5 mt-10 block  border-textc border-2 rounded-3xl  h-12  xs:w-full sm:w-full font-title text-center bg-textc bg-clip-text text-transparent">
                Join Course Plan
              </button>
            </div>
          </div>
    </>
  );
}
