import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "../styles/Project.css";
import { motion } from "framer-motion";
import images1 from "../assets/images/Shopee.jpg";
import images2 from "../assets/images/Ecomm.jpg";
import images3 from "../assets/images/pre_Doctor.jpg";

const Projects = () => {
  return (
    <div className="project-container">
      <div>
        <h2>
          <span className="highlight">P</span>rojects
        </h2>
      </div>
      <motion.div 
      initial={{y:-560}}
      animate={{y:10}}
      transition={{delay:0.5,type:"spring"}}
      className="card-items">
        <ProjectCard title="Prespcto" image={images1} />
        <ProjectCard title="Shoppe" image={images2} />
        <ProjectCard title="E-COMMERCE" image={images3} />
      </motion.div>
    </div>
  );
};

export default Projects;
