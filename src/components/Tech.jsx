import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Tech = ({ title, ...args }) => {
  return (
    <motion.p className="text-xl text-gray-300 capitalize whitespace-nowrap cursor-default select-none" {...args}>
      {title}
    </motion.p>
  );
};

Tech.propTypes = { title: PropTypes.string };
export default Tech;
