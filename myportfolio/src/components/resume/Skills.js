import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        </div>

        <ul className="mt-6 list-disc list-inside space-y-2 text-lg text-gray-300">
          <li>C and C++ Programming </li>
          <li>Core Java and Advanced Java</li>
          <li>Hypertext Markup Language(HTML)</li>
          <li>Cascading style Sheets (CSS)</li>
          <li>JavaScript</li>
          <li>Object Oriented Programming</li>
          <li>React JS</li>
          <li>Spring Framework </li>
          <li>MySQL </li>
          <li>Python </li>
          <li>Machine Learning </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Skills;
