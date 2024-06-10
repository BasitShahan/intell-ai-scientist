import React from "react";
import Image from "next/image";
export default function YearlyPlan() {
  return (
    <>
      
      <div className="shadow-lg w-full  bg-white rounded-lg h-auto border-2 border-bordercolor  ">
            <div>
              <Image
                className="mt-10 mx-auto"
                src="/images/pricing-icon-02.webp.png"
                alt="images"
                width="100"
                height="100"
              />
            </div>
            <div>
              <h1 className=" font-title text-lg text-center font-extrabold">
                Intermediate Level
              </h1>
            </div>
            <div>
              <h1 className=" px-4 py-2 text-lg font-title text-center bg-textc bg-clip-text text-transparent">
                Ai Innovater
              </h1>
            </div>
            <div>
              <h1 className="text-3xl  my-10 font-semibold font-title text-headcolor text-center sm:text-3xl">
                12k
                <span className="font-title font-medium text-2xl">/Month</span>
              </h1>
            </div>
            <div>
              <h1 className=" font-title text-center bg-textc bg-clip-text text-transparent">
                <span className="font-bold ">Duration:</span> 10 Weeks
              </h1>
            </div>
            <div className="mt-3">
              <h1 className=" font-title text-center bg-textc bg-clip-text text-transparent">
                <span className="font-bold ">Session:</span> 20(Twice a week)
              </h1>
            </div>
            <div className="mt-3">
              <h1 className=" font-title text-center bg-textc bg-clip-text text-transparent">
                <span className="font-bold ">Age Group:</span> 10-14 years
              </h1>
            </div>
            <div className="mt-3 px-3  h-[150px]">
              <h1 className="font-title text-center bg-textc bg-clip-text text-transparent">
                <span className="font-bold ">Features:</span>
                In-depth AI principles and applications Intermediate coding and
                programming Hands-on AI projects Introduction to machine
                learning Personalized feedback and mentoring Certificate of
                completion
              </h1>
            </div>
            <div className=" w-fit mx-auto">
              <button className="my-10  px-5 block mx-auto  border-textc border-2 rounded-3xl  h-12 font-title text-center  bg-gradient-to-r from-green-600 to-teal-400 text-white">
                Join Course Plan
              </button>
            </div>
          </div>
</>
  );
}
