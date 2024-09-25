import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard = ({ img, category, title, year }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }} // Optional: triggers animation only once
      className="flex-col flex md:flex-row items-start md:items-center justify-between group transition transform hover:-translate-y-1 cursor-pointer gap-5"
    >
      <div className="w-full md:w-1/3">
        <p className="font-thin text-base">{category}</p>
        <p className="text-2xl md:text-5xl">{title}</p>
      </div>
      <div className="w-1/4 h-[1px] hidden md:block bg-slate-700 text-right">
        <p className="text-lg">{year}</p> {/* Changed to a paragraph for semantic HTML */}
      </div>
      <Image
        className="rounded-lg"
        height={200}
        width={300} // Specify width to maintain aspect ratio
        src={img}
        alt={`${title} image`} // Add alt text for accessibility
        style={{ width: "20%", height: "auto" }} // Set CSS styles
      />
    </motion.div>
  );
};

export default ProjectCard;
