import ProjectsList from "@/components/ui/ProjectsList";

const TopProjects = () => {
  return (
    <section className="flex flex-col items-center gap-10 py-20">
      <h2 className="h2
       mb-5">Projects</h2>
      <ProjectsList limit={3} />
    </section>
  );
};

export default TopProjects;
