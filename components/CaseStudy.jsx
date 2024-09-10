import React from 'react'
import Image from 'next/image'

const CaseStudy = ({title, img,overviewtext}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 pt-20 px-6 md:px-16 lg:px-32 2xl:px-80'>
      <div className='w-full flex items-start md:items-center flex-col-reverse md:flex-row justify-start'>
        <div className='w-full md:w-1/2 flex flex-col '>
          <h1 className='font-bold text-5xl'>{title}</h1>
          <p className='font-light'>Building the next generation of social gameplay</p>
        </div>
        <Image className='w-full md:w-1/2' src={img} />
      </div>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-bold text-gray-400'>Overview</h1>
        <p className='font-extralight w-full md:w-1/2 text-normal'>{overviewtext}</p>
      </div>
      <div className='flex flex-col md:flex-row gap-5'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl font-bold  text-zinc-600'>Problem</h1>
          <p className='font-medium text-normal'>{overviewtext}</p>
          <p className='font-extralight text-normal'>{overviewtext}</p>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl font-bold text-zinc-600'>Solution</h1>
          <p className='font-medium text-normal'>{overviewtext}</p>
          <p className='font-extralight text-normal'>{overviewtext}</p>
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row gap-5'>
        <div className='w-full md:w-1/4'>
          <h1 className='text-3xl font-bold text-zinc-600'>My Role</h1>
          <p className='font-extralight'>Co-lead UX/UI designer in a team of 5</p>
        </div>
        <div className='w-full md:w-1/4'>
          <h1 className='text-3xl font-bold text-zinc-600'>Tools</h1>
          <p className='font-extralight'>Figma</p>
          <p className='font-extralight'>Figjam</p>
          <p className='font-extralight'>Airtable</p>
          <p className='font-extralight'>Miro</p>
          <p className='font-extralight'>Zoom</p>
          <p className='font-extralight'>Google Suite</p>
        </div>
        <div className='w-full md:w-1/4'>
          <h1 className='text-3xl font-bold text-zinc-600'>Timeline</h1>
          <p className='font-extralight'>Overall: 8 weeks</p>
          <p className='font-extralight'>Discovery: 2+ weeks</p>
          <p className='font-extralight'>Design: 6 weeks</p>
        </div>
        <div className='w-full md:w-1/4'>
          <h1 className='text-3xl font-bold text-zinc-600'>Process</h1>
          <p className='font-extralight'>Discovery</p>
          <p className='font-extralight'>Ideation</p>
          <p className='font-extralight'>Design</p>
          <p className='font-extralight'>Dev Handoff</p>
          <p className='font-extralight'>Reflection</p>
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
