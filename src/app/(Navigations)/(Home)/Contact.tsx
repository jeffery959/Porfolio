'use client'
import React,{useState} from 'react'
import toast,{ Toaster } from 'react-hot-toast'
import axios from 'axios'
const Contact = () => {
  const [user,setUser]=useState({Name:'',Email:'',Message:'',Budget:''})
  const handleUserForm=(e:any)=>{
    const {name,value} =e.target
    setUser({...user,[name]:value})
    console.log(user)
  }

  const Submit=()=>{
    if(user.Name===''||user.Email===''||user.Message===''){
      toast.error('Please fill out first three fields')
      return
    }

    axios.post('https://porfolio-wine-three.vercel.app/api/Contact',user)
    .then((resp)=>{
      toast.success(resp.data.msg)
      setUser({Name:'',Email:'',Message:'',Budget:''})
    })
    .catch((err)=>{
      toast.error('Failed try again or send with email')
      console.log(err)
    })

  }
  return (
    <section id="Contact" className=" pt-24 min-h-screen justify-center  flex flex-col w-full items-center ">
      <Toaster/>
    <h3 className="text-gray-700 font-bold text-2xl md:text-4xl lg:text-5xl mb-7 text-center md:text-start md:mt-6 mt-8">Contact</h3>
   
    <div className="bg-secondary w-full md:mt-6 mt-8 flex justify-center items-center">
     <div className="w-full max-w-448 flex  items-center md:items-start  gap-3  py-20 flex-wrap  Divpadding flex-col">
      <p className="text-white font-semibold text-3xl text-center md:text-start mb-6">Get In Touch</p>
      <input type="text" name='Name' value={user.Name} onChange={(e)=>handleUserForm(e)} className=" rounded-md py-4 px-4 md:w-1/2 w-full md:max-w-128" placeholder="Name" />
      <input type="text" name='Email' value={user.Email} onChange={(e)=>handleUserForm(e)} className="rounded-md py-4 px-4 md:w-1/2 w-full md:max-w-128" placeholder="Email Address" />
     <textarea name="Message" onChange={(e)=>handleUserForm(e)} value={user.Message} id="" cols={30} rows={0} className="rounded-md py-4 px-4 w-full md:w-9/12 max-w-384 h-96" placeholder="Message"></textarea>
      <input type="text" name='Budget' value={user.Budget} onChange={(e)=>handleUserForm(e)} className="rounded-md py-4 px-4 md:w-1/2 w-full md:max-w-128" placeholder="Budget" />
      <button className="rounded-md p-4 md:w-auto w-full px-8 bg-blue-600 hover:bg-blue-500 text-white" onClick={()=>Submit()}>Submit</button>
      <div className='flex flex-wrap gap-4 text-white'>
        <p>Email: aaronjeffery529@gmail.com</p>
        <p>Phone: +1(646)-627-0936</p>
      </div>
    
 



     </div>
    </div>

    </section>
  )
}

export default Contact