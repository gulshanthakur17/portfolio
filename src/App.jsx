import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Home from "./components/homepage/Home";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects/Project";
import Skill from "./components/skills/Skill";

const App = () => {
  return (
    <div>
      <Cursor />

      <section id="Homepage">
        <Navbar />
        <Home />
      </section>

      <section id="About">
        <About type="about"/>
      </section>

      <section id="Skills">
        <Skill/>
      </section>

      <Project/>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
