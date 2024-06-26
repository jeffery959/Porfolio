import About from "./About";
import Home from "./Home";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Image from "next/image";
import Education from "./Education";
import Contact from "./Contact";
import Link from "next/link";
export default function Main() {
  return (
    <main className="  flex justify-center items-center flex-col  sm:mt-0 ">
      <Home/>
     <About/>
     <Skills/>
     <Portfolio/>
    <Education/>
  <Contact/>
 <div className=" w-full  duration-500 z-50 justify-between md:px-12 2xl:px-36 xl:px-24 md:py-20 py-12 px-2 sm:px-6 border-t mt-60 bg-white  flex sm:flex-row flex-col items-center">
  <p className="text-sm font-light">© JefferyAaron 2024</p>

<div className="flex gap-2 ">
  <Link href={'https://www.instagram.com/takeover_tyrant'} target="_blank">
  <Image src={'/Icons/Instagram.svg'} width={20} height={20} alt="" className="hover:scale-110 duration-500"/>
  </Link>
  <Link href={'https://x.com/Jeffery48378302'} target="_blank">
  <Image src={'/Icons/Twitter.svg'} width={20} height={20} alt="" className="hover:scale-110 duration-500"/>
  </Link>
</div>
 </div>

    </main>
  );
}
