import { Mail } from "lucide-react";
import { StaticImageData } from "next/image";
import React from "react";
import { IconType } from "react-icons";
import {
  BiLogoGmail,
  BiLogoPostgresql
} from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import {
  FaDatabase,
  FaDocker,
  FaFacebookF,
  FaGamepad,
  FaGithub,
  FaLinkedin,
  FaLinux,
  FaMedal,
  FaMotorcycle,
  FaPython,
  FaReact,
  FaRegObjectGroup,
  FaWhatsapp
} from "react-icons/fa";
import { GiTinker } from "react-icons/gi";
import { GrInstagram, GrMysql } from "react-icons/gr";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineHttp } from "react-icons/md";
import { PiPlusBold } from "react-icons/pi";
import {
  RiJavaLine,
  RiNextjsLine,
  RiTailwindCssFill,
  RiVercelLine,
  RiWhatsappFill,
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
  SiWebstorm
} from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import backendDark from "../assets/backend-dark.png";
import backendDevelopment from "../assets/backend-development.png";
import backend from "../assets/backend.png";
import codingSamurai from "../assets/coding-samurai.png";
import frontendDark from "../assets/frontend-dark.png";
import frontendDevelopment from "../assets/frontend-development.png";
import frontend from "../assets/frontend.png";
import fullStackDark from "../assets/full-stack-dark.png";
import fullStack from "../assets/full-stack.png";
import gameHub from "../assets/game-hub.png";
import issueTracker from "../assets/issue-tracker.png";
import javascript from "../assets/javascript.png";
import nike from "../assets/nike.png";
import promptopia from "../assets/promptopia.png";
import responsiveDesign from "../assets/responsive-web-design.png";
import spaceTourism from "../assets/space-tourism.png";
import urlShortener from "../assets/url-shortener.jpg";

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

type ProjectType = {
  name: string;
  description: string;
  img: StaticImageData;
  technologies: string[];
  github: string;
  preview: string;
};
const projects: ProjectType[] = [
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
    name: "Game Hub",
    description:
      "A responsive and interactive video game discovery platform built with React 18 and TypeScript. Users can explore, search, and filter games by genre and platform — all powered by modern UI and state management libraries.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Axios", "PostgreSQL"],
    github: "https://github.com/mostafa-meerzad/game-hub.git",
    preview: "https://game-hub-psi-khaki.vercel.app/",
    img: gameHub,
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
    name: "Issue Tracker",
    description:
      "A responsive and interactive video game discovery platform built with React 18 and TypeScript. Users can explore, search, and filter games by genre and platform — all powered by modern UI and state management libraries.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Axios", "PostgreSQL"],

    github: "https://github.com/mostafa-meerzad/issue-tracker.git",
    preview: "https://issue-tracker-two-smoky.vercel.app/",
    img: issueTracker,
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
  {
    name: "URL Shortener",
    description:
      "A feature-rich URL shortener application built with the MERN stack and TypeScript. Users can shorten long URLs, manage them through CRUD operations, and even add custom aliases. Authenticated users enjoy advanced features, while guests can still shorten links effortlessly.",
    technologies: ["Node.js", "Typescript", "React.js", "MongoDB", "Axios"],
    github: "https://github.com/mostafa-meerzad/url-shortener.git",
    preview: "https://serene-biscotti-6c2764.netlify.app/",
    img: urlShortener,
  },
];

type SocialMediaType = {
  Img: IconType;
  href: string;
  hover: string;
  opts: { target: string; rel: string; ariaLabel: string };
  big?: boolean;
};

const socialMedia: SocialMediaType[] = [
  {
    Img: FaLinkedin,
    href: "https://www.linkedin.com/in/mostafa-meerzad-a753371b7/",
    hover: "Linkedin",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "linkedIn",
    },
  },
  {
    Img: FaGithub,
    href: "https://github.com/mostafa-meerzad",
    hover: "Github",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "github",
    },
  },
  {
    Img: GrInstagram  ,
    href: "https://www.instagram.com/mostafameerzad/",
    hover: "Instagram",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "instagram",
    },
  },
  {
    Img: FaFacebookF ,
    href: "https://www.facebook.com/mostafa.meerzad.5",
    hover: "Facebook",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "facebook",

    },
  },
  {
    Img: RiWhatsappFill,
    href: "https://wa.me/93790306378?text=Hi%20Mostafa%2C%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect%21",
    hover: "Say Hi on Whatsapp",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Chat with me on Whatsapp",
    },
    big: true
  },
  {
    Img: BiLogoGmail,
    href: "mailto:mostafameerzad@gmail.com?subject=👋%20Let's%20Talk%20About%20a%20Project",
    hover: "Send me an Email",
    opts: {
      target: "_self",
      rel: "",
      ariaLabel: "Send me an email",
    },
    big: true
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
      { name: "Data Structures & Algorithms", Img: SiThealgorithms },
      { name: "System Design ", Img: SiAffinitydesigner },
      { name: "OOP", Img: FaRegObjectGroup },
      { name: "DB Design", Img: FaDatabase },
    ],
  },
];

type Certificate = {
  title: string;
  img: StaticImageData;
};

const certificates: Certificate[] = [
  {
    title: "frontend development",
    img: frontendDevelopment,
  },
  {
    title: "backend development",
    img: backendDevelopment,
  },
  {
    title: "responsive web design",
    img: responsiveDesign,
  },
  {
    title: "javascript programming",
    img: javascript,
  },
  {
    title: "web development internship",
    img: codingSamurai,
  },
];

type FunFact = { Icon: IconType; title: string; desc: string };

const funFacts: FunFact[] = [
  {
    Icon: FaGamepad,
    title: "A Gamer",
    desc: "Love games like GTA and Call of Duty",
  },
  {
    Icon: GiTinker,
    title: "Tinker Mindset",
    desc: "Repurpose junk into useful tools",
  },
  {
    Icon: FaMotorcycle,
    title: "Bike Enthusiast",
    desc: "Enjoy working on and tuning my bike",
  },
  {
    Icon: HiMiniPaintBrush,
    title: "Creative Roots",
    desc: "Grew up with a designer brother and painter sister",
  },
];

export {
  about,
  advantages,
  certificates,
  contacts,
  funFacts,
  projects,
  services,
  skillsAndTools,
  socialMedia
};

