'use client'
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import centarius from '../public/centarius-logo.png'
import chargeSpot from '../public/chargespot.png'
import homeShikshaImg from '../public/homeshiksha.png' // Add correct image path
import upsc from '../public/UPSC.png'
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
          <span className="text-2xl md:text-6xl font-bold ml-3 text-white">creative playground!</span>
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
      </motion.div>
    </main>
    <div className="px-6 md:px-16 lg:px-32 2xl:px-80">
    <p className="text-2xl md:text-5xl my-10 font-bold"> My Projects</p>
    <div className="flex flex-col gap-10">
      <Link href="projects/exiles">
        <ProjectCard title="Centarius" category="UI/UX Case Study" img={centarius} year="2021"/>
      </Link>
      <div className="w-full h-[1px] md:hidden block bg-gradient-to-r from-black via-slate-700 to-black"/>
      <Link href="projects/charge-spot">
        <ProjectCard title="ChargeSpot" category="UI/UX Case Study" img={chargeSpot} year="2022"/>
      </Link>
      <div className="w-full h-[1px] md:hidden block bg-gradient-to-r from-black via-slate-700 to-black"/>
      <Link href="exiles">
        <ProjectCard title="UPSC Quiz App" category="UI/UX Case Study" img={upsc} year="2024"/>
      </Link>
      <div className="w-full h-[1px] md:hidden block bg-gradient-to-r from-black via-slate-700 to-black"/>
      <Link href="exiles">
        <ProjectCard title="Home Shiksha" category="UI/UX Case Study" img={homeShikshaImg} year="2023"/>
      </Link>
    </div>
    <Link href='/projects'>More</Link>
  </div>
  </>
  );
}
