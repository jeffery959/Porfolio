import React from 'react'

const Contact = () => {
  return (
    <section id="Contact" className=" pt-24 min-h-screen justify-center  flex flex-col w-full items-center ">
      
    <h3 className="text-gray-700 font-bold text-2xl md:text-4xl lg:text-5xl mb-7 text-center md:text-start md:mt-6 mt-8">Contact</h3>
   
    <div className="bg-secondary w-full md:mt-6 mt-8 flex justify-center items-center">
     <div className="w-full max-w-448 flex  items-center md:items-start  gap-3  py-20 flex-wrap  Divpadding flex-col">
      <p className="text-white font-semibold text-3xl text-center md:text-start mb-6">Get In Touch</p>
      <input type="text" className=" py-4 px-4 md:w-1/2 w-full md:max-w-128" placeholder="Name" />
      <input type="text" className=" py-4 px-4 md:w-1/2 w-full md:max-w-128" placeholder="Email Address" />
     <textarea name="" id="" cols={30} rows={0} className=" py-4 px-4 w-full md:w-9/12 max-w-384 h-96" placeholder="Message"></textarea>
      <input type="text" className=" py-4 px-4 md:w-1/2 w-full md:max-w-128" placeholder="Budget" />
      <button className="p-4 px-8 bg-blue-600 hover:bg-blue-500 text-white">Submit</button>
    
 



     </div>
    </div>

    </section>
  )
}

export default Contact