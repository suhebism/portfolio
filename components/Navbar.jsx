'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import { RectangleEllipsis } from 'lucide-react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
     className='flex px-6 md:px-16 lg:px-32 2xl:px-80 justify-between items-center w-full h-10 fixed border-b-[1px] border-gray-800 backdrop-filter backdrop-blur-sm bg-opacity-10 z-50'>
      <Link href="/" ><p className='font-thin text-sm'>suheb ahmed</p></Link>
      <div className='hidden md:flex gap-5 w-auto items-center '>
        <Link className='font-thin text-sm  hover:font-medium w-8 ' href="/">Home</Link>
        <Link className='font-thin text-sm hover:font-medium w-8' href="/about">About</Link>
        <Link className='font-thin text-sm hover:font-medium w-8' href="/blog">Blog</Link>
        <div className='w-4 h-[1px] bg-white'></div>
        <Link className='font-thin text-sm hover:font-medium w-8' href='/contact'>Contact</Link>
      </div>
      <RectangleEllipsis className='flex md:hidden cursor-pointer' onClick={()=>setToggle(true)}/>
    </motion.div>
    {toggle && (
      <div className='fixed w-screen h-screen bg-black flex items-center justify-center flex-col z-50'>
        <Link className='font-thin text-xl transition ease-in-out delay-150 hover:font-medium' onClick={()=>setToggle(flase)} href="/" >Home</Link>
        <Link className='font-thin text-xl hover:font-medium' onClick={()=>setToggle(flase)} href="/about">About</Link>
        <Link className='font-thin text-xl hover:font-medium' onClick={()=>setToggle(flase)} href="/blog">Blog</Link>
        <Link className='font-thin text-xl hover:font-medium' onClick={()=>setToggle(flase)} href='/contact'>Contact</Link>
        <p className='fixed top-2 right-5 font-thin text-xl cursor-pointer' onClick={()=>setToggle(false)}>close</p>
      </div>
    )}
    </>
  )
}


export default Navbar
