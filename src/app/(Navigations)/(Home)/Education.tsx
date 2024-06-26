import React from 'react'
import Image from 'next/image'
const Education = () => {
  return (
    <section id="Education" className="mt-24">
    <div className="bg-white md:h-screen min-h-screen  w-full   flex justify-center flex-col items-center">

    
    <div className=" flex flex-col md:flex-row w-full justify-between items-center md:h-full">

    <div className="flex md:w-1/2 flex-col  px-4 md:py-0 py-10">
    <h3 className="text-slate-700
     font-bold text-2xl md:text-4xl lg:text-5xl lg:mb-14 mb-7 text-center ">Education</h3>
      <p className="text-slate-700  font-light text-base lg:text-lg text-center">
        I finished highschool at bronx ceneter of science and math currently enrolled in brooklyn college and in the process of pursing a bachealors degree in computer science
      

      </p>
      </div>
   <Image src={'/Images/Education.jpg'} width={500} height={500} className=" object-cover md:h-full  w-full
   
   md:w-6/12 xl:w-7/12   duration-500 " alt=""/>


    </div>
     </div>
  </section>
  )
}

export default Education