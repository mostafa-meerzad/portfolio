import { Mail } from "lucide-react";
import { StaticImageData } from "next/image";
import React from "react";
import { IconType } from "react-icons";
import { BiLogoInstagramAlt, BiLogoPostgresql } from "react-icons/bi";
import {
  FaDatabase,
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaLinux,
  FaMedal,
  FaPython,
  FaReact,
  FaRegObjectGroup,
  FaWhatsapp,
} from "react-icons/fa";
import { PiPlusBold } from "react-icons/pi";
import backendDark from "../assets/backend-dark.png";
import backend from "../assets/backend.png";
import frontendDark from "../assets/frontend-dark.png";
import frontend from "../assets/frontend.png";
import fullStackDark from "../assets/full-stack-dark.png";
import fullStack from "../assets/full-stack.png";
import nike from "../assets/nike.png";
import promptopia from "../assets/promptopia.png";
import spaceTourism from "../assets/space-tourism.png";
import {
  RiJavaLine,
  RiNextjsLine,
  RiTailwindCssFill,
  RiVercelLine,
} from "react-icons/ri";
import {
  SiAffinitydesigner,
  SiChakraui,
  SiExpress,
  SiFramer,
  SiJest,
  SiMongodb,
  SiPostman,
  SiPrisma,
  SiRadixui,
  SiShadcnui,
  SiThealgorithms,
  SiTypescript,
  SiWebstorm,
} from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { BsFiletypeSql } from "react-icons/bs";
import { MdOutlineHttp } from "react-icons/md";

type ProjectsType = { title: string; href: string; description: string };
const projects: ProjectsType[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

type AboutType = { title: string; description: string };
const about: AboutType[] = [
  {
    title: "bio",
    description:
      " Passionate dev crafting clean full-stack apps with modern tools.",
  },
  {
    title: "learning",
    description: " Focused on mastering core software engineering concepts.",
  },
  {
    title: "location",
    description: "Based in Kabul, Afghanistan.",
  },
];

export type ContactsType = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
};

const contacts: ContactsType[] = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
    value: "mostafameerzad@gmail.com",
    href: "",
  },
  {
    icon: <FaWhatsapp />,
    label: "Phone",
    value: "+93 790 306378",
    href: "",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/mostafameerzad",
    href: "https://github.com/mostafa-meerzad",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/mostafa-meerzad",
    href: "https://www.linkedin.com/in/mostafa-meerzad-a753371b7/",
  },
];

type ServicesType = {
  title: string;
  img: StaticImageData;
  darkImg: StaticImageData;
};
const services: ServicesType[] = [
  { title: "frontend development", img: frontend, darkImg: frontendDark },
  { title: "backend development", img: backend, darkImg: backendDark },
  { title: "full stack development", img: fullStack, darkImg: fullStackDark },
];

type AdvantagesType = { value: string; label: string; Icon: IconType };

const advantages: AdvantagesType[] = [
  {
    value: "3",
    label: "years of practical experience",
    Icon: PiPlusBold,
  },
  {
    value: "150",
    label: "projects built during learning",
    Icon: PiPlusBold,
  },
  {
    value: "Top 10",
    label: "GitHub contributor in Afghanistan",
    Icon: FaMedal,
  },
];

type TopProjectType = {
  name: string;
  description: string;
  img: StaticImageData;
  technologies: string[];
  github: string;
  preview: string;
};
const topProjects: TopProjectType[] = [
  {
    name: "Promptopia",
    description:
      "Promptopia is a full-stack AI prompt sharing application where users can create, manage, and explore high-quality AI prompts. Built with the latest web technologies, it offers a smooth and responsive experience for prompt creators and explorers alike.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Axios", "PostgreSQL"],
    github: "https://github.com/mostafa-meerzad/promptopia.git",
    preview: "https://promptopia-black-beta.vercel.app",
    img: promptopia,
  },
  {
    name: "Space Tourism",
    description:
      "Space tourism Promptopia is a full-stack AI prompt sharing application where users can create, manage, ",
    technologies: ["Next.js", "Tailwindcss", "Framer Motion"],
    github: "https://github.com/mostafa-meerzad/space-tourism-next.js.git",
    preview: "https://space-tourism-mocha-three.vercel.app/",
    img: spaceTourism,
  },
  {
    name: "Nike",
    description:
      "Nike is a full-stack AI prompt sharing application where users can create, manage, ",
    technologies: ["Next.js", "Tailwindcss", "Framer Motion"],
    github: "https://github.com/mostafa-meerzad/nike.git",
    preview: "https://serene-biscotti-6c2764.netlify.app/",
    img: nike,
  },
];

type SocialMediaType = { Img: IconType; href: string; hover: string };

const socialMedia: SocialMediaType[] = [
  {
    Img: FaLinkedin,
    href: "https://www.linkedin.com/in/mostafa-meerzad-a753371b7/",
    hover: "Linkedin",
  },
  {
    Img: FaGithub,
    href: "https://github.com/mostafa-meerzad",
    hover: "Github",
  },
  {
    Img: BiLogoInstagramAlt,
    href: "https://www.instagram.com/mostafameerzad/",
    hover: "Instagram",
  },
];

type SkillSet = {
  name: string;
  Img: IconType;
};

export type SkillAndTool = {
  title: string;
  skillSet: SkillSet[];
};

const skillsAndTools: SkillAndTool[] = [
  {
    title: "frontend",
    skillSet: [
      { name: "React.js", Img: FaReact },
      { name: "Next.js", Img: RiNextjsLine },
      { name: "Chakra UI", Img: SiChakraui },
      { name: "Radix UI", Img: SiRadixui },
      { name: "Shadcn", Img: SiShadcnui },
      { name: "Tailwind CSS", Img: RiTailwindCssFill },
      { name: "Framer Motion", Img: SiFramer },
    ],
  },
  {
    title: "backend",
    skillSet: [
      { name: "Node.js", Img: TbBrandNodejs },
      { name: "Express.js", Img: SiExpress },
      { name: "Rest API", Img: MdOutlineHttp },
      { name: "Prisma", Img: SiPrisma },
      { name: "MongoDB", Img: SiMongodb },
      { name: "PostgreSQL", Img: BiLogoPostgresql },
      { name: "MySQL", Img: GrMysql },
    ],
  },
  {
    title: "tools",
    skillSet: [
      { name: "Git & Github", Img: FaGithub },
      { name: "Vercel", Img: RiVercelLine },
      { name: "VsCode", Img: VscVscode },
      { name: "Postman", Img: SiPostman },
      { name: "Linux CLI", Img: FaLinux },
      { name: "Web Storm", Img: SiWebstorm },
      { name: "Docker", Img: FaDocker },
      { name: "Jest", Img: SiJest },
    ],
  },
  {
    title: "languages",
    skillSet: [
      { name: "Javascript", Img: IoLogoJavascript },
      { name: "Typescript", Img: SiTypescript },
      { name: "Python", Img: FaPython },
      { name: "Java", Img: RiJavaLine },
      { name: "SQL", Img: BsFiletypeSql },
    ],
  },
  {
    title: "Currently Exploring",
    skillSet: [
      { name: "Data Structures & Algorithms", Img: SiThealgorithms  },
      { name: "System Design ", Img: SiAffinitydesigner },
      { name: "OOP", Img: FaRegObjectGroup  },
      { name: "DB Design", Img: FaDatabase },
    ],
  },
];

export {
  about,
  advantages,
  contacts,
  projects,
  services,
  socialMedia,
  topProjects,
  skillsAndTools,
};
