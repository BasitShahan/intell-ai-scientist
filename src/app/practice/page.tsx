"use client"
import React, { useEffect, useState } from 'react'
import { BsFilterRight } from 'react-icons/bs';

export default function page() {
const [state,setState]=useState();
 
const button=[{btn:'All'},{btn:'some'},{btn:'data'}]
  

const data=[
    {id:1,name:'basit',description:'Lorem basit'},
    {id:2,name:'samad',description:'Lorem samad'},
    {id:3,name:'fateh',description:'Lorem fateh'},

    ] 
     
const fun = (id: number) => {
  const filteredData = data.filter((val) => {
    return val.id === id;  

  });
 
   console.log(filteredData)
  return filteredData;

  
  }
  
   return (
    <div>
      {/* butoons */}
          <div className='flex gap-6 justify-center'>
             {button.map((val)=>{
              return <>
                <button  onClick={()=>{fun(1)}} className='rounded-full w-36 h-12 bg-blue-700'>{val.btn}</button>
              </>
             })}
          </div>
          
          <div className='max-w-[500px]'>
              <div><h1 className='font-title font-bold text-slate-500'>iam basit</h1></div>
            <div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, assumenda reprehenderit. Alias corporis adipisci unde fuga numquam cumque quae laboriosam cupiditate est maiores tenetur culpa consectetur incidunt, quod expedita distinctio.

              </p>
            </div>
            <div className='flex gap-4 text-justify items-center'>
              <div>
               <button  className='rounded-full bg-black text-white font-title w-20 h-6'>link1</button>
              </div>
              <div>
              <button className='rounded-full bg-black text-white font-title w-20 h-6'>link2</button>
              </div>
              
            </div>
          </div>
 
    </div>
  )
}
