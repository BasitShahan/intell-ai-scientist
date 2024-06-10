import React from 'react'
import Image from "next/image";
export default function MonthlyPlan() {
  return (
    <>
 <div className=" shadow-custom w-full h-auto rounded-lg border-2 border-bordercolor ">
            <div>
              <Image
                className=" mt-10 mx-auto"
                src="/images/counter-04-2.webp.png"
                alt="images"
                width="100"
                height="100"
              />
            </div>
            <div>
              <h1 className="font-title text-lg text-center font-extrabold">
                Beginner Level
              </h1>
            </div>
            <div>
              <h1 className="px-4 font-semibold py-2 text-lg font-title text-center bg-textc bg-clip-text text-transparent">
                Ai Explorer
              </h1>
            </div>
            <div>
              <h1 className="my-10 font-title text-headcolor text-center font-semibold text-3xl">
                9k
                <span className="font-title font-medium text-2xl">/Month</span>
              </h1>
            </div>
            <div>
              <h1 className="font-title text-center bg-textc bg-clip-text text-transparent">
                <span className="font-bold ">Duration:</span> 8 Weeks
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="font-title text-center bg-textc bg-clip-text text-transparent">
                <span className="font-bold ">Session:</span> 16 (Twice a week)
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="font-title text-center bg-textc bg-clip-text text-transparent">
                <span className="font-bold ">Age Group:</span> 9-12 years
              </h1>
            </div>
            <div className="px-3 mt-3 h-[150px]">
              <h1 className="font-title text-center bg-textc bg-clip-text text-transparent">
                <span className="font-bold">Features:</span>
                Introduction to AI concepts Fun and interactive learning modules
                Basic coding exercises AI-based games and projects Certificate
                of completion
              </h1>
            </div>
            <div className="w-fit mx-auto">
              <button className="my-10 block px-8 border-textc border-2 rounded-3xl h-12 xs:w-full sm:w-full font-title text-center bg-textc bg-clip-text text-transparent">
                Join Course Plan
              </button>
            </div>
          </div>
         
    </>
  )
}
