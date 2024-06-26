

import  Image from "next/image"
export default function Section6() {
  return (
    <>
     <>
  <div className="mt-[132px] k md:mx-0  xs:mx-auto xs:w-2/3 xs:grid xs:grid-cols-2 lg:w-full md:flex md:flex-row  lg:flex lg:flex-row md:w-full w-full">
    <div className=" lg:w-full md:w-full   ">
      <Image src="/images/image1.png" alt="images" width="240" height="259"/>
    </div>  

    <div className="lg:w-full md:w-full  ">
      <Image src="/images/image2.png" alt="images" width="240" height="259"/>
    </div>  

    <div className="lg:w-full md:w-full  ">
      <Image src="/images/image3.png" alt="images" width="240" height="259"/>
    </div>  

    <div className="lg:w-full md:w-full  ">
      <Image src="/images/image4.png" alt="images" width="240" height="259"/>
    </div>  

    <div className="lg:w-full md:w-full  ">
      <Image src="/images/image5.png" alt="images" width="240" height="259"/>
    </div> 

    <div className="w-full md:w-full  ">
      <Image src="/images/image6.png" alt="images" width="240" height="259"/>
    </div> 

    
  </div>

   {/* 2nd container */}
   
   <div className="lg:hidden  xs:hidden sm:hidden md:flex md:flex-row md:w-full w-full">
   <div className="lg:w-full md:w-full  ">
      <Image src="/images/image5.png" alt="images" width="240" height="259"/>
    </div> 
    
    <div className="w-full md:w-full  ">
      <Image src="/images/image6.png" alt="images" width="240" height="259"/>
    </div> 
    
    <div className="lg:w-full md:w-full  ">
      <Image src="/images/image2.png" alt="images" width="240" height="259"/>
    </div>  

    <div className=" lg:w-full md:w-full   ">
      <Image src="/images/image1.png" alt="images" width="240" height="259"/>
    </div>  


    <div className="lg:w-full md:w-full  ">
      <Image src="/images/image3.png" alt="images" width="240" height="259"/>
    </div>  

<div className="lg:w-full md:w-full  ">
      <Image src="/images/image4.png" alt="images" width="240" height="259"/>
    </div>  
      
  </div>
  
</>

    </>
  )
}
