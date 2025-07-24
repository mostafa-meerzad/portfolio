
import { StaticImageData } from "next/image";
import backendDark from "../assets/backend-dark.png";
import backend from "../assets/backend.png";
import frontendDark from "../assets/frontend-dark.png";
import frontend from "../assets/frontend.png";
import fullStackDark from "../assets/full-stack-dark.png";
import fullStack from "../assets/full-stack.png";


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

