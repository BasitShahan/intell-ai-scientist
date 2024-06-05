import Image from "next/image";
import Link from "next/link";
import MonthlyPlan from "./MonthlyPlan";
import YearlyPlan from "./YearlyPlan";
import PrePrimaryCommunity from './PrePrimaryCommunity'

export default function Purchase() {
  return (
    <>
      <div className=" bg-PurchaseCard  h-auto w-full">
        <div className="relative py-10 ">
          <div className="xs:mx-auto sm:mx-auto md:ml-12  md:mx-0  bg-btcolor rounded-full h-9 w-40">
            <h1 className="  bg-btncolor text-center relative top-1 bg-clip-text text-transparent">
              Course Pricing{" "}
            </h1>
          </div>
          <div className=" flex-col sm:w-full md:flex-row lg:flex-row   flex justify-between items-center">
            <div className="">
              <h1 className="ml-12 font-extrabold text-4xl mt-5 bg-black bg-clip-text text-transparent">
                AI Scientist Course Plan
              </h1>
            </div>
            <div className="p-7 mx-12 mt-6 max-w-[384px] h-24 bg-white gap-7 mr-2 flex items-center justify-center  shadow-custom rounded-full">
              <div>
                <button className="rounded-full w-44 h-16 text-white font-title text-lg bg-gradient-to-r from-green-600 to-teal-400">
                  <h1><Link href="/yearly-plan">Yearly Plan</Link></h1>
                </button>
              </div>
              <div>
                <h1 className="text-sm font-title font-extrabold">
                  <Link href="/monthly-plan">Monthly plan</Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* purchase cards plan code */}
        <div className=" px-10 py-10 w-full h-auto">
          <div className=" w-full flex-wrap flex gap-y-7 justify-center items-center">
            {/* monthly plan */}
           <MonthlyPlan/>
            {/* yearly plan */}
            <YearlyPlan/>
            {/* pre-primary-communityplan */}
            <PrePrimaryCommunity/>
           </div>
        </div>
      </div>
      
      {/* working on center card */}
      <div className=" relative max-md:hidden   two-color-bg  py-12 -z-30 font-title text-white xs:w-full xs:h-full  w-80 h-80   mx-auto">
        <div>
          <div className="flex relative mx-7">
            <div className=" absolute left-[10vw]">
              <Image
                src="/images/shape-04-1.png.png"
                alt="images"
                width="100"
                height="100"
              />
            </div>
            <div className=" flex justify-center items-center w-full">
              <div className=" relative top-16 rounded-lg px-auto bg-gradient-to-r from-green-600 to-teal-400 py-9  xs:w-full h-full max-w-[769px] min-h-[147px] mx-auto">
                <div className=" flex flex-col md:flex-row gap-5  justify-between items-center">
                  <div className=" max-md:flex-row flex flex-col">
                    <div className=" mx-4">
                      <h1>GET IN TOUCH</h1>
                    </div>
                    <div className=" mx-4 z-50">
                      <h1 className="font-semibold md:mt-4">
                        Example@gmail.com
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-center items-center border-2 w-20 h-20  m-4 rounded-full ">
                    <h1 className="text-center">OR</h1>
                  </div>
                  <div>
                    <div className=" max-md:flex-row flex flex-col">
                      <div className=" mx-4">
                        <h1>CALL VIA</h1>
                      </div>
                      <div className=" mx-4 z-50">
                        <h1 className="font-semibold md:mt-4">
                          Example@gmail.com
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex relative left-[-5vw] top-[6vw]">
              <div>
                <Image
                  src="/images/shape-06.png.png"
                  alt="images"
                  width="100"
                  height="100"
                />
              </div>
              <div className="relative top-[-10px] right-[50px]">
                <Image
                  src="/images/shape-12.png.png"
                  alt="images"
                  width="100"
                  className=""
                  height="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
