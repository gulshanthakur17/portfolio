import React from "react";
import "./SkillSection.scss";
import {
    DiNodejs,
  } from "react-icons/di";
import {
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiReact,
  SiRedux,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiVisualstudiocode,
} from "react-icons/si";

const SkillSection = () => {
  return (
    <section className="skill-section">
      <div className="left-skills">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul>
            <li>
              <SiCplusplus /> C++
            </li>
            <li>
              <SiJavascript /> JavaScript
            </li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Front-End</h3>
          <ul>
            <li>
              <SiHtml5 /> HTML
            </li>
            <li>
              <SiCss3 /> CSS
            </li>
            <li>
              <SiBootstrap /> Bootstrap
            </li>
            <li>
              <SiReact /> React
            </li>
            <li>
              <SiRedux /> React Redux
            </li>
          </ul>
        </div>
      </div>
      <div className="right-skills">
        <div className="skill-category">
          <h3>Back-End</h3>
          <ul>
            <li>
              {/* <SiNodeJs /> Node.js */}
              <DiNodejs/> Node.js
            </li>
            <li>
              <SiExpress /> Express
            </li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Databases & Tools</h3>
          <ul>
            <li>
              <SiMysql /> MySQL
            </li>
            <li>
              <SiMongodb /> MongoDB
            </li>
            <li>
              <SiGit /> Git & GitHub
            </li>
            <li>
              <SiDocker /> Docker
            </li>
            <li>
              <SiVisualstudiocode /> VS Code
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
