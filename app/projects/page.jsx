'use client'
import React from 'react'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import centarius from '../../public/centarius-logo.png'
import homeShikshaImg from '../../public/homeshiksha.png' // Add correct image path
import upscQuizImg from '../../public/UPSC.png' // Add correct image path

const page = () => {
  return (
    <div>
      <h1>All Projects</h1>
      <div className="flex flex-col gap-2">
        <Link href="/exiles">
          <ProjectCard title="Exiles Interactive" category="UI/UX Case Study" img={centarius}/>
        </Link>
        <Link href="/home-shiksha">
          <ProjectCard title="Home Shiksha" category="UI/UX Case Study" img={homeShikshaImg}/>
        </Link>
        <Link href="/upsc-quiz">
          <ProjectCard title="UPSC Quiz App" category="UI/UX Case Study" img={upscQuizImg}/>
        </Link>
      </div>
    </div>
  )
}

export default page
