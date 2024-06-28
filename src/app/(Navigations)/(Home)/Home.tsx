import Image from "next/image"
import Link from "next/link"
const Home = () => {
  return (
    <section id="Home" className="min-h-screen Divpadding md:my-16      md:flex-row flex-col-reverse w-full gap-4 flex max-w-448 md:justify-between justify-center items-center mb-32 mt-40 ">

      <div className="flex flex-col   max-w-224">

      <h3 className="text-gray-700 font-bold text-3xl md:text-5xl lg:text-6xl lg:mb-14 mb-7 text-center md:text-start md:mt-6 mt-8">Hello I'm Jeffery</h3>
       <p className="w-full mb-8 text-center md:text-start   font-extralight text-sm md:text-base">I am passionate about creating responsive and user-friendly web applications. I specialize in both front-end and back-end development. </p>
       <div className=" w-full md:justify-start justify-center gap-3 flex ">
        <Link href={'#Contact'}>
        <button className="bg-primary hover:bg-white hover:text-primary border-primary border duration-500 text-white rounded-3xl py-2 px-4 shadow-xl">Hire me</button>
        </Link>
        <Link href={'https://docs.google.com/document/d/1YvS2kRcP9RRrUFB1Du05Du5YCb81YgYYThHSsw7l96s/edit#heading=h.jhv78pp9wtzd'}>
        <button className="bg-secondary hover:bg-white hover:text-secondary border border-secondary duration-500 py-2 rounded-3xl px-4 shadow-xl ">Download Resume</button>
        </Link>
      </div>
       </div>

       <Image src={'/Images/Port.png'} width={500} height={500} className="w-full  shadow-lg rounded-3xl max-w-96 hover:shadow-2xl duration-500" alt=""/>
      </section>
  )
}

export default Home