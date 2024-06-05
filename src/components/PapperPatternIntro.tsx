import React from 'react'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa6'
import Link from 'next/link'

const PaperPatternintro = () => {
    return (
        <div className=' w-full relative overflow-hidden max-md:h-40 md:h-60 lg:h-80'>
            <Image src={'/images/bgmouse.jpeg'} alt='psl' height={10000} width={10000} className=' w-full min-h-full -z-10 object-cover object-center absolute ' />
            <div className=' w-full h-full bg-black/70 flex flex-col justify-center text-white gap-3 md:gap-5 items-center'>
                <p className=' font-bold md:text-3xl text-2xl lg:text-4xl '>Paper Pattern</p>
                <div>
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link href="#" className="inline-flex items-center text-sm font-medium text-gray-200 hover:text-white dark:text-gray-400 dark:hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <FaChevronRight className="text-gray-200" />
                                    <span className="ms-1 text-sm font-medium text-[#FF9747] md:ms-2 dark:text-gray-400 pointer-events-none">Paper Pattern</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default PaperPatternintro