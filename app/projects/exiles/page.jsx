
import React from "react";
import Image from "next/image";
import MainImg from "../../../public/exiles-logo.png";
import Slider from "../../../components/Slider";


const images=[
  'https://images.unsplash.com/photo-1530658475523-40059c17a6b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  '/Home2.png',
  '/Home2.png',
  '/Home2.png',
]
const CaseStudy = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 pt-20 px-6 md:px-16 lg:px-32 2xl:px-80">
      <div className="w-full flex items-start md:items-center flex-col-reverse md:flex-row justify-between">
        <div className="w-full md:w-1/2 flex flex-col ">
          <h1 className="font-bold text-5xl">Exiles Interactive</h1>
          <p className="font-light">
            Building the next generation of social gameplay
          </p>
        </div>
        <Image className="w-full md:w-1/3" src={MainImg} />
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-gray-400">Overview</h1>
        <p className="font-extralight w-full md:w-1/2 text-normal">
          Simplebook is a B2B SaaS web application that offers an all-in-one
          project management tool to help improve productivity for business
          owners. We were tasked with creating the MVP of the web application.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold  text-gray-400">Problem</h1>
          <p className="font-medium text-normal">
            Simplebook is a B2B SaaS web application that offers an all-in-one
            project management tool to help improve productivity for business
            owners. We were tasked with creating the MVP of the web application.
          </p>
          <p className="font-extralight text-normal">
            Simplebook is a B2B SaaS web application that offers an all-in-one
            project management tool to help improve productivity for business
            owners. We were tasked with creating the MVP of the web application.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-gray-400">Solution</h1>
          <p className="font-medium text-normal">
            Simplebook is a B2B SaaS web application that offers an all-in-one
            project management tool to help improve productivity for business
            owners. We were tasked with creating the MVP of the web application.
          </p>
          <p className="font-extralight text-normal">
            Simplebook is a B2B SaaS web application that offers an all-in-one
            project management tool to help improve productivity for business
            owners. We were tasked with creating the MVP of the web application.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/4">
          <h1 className="text-3xl font-bold text-zinc-600">My Role</h1>
          <p className="font-extralight">
            Co-lead UX/UI designer in a team of 5
          </p>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="text-3xl font-bold text-zinc-600">Tools</h1>
          <p className="font-extralight">Figma</p>
          <p className="font-extralight">Figjam</p>
          <p className="font-extralight">Airtable</p>
          <p className="font-extralight">Miro</p>
          <p className="font-extralight">Zoom</p>
          <p className="font-extralight">Google Suite</p>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="text-3xl font-bold text-zinc-600">Timeline</h1>
          <p className="font-extralight">Overall: 8 weeks</p>
          <p className="font-extralight">Discovery: 2+ weeks</p>
          <p className="font-extralight">Design: 6 weeks</p>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="text-3xl font-bold text-zinc-600">Process</h1>
          <p className="font-extralight">Discovery</p>
          <p className="font-extralight">Ideation</p>
          <p className="font-extralight">Design</p>
          <p className="font-extralight">Dev Handoff</p>
          <p className="font-extralight">Reflection</p>
        </div>
      </div>
      {/* <Slider pic1={pic1} pic2={pic1} pic3={pic1} pic4={pic1} pic5={pic1} pic6={pic1} pic7={pic1} pic8={pic1} className="basis-[100%] md:basis-[25%]" />
      <Slider pic1={pic2} pic2={pic2} pic3={pic2} pic4={pic2} pic5={pic2} pic6={pic2} pic7={pic2} pic8={pic2} className="basis-[100%] md:basis-[70%]" /> */}
      <Slider pics={images} className="basis-[95%] md:basis-[70%]" />
      <div className="flex flex-col w-full items-start justify-start ">
        <div className="flex flex-col items-start justify-start w-full">
          <h1 className="sticky font-black text-6xl"> Discovery</h1>
          <div className="flex w-full justify-around gap-3 items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-black">2</h1>
              <p className="font-thin text-lg">User Flows</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-black">6</h1>
              <p className="font-thin text-lg">User Interviews</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-black">6</h1>
              <p className="font-thin text-lg">Competitive Analysis</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-black">1</h1>
              <p className="font-thin text-lg">Customer Journey Map</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
