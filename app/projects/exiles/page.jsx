import React from "react";
import Image from "next/image";
import MainImg from "../../../public/exiles-logo.png";
import Slider from "../../../components/Slider";

const images = [
  "https://images.unsplash.com/photo-1522322904670-5cf2a8529d21?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522322904670-5cf2a8529d21?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522322904670-5cf2a8529d21?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522322904670-5cf2a8529d21?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522322904670-5cf2a8529d21?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
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
        <div className="flex flex-col items-center justify-start w-full gap-10">
          <h1 className="sticky top-10 font-semibold text-2xl"> Discovery</h1>
          <div className="flex flex-col md:flex-row w-full justify-around gap-3 items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold">2</h1>
              <p className="font-thin text-xs md:text-lg">User Flows</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold">6</h1>
              <p className="font-thin text-xs md:text-lg">User Interviews</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold">6</h1>
              <p className="font-thin text-xs md:text-lg">Competitive Analysis</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold">1</h1>
              <p className="font-thin text-xs md:text-lg">Customer Journey Map</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-5">
            <Image  className="w-full md:w-1/2" width={200} height={500} src="https://images.unsplash.com/photo-1522322904670-5cf2a8529d21?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="w-full md:w-1/2">
              <h1 className="font-medium text-2xl">Exiles</h1>
              <p>
                Keeping a clean and organized hub is an important part of the
                process for me.
              </p>
              <p>This Notion page included:</p>
              <ul className="flex flex-col overflow-hidden">
                <li>Project Plan</li>
                <li>Weekly Meeting Notes</li>
                <li>Project Timeline</li>
                <li>Risk Ledger</li>
                <li>Decision Tracker</li>
                <li>Any additionaldocuments</li>
              </ul>
              <p>
              Not only did it help keep the project organized, but this also helped establish trust with the client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
