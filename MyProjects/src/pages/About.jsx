import React, { useRef } from "react";
import "../styles/About.css";
import { motion, useScroll, useAnimation } from "framer-motion";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

const skills = [
  { name: "HTML", level: 90, icon: <TiHtml5 size={40} color="#E34F26" /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt size={40} color="#1572B6" /> },
  { name: "JavaScript", level: 80, icon: <FaJs size={40} color="#F7DF1E" /> },
  { name: "React.js", level: 75, icon: <FaReact size={40} color="#61DAFB" /> },
];

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.2,
    },
  },
};

const skillVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.3 + i * 0.3, type: "spring", stiffness: 130, },
  }),
};

const About = () => {
  const ref = useRef(null);
  const controls = useAnimation(); // UseAnimation for controlling animation states
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.5 0.8", "1 1"], // Adjust offset to trigger at the right scroll position
  });

  // Trigger animation when the scroll progress reaches the section
  React.useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest > 0.1) { // Adjust this threshold based on when you want the animation to start
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    });
  }, [scrollYProgress, controls]);

  return (
    <div className="about-container" ref={ref}>
      {/* Left side: About Description */}
      <motion.div
        className="about-description"
        variants={containerVariants}
        initial="hidden"
        animate={controls} // Use controls for animations
      >
        <h2 className="Abt_title">
          About <span className="abt-1">Me</span>
        </h2>
        <p className="p">
          I’m a passionate Front-End Developer with 3-4 years of experience
          crafting responsive, dynamic, and user-friendly web applications. My
          expertise lies in modern web technologies, including HTML5, CSS3, and
          JavaScript, with a focus on building scalable and interactive user
          interfaces using the React.js library.
        </p>
      </motion.div>

      {/* Right side: Skills section */}
      <div className="skills-container">
        <h3 className="skills-title"><span className="my-skills">My</span>Skills</h3>
        <div className="skills">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill"
              variants={skillVariant}
              initial="hidden"
              animate={controls} // Use controls for skill animations
              custom={index}
            >
              <div className="skill-meter">
                <svg className="skill-svg" width="120" height="120">
                  <circle
                    className="skill-circle-bg"
                    cx="60"
                    cy="60"
                    r="50"
                    strokeWidth="10"
                  />
                  <motion.circle
                    className="skill-circle-progress"
                    cx="60"
                    cy="60"
                    r="50"
                    strokeWidth="10"
                    strokeDasharray="314"
                    strokeDashoffset="314"
                    animate={{
                      strokeDashoffset:
                        314 - (314 * skill.level) / 100, // Calculate percentage
                    }}
                    transition={{ duration: 1.5, delay: index * 0.3 }}
                  />
                  <foreignObject
                    x="35"
                    y="35"
                    width="50"
                    height="50"
                    className="icon-container"
                  >
                    {skill.icon}
                  </foreignObject>
                </svg>
              </div>
              <p className="skill-name">{skill.name}</p>
              <p className="skill-level">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
