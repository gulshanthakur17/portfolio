import "./app.scss"
import Navbar from "./components/navbar/Navbar";


const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
    </section>
    
    <section id="Skills">Skills</section>
    <section id="About">About</section>
    <section id="Projects">Project1</section>
    <section>Project2</section>
    <section>Project3</section>
    <section id="Contact">Contact</section>

  </div>
};


export default App
