import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Twitter Backend System",
    img: "https://store-images.s-microsoft.com/image/apps.60673.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.5d82b7eb-9734-4b51-b65d-a0383348ab1b",
    desc: "This project is the backend of a Twitter-like social media application, responsible for handling various essential functionalities. It's built with Node.js and MongoDB and uses JSON Web Tokens (JWT) for secure user authentication.",
    technology: "Technology:-JavaScript, Nodejs, Express, MongoDB",
    link: "https://github.com/gulshanthakur17/Twitter"
  },
  {
    id: 2,
    title: "Airline Booking Backend System",
    img: "https://etimg.etb2bimg.com/photo/98197876.cms",
    desc: "This project is the backend of a flight service application. Features- Authentication, Booking Service, Flights and Search Service, Reminder Service, Microservice based project.",
    technology: "Technology:-JavaScript, Nodejs, Express, MySql",
    link: "https://github.com/gulshanthakur17/FlightsAndSearchService"
  },
  {
    id: 3,
    title: "iBlog",
    img: "https://cdn.dribbble.com/users/1963775/screenshots/15483648/media/8bbf309a418ac6a88f4f755b8b599b04.png?resize=1000x750&vertical=center",
    desc: "iBlog, a blogging platform on React, using Firebase for the cloud backend. Implemented basic authentication and blogging functionality using Firebase. Utilized React to create a responsive and user-friendly interface for the blogging platform. Worked collaboratively with a team of developers to ensure timely project completion.",
    technology: "Technology:- React and Firebase",
    link: "https://react-blog-website-41bbc.web.app/"
  },
  {
    id: 4,
    title: "Todo App",
    img: "https://codingnepalweb.com/wp-content/uploads/2021/05/img_6092ae49e2e72.jpg",
    desc: "This is a Todo app created with MERN stack which keeps a track of your Todos.",
    technology: "Technology:-JavaScript, ReactJs, Express, MongoDB",
    link: "https://gulshanthakur17.github.io/To-Do-Lists/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>{item.technology}</p>
            <a href={item.link}>
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
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
    <div className="project" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;
