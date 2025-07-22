"use client";
import ProjectsList from "@/components/ui/ProjectsList";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <div className="grid  pt-8 md:pt-16 pb-10 gap-12">
      <motion.h2
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className=" justify-self-center md:justify-self-start h2"
      >
        Projects
      </motion.h2>
      <ProjectsList />
    </div>
  );
};

export default ProjectsPage;
