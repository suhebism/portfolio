import React from "react";
import Image from "next/image";
import MainImg from "../../../public/centarius-logo.png";
import Slider from "../../../components/Slider";
import Link from "next/link";

const images = [
  "https://plus.unsplash.com/premium_photo-1664474515281-7fc50ac83da4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // Add the rest of the image URLs here
];

const CaseStudy = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 pt-20 px-6 md:px-16 lg:px-32 2xl:px-80">
      <div className="w-full flex items-start md:items-center flex-col-reverse md:flex-row justify-between">
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="font-bold text-5xl text-[#dd727e]">Centarius</h1>
          <p className="font-light">
            Building the next generation of social gameplay
          </p>
        </div>
        <Image
          className="w-full md:w-1/3"
          src={MainImg}
          alt="main Image"
          width={400}
          height={400}
        />
      </div>

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

      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h1 className="text-3xl font-bold">Problem</h1>
          <p className="font-extralight text-normal">
            The gaming industry faces several key challenges:
          </p>
          <p className="font-extralight text-normal">
            1. User Engagement: Many gaming platforms struggle to keep users
            engaged for long periods, leading to high bounce rates and low
            retention.
          </p>
          <p className="font-extralight text-normal">
            2. User Loyalty: Platforms often lack meaningful rewards for users
            who spend time on the site, diminishing the motivation to continue
            playing.
          </p>
          <p className="font-extralight text-normal">
            3. Monetization: While ads can increase revenue, poor ad placement
            or overwhelming ads can negatively impact user experience.
          </p>
          <p className="font-extralight text-normal">
            Centarius seeks to address these challenges by creating a more
            engaging platform where players are motivated to stay longer, earn
            XP points, increase their level, and win time-based prizes. At the
            same time, we aim to incorporate ads strategically to boost revenue
            without compromising the user experience.
          </p>
        </div>

        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h1 className="text-3xl font-bold">Solution</h1>
          <p className="text-normal">
            <span className="font-medium">1. Dual Game Categories</span> — Offer
            two distinct gaming experiences, Immersive and Casual, to cater to
            different types of players.
          </p>
          <p className="text-normal">
            <span className="font-medium">
              2. XP Point System and User Progression
            </span>{" "}
            — Introduce an XP system that encourages progression.
          </p>
          <p className="text-normal">
            <span className="font-medium">
              3. Contests and Competitive Play
            </span>{" "}
            — Implement competitive modes for increased engagement.
          </p>
          <p className="text-normal">
            <span className="font-medium">4. Ad Placement and Monetization</span>{" "}
            — Ads are strategically placed to boost revenue without compromising
            UX.
          </p>
          <p className="text-normal">
            <span className="font-medium">5. Engagement Features</span> — Focus
            on player interaction, like forming alliances and team-based modes.
          </p>
        </div>
      </div>

      {/* My Role and Other Sections */}
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/4">
          <h1 className="text-3xl font-bold">My Role</h1>
          <p className="font-extralight">Lead UX/UI designer</p>
          <p className="font-extralight">Front end developer</p>
          <a
            className="underline"
            href="https://www.exiles.gg/team.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
        </div>
        {/* Other sections like Tools, Timeline, Process */}
      </div>

      {/* Slider Component */}
      <Slider pics={images} className="basis-[95%] md:basis-[70%]" />

      {/* Further sections */}
    </div>
  );
};

export default CaseStudy;
