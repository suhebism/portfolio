import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
const ProjectCard = ({img, category, title}) => {
  return (
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }} className='flex-col flex md:flex-row items-start md:items-center justify-between group transition transform hover:-translate-y-1 cursor-pointer gap-5'>
        <div className='w-full md:w-1/3'>
            <p className='font-thin text-base ho'>{category}</p>
            <p className='text-2xl md:text-5xl'>{title}</p>
        </div>
        <div className='w-1/4 h-[1px] hidden md:block bg-slate-700 text-right'>2019</div>
        <Image  height={200} src={img} />
    </motion.div>
  )
}

export default ProjectCard
