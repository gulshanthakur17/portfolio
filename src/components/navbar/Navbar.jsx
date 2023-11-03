import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>GT!!!</h1>
        </motion.span>
        <div className="social">
          <a href='http://www.linkedin.com/in/gulshanthakur17'><img src='linkedin.png' alt='linkedin'/></a>
          <a href='https://twitter.com/g_thakur17'><img src='twitterx.png' alt='twitter'/></a>
          <a href='https://github.com/gulshanthakur17'><img src='github.png' alt='github'/></a>
          <a href='https://www.instagram.com/mr__thakur17'><img src='instagram.png' alt='instagram'/></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
