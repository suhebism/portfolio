import React from 'react'
import Link from 'next/link'
import {Linkedin,Instagram,Github } from 'lucide-react'
const Footer = () => {
  return (
    <div className='my-10 flex flex-col px-6 md:px-16 lg:px-32 2xl:px-80 justify-between items-start w-full gap-5 md:gap-10'>
      <div className='w-full bg-gray-800 h-[1px]'></div>
      <h1 className='text-xl md:text-2xl lg:text-5xl 2xl:text-7xl'>Get in touch at suhebism@gmail.com</h1>
      <div className='flex gap-5 md:gap-10'>
        <Link href='https://www.linkedin.com/in/suhebism/' target="_blank" rel="noopener noreferrer"><Linkedin /></Link>
        <Link href='https://github.com/suhebism' target="_blank" rel="noopener noreferrer"><Github /></Link>
        <Link href='https://www.instagram.com/suhebism/' target="_blank" rel="noopener noreferrer"><Instagram  /></Link>
      </div>
      <div className='flex gap-5 md:gap-10'>
        <Link className='text-sm md:text-base' href='/projects'>Projects</Link>
        <Link className='text-sm md:text-base' href='/about'>About</Link>
        <Link className='text-sm md:text-base' href='/blog'>Blog</Link>
        <Link className='text-sm md:text-base' href='/contact'>Contact me</Link>
      </div>
    </div>
  )
}

export default Footer
