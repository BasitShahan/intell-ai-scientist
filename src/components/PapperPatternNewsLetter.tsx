import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ToggleButton from '@/components/PapperPatterntext'

const Contatcusform = () => {
    return (
        <div>
            <div className=' py-10 px-5 md:px-10'>
                <ToggleButton />
            </div>
            <div className=' flex sm:px-10 md:px-20 py-10 flex-col justify-center items-center gap-5 md:flex-row bg-[#C4E4EC] w-full h-auto md:h-96'>
                <div className=' w-11/12 sm:w-9/12 md:w-3/6 lg:w-2/5 h-72 md:h-full flex justify-center items-center'>
                    <Image src={'/images/female.png'} alt='' height={1000} width={1000} className=' w-auto max-w-full h-full' />
                </div>
                <div className=' max-md:px-5 md:w-3/6 lg:w-3/5 flex flex-col justify-center items-center text-center gap-5'>
                    <div className=' font-bold sm:text-3xl text-2xl lg:text-4xl SansitaOnef'>Subscribe To our newsletter</div>
                    <div className=' text-sm lg:text-lg'>Follow our social media and get updates about jobs and articles that we present especially for you.</div>
                    <div className=' rounded-xl bg-white w-11/12 h-fit flex justify-between items-center md:px-2 lg:px-5 px-5 py-2'>
                        <div className=' text-black lg:text-base md:text-sm '>Subscribe to our newsletter</div>
                        <Link href={'#'} className=' bg-[#30B979] px-4 md:px-2 lg:px-4 py-1 rounded-full text-white'> Subscribe</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contatcusform