import React from 'react'

const Skills = () => {
  return (
    <section id="Skills" className="  max-w-448  min-h-screen justify-center pt-10 flex flex-col w-full items-center">
     <h3 className="text-gray-700 font-bold text-2xl md:text-4xl lg:text-5xl lg:mb-14 mb-7 text-center md:text-start md:mt-6 mt-8">Skills</h3>
     <div className="Divpadding w-full justify-center sm: items-center flex flex-wrap gap-10">
      <p className="border w-60 h-60 flex items-center justify-center rounded-lg hover:border-secondary hover:text-secondary hover:font-semibold duration-500">Html&Css</p>
     
      <p className="border  hover:text-secondary w-60 h-60 flex items-center justify-center rounded-lg hover:border-secondary duration-500 hover:font-semibold">JavaScript</p>
      <p className="border hover:text-secondary  w-60 h-60 flex items-center justify-center rounded-lg hover:border-secondary duration-500 hover:font-semibold">Nodejs</p>
      <p className="border hover:text-secondary  w-60 h-60 flex items-center justify-center rounded-lg hover:border-secondary duration-500 hover:font-semibold">Next/React</p>

     </div>

     </section>
  )
}

export default Skills