import { useRef } from "react";
import "./skill.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SkillSection from "./skillSection/SkillSection";

 

const Skill = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="skill" ref={ref}>
      <div className="progress">
        <h1>Professional Skillset</h1>        
      </div>
      <SkillSection/>
    </div>
  );
};

export default Skill;
