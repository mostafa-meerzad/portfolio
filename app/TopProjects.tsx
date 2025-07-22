"use client"
import ProjectsList from "@/components/ui/ProjectsList";
import { motion } from "framer-motion";

const TopProjects = () => {

  return (
    <section className="flex flex-col items-center gap-10 py-20">
      <motion.h2 initial={{opacity: 0, scale: .95}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} className="h2
       mb-5">Projects</motion.h2>
      <ProjectsList limit={3} />
    </section>
  );
};

export default TopProjects;
