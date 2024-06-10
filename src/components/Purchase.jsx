import Image from "next/image";
import Link from "next/link";
import MonthlyPlan from "./MonthlyPlan";
import YearlyPlan from "./YearlyPlan";
import PrePrimaryCommunity from "./PrePrimaryCommunity";

export default function Purchase() {
  return (
    <>
      <div className=" bg-PurchaseCard  h-auto w-full">
        <div className="flex flex-col gap-6 relative py-10 ">
          <div className="  xs:mx-auto sm:mx-auto md:ml-12  md:mx-0  bg-btcolor rounded-full h-9 w-40">
            <h1 className="  bg-btncolor text-center relative top-1 bg-clip-text text-transparent">
              Course Pricing{" "}
            </h1>
          </div>
          <div className=" flex-col gap-6 sm:w-full md:flex-row lg:flex-row   flex justify-between items-center">
            <div className="">
              <h1 className="ml-12 font-extrabold text-4xl mt-5 bg-black bg-clip-text text-transparent">
                AI Scientist Course Plan
              </h1>
            </div>
            <div className="sm:p-7 xs:p-3  sm:mx-12 mt-6 xs:max-w-[280px] sm:max-w-[384px] h-24 bg-white gap-7  mr-2 flex items-center justify-center  shadow-custom rounded-full">
              <div>
                <button className="rounded-full w-36  sm:w-44 h-16 text-white font-title text-lg bg-gradient-to-r from-green-600 to-teal-400">
                  <h1>
                    <Link href="/yearly-plan">Yearly Plan</Link>
                  </h1>
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
        <div className="gap-4  p-12 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1">
          {/* monthly plan starts */}

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
          {/* monthly plan ends here */}

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

          {/* yearly plan ends here */}

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

          {/* preprimary commuunity ends here */}
        </div>
      </div>
      {/* working on center card */}
      <div className="  relative max-md:hidden   two-color-bg  py-12 -z-30 font-title text-white xs:w-full xs:h-full  w-80 h-80   mx-auto">
        <div>
          <div className="flex relative mx-7">
            <div className=" absolute left-[10vw]">
              <Image
                className=""
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
