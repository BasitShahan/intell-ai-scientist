import Image from "next/image";
import { LiaArrowRightSolid } from "react-icons/lia";
export default function Section5() {
  return (
    <>
      <div className="w-full h-full">
        <div className="mt-[103px] mx-auto w-full h-full">
          <div className="mx-auto bg-btcolor rounded-full flex items-center justify-center w-44 h-9">
            <h1 className="font-title bg-btncolor   bg-clip-text text-transparent">
              AI Scientist’s Post{" "}
            </h1>
          </div>

          <div className="mt-5 mx-5">
            <h1 className="text-center font-title text-3xl md:text-4xl font-bold bg-black bg-clip-text text-transparent">
              From Our Post
            </h1>
          </div>
          <div className="mt-5 mx-5">
            <p className="bg-textc bg-clip-text text-transparent text-center font-normal font-title">
              There are many variations of passages of the ipsum available, but
              the majority have suffered alteration in some form,
              <br /> by injected humor.
            </p>
          </div>
        </div>
        {/* working on images */}
        <div className="mx-auto mt-[73px] w-full h-full container">
          <div className=" flex flex-wrap justify-center items-center ">
           <div className="xs:w-full sm:w-full w-9/12 md:w-1/2 lg:w-1/3 p-4">
            <div className="py-4 px-[10px] shadow-custom  w-full h-[495px] rounded-xl ">
              <div>
                <Image
                  src="/images/image7.png"
                  className="pt-[6px] pr-[6px]"
                  width="399"
                  height="247"
                  alt="images"
                />
                <div>
                  <h1 className="mt-5 text-xl font-title font-semibold bg-black bg-clip-text text-transparent">
                    Understanding The Background OfKindergarten Now.
                  </h1>
                </div>
                <div>
                  <p className="mt-3 bg-textc bg-clip-text text-transparent  font-normal font-title">
                    There are many variations of passages of Lorem Ipsum
                    available,
                  </p>
                </div>
                <div className="flex gap-2">
                  <div>
                    <h1 className="mt-6 text-xl font-title font-[500] bg-black bg-clip-text text-transparent">
                      Read Article
                    </h1>
                  </div>
                  <div>
                    <LiaArrowRightSolid className="text-2xl relative mt-7" />
                  </div>
                </div>
              </div>
            </div>
           </div>
           <div className="xs:w-full sm:w-full w-9/12 md:w-1/2 lg:w-1/3 p-4">
            <div className="py-4 px-[10px] w-full h-[495px] rounded-xl shadow-custom">
              <div>
                <Image
                  src="/images/image8.png"
                  className="pt-[6px] pr-[6px]"
                  width="399"
                  height="247"
                  alt="images"
                />
                <div>
                  <h1 className="mt-5 text-xl font-title font-semibold bg-black bg-clip-text text-transparent">
                    Learn How More Money With Kindergarten{" "}
                  </h1>
                </div>
                <div>
                  <p className="mt-3 bg-textc bg-clip-text text-transparent  font-normal font-title">
                    There are many variations of passages of Lorem Ipsum
                    available,
                  </p>
                </div>
                <div className="flex gap-2">
                  <div>
                    <h1 className="mt-6 text-xl font-title font-[500] bg-black bg-clip-text text-transparent">
                      Read Article
                    </h1>
                  </div>
                  <div>
                    <LiaArrowRightSolid className="text-2xl relative mt-7" />
                  </div>
                </div>
              </div>
            </div>
           </div>
           <div className="xs:w-full sm:w-full w-9/12 md:w-1/2 lg:w-1/3 p-4">
            <div className="  py-4 px-[10px] w-full h-[495px] rounded-xl shadow-custom">
              <div>
                <Image
                  src="/images/image9.png"
                  className="pt-[6px] pr-[6px]"
                  width="399"
                  height="247"
                  alt="images"
                />
                <div>
                  <h1 className="mt-5 text-xl font-title font-semibold bg-black bg-clip-text text-transparent">
                    Is Kindergarten The Most trending Thing now?{" "}
                  </h1>
                </div>
                <div>
                  <p className="mt-3 bg-textc bg-clip-text text-transparent  font-normal font-title">
                    There are many variations of passages of Lorem Ipsum
                    available,
                  </p>
                </div>
                <div className="flex gap-2">
                  <div>
                    <h1 className="mt-6 text-xl font-title font-[500] bg-black bg-clip-text text-transparent">
                      Read Article
                    </h1>
                  </div>
                  <div>
                    <LiaArrowRightSolid className="text-2xl relative mt-7" />
                  </div>
                </div>
              </div>
            </div>
           </div>
          </div>
          {/* working on button  */}
          <div className="flex justify-center  mt-16">
            <button className="w-56 h-11 px-9 py-6 flex justify-center items-center text-center rounded-2xl bg-gradient-to-r from-green-600 to-teal-400 text-white font-title">
              View All Posts
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
