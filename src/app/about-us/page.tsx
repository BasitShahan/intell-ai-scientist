import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowRight } from "react-icons/hi2";
import { FaChevronRight } from 'react-icons/fa6';
import Marquee from "react-fast-marquee";
import { MdOutlineStar } from "react-icons/md";
import SkilledTeacher from '@/components/SkilledTeacher'
const Page = () => {
    
const reviews = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      review:
        "AI Scientist’s Education, There are many variations of passages of the ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      image: "/images/review/review1.png",
      rating: 5,
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      review:
        "AI Scientist’s Education,  There are many variations of passages of the ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      image: "/images/review/review2.png",
      rating: 4,
    },
    {
      name: "Alice Brown",
      email: "alice.brown@example.com",
      review:
        "AI Scientist’s Education,  There are many variations of passages of the ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      image: "/images/review/review1.png",
      rating: 4,
    },
    {
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      review:
        "AI Scientist’s Education,  There are many variations of passages of the ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      image: "/images/review/review2.png",
      rating: 3,
    },
    {
      name: "Charlie Williams",
      email: "chalie@gamil.com",
      review:
        "AI Scientist’s Education,  There are many variations of passages of the ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      image: "/images/review/review1.png",
      rating: 5,
    },
    {
      name: "Diana Green",
      email: "diana.green@example.com",
      review:
        "AI Scientist’s Education,  There are many variations of passages of the ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      image: "/images/review/review2.png",
      rating: 3,
    },
  ];
  
  // Function to render stars
  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => (
        <span key={i} className="text-yellow-500">
          <MdOutlineStar />
        </span>
      ));
  };
  
    
    return (
        <>
            <div className='w-full relative overflow-hidden max-md:h-auto h-96 font-title'>
                <Image src={'/images/bgppl.png'} alt='psl' height={10000} width={10000} className='w-full min-h-full -z-10 object-cover object-center absolute' />
                <div className='px-10 md:px-20 py-10 relative'>
                    <div>
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li className="inline-flex items-center">
                                    <a href="#" className="inline-flex items-center text-sm font-medium text-gray-200 hover:text-white dark:text-gray-400 dark:hover:text-white">
                                        Home
                                    </a>
                                </li>
                                <li aria-current="page">
                                    <div className="flex items-center">
                                        <FaChevronRight className="text-gray-200" />
                                        <span className="ms-1 text-sm font-medium text-[#FF9747] md:ms-2 dark:text-gray-400 pointer-events-none">About Us</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className='w-full flex flex-col pt-10 justify-normal md:justify-center gap-y-5 items-center text-white'>
                        <div className='px-6 bg-[#a47d82] py-2 bg-custom-cured/60 text-red-800 text-sm font-semibold rounded-full'>How We Work</div>
                        <div className='text-2xl text-center md:text-3xl font-bold'>Take Challenge For Build Your Life.</div>
                        <div className='text-2xl text-center md:text-3xl font-bold'>The World Most Lessons For back To your life.</div>
                        <Link href={'#'} className='rounded-lg bg-gradient-to-r from-[#1BB69C] font-medium to-[#30B979] px-4 py-2'>More About Us</Link>
                    </div>
                </div>
            </div>
            
            {/* second portion */}
           
        <div className=' w-full flex flex-col md:flex-row-reverse gap-x-10 p-10 relative items-center justify-center'>
            <div className=' w-full md:w-1/2   relative'>
                <div className=' relative items-baseline  bottom-0 flex flex-col max-md:justify-center max-md:items-center max-md:text-center gap-5 '>
                    <div className=' bg-[#FAECF1] rounded-full  px-6  py-2 text-[#DD7899] w-fit text-xs font-semibold font-title'>Know About Us</div>
                    <div>
                        <p className='font-title text-3xl lg:text-4xl font-bold text-black '>Know About AI Scientist’s</p>
                    </div>
                    <div className='font-title text-3xl lg:text-4xl font-bold text-black'>Learning Platform.</div>
                    <div className='font-title texba text-[#6B7385]'>There are many variations of passages of the ipsum available,
                        but the majority have suffered alteration in some form, by
                        injected humour.</div>
                    <div className=' flex flex-col gap-3'>
                        <div className=' flex gap-x-2 text-black items-center '>
                            <div className=' h-10 w-10 rounded-full bg-[#E4E9FD]'></div>
                            <p className='font-title text-base lg:text-xl font-base'>Flexible Classes</p>
                        </div>
                        <div className=' flex gap-x-2 text-black items-center '>
                            <div className=' h-10 w-10 rounded-full bg-[#F6EBFC]'></div>
                            <p className=' font-title text-base lg:text-xl font-base'>Learn From Anywhere</p>
                        </div>
                        <div className=' flex gap-x-2 text-black items-center '>
                            <div className=' h-10 w-10 rounded-full bg-[#FAECF1]'></div>
                            <p className='font-title text-base lg:text-xl font-base'>Unlimited resources With Strong Support</p>
                        </div>
                    </div>
                    <div>
                        <Link href={'#'} className=' rounded-lg text-white bg-gradient-to-r from-[#1BB69C] font-medium to-[#30B979] px-4 py-2'>More About Us</Link>
                    </div>
                </div>
            </div>
            <div className=' w-full sm:w-9/12 md:w-6/12 lg:w-1/2 px-10 pt-10'>
                <Image src={'/images/college.png'} alt='dsssd' height={1000} width={500} className=' w-full h-auto md:h-full ' />
            </div>
        </div>
     {/* 3rd potion  */}
     <div>
      <div className="flex flex-col justify-center gap-6 items-center mx-auto px-4 py-10 w-full md:flex-row lg:w-[90%] bg-[rgb(255,255,255,1)] ">
        {/* lerft side */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <div className="flex items-center justify-center md:justify-start">
            <a
              href="/"
              className="font-title bg-[rgba(228,233,253,1)] text-[rgb(47,87,239,1)] font-popin text-sm bg border px-10 lg:px-4 xl:px-6 py-2 rounded-full hover:bg-[#cdd5ef] transition ease-in-out delay-200 cursor-pointer"
            >
              {" "}
              How we work
            </a>
          </div>

          <div className="w-[80%] mx-auto md:mx-0 justify-center md:justify-start">
            <h2 className=" font-title text-center md:text-left text-4xl font-bold py-2">
              Build Your career And
            </h2>
            <h2 className="font-title text-center md:text-left text-4xl font-bold py-2">
              Upgrade Your Life.
            </h2>
            <p className=" font-title text-center md:text-left text-[rgb(107,115,133,1)] mt-3">
              There are many variations of passages of the ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour.
            </p>
          </div>
          <div className="flex relative items-center justify-center md:justify-start">
            <div className="flex absolute z-10 transform -translate-x-[250%] md:-translate-x-[50%] w-10 h-10 rounded-full bg-[rgb(188,200,248,1)]"></div>
            <div className="flex items-center gap-5 relative z-20">
              <h2 className="font-title font-bold">Learn More About Us</h2>
              <a href="/">
                <HiOutlineArrowRight className="text-2xl " />
              </a>
            </div>
          </div>
        </div>
        {/* right siede */}
        <div className="">
          <Image
            className="mt-4 md:mt-0 h-96 w-[100%]"
            src='/images/Group 4.png'
            alt="Logo"
             width={500}
             height={400}
          />
        </div>
      </div>
    </div>

 {/* 4th portion */}

 <div className="w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row bg-gray-100 p-6 gap-8">
          {/* Left div */}
          <div className="w-full md:w-1/4 flex flex-col  items-center md:items-start  justify-center gap-8">
            <h1 className="font-title text-4xl font-bold">What My Learner&apos;s Says</h1>
            <p className="font-title text-[rgba(107,115,133,1)]">
              There are many variations of passages of the ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour.
            </p>
            <button className="font-title px-4 py-3 bg-[rgba(26,182,157,1)] text-white rounded-lg transition duration-300 ease-in-out hover:bg-[rgba(20,170,160,1)]">
              Learn More
            </button>
          </div>

          {/* Right div */}
          <div className="w-full md:w-2/3 flex flex-col justify-between space-y-6 overflow-hidden">
            {/* First row of cards */}
            <Marquee direction="left">
              {reviews.slice(0, 3).map((review, index) => (
                <div
                  key={index}
                  className="w-96 h-56 bg-white rounded shadow p-4 mx-2 flex flex-col justify-between  inset-0 bg-gradient-to-r from-transparent to-white"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={50}
                      height={50}
                      className="rounded-full  border-2 border-gray-400 p-[0.5px]"
                    />
                    <div>
                      <p className="font-bold font-title">{review.name}</p>
                      <p className="text-sm font-bold font-title">{review.email}</p>
                    </div>
                  </div>
                  <p className="font-title mt-4 text-[rgba(107,115,133,1)]">
                    {review.review}
                  </p>
                  <div className="mt-2 flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              ))}
            </Marquee>

            {/* Second row of cards */}
            <Marquee direction="right">
              {reviews.slice(3, 6).map((review, index) => (
                <div
                  key={index}
                  className="w-96 h-56 bg-white rounded shadow p-4 mx-2 flex flex-col justify-between inset-0 bg-gradient-to-r from-transparent to-white"
                >
                  <div className="flex items-center space-x-4 ">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={50}
                      height={50}
                      className="rounded-full border-2 border-gray-400 p-[0.5px]"
                    />
                    <div>
                      <p className=" font-bold font-title">{review.name}</p>
                      <p className="text-sm font-bold font-title">{review.email}</p>
                    </div>
                  </div>
                  <p className="mt-4 font-title text-[rgba(107,115,133,1)]">
                    {review.review}
                  </p>
                  <div className="mt-2 flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>

         {/*Skilled Teacher Code  */}
          <SkilledTeacher/>
          {/* last section */}
          <div className='font-title py-20 px-5 flex flex-col mt-20 justify-center gap-y-6 items-center bg-gradient-to-r from-[#1BB69C] to-[#30B979]'>
            <div className=' bg-[#90F5C6]/50 px-4 py-2  rounded-full text-sm text-white'>Get latest AI scientist’s Update</div>
            <div className=' max-md:text-2xl text-4xl text-white font-bold text-center'>Subscribe to our newsletter</div>
            <div className='text-center text-base max-md:text-sm text-white pointer-events-none'>There are many variations of passages of the ipsum available, but the majority <br className=' max-md:hidden' /> have suffered alteration in some form, <br className=' max-lg:hidden' />by injected humor.</div>
            <div className='text-center text-base max-md:text-sm text-white pointer-events-none mt-5'>No ads, no trails, No Commitments</div>
            <div className=' w-full pt-5 flex flex-col md:flex-row gap-5 justify-center items-center'>
                <div className=''>
                    <p className='text-3xl  text-white font-bold text-center'>500+</p>
                    <p className=' text-xl mt-5 text-white font-semibold text-center'>Successfully Trained</p>
                    <p className='text-center mt-3 text-base max-md:text-sm text-white pointer-events-none'>Learners &Counting</p>
                </div>
                <div className=' h-[1px] w-24 md:h-24 md:w-[1px] bg-white'></div>
                <div>
                    <p className='text-3xl  text-white font-bold text-center'>100+</p>
                    <p className=' text-xl mt-5 text-white font-semibold text-center'>Certification Students</p>
                    <p className='text-center mt-3 text-base max-md:text-sm text-white pointer-events-none'>Online Course</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Page;
