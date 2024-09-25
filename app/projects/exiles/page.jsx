import React from "react";
import Image from "next/image";
import MainImg from "../../../public/exiles-logo.png";
import Slider from "../../../components/Slider";
import Link from "next/link";

const images = [
  "https://suhebism.github.io/portfolio/exiles-logo.png",
];
const CaseStudy = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 pt-20 px-6 md:px-16 lg:px-32 2xl:px-80">

      {/* section one  */}
      <div className="w-full flex items-start md:items-center flex-col-reverse md:flex-row justify-between">
        <div className="w-full md:w-1/2 flex flex-col ">
          <h1 className="font-bold text-5xl text-[#FFDD00]">Centarius</h1>
          <p className="font-light">
            Building the next generation of social gameplay
          </p>
        </div>
        <Image className="w-full md:w-1/3" src={MainImg} alt="suheb" />
      </div>
      {/* section one  */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Overview</h1>
        <p className="font-extralight w-full md:w-1/2 text-normal">
          Introduce Centarius as a dynamic web-based gaming platform offering
          two distinct categories of games: Immersive and Casual. Explain the
          platform's goal of providing an engaging and rewarding gaming
          experience, where users can either casually play or compete in
          contests to win prizes. Emphasize your role as the product designer
          and your focus on maximizing user engagement, increasing time spent on
          the site, and optimizing revenue through ads.
        </p>
      </div>
      {/* section one  */}
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div className="flex flex-col gap-5 w-full  md:w-1/2">
          <h1 className="text-3xl font-bold">Problem</h1>
          <div className="font-extralight text-normal">
            The gaming industry faces several key challenges:
            <p>
              1. User Engagement: Many gaming platforms struggle to keep users
              engaged for long periods, leading to high bounce rates and low
              retention. Rewarding
            </p>
            <p>
              2. User Loyalty: Platforms often lack meaningful rewards for users
              who spend time on the site, diminishing the motivation to continue
              playing.
            </p>
            <p>
              3. Monetization: While ads can increase revenue, poor ad placement
              or overwhelming ads can negatively impact user experience.
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
          <div className=" text-normal">
            <p className="font-medium">1. Dual Game Categories</p>
          </div>
          <div className=" text-normal">
            <p className="font-medium">2. XP Point System and User Progression</p>
          </div>
          <div className=" text-normal">
            <p className="font-medium">3. Contests and Competitive Play</p>
          </div>
          <div className=" text-normal">
            <p className="font-medium">4. Ad Placement and Monetization</p>
          </div>
          <div className=" text-normal">
            <p className="font-medium">5. Engagement Features</p>
          </div>
          <p>
            "Exiles" fosters a competitive community through online multiplayer
            modes, where players can team up or compete against each other. This
            community aspect enhances engagement, as players can form alliances,
            share strategies, and participate in events.
          </p>
          <p className="font-extralight text-normal">
            Through these innovative solutions, "Exiles" aims to create a
            compelling and enjoyable gaming experience that addresses player
            needs for customization, fairness, and strategic depth, setting a
            new standard for web-based gaming.
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
          <h1 className="sticky top-10 text-3xl font-bold bg-[#FFDD00] w-full text-black text-center">
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
              src="https://images.unsplash.com/photo-1725034408642-a3a0ecefd94e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="w-full md:w-1/2">
              <h1 className="font-medium text-2xl md:text-4xl">Exiles</h1>
              <p className="font-extralight">
                The journey to creating "Exiles" began with a deep dive into the
                evolving landscape of web-based gaming and player preferences.
                Through research, we identified a growing desire for games that
                offer both customization and strategic depth, while maintaining
                a fair and engaging experience for a broad audience.
              </p>
              <p className="mt-10 font-medium md:font-bold text-xl md:text-3xl">
                This Notion page included:
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
              <p className="mt-10 font-medium md:font-bold text-xl md:text-3xl">
                The questionnaire clarified these important points:
              </p>
              <ul className="flex flex-col overflow-hidden font-extralight gap-0 md:gap-2 -mt-3 ml-5">
                <li>
                  The client didn't have a brand or style guide in place yet.
                </li>
                <li>
                  They wanted the dashboard to be user-friendly and easy to
                  access.
                </li>
                <li>Project Timeline</li>
                <li>
                  They wanted a platform that would streamline workflow for
                  users to be able to effectively manage their brands.
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
              src="https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="flex flex-col-reverse md:flex-row w-full gap-5">
            <div className="w-full md:w-1/2">
              <h1 className="font-medium text-2xl md:text-4xl">
                Competitive Analysis
              </h1>
              <p className="font-extralight">
                {" "}
                examined the list of the client's competitors and collected data
                that might help us in our process.
              </p>
              <p className="mt-10 font-extralight">
                Here are some of our main observations:
              </p>
              <ul className="flex flex-col overflow-hidden font-extralight gap-0 md:gap-2 -mt-3 ml-5">
                <li>
                  Dubsado had a well-designed dashboard with a lot of
                  customizable options and dropdown features, which is something
                  the client wants for her website.
                </li>
                <li>
                  The landing page for Hectic was visually appealing and
                  informative, and it also had a color scheme that the client
                  was interested in.
                </li>
                <li>
                  We also found the onboarding page for Honeybook to be helpful
                  in understanding who their users are and what they are looking
                  for.
                </li>
              </ul>
            </div>
            <Image
            alt="suheb"
              className="w-full md:w-1/2"
              width={200}
              height={500}
              src="https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-10">
          <h1 className="sticky top-10 text-3xl font-bold bg-white w-full text-black text-center">
            {" "}
            Ideation
          </h1>
          <div className="flex flex-col w-full ">
            <h1 className="font-medium text-2xl md:text-4xl">User Stories</h1>
            <p className="font-extralight my-5">
              The user stories were provided by the client.
            </p>
            <div className="font-extralight flex flex-col gap-0 ml-5">
              <p>
                As a user, I want to learn about Simplebook from the homepage.
              </p>
              <p>
                As a user, I want to be able to sign up for an account and log
                in.
              </p>
              <p>
                As a user, I want to be able to view my dashboard upon login.
              </p>
              <p>As a user, I want to be able to add a project.</p>
              <p>As a user, I want to be able to manage my projects.</p>
            </div>
          </div>
          <div className="flex flex-col w-full ">
            <h1 className="font-medium text-2xl md:text-4xl">User Flow</h1>
            <p className="font-extralight">
              To design user-centric products, we needed user flows that allowed
              us to understand what our users needed in order to accomplish
              their goals. I was a part of creating user flows 1 and 5. Managing
              a dashboard can be overwhelming, so our goal was to keep our flows
              as simple as possible to minimize any pain points.
            </p>
          </div>
          <Slider pics={images} className="basis-[95%] md:basis-[70%]" />
          <div className="flex flex-col w-full ">
            <h1 className="font-medium text-2xl md:text-4xl">
              Mid-Fi Wireframes
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
          <Slider pics={images} className="basis-[95%] md:basis-[70%]" />
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-10 mt-10">
          <h1 className="sticky top-10 text-3xl font-bold bg-white w-full text-black text-center">
            {" "}
            Design
          </h1>
          <div className="flex flex-col-reverse md:flex-row w-full gap-5">
            <div className="w-full md:w-1/2">
              <h1 className="font-medium text-2xl md:text-4xl">Moodboard</h1>
              <p className="font-extralight">
                Because we are tasked with the initial MVP, we decided to
                moodboard some ideas in terms of brand identity.
              </p>
              <p className="mt-10 font-extralight">Some findings were:</p>
              <div className="flex flex-col overflow-hidden font-extralight gap-0 md:gap-2  ml-5">
                <p>
                  Color Psychology states that blue shades lean towards trust,
                  and loyalty, with a calm minimalist design
                </p>
                <p>
                  Our main focus was to create a seamless clean aesthetic, to
                  not take away from the important data points presented on a
                  dashboard
                </p>
              </div>
            </div>
            <Image
            alt="suheb"
              className="w-full md:w-1/2"
              width={200}
              height={500}
              src="https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
