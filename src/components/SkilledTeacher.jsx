import Image from 'next/image'
import React from 'react'

const SkilledTeacher = () => {
    const Teachers = [
        {
            src: '/images/p5.png',
            alt: 'Jane Smith',
            name: 'Jane Smith',
            title: 'Product Manager',
            location: 'UK'
        }, {
            src: '/images/p1.png',
            alt: 'Cristopher Lisa',
            name: 'Cristopher Lisa',
            title: 'English Teacher',
            location: 'Co Miego, AD, USA'
        }, {
            src: '/images/p6.png',
            alt: 'John Alex',
            name: 'John Alex',
            title: 'Wordpress Developer',
            location: 'US'
        }, {
            src: '/images/p4.png',
            alt: 'Jane Smith',
            name: 'Jane Smith',
            title: 'Product Manager',
            location: 'UK'
        }, {
            src: '/images/p2.png',
            alt: 'Cristopher Lisa',
            name: 'Cristopher Lisa',
            title: 'English Teacher',
            location: 'Co Miego, AD, USA'
        }, {
            src: '/images/p3.png',
            alt: 'John Alex',
            name: 'John Alex',
            title: 'Wordpress Developer',
            location: 'US'
        },
    ]
    return (
        <div className=' py-4 px-10 flex justify-center items-center flex-col gap-y-3 '>
            <div className=' bg-[#FAECF1] font-title text-sm py-2 px-4 rounded-full text-[#EE4A62]' >Skilled Teachers</div>
            <div className=' text-center font-title max-md:text-2xl text-4xl text-black pointer-events-none font-bold'>Whose Inspiration You love</div>
            <div className='text-center font-title text-base max-md:text-sm text-gray-800 pointer-events-none'>There are many variations of passages of the ipsum available, but the majority <br className=' max-lg:hidden' /> have suffered alteration in some form, <br className=' max-lg:hidden' />by injected humor.</div>
            <div className=' px-5 mt-5 w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 '>
                {
                    Teachers.map((data, index) => (
                        <div key={index} className=' flex w-full justify-center items-center '>
                            <div className='p-5 w-full sm:w-9/12 md:w-full gap-y-2 rounded-lg shadow-custom bg-white flex flex-col justify-center items-center'>
                                <Image src={data.src} alt={data.alt} height={400} width={200} className='rounded-lg w-full h-auto' />
                                <div className='text-xl font-title font-bold'>{data.name}</div>
                                <div className='text-[#A263E8] font-title'>{data.title}</div>
                                <div className='text-gray-600 font-mono italic'>{data.location}</div>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default SkilledTeacher