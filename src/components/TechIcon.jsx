import { motion } from "framer-motion";

const TechIcon = ({ img, name, variants }) => {
    
  return (
    <motion.div variants={variants} whileHover={{scale:1.2}} className="w-10 h-10w-10  flex justify-center items-center" title={name}>
      <img src={img} alt={name} />
    </motion.div>
  );
};
export default TechIcon;
