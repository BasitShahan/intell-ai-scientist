import React from 'react'


import HeroSection from "@/components/HeroSection";
import Curriculum from "@/components/Curriculum";
import Courses from "@/components/Courses";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";


import  Section1 from '@/components/Section1'
import  Section3 from '@/components/Section3'
import  Section4 from '@/components/Section4'
import  Section5 from '@/components/Section5'
import  Section6 from '@/components/Section6'

import  Purchase from '@/components/Purchase'

export default function page() {
  return (
      <>
      

        <HeroSection/>
        <Curriculum/>
        <Courses/>
        <Purchase/>
         <Section3/>
         <Section4/>
         <Section5/>
         <Section6/>
         <Footer/>
         
         
      </> 
  )
}
