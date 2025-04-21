
import React from "react"
import Title from "../layouts/Title"
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Explore my projects and let your thoughts flow—your feedback matters!"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="STORE IT APPLICATION - GOOGLE DRIVE CLONE"
          des=" StoreIT is a cloud-based file management application inspired by Google Drive. 
          Built using Next.js and React on the frontend with a Node.js backend and Appwrite for database and authentication,
           this project enables users to securely manage their files online"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Application"
          des=" Developed a full-featured e-commerce web application designed for a seamless shopping experience. The platform enables users to browse products, 
          manage their cart, place orders, and track shipments, while also providing sellers and admins with tools for product management and analytics."
          src={projectTwo}
        />
        <ProjectsCard
          title="My Diary Web Application"
          des=" Developed a personal diary web application that allows users to securely create, view, update, and delete diary entries. 
          The application follows the MVC architecture using Spring Framework and demonstrates basic CRUD operations on a user-based database."
          src={projectThree}
        />
        
      </div>
    </section>
  );
}

export default Projects
