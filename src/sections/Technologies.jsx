import { motion } from "framer-motion";
import Tech from "../components/Tech";
import { technologies } from "../data";

const Technologies = () => {
  const container = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.15, staggerChildren: 0.1 },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.section
      className="grid gap-x-12 gap-y-4 grid-rows-3 grid-flow-col w-full overflow-x-auto hide-scroll px-8 my-12
      md:px-12
      lg:px-36
      lg:text-2xl
      lg:grid-rows-2
       "
      variants={container}
      initial={"hidden"}
      whileInView={"visible"}

    >
      {technologies.map((tech) => (
        <Tech
          title={tech}
          key={tech}
          variants={item}
        />
      ))}
    </motion.section>
  );
};
export default Technologies;
