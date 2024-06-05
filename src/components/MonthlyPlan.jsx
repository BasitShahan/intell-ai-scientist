import React from 'react'
import Image from "next/image";
export default function MonthlyPlan() {
  return (
    <>
         <div className=" w-full sm:w-9/12 md:w-1/2  lg:w-1/3 p-7">
              <div className="shadow-custom  h-auto rounded-lg border-2 border-bordercolor flex flex-col gap-y-3 justify-center items-center">
                <div>
                  <Image
                    className="mx-auto mt-10"
                    src="/images/counter-04-2.webp.png"
                    alt="images"
                    width="100"
                    height="100"
                  />
                </div>
                <div>
                  <h1 className=" font-title text-lg text-center font-extrabold">
                    6 Weeks To !2 Months
                  </h1>
                </div>
                <div>
                  <h1 className=" px-4 py-2 text-lg font-title text-center bg-textc bg-clip-text text-transparent">
                    Free for a month
                  </h1>
                </div>
                <div>
                  <h1 className=" my-10 font-title text-headcolor text-center font-semibold text-4xl">
                    $1475{" "}
                    <span className="font-title font-medium text-2xl">
                      /Yearly
                    </span>
                  </h1>
                </div>
                <div>
                  <h1 className=" font-title text-center bg-textc bg-clip-text text-transparent">
                    8 Full Days
                  </h1>
                </div>
                <div>
                  <h1 className=" font-title text-center bg-textc bg-clip-text text-transparent">
                    7:00 am to 6:00 pm
                  </h1>
                </div>
                <div>
                  <h1 className=" font-title text-center bg-textc bg-clip-text text-transparent">
                    High Resolution Videos
                  </h1>
                </div>
                <div>
                  <h1 className=" font-title text-center bg-textc bg-clip-text text-transparent">
                    24/7 Dedicated Support
                  </h1>
                </div>
                <div className=" w-fit">
                  <button className="my-10  block px-8  border-textc border-2 rounded-3xl   h-12  xs:w-full sm:w-full  font-title text-center bg-textc bg-clip-text text-transparent">
                    Join Course Plan
                  </button>
                </div>
              </div>
            </div>
         
    </>
  )
}
