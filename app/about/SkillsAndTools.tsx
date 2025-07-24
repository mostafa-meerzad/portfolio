"use client"
import { m as motion, LazyMotion, domAnimation, easeOut } from "framer-motion";
import { skillsAndTools } from "../constants/skills";
import { Badge } from "@/components/ui/badge";

// Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};


const SkillsAndTools = ()=>(
  <LazyMotion features={domAnimation}>
  <motion.div
    className="flex flex-col items-center gap-8"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    variants={staggerContainer}
  >
    <motion.h2 className="h2" variants={fadeInUp}>Skills & Tools</motion.h2>

    <motion.ul
      className="flex justify-around items-start flex-col md:flex-row gap-5 p-5 border rounded-xl w-full background"
      variants={staggerContainer}
    >
      {skillsAndTools.map((item) => (
        <motion.li key={item.title} variants={fadeInUp}>
          <motion.h3
            className="text-xl font-semibold mb-3 capitalize"
            variants={fadeInUp}
          >
            {item.title}
          </motion.h3>
          <motion.ul
            className="flex md:flex-col lg:flex-row lg:w-32 xl:w-52 gap-2 lg:gap-3 flex-wrap"
            variants={staggerContainer}
          >
            {item.skillSet.map(({ name, Img }) => (
              <motion.li
                key={name}
                className="cursor-default"
                variants={fadeInUp}
              >
                <Badge className="bg-[#122234] text-gray-100 dark:bg-zinc-800">
                  {name} <Img />
                </Badge>
              </motion.li>
            ))}
          </motion.ul>
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
</LazyMotion>

)

export default SkillsAndTools