import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const Home = () => {
  return (
    <>
      <main className="main-container">
        <motion.div
          className="background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ x: -850 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
        >
          <h1 className="title">
            I'm <span className="title-1">Sasi Vardhan Reddy</span>
          </h1>
          <h4 className="dev">Front-End Developer</h4>
          <p className="p">
            I specialize in building modern and responsive web applications
          </p>
        </motion.div>

        {/* Button box with animations */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="btns-box"
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
              boxShadow: "0px 0px 8px rgba(255,255,255,0.8)",
            }}
            className="btn"
            id="btn1"
          >
            Get Started
          </motion.button>
          <motion.a
            href="/Sasi_React_Latest_25.pdf" 
            download="Sasi_Vardhan_Resume.pdf"  // Name of the downloaded file
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
              boxShadow: "0px 0px 8px rgba(255,255,255,0.8)",
            }}
            className="btn"
            id="btn2"
          >
            Download CV
          </motion.a>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
