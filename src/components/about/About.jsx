import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        I am an Engineer who can think solutions to complex problems
          <br /> and then build meaningful softwares out of it
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1> 
            <motion.b whileHover={{color:"orange"}}>Know who I'M</motion.b> 
            <br/> 
          </h1>
        </div>
        <div className="title">
          <h1>
          Hello folks! I'm 
            <motion.b whileHover={{color:"orange"}}> Gulshan Thakur.</motion.b> 
            <p>
              <br/>
              A curious programmer with an endless appetite for learning, currently I'm completing my B.Tech in CSE
              <br/> from RGPV University.
              <br/>
              <br/>
              I am skilled in Data Structures, Algorithms and Back-end Development, I primarily work on MERN Stack
              <br/>
              but I am always open to work with new technologies.
              <br/>
              <br/>
              Along with Programming I also take part in hackathons and I've also won Internal Smart India Hackathon.
              <br/>
              <br/>
              Being an explorer, I leave no stone unturned. Currently a software engineer, an open-source enthusiast 
              <br/>
              Each day is a new start and a motivation to work harder.
              <br/>
              <br/>
              Being always involved in something, I'm always curious to learn about new technology and leverage it to
              <br/>
              solve real world problems.
              <br/>
              <br/>
              Feel free to contact me through my social-handles provided below. 
              <br/>
              I would be glad if I can help you in any possible way.

            </p>
          </h1>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>      
        {/* Later.. */}
      </motion.div>
    </motion.div>
  );
};

export default About;
