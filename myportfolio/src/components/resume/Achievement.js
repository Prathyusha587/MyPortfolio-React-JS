
import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Learning Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Agile Methodology Virtual Experience Program - Forage"
            subTitle="Issued by Cognizant"
            result="August 2023"
            des="Completed a virtual internship on Agile methodology and Scrum fundamentals through Forage in collaboration with Cognizant. 
            Gained insights into Agile workflows, sprint planning, and the role of Scrum in modern software development."
          />
          <ResumeCard
            title="Future Ready Talent virtual Internship"
            subTitle="Issued by Microsoft"
            result="November 2021 - February 2022"
            des="Completed a virtual internship with Microsoft focused on the fundamentals of Microsoft Azure. 
            Developed a basic chatbot using Azure services to answer user queries related to COVID-19."
          />
          
        </div>
      </div>
      
    </motion.div>
  );
};

export default Achievement;
