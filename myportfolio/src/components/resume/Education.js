
import React from "react"
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Computer Science Engineering"
            subTitle="Malla Reddy Institute of Technology (Affiliated To Jawaharlal Nehru Technological University, Hyderabad) (2018 - 2022)"
            result="7.4/10"
            des="I completed my B.Tech in Computer Science and Engineering, where I learned core subjects like programming, data structures, and databases. 
            It strengthened my problem-solving skills and prepared me for a career in software development.."
          />
          <ResumeCard
            title="Class XII - Mathematics "
            subTitle="Sri Chaitanya Junior Kalasala (2016 - 2018)"
            result="93%"
            des="I completed my intermediate course in the stream of Mathematics, Physics, Chemistry. This course has laid a strong foundation for my engineering."
          />
          <ResumeCard
            title="Class X - Secondary School Education"
            subTitle="St. Francis Girls' High School (2015 - 2016)"
            result="9.5/10"
            des="I completed 10th grade with a strong foundation in core subjects, demonstrating commitment and academic discipline."
          />
        </div>
      </div>
      {/* part Two */}

     
    </motion.div>
  );
}

export default Education
