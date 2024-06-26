import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="About" className="">
        <div className="bg-secondary md:h-screen min-h-screen  w-full   flex justify-center flex-col items-center">

        
        <div className=" flex flex-col md:flex-row w-full justify-between items-center md:h-full">

       <Image src={'/Images/About.jpg'} width={500} height={500} className=" object-cover md:h-full  w-full
       
       md:w-6/12 xl:w-7/12   duration-500 " alt=""/>
        <div className="flex md:w-1/2 flex-col  px-4 md:py-0 py-10">
        <h3 className="text-white
         font-bold text-2xl md:text-4xl lg:text-5xl lg:mb-14 mb-7 text-center ">About Me</h3>
          <p className="text-white  font-light text-base lg:text-lg text-center">
            My name is Jeffery Aaron a freelancer software engineer at the age of 18  am looking.I have no degrees at the moment but am still in the process of pursing my computer science degree. I focus more on web development but am able to build games and mobile apps.I do well in frontend and backend development.
          

          </p>
          </div>


        </div>
         </div>
      </section>
  )
}

export default About