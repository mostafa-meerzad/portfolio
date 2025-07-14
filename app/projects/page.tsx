import ProjectsList from "@/components/ui/ProjectsList";

const ProjectsPage = () => {
  return (
    <div className="grid  pt-8 md:pt-16 pb-10 gap-12">
      <h2 className=" justify-self-center md:justify-self-start text-4xl font-semibold">
        Projects
      </h2>
      <ProjectsList />
    </div>
  );
};

export default ProjectsPage;
