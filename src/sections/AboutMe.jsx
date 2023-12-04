import { backendTechIcons, frontendTechIcons } from "../data";
import TechIcon from "../components/TechIcon";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="px-4 text-center md:px-12 lg:px-24 lg:text-start ">
      <h2 className="text-4xl mb-10 font-Posterama cap">About Me</h2>
      <p className="text-gray-300 mb-12">
        Hello! I'm Mostafa, a self-taught web developer with a unique journey in
        the technology field. Originally a computer science student, my academic
        path took an unexpected turn due to political events, leading me to
        leave college after two years. However, my passion for technology and
        learning persisted.
      </p>
      <h3 className="text-3xl font-Posterama  my-4">frontend</h3>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <p className="lg:max-w-3xl text-gray-300">
          Embracing the challenge, I delved into web development and embarked on
          a self-taught journey. Over the course of two years, I acquired
          proficiency in a variety of technologies including:
        </p>
        <RenderTechIcons techIcons={frontendTechIcons} />
      </div>
      <h3 className="text-3xl font-Posterama  my-4">backend</h3>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <p className="lg:max-w-3xl text-gray-300">
          Motivated to broaden my skills, I dedicated time to exploring backend
          technologies. In the last couple of months, I delved into:
        </p>
        <RenderTechIcons techIcons={backendTechIcons} />
      </div>
      <br />
      <p className="text-gray-300">
        While I've made strides in backend development, I acknowledge the
        ongoing learning process and continue to build confidence in this field.
      </p>
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const RenderTechIcons = ({ techIcons }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    className="p-8 pr-0 flex justify-center items-center gap-8"
  >
    {techIcons.map(({ name, img }) => (
      <TechIcon name={name} img={img} variants={itemVariants} key={name} />
    ))}
  </motion.div>
);
export default AboutMe;
