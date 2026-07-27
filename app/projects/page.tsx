export const metadata = {
  title: "Projects | Mostafa Meerzad",
  description:
    "Explore Mostafa Meerzad's portfolio of production web apps, freelance work, and open-source tutorial projects built with React, Next.js, and Node.js.",
  keywords: [
    "Mostafa Meerzad",
    "Projects",
    "Portfolio",
    "Web applications",
    "React",
    "Next.js",
    "Node.js",
    "Open source",
    "Production work",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Mostafa Meerzad",
    description:
      "Explore Mostafa Meerzad's portfolio of production web apps, freelance work, and open-source tutorial projects built with React, Next.js, and Node.js.",
    url: "https://portfolio-navy-seven-11.vercel.app/projects",
    type: "website",
    images: [
      {
        url: "/avatar-bg-pattern.webp",
        alt: "Mostafa Meerzad projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Mostafa Meerzad",
    description:
      "Explore Mostafa's production web apps, freelance work, and open-source projects.",
    images: ["/avatar-bg-pattern.webp"],
  },
};

// "use client";
import ProjectsList from "@/app/projects/ProductionWork";
import Header from "./Header";
import PersonalProjects from "./PersonalProjects";
import TutorialProjects from "./TutorialProjects";
import FlagshipProjectsList from "./FlagshipProjects";

const ProjectsPage = () => {
  return (
    <section
      className={
        "flex flex-col bg-gradient-to-b from-[rgba(10,10,15,0.6)]/10 to-darkblue "
      }
    >
      <Header />
      <ProjectsList />
      <FlagshipProjectsList />
      <PersonalProjects />
      <TutorialProjects />
    </section>
  );
};

export default ProjectsPage;
