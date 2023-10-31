import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";

const Link = ({ href, text }) => {
  return (
    <a href={href} className="text-sm font-medium hover:text-gray-300 hover:scale-105">
      {text}
    </a>
  );
};

const Project = ({ name, imgUrl, liveUrl, sourceUrl, techs }) => {
  const [isShowMoreVisible, setIsShowMoreVisible] = useState(false);
  const [isProjectHovering, setIsProjectHovering] = useState(false);
  const [goingUp, setGoingUp] = useState(false);

  const handleClick = () =>
    setIsShowMoreVisible((prev) => {
      if (prev) {
        setGoingUp(false);
        return false;
      }
      setGoingUp(true);
      return true;
    });
  // Decide how and when to cover the project-image revealing the links
  let animationProps = {};

  if (isProjectHovering && !isShowMoreVisible && !goingUp)
    animationProps = { top: "102%" };
  else if (isProjectHovering && !isShowMoreVisible)
    animationProps = { top: "85%" };
  else if (isShowMoreVisible) animationProps = { top: "-4%", height: "104%" };
  else animationProps = {};

  return (
    <div className="my-8 lg:my-0 ">
      <div
        className=" relative  h-4/5 w-full mb-2 group  rounded-lg cursor-pointer flex justify-center overflow-hidden "
        onClick={handleClick}
        onMouseEnter={() => {
          setIsProjectHovering(true);
          setGoingUp(true);
        }}
        onMouseLeave={() => {
          setIsProjectHovering(false);
          setGoingUp(false);
        }}
      >
        <img
          src={imgUrl}
          alt={name}
          className={`w-full h-full  object-cover   transition-all duration-200 ease-in ${
            isShowMoreVisible
              ? "group-hover:scale-100"
              : "group-hover:scale-105"
          }`}
          loading="lazy"
        />

        <motion.div
          className={`absolute left-0 right-0 flex justify-center items-end pb-4  z-10 
          bg-gradient-to-b from-transparent to-black
          gap-8 h-[120%] top-full `}
          initial={{ height: "100%" }}
          animate={animationProps}
          transition={{ duration: ".5", ease: "easeInOut" }}
        >
          <div
            className="absolute
              flex justify-center items-center 
                 top-0"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={
                goingUp
                  ? { rotate: [0, -45], left: ["0", ".15rem"] }
                  : { rotate: [0, 45, 0], left: ["0", ".15rem", "0"] }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`w-4 h-[2px] bg-gray-300 relative `}
            ></motion.div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={
                goingUp
                  ? { rotate: [0, 45], right: ["0", ".15rem"] }
                  : { rotate: [0, -45, 0], right: ["0", ".15rem", "0"] }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`w-4 h-[2px] bg-gray-300 relative`}
            ></motion.div>
          </div>
          <Link href={liveUrl} text={"view live"} />
          <Link href={sourceUrl} text={"view source"} />
        </motion.div>
      </div>
      <h3 className="text-xl font-medium uppercase font-Nexa">{name}</h3>
      <ul className="flex gap-4 uppercase my-1">
        {techs.map((tech) => (
          <li key={tech} className="text-gray-300 font-Nexa text-sm">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

Project.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  liveUrl: PropTypes.string,
  sourceUrl: PropTypes.string,
  techs: PropTypes.array,
};
export default Project;
