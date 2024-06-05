import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
export default function Contact() {
  return (
    <>
      <div className=" bg-[#F0F4F5] flex justify-center items-center w-full h-[392px]">
        <div>
          <div>
            <h1 className="font-head font-bold  text-[54px] bg-black bg-clip-text text-transparent">
              Contact us
            </h1>
          </div>
          <div className="flex mt-4 items-center justify-center gap-2">
            <div>
              <p className="font-head text-2xl font-normal">Home </p>
            </div>
            <div>
              <Image
                src="/images/contactimages/Forward.png"
                width="17"
                height="17"
                alt="vectorimage"
              />
            </div>
            <div>
              <p className="font-head text-2xl font-normal">Contact Us</p>
            </div>
          </div>
        </div>
      </div>

      {/* contact center div  */}
          <div className="md:px-4 md:flex md:flex-row md:justify-around xs:flex xs:flex-col   w-full h-auto">
              {/* left code */}
             <div className="xs:mx-auto md:mx-0 xs:text-center md:text-left mt-[102px] max-w-[413px] flex flex-col gap-3 h-auto">
                <div>
                <h1 className="font-title font-bold text-[27px] bg-black bg-clip-text text-transparent">We Are Always Eager To
                Hear From You!</h1>
                </div>  
               <div>
                <h1 className="font-title font-medium text-[27px] bg-black bg-clip-text text-transparent">Address</h1>
               </div>
               <div>
                <h1 className="font-title font-normal text-[27px] bg-black bg-clip-text text-transparent">London, London, London</h1>
               </div>
               <div>
                <h1 className="font-title font-medium text-[27px] bg-black bg-clip-text text-transparent">Email</h1>
               </div>
                <div>
                  <h1 className="font-title font-normal text-[27px] bg-black bg-clip-text text-transparent">aiscientist@example.com</h1>
                </div>
                <div>
                  <h1 className="font-title font-medium text-[27px] bg-black bg-clip-text text-transparent">Phone</h1>
                </div>
                <div>
                  <h1 className="font-title font-normal text-[27px] bg-black bg-clip-text text-transparent">(+091) 443 554 8958</h1>
                </div>
                {/* icons code  */}
                <div className="mt-10 flex gap-3 xs:mx-auto md:mx-0">
                   <div>
                    <Image src="/images/contactimages/icons.png" width='53' height="53" alt="imagess" />
                   </div>
                   <div className="border-2 rounded-full  w-[60px] h-[60px] flex justify-center items-center">
                    <Image className="rounded-full " src="/images/contactimages/ri_linkedin-fill.png" width='50' height="50" alt="imagess" />
                   </div>
                   <div className="border-2 rounded-full  w-[60px] h-[60px] flex justify-center items-center">
                    <Image src="/images/contactimages/mdi_twitter.png" width='50' height="50" alt="imagess" />
                   </div>
                   <div className="border-2 rounded-full  w-[60px] h-[60px] flex justify-center items-center">
                    <Image src="/images/contactimages/material-symbols_share.png" width='50' height="50" alt="imagess" />
                   </div>
                   
                </div>
              {/* icons ends here */}
             </div>
              {/* right code */}
              <div  className="z-50 bg-white xs:mx-auto md:mx-0 rounded-md relative top-20 max-w-[558px] gap-5 shadow-custom  py-7  px-7  flex flex-col h-auto">
                <div className="xs:mx-auto md:mx-0">
                  <h1 className="font-title font-medium text-[1.7rem] bg-black bg-clip-text text-transparent">Get In Touch</h1>
                </div>
                <div >
                  <h1 className="xs:text-center md:text-left font-title font-normal text-lg bg-black bg-clip-text text-transparent">Fill Out This Form For Booking a Consultant Advising
Session.</h1>
                </div>
                <div className="flex flex-col gap-3 max-w-[494px]">
                  <div >
                    <input type="text" placeholder="Your  Name*" className="h-12 font-title font-semibold text-xl outline-none w-full bg-textc bg-clip-text text-transparent border-r-0 border-l-0 border-t-0 border-b-2" name="" id="" />
                  </div>
                  <div >
                    <input type="text" placeholder="Email*" className="h-12 font-title font-semibold text-xl outline-none w-full bg-textc bg-clip-text text-transparent border-r-0 border-l-0 border-t-0 border-b-2" name="" id="" />
                  </div>
                  <div >
                    <input type="text" placeholder="Subject*" className="h-12 font-title font-semibold text-xl outline-none w-full bg-textc bg-clip-text text-transparent border-r-0 border-l-0 border-t-0 border-b-2" name="" id="" />
                  </div>
                  <div >
                    <input type="text" placeholder="Messages*" className="h-36 font-title font-semibold text-xl outline-none w-full bg-textc bg-clip-text text-transparent border-r-0 border-l-0 border-t-0 border-b-2" name="" id="" />
                  </div>
                  
                </div>
                <div className="mx-auto mt-12">

                  <button className="mb-12 rounded-lg py-3 px-12 font-title text-white bg-[#1BB69C]">Submit Message</button>
                  </div>
                
              </div>
          </div>

          {/*google image  */}
          <div className="z-0 relative bg-cover bg-center h-screen" style={{backgroundImage: "url('/images/contactimages/mow-820x480 1.png')"}}>
             <div className="absolute  flex flex-col gap-1 bottom-[100px] right-24">
              <div className="shadow-custom w-[60px] h-[60px] flex justify-center items-center rounded-xl bg-white">
                <FaPlus className="w-[56px] h-[56px]"/>

              </div>

              <div className="shadow-custom w-[60px] h-[60px] flex justify-center items-center rounded-xl bg-white">
                <FaMinus className="w-[56px] h-[56px]"/>

              </div>
              
             </div>
         </div>
    </>
  );
}
