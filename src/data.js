import { img1, img2, img3, img4, img5, img6 } from "./assets/images";
import { linkedin, github, frontendmentor } from "./assets/icons";

const technologies = [
  "html",
  "css",
  "javascript",
  "react",
  "git",
  "scss",
  "gsap",
  "tailwindcss",
  "styled-components",
  "react router dom",
  "framer-motion",
  "react hook form",
];

const projects = [
  {
    name: "project 1",
    techs: ["html", "css", "js"],
    liveUrl: "#",
    sourceUrl: "#",
    imgUrl: img1,
  },
  {
    name: "project 2",
    techs: ["react", "styled-components", "gsap"],
    liveUrl: "#",
    sourceUrl: "#",
    imgUrl: img2,
  },
  {
    name: "project 3",
    techs: ["html", "axios", "js"],
    liveUrl: "#",
    sourceUrl: "#",
    imgUrl: img3,
  },
  {
    name: "project 4",
    techs: ["react", "tailwind"],
    liveUrl: "#",
    sourceUrl: "#",
    imgUrl: img4,
  },
  {
    name: "project 5",
    techs: ["html", "scss", "js"],
    liveUrl: "#",
    sourceUrl: "#",
    imgUrl: img5,
  },
  {
    name: "project 6",
    techs: ["react", "css", "framer-motion"],
    liveUrl: "#",
    sourceUrl: "#",
    imgUrl: img6,
  },
];

const socialMediaLinks = [
  {
    name: "linkedin",
    img: linkedin,
    url: "https://linkedin.com/in/mostafa-meerzad-a753371b7",
  },
  { name: "gitHub", img: github, url: "https://github.com/mostafa-meerzad" },
  {
    name: "frontend-mentor",
    img: frontendmentor,
    url: "https://www.frontendmentor.io/profile/mostafa-meerzad",
  },
];

export { technologies, projects, socialMediaLinks };
