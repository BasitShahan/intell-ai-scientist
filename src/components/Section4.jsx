 import  Image from "next/image"
export default function Section4() {
  return (
    <>
      <div className="mt-[132px] bg-PurchaseCard w-full h-full overflow-y-hidden py-[103px] px-12">
        <div className="mt-3">
          <div className=" mx-auto bg-btcolor rounded-full flex items-center justify-center  h-9 w-60">
            <h1 className="font-title bg-btncolor text-sm font-medium  bg-clip-text text-transparent">
              EDUCATION FOR EVERYONE{" "}
            </h1>
          </div>
          <div className="mt-3 max-w-[1267px] h-full">
            <h1 className="bg-black bg-clip-text text-transparent text-center text-2xl md:text-3xl lg:text-4xl font-bold font-title">
              People Like AI scientist’s Education.
              <br /> No Joking - Parents Review Here!
            </h1>
          </div>
          <div className="mx-auto flex flex-col lg:flex-row  justify-center items-center lg:justify-between w-full h-full gap-y-10 ">
        <div className=" mt-10 lg:mt-48  lg:w-1/2 w-full   h-full">
          <div className="max-md:flex max-md:flex-col max-md:justify-center max-md:text-center items-center w-full ">
            <Image className=" w-fit" src="/images/x.png" alt="images" width="588"  height="36" />
          </div>
          <div className="max-md:flex max-md:flex-col max-md:justify-center max-md:text-center">
            <p className="mt-[21px] bg-textc bg-clip-text text-[18px] md:text-[22px] text-transparent">AI Scientist the standard chunk of Lorem Ipsum 
used since the 1500s is reproduced below for 
those interested. Sections Bonorum et Malorum 
original.</p>
          </div>
          <div className="mt-12 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
              <h1 className="text-headcolor text-xl md:text-3xl lg:text-4xl">AI Scientist <span className="bg-textc bg-clip-text text-transparent">-COO London</span></h1>
          </div>
        </div>
        <div className=" w-11/12 md:w-8/12 lg:mt-[88px] flex justify-center items-center lg:w-[588px] lg:h-[488px]">
          <Image
            src="/images/Frame 98.png"
            alt="images"
            width="588"
            height="488"
          />
        </div>
      </div>
 
        </div>
      </div>
    </>
  );
}
