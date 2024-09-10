'use client'
import React from 'react'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import img from '../../public/img.jpg'
const page = () => {
  return (
    <div>
      <h1>All Projects</h1>
      <div className="flex flex-col gap-2">
      <Link href="/exiles">
        <ProjectCard title="Exiles Interactive" category="UI/UX Case Study" img={img}/>
      </Link>
      <Link href="/exiles">
        <ProjectCard title="Exiles Interactive" category="UI/UX Case Study" img={img}/>
      </Link>
      <Link href="exiles">
        <ProjectCard title="Exiles Interactive" category="UI/UX Case Study" img={img}/>
      </Link>
      <Link href="exiles">
        <ProjectCard title="Exiles Interactive" category="UI/UX Case Study" img={img}/>
      </Link>
    </div>
    </div>
  )
}

export default page
