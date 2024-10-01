import React from "react";
import Image from "next/image";
import MainImg from "../../../public/chargespot-2.png";
import userflow from "../../../public/userflow.png";
import moodboard from "../../../public/moodboard.png";
import frame1 from '../../../public/Frame 1.png'
import frame2 from '../../../public/Frame 2.png'
import Slider from "../../../components/Slider";
import Link from "next/link";

const images = [
  "https://suhebism.github.io/portfolio/Group 14.png",
  "https://suhebism.github.io/portfolio/Group 13.png",
  "https://suhebism.github.io/portfolio/Group 11.png",
  "https://suhebism.github.io/portfolio/Group 12.png",
  "https://suhebism.github.io/portfolio/Group 15.png",
];
const images2 = [
  "https://suhebism.github.io/portfolio/Group 16.png",
  "https://suhebism.github.io/portfolio/Group 17.png",
  "https://suhebism.github.io/portfolio/Group 18.png",
  "https://suhebism.github.io/portfolio/Group 19.png",
];
const CaseStudy = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 pt-20 px-6 md:px-16 lg:px-32 2xl:px-80">
      {/* section one  */}
      <div className="w-full flex items-start md:items-center flex-col-reverse md:flex-row justify-between">
        <div className="w-full md:w-1/2 flex flex-col ">
          <h1 className="font-bold text-5xl text-[#4868FB]">ChargeSpot</h1>
          <p className="font-light">
            Building the next generation of social gameplay
          </p>
        </div>
        <Image
          className="w-full md:w-1/3 my-14 md:my-0"
          src={MainImg}
          alt="suheb"
        />
      </div>
      {/* section one  */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Overview</h1>
        <p className="font-extralight w-full md:w-1/2 text-normal">
          ChargeSpot is a mobile app designed to assist users in locating the
          nearest electric vehicle (EV) charging stations for various car makes,
          models, and even electric bikes. The app simplifies the charging
          process, ensuring users can quickly find compatible stations based on
          their vehicle type, location, and preferred charging speed.
          <br />
          <br />
          <br />
          <br />
          As the product designer, I was responsible for the entire design
          process, including user research, wireframing, prototyping, and user
          testing. I collaborated with developers, product managers, and EV
          experts to ensure the app met the needs of users and industry
          standards.
        </p>
      </div>
      {/* section one  */}
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div className="flex flex-col gap-5 w-full  md:w-1/2">
          <h1 className="text-3xl font-bold">Problem</h1>
          <div className="font-extralight text-normal">
            {/* The gaming industry faces several key challenges: */}
            <p>
              With the rise of electric vehicles, finding accessible charging
              stations can be challenging for users. Many current apps lack the
              specificity for different vehicle types or provide inadequate
              information about the availability or functionality of stations.
            </p>
            <p>
              Problem Statement: "How can we create a seamless experience for EV
              users to locate, evaluate, and access the nearest charging
              stations, considering the varying needs of different EV makes and
              models?"
            </p>
          </div>
          <p className="font-extralight text-normal">
            Centarius seeks to address these challenges by creating a more
            engaging platform where players are motivated to stay longer, earn
            XP points, increase their level, and win time-based prizes. At the
            same time, we aim to incorporate ads strategically to boost revenue
            without compromising the user experience.
          </p>
        </div>
        <div className="flex flex-col gap-5 w-full  md:w-1/2">
          <h1 className="text-3xl font-bold">Solution</h1>
          <p className="font-medium">
            {" "}
            Simplified Search and Discovery: The ChargeSpot app allows users to
            effortlessly locate nearby charging stations using their current
            location or a specific address. A key feature of the app is the
            ability to filter results based on the user's vehicle make and
            model. This ensures that users only see charging stations that are
            compatible with their EV or bike, saving them time and reducing
            frustration.
          </p>
          <p className="font-medium">
            Vehicle-Based Search: Users can input their EV make and model, and
            the app automatically filters out incompatible stations.
          </p>
          <p className=" text-normal">
            Dynamic Map View: The map provides a real-time view of all available
            stations nearby, using color-coded markers to indicate availability,
            charging speed, and station type.
          </p>
          <p className="font-medium">4. Ad Placement and Monetization</p>
          <p className="font-medium">5. Engagement Features</p>
          <p>
            "Exiles" fosters a competitive community through online multiplayer
            modes, where players can team up or compete against each other. This
            community aspect enhances engagement, as players can form alliances,
            share strategies, and participate in events.
          </p>
        </div>
      </div>
      {/* section one  */}
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/4">
          <h1 className="text-3xl font-bold">My Role</h1>
          <p className="font-extralight">Lead UX/UI designer</p>
          <p className="font-extralight">Front end developer</p>
          <Link
            className="underline"
            href="https://www.exiles.gg/team.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </Link>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="text-3xl font-bold">Tools</h1>
          <p className="font-extralight">Figma</p>
          <p className="font-extralight">Photoshop</p>
          <p className="font-extralight">Illustrator</p>
          <p className="font-extralight">Premiere Pro</p>
          <p className="font-extralight">After effects</p>
          <p className="font-extralight">Play Canvas</p>
          <p className="font-extralight">Git hub</p>
          <p className="font-extralight">Google Suite</p>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="text-3xl font-bold">Timeline</h1>
          <p className="font-extralight">Overall: 8 weeks</p>
          <p className="font-extralight">Discovery: 2+ weeks</p>
          <p className="font-extralight">Design: 6 weeks</p>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="text-3xl font-bold">Process</h1>
          <p className="font-extralight">Discovery</p>
          <p className="font-extralight">Ideation</p>
          <p className="font-extralight">Design</p>
          <p className="font-extralight">Dev Handoff</p>
          <p className="font-extralight">Iteration and Refinement</p>
        </div>
      </div>
      {/* section one  */}
      <Slider pics={images} className="basis-[95%] md:basis-[70%]" />
      {/* section one  */}
      <div className="flex flex-col w-full items-start justify-start ">
        <div className="flex flex-col items-center justify-start w-full gap-10">
          <h1 className="sticky top-10 text-3xl font-bold bg-[#4868FB] w-full text-white text-center">
            {" "}
            Discovery
          </h1>
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
            <Image
              alt="suheb"
              className="w-full md:w-1/2"
              width={200}
              height={500}
              style={{ height: "fit-content" }}
              src="https://images.unsplash.com/photo-1725273543351-23995c7253d6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="w-full md:w-1/2">
              <h1 className="font-medium text-2xl md:text-4xl">Exiles</h1>
              <p className="font-extralight">
                The Discovery Stage is critical in laying the groundwork for
                Centarius. It focuses on understanding the market, defining user
                needs, and identifying potential challenges and opportunities.
                This stage aims to gather insights that will inform the design
                and development processes, ensuring that Centarius meets both
                player expectations and business goals.
              </p>
              <p className="mt-10 font-medium md:font-bold text-xl md:text-3xl">
                Comprehensive Project Overview:
              </p>
              <ul className="flex flex-col overflow-hidden font-extralight gap-0 md:gap-2 -mt-3 ml-5">
                <li>Project Plan</li>
                <li>Weekly Meeting Notes</li>
                <li>Project Timeline</li>
                <li>Risk Ledger</li>
                <li>Decision Tracker</li>
                <li>Any additionaldocuments</li>
              </ul>
              <p>
                Not only did it help keep the project organized, but this also
                helped establish trust with the client.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row w-full gap-5">
            <div className="w-full md:w-1/2">
              <h1 className="font-medium text-2xl md:text-4xl">
                Client Questionnaire
              </h1>
              <p className="font-extralight">
                To gain a better understanding of the client's vision, a
                questionnaire was conducted.
              </p>
              <p className="mt-10 font-medium text-xl md:text-2xl">
                The questionnaire clarified these important points:
              </p>
              <ul className="flex flex-col overflow-hidden font-extralight gap-0 md:gap-2 -mt-3 ml-5">
                <li>
                  Project Goals: What are the primary objectives for Centarius,
                  and what problems do you aim to address?
                </li>
                <li>
                  Target Audience: Who is your target audience, and what are
                  their key demographics?
                </li>
                <li>
                  Must-Have Features: What essential features and
                  functionalities should be included at launch?
                </li>
                <li>
                  User Engagement Strategies: How do you envision enhancing user
                  engagement on the platform?
                </li>
                <li>
                  Timeline and Milestones: What is your desired timeline for the
                  project, and are there any critical milestones we should know
                  about?
                </li>
              </ul>
              <p>
                Through talking with the client, I could see that we were being
                tasked to create the MVP for this product concept.
              </p>
            </div>
            <Image
              alt="suheb"
              className="w-full md:w-1/2"
              width={200}
              height={500}
              style={{ height: "fit-content" }}
              src="https://images.unsplash.com/photo-1484069560501-87d72b0c3669?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="flex flex-col-reverse md:flex-row w-full gap-5">
            <div className="w-full md:w-1/2">
              <h1 className="font-medium text-2xl md:text-4xl">
                Competitive Analysis
              </h1>
              <p className="font-extralight">
                {" "}
                Centarius stands out in its simplicity and inclusiveness—by
                removing the need to log in and offering both immersive and
                casual gaming experiences. Its XP system and weekly contests
                give users ongoing incentives to engage, which will be key in
                attracting and retaining players in a competitive market.
                Focusing on easy access, diverse game selection, and meaningful
                rewards could position it as a unique contender.
              </p>
              <p className="mt-10 ">Here are some of our main observations:</p>
              <ul className="flex flex-col overflow-hidden font-extralight gap-0 md:gap-2 -mt-3 ml-5">
                <li>
                  Skillz: Requires sign-up and deposits for cash-prize
                  tournaments.
                </li>
                <li>
                  WorldWinner: Focuses on skill-based cash contests, no
                  immersive games.
                </li>
                <li>
                  FACEIT: Esports-focused, appeals to pro gamers, requires
                  registration.
                </li>
                <li>
                  Steam: Vast game library, but no prize contests or XP-based
                  system.
                </li>
                <li>
                  Roblox: User-generated games, lacks real-world prize contests.
                </li>
              </ul>
            </div>
            <Image
              alt="suheb"
              className="w-full md:w-1/2"
              width={200}
              height={500}
              style={{ height: "fit-content" }}
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-10">
          <h1 className="sticky top-10 text-3xl font-bold bg-[#4868FB] w-full text-white text-center">
            {" "}
            Ideation
          </h1>
          <div className="flex flex-col w-full ">
            <h1 className="font-medium text-2xl md:text-4xl">User Stories</h1>
            <p className="font-normal my-5">
              The user stories were provided by the client.
            </p>
            <div className="font-extralight flex flex-col gap-0 ml-5">
              <p>
                <span className="font-normal">As a Casual Player,</span> I want
                to easily navigate the platform so that I can quickly find and
                play games without any hassle.
              </p>
              <p>
                <span className="font-normal">As a Competitive Gamer,</span> I
                want to track my progress and achievements so that I can measure
                my skills against others and participate in contests
                effectively. in.
              </p>
              <p>
                <span className="font-normal">As a New User,</span> I want a
                seamless onboarding experience so that I can understand how to
                use the platform and start playing games right away.
              </p>
              <p>
                <span className="font-normal">
                  As a Player Seeking Rewards,
                </span>{" "}
                I want to earn XP points and unlock prizes through gameplay,
                motivating me to stay engaged and keep playing.
              </p>
              <p>
                <span className="font-normal">As a Social Gamer,</span> I want
                to connect with friends and join multiplayer games so that I can
                enhance my gaming experience and foster a sense of community.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <Image
              src={userflow}
              width={500}
              height={500}
              style={{ height: "fit-content" }}
            ></Image>
            <div className="flex flex-col w-full ">
              <h1 className="font-medium text-2xl md:text-4xl">User Flow</h1>
              <p className="font-extralight mb-10">
                This flow prioritizes a frictionless experience by letting users
                explore, play, and engage without the need for registration or
                login, while still offering rewards through XP accumulation.
              </p>
              <div>
                <div>
                  <p>1. Site Access (No Login)</p>
                  <p className="font-extralight ml-3">
                    Users land on the homepage and can browse freely without
                    logging in.
                  </p>
                </div>
                <div>
                  <p>2. Browse Categories (Immersive & Casual)</p>
                  <p className="font-extralight ml-3">
                    Immersive: Long, rich experiences.
                  </p>
                  <p className="font-extralight">
                    Casual: Quick, easy-to-play games.
                  </p>
                </div>
                <div>
                  <p>3. Play Games</p>
                  <p className="font-extralight ml-3">
                    Choose and play games directly in the browser.
                  </p>
                </div>
                <div>
                  <p>4. Earn XP Points</p>
                  <p className="font-extralight ml-3">
                    Gain XP as you play, tracked via a progress bar or meter.
                  </p>
                </div>
                <div>
                  <p>5. Participate in Contests</p>
                  <p className="font-extralight ml-3">
                    Use XP to enter contests with rewards like money or gifts.
                  </p>
                </div>
                <div>
                  <p>6. Compete and Win</p>
                  <p className="font-extralight ml-3">
                    Join weekly contests, and winners get prizes (prize
                    money/gifts).
                  </p>
                </div>
                <div>
                  <p>7. Engagement Encouragement</p>
                  <p className="font-extralight ml-3">
                    The more time spent, the more XP earned. Contest
                    notifications keep users engaged.
                  </p>
                </div>
                <div>
                  <p>8. Explore & Repeat</p>
                  <p className="font-extralight ml-3">
                    Continue playing games or switch categories to discover new
                    ones.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <Slider pics={images} className="basis-[95%] md:basis-[70%]" /> */}
          <div className="flex flex-col w-full ">
            <h1 className="font-medium text-2xl md:text-4xl">
              Low-Fi Wireframes
            </h1>
            <p className="font-extralight">
              To effectively tackle the design workload, we allocated specific
              user flows to each designer for creating mid-fidelity wireframes.
              Our aim was to ensure that our screens adhered to best practices
              for dashboard design.
            </p>
            <p>
              While we collaborated as a team for a cohesive look, I took charge
              of the landing page. The landing page needed to be simple yet
              effective in converting to sales. Potential clients would easily
              be able to see the value of using Simplebook just by viewing this
              page.
            </p>
          </div>

          <Slider pics={images2} className="basis-[95%] md:basis-[70%]" />
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-10 mt-10">
          <h1 className="sticky top-10 text-3xl font-bold bg-[#4868FB] w-full text-white text-center">
            {" "}
            Design
          </h1>
          <div className="flex flex-col md:flex-row w-full gap-5">
            <div className="w-full md:w-1/2">
              <h1 className="font-medium text-2xl md:text-4xl">Moodboard</h1>
              <p className="font-extralight">
                Because we are tasked with the initial MVP, we decided to
                moodboard some ideas in terms of brand identity.
              </p>
              <p className="mt-10 font-extralight">Some findings were:</p>
              <div className="flex flex-col overflow-hidden font-extralight gap-5 md:gap-10  ml-5">
                <p>
                  The color theme featuring pink and purple is often referred to
                  as a vibrant gradient or neon gradient theme. It's common in
                  futuristic and tech-driven designs, especially in the gaming
                  and digital entertainment industries. These bright, bold
                  colors with high contrast are part of the modern, playful or
                  futuristic design style, often used to evoke energy,
                  excitement, and creativity.
                </p>

                <p>
                  The color palette for Centarius, featuring pink and purple,
                  was inspired by the emotional and psychological impact these
                  colors evoke. Pink brings a sense of creativity, playfulness,
                  and energy, perfectly aligning with the casual gaming
                  experience. On the other hand, purple adds depth, ambition,
                  and a touch of luxury, which suits the immersive and
                  competitive aspects of the platform. Together, these colors
                  create a dynamic and modern aesthetic, reflecting the vibrant,
                  engaging atmosphere of the Centarius gaming world. This bold
                  combination also taps into current design trends, offering
                  both contrast and harmony for a visually striking user
                  interface.
                </p>
              </div>
            </div>
            <Image
              alt="suheb"
              className="w-full md:w-1/2"
              width={200}
              height={500}
              src={moodboard}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
