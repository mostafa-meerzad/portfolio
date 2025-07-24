import { StaticImageData } from "next/image";
import backendDevelopment from "../assets/backend-development.png";
import codingSamurai from "../assets/coding-samurai.png";
import frontendDevelopment from "../assets/frontend-development.png";
import javascript from "../assets/javascript.png";
import responsiveDesign from "../assets/responsive-web-design.png";


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

