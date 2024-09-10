'use client'
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import img from '../public/exiles-logo.png'
import {motion} from 'framer-motion'
import Link from "next/link";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-center px-6 md:px-16 lg:px-32 2xl:px-80">
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className=" flex flex-col gap-5">
        <p className="text-sm font-thin">
          Hello and welcome to my
          <span className="text-2xl md:text-6xl font-bold ml-3">creative playground!</span>
        </p>
        <div className="h-[1px] w-full bg-gradient-to-r from-gray-700 via-black to-black"></div>
        <p className="text-sm font-thin ">
          I'm <span className="font-normal">Suheb Ahmed</span>- a product designer and front end developer who thrives on turning the
          ordinary into the extraordinary. Think of this portfolio as a gallery
          of innovation where each project is a canvas, every detail a
          brushstroke, and user experience the masterpiece. Join me on a journey
          where imagination meets precision, and let's design something
          remarkable together.
        </p>
        {/* <div class="marquee ">
          <div>
            <span>
              ++++ this is a running text aka marquee using html &amp; css +
              text length is limited to the width
            </span>
            <span>
              ++++ this is a running text aka marquee using html &amp; css +
              text length is limited to the width
            </span>
          </div>
        </div> */}
      </motion.div>
      
    </main>
    <div className="px-6 md:px-16 lg:px-32 2xl:px-80">
    <p>Projects</p>
    <div className="flex flex-col gap-2">
      <Link href="projects/exiles">
        <ProjectCard title="Exiles Interactive" category="UI/UX Case Study" img={img}/>
      </Link>
      <Link href="exiles">
        <ProjectCard title="Exiles Interactive" category="UI/UX Case Study" img={img}/>
      </Link>
      <Link href="exiles">
        <ProjectCard title="Exiles Interactive" category="UI/UX Case Study" img={img}/>
      </Link>
      <Link href="exiles">
        <ProjectCard title="Exiles Interactive" category="UI/UX Case Study" img={img}/>
      </Link>
    </div>
    <Link href='/projects'>More</Link>
  </div>
  </>
  );
}
