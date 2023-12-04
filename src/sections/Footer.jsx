import { motion } from "framer-motion";
import { socialMediaLinks } from "../data";

const Footer = () => {
  const container = {
    hidden:{opacity:0,},
    visible:{opacity:1, transition:{
      staggerChildren:0.2,
    }},
  }
  const item = {
    hidden:{opacity:0,},
    visible:{
      opacity:1,
    }
  }
  return (
    <section className="w-full flex flex-col items-center text-center gap-8 px-4 py-8 md:flex-row md:justify-between md:text-start md:px-12 lg:px-24">
      <div className="md:w-1/2">
        <h2 className="text-3xl ">Contact</h2>
        <p className="mt-2">
          I would love to hear about your project and how i could help.
        </p>
      </div>

      <motion.ul variants={container} initial="hidden"  whileInView={"visible"} className="flex gap-8">
        {socialMediaLinks.map(({ name, img, url }) => (
          <motion.li variants={item} key={name} whileHover={{scale:1.2}}>
            <a href={url}>
              <img src={img} alt={name} className="w-8" />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
export default Footer;
