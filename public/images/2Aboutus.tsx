import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const KnowAbout = () => {
    return (
        <div className=' w-full flex flex-col md:flex-row-reverse gap-x-10 p-10 relative items-center justify-center'>
            <div className=' w-full md:w-1/2   relative'>
                <div className=' relative items-baseline  bottom-0 flex flex-col max-md:justify-center max-md:items-center max-md:text-center gap-5 '>
                    <div className=' bg-[#FAECF1] rounded-full  px-6  py-2 text-[#DD7899] w-fit text-xs font-semibold'>Know About Us</div>
                    <div>
                        <p className=' text-3xl lg:text-4xl font-bold text-black '>Know About AI Scientist’s</p>
                    </div>
                    <div className='text-3xl lg:text-4xl font-bold text-black'>Learning Platform.</div>
                    <div className=' texba text-[#6B7385]'>There are many variations of passages of the ipsum available,
                        but the majority have suffered alteration in some form, by
                        injected humour.</div>
                    <div className=' flex flex-col gap-3'>
                        <div className=' flex gap-x-2 text-black items-center '>
                            <div className=' h-10 w-10 rounded-full bg-[#E4E9FD]'></div>
                            <p className=' text-base lg:text-xl font-base'>Flexible Classes</p>
                        </div>
                        <div className=' flex gap-x-2 text-black items-center '>
                            <div className=' h-10 w-10 rounded-full bg-[#F6EBFC]'></div>
                            <p className=' text-base lg:text-xl font-base'>Learn From Anywhere</p>
                        </div>
                        <div className=' flex gap-x-2 text-black items-center '>
                            <div className=' h-10 w-10 rounded-full bg-[#FAECF1]'></div>
                            <p className=' text-base lg:text-xl font-base'>Unlimited resources With Strong Support</p>
                        </div>
                    </div>
                    <div>
                        <Link href={'#'} className=' rounded-lg text-white bg-gradient-to-r from-[#1BB69C] font-medium to-[#30B979] px-4 py-2'>More About Us</Link>
                    </div>
                </div>
            </div>
            <div className=' w-full sm:w-9/12 md:w-6/12 lg:w-1/2 px-10 pt-10'>
                <Image src={'/college.png'} alt='dsssd' height={1000} width={500} className=' w-full h-auto md:h-full ' />
            </div>
        </div>
    )
}

export default KnowAbout