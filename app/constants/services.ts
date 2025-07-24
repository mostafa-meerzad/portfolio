
import { StaticImageData } from "next/image";
import backendDark from "../assets/backend-dark.webp";
import backend from "../assets/backend.webp";
import frontendDark from "../assets/frontend-dark.webp";
import frontend from "../assets/frontend.webp";
import fullStackDark from "../assets/full-stack-dark.webp";
import fullStack from "../assets/full-stack.webp";


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


export {

  services
};

