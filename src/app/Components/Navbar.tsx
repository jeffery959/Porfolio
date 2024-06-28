"use client"
import { useEffect,useState,useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RouteUrl } from '../Utils/data'
const routes = ['Home','About','Skills','Portfolio','Education','Contact']
const Navbar = () => {
    const pathname:string =""
    const [navPading, setnavPading] = useState<null|boolean>(null);
    const [navName,setNavName] = useState('Home')
    const [activeSection, setActiveSection] = useState(null);
    const [toggleNav,setToggleNav]=useState<boolean>(false)
    
    const changeNavColor=(txt:string)=>{
      setNavName(txt)
    }
    const sectionRefs = {
      section1: useRef(null),
      section2: useRef(null),
      section3: useRef(null),
    }; 
    function isSectionFullyInView(sectionRef:any) {
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
      return (
        rect.top >= 0 &&
        rect.bottom <= windowHeight
      );
    }

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setnavPading(true);
        } else {
          setnavPading(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [navPading]);
    return (
      <div className={`flex  ${navPading&&'md:pt-16'} duration-500 z-50 justify-between md:px-12 2xl:px-36 xl:px-24 md:py-12 py-12 px-4 sm:px-6 border-b fixed w-full bg-white top-0`}>
        <h6 className='font-bold text-xl '>Aaron</h6>
        <ul className={`flex flex-col md:flex-row absolute md:relative md:right-auto right-6 top-20 md:top-auto md:shadow-none  bg-white shadow-lg md:p-0 py-4 px-4 rounded-lg md:w-9/12 justify-between max-w-128  ${!toggleNav&&'hidden md:flex'} `}>
            {routes.map((itm,id)=>{
          const navCss=`${itm===navName?'text-secondary':' '} font-medium hover:bg-gray-100 p-2 rounded-lg`
             
            
               return <Link key={id} href={`#${itm}`} onClick={()=>changeNavColor(itm)} className={navCss}>{itm}</Link>

            })
            
            }
           
        </ul>
        <Image src={'/Icons/Menu.svg'} width={20} height={20 } alt='' className='md:hidden' onClick={()=>setToggleNav(!toggleNav)}/>
        
    </div>
  )
}

export default Navbar