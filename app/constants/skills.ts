import { IconType } from "react-icons";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import {
  FaReact,
  FaGithub,
  FaLinux,
  FaDocker,
  FaPython,
  FaRegObjectGroup,
  FaDatabase,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineHttp } from "react-icons/md";
import {
  RiNextjsLine,
  RiTailwindCssFill,
  RiVercelLine,
  RiJavaLine,
} from "react-icons/ri";
import {
  SiChakraui,
  SiRadixui,
  SiShadcnui,
  SiFramer,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiPostman,
  SiWebstorm,
  SiJest,
  SiTypescript,
  SiThealgorithms,
  SiAffinitydesigner,
} from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

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

export { skillsAndTools };
