import React from "react";
import Image from "next/image";
import MainImg from "../../../public/exiles-logo.png";
import Slider from "../../../components/Slider";

const images = [
  "https://images.unsplash.com/photo-1725882176928-8cfdf8000c9a?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1725882176928-8cfdf8000c9a?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1725882176928-8cfdf8000c9a?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1725882176928-8cfdf8000c9a?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1725882176928-8cfdf8000c9a?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1725882176928-8cfdf8000c9a?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1725882176928-8cfdf8000c9a?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          <h1 className="sticky top-10 text-3xl font-bold bg-white w-full text-black text-center"> Discovery</h1>
          <div className="flex flex-col md:flex-row w-full justify-around gap-3 items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold">2</h1>
              <p className="font-extralight">User Flows</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold">6</h1>
              <p className="font-extralight">User Interviews</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold">6</h1>
              <p className="font-extralight">Competitive Analysis</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold">1</h1>
              <p className="font-extralight">Customer Journey Map</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-5">
            <Image  className="w-full md:w-1/2" width={200} height={500} src="https://images.unsplash.com/photo-1725034408642-a3a0ecefd94e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="w-full md:w-1/2">
              <h1 className="font-medium text-2xl md:text-4xl">Exiles</h1>
              <p className="font-extralight">
                Keeping a clean and organized hub is an important part of the
                process for me.
              </p>
              <p className="mt-10 font-medium md:font-bold text-xl md:text-3xl">This Notion page included:</p>
              <ul className="flex flex-col overflow-hidden font-extralight gap-0 md:gap-2 -mt-3 ml-5">
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
          <div className="flex flex-col-reverse md:flex-row w-full gap-5">
          <div className="w-full md:w-1/2">
              <h1 className="font-medium text-2xl md:text-4xl">Client Questionnaire</h1>
              <p className="font-extralight">To gain a better understanding of the client's vision, a questionnaire was conducted.</p>
              <p className="mt-10 font-medium md:font-bold text-xl md:text-3xl">The questionnaire clarified these important points:</p>
              <ul className="flex flex-col overflow-hidden font-extralight gap-0 md:gap-2 -mt-3 ml-5">
                <li>The client didn't have a brand or style guide in place yet.</li>
                <li>They wanted the dashboard to be user-friendly and easy to access.</li>
                <li>Project Timeline</li>
                <li>They wanted a platform that would streamline workflow for users to be able to effectively manage their brands.</li>
              </ul>
              <p>Through talking with the client, I could see that we were being tasked to create the MVP for this product concept.</p>
            </div>
            <Image  className="w-full md:w-1/2" width={200} height={500} src="https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            
          </div>
          <div className="flex flex-col-reverse md:flex-row w-full gap-5">
          <div className="w-full md:w-1/2">
              <h1 className="font-medium text-2xl md:text-4xl">Competitive Analysis</h1>
              <p className="font-extralight"> examined the list of the client's competitors and collected data that might help us in our process.</p>
              <p className="mt-10 font-extralight">
              Here are some of our main observations:</p>
              <ul className="flex flex-col overflow-hidden font-extralight gap-0 md:gap-2 -mt-3 ml-5">
                <li>Dubsado had a well-designed dashboard with a lot of customizable options and dropdown features, which is something the client wants for her website.</li>
                <li>The landing page for Hectic was visually appealing and informative, and it also had a color scheme that the client was interested in.</li>
                <li>We also found the onboarding page for Honeybook to be helpful in understanding who their users are and what they are looking for.</li>
              </ul>
            </div>
            <Image  className="w-full md:w-1/2" width={200} height={500} src="https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-10">
          <h1 className="sticky top-10 text-3xl font-bold bg-white w-full text-black text-center"> Ideation</h1>
          <div className="h-screen"></div>
        </div>
        
      </div>
    </div>
  );
};

export default CaseStudy;
