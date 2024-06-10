import Image from "next/image"

export default function Section3() {
  return (
    <>
      <div className='mx-auto  my-10 xs:w-full xs:h-full sm:w-full sm:h-full  w-full h-[10vh]'>
      <div className="mx-auto bg-btcolor rounded-full flex items-center justify-center  h-9 w-36">
            <h1 className="font-title bg-btncolor   bg-clip-text text-transparent">
              Instructor{" "}
            </h1>
          </div>
          
          <div className='mt-5 mx-5'>
            <h1 className='text-center font-title text-4xl font-bold bg-black bg-clip-text text-transparent'>Meet Our Teacher</h1>
          </div>
          <div className='mt-5 px-16'>
            <p className=' text-md bg-textc bg-clip-text text-transparent text-center font-normal font-title'>Our expert instructors at AI Scientist are passionate about making AI fun and accessible for kids. With backgrounds in computer science and education, they simplify complex concepts through hands-on, engaging lessons. Join us to inspire your child's journey into the exciting world of AI.</p>
          </div>
      </div>
      
       {/* working on images */}
       <div className='mt-32 justify-between w-full h-full'>
         <div className="flex w-full max-md:flex-col flex-wrap justify-center items-center max-md:gap-y-7">
          <div className=" w-9/12 md:w-1/2 lg:w-1/3 p-3">
          <div className='shadow-custom w-auto h-auto md:h-fit lg:h-[686px] flex flex-col items-center rounded-3xl px-7 py-8'>
           <Image className="rounded-[6px] h-auto" src="/images/team-07.webp.png" alt="images" width="335" height="475"/>
           <div className="mt-[18px]">
            <h1 className=" text-3xl bg-black bg-clip-text text-transparent text-center font-bold font-title ">Alexandra Scott</h1>
          </div> 
          <div className="mt-3">
            <p className="bg-textc bg-clip-text text-transparent text-center font-normal text-sm font-title">Creative Developer</p>
          </div>
          <div className="mt-3">
            <p className="bg-textc bg-clip-text text-transparent text-center font-normal text-sm font-title">USA</p>
          </div>
               
          </div>
          </div>
          <div className=" w-9/12 md:w-1/2 lg:w-1/3 p-3">
          <div className='shadow-custom w-auto h-auto md:h-fit lg:h-[686px] flex flex-col items-center  rounded-3xl px-7 py-8'>
           <Image className="rounded-[6px]" src="/images/team-05.webp.png" alt="images" width="335" height="475"/>
           <div className="mt-[18px]">
            <h1 className=" text-3xl bg-black bg-clip-text text-transparent text-center font-bold font-title ">John Alex</h1>
          </div> 
          <div className="mt-3">
            <p className="bg-textc bg-clip-text text-transparent text-center font-normal text-sm font-title">Wordpress Developer</p>
          </div>
          <div className="mt-3">
            <p className="bg-textc bg-clip-text text-transparent text-center font-normal text-sm font-title">US</p>
          </div>
               
          </div></div>
          <div className=" w-9/12 md:w-1/2 lg:w-1/3 p-3">
          <div className='shadow-custom w-auto h-auto md:h-fit lg:h-[686px] flex flex-col items-center  rounded-3xl px-7 py-8'>
           <Image className="rounded-[6px]" src="/images/team-04.webp.png" alt="images" width="335" height="475"/>
           <div className="mt-[18px]">
            <h1 className=" text-3xl bg-black bg-clip-text text-transparent text-center font-bold font-title ">Alexandra Scott</h1>
          </div> 
          <div className="mt-3">
            <p className="bg-textc bg-clip-text text-transparent text-center font-normal text-sm font-title">Creative Developer</p>
          </div>
          <div className="mt-3">
            <p className="bg-textc bg-clip-text text-transparent text-center font-normal text-sm font-title">USA</p>
          </div>
               
          </div>
          </div>
          </div>          
       </div>
        {/* working with button */}
        <div className="flex justify-center  items-center mt-16">
  <button className="w-56 h-11 px-9 py-6 flex justify-center items-center text-center rounded-2xl bg-gradient-to-r from-green-600 to-teal-400 text-white font-title">View All Teachers</button>
</div>


    </>
  )
}
