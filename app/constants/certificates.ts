import { StaticImageData } from "next/image";
import backendDevelopment from "../assets/backend-development.webp";
import codingSamurai from "../assets/coding-samurai.webp";
import frontendDevelopment from "../assets/frontend-development.webp";
import javascript from "../assets/javascript.webp";
import responsiveDesign from "../assets/responsive-web-design.webp";


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


export {

  certificates,

};

