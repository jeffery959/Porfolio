import React from 'react'
import PorfolioCard from '@/app/Components/PorfolioCard'
const Portfolio = () => {
  return (
    <section id="Portfolio" className=" pt-24 min-h-screen justify-center  flex flex-col w-full items-center ">
      
    <h3 className="text-gray-700 font-bold text-2xl md:text-4xl lg:text-5xl mb-7 text-center md:text-start md:mt-6 mt-8">Porfolio</h3>
    {/* <div className="border min-w-44 mb-7 gap-4 px-3   h-16 rounded-xl  shadow-lg flex justify-evenly items-center">
     <button className="bg-gray-200 hover:bg-gray-100 duration-500 py-1 px-4 rounded-lg">All</button>
     <button className="py-1 px-4  rounded-lg">Games</button>
     <button className="py-1 px-4  rounded-lg">Website</button>
    </div> */}
    <div className="bg-primary w-full md:mt-6 mt-8 flex justify-center items-center">
     <div className="w-full max-w-448 flex justify-center md:gap-10 gap-6  py-20 flex-wrap  Divpadding">

     <PorfolioCard src="/Images/E-commerce.png" githhub="https://github.com/jeffery959/SwiftMart" visit="https://classy-sable-c626a3.netlify.app/"/>
     <PorfolioCard src="/Images/JaneHome.png" githhub="https://github.com/jeffery959/Jan-Art-Gallery/tree/main" visit="https://jan-art-gallery-jeffery959s-projects.vercel.app/"/>
     <PorfolioCard src="/Images/tictactoe.PNG" githhub="https://github.com/jeffery959/tictactoe/tree/main" visit="https://tictactoe-sepia-xi.vercel.app/"/>
    
 



     </div>
    </div>

    </section>
    
  )
}

export default Portfolio