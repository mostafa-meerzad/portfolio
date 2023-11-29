import { makeMoney, adviceGenerator, ageCalculator, bookmark, multiStepForm, restCountries, room, todoApp } from "./assets/images";
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
    name: "Make Money",
    techs: ["html","css", "Scss"],
    liveUrl: "https://creative-donut-2173d1.netlify.app/",
    sourceUrl: "https://github.com/mostafa-meerzad/make-money.git",
    imgUrl: makeMoney,
  },
  {
    name: "BookMark Landing Page",
    techs: ["react", "tailwindcss"],
    liveUrl: "https://venerable-truffle-808fa6.netlify.app/",
    sourceUrl: "https://github.com/mostafa-meerzad/bookmark-landing-page.git",
    imgUrl: bookmark,
  },
  {
    name: "Room Home Page",
    techs: ["react", "scss", "framer-motion", "react-router-dom"],
    liveUrl: "https://gorgeous-kelpie-3e3426.netlify.app/",
    sourceUrl: "https://github.com/mostafa-meerzad/room-homepage.git",
    imgUrl: room,
  },
  {
    name: "Todo App",
    techs: ["react", "redux", "framer-motion", "styled-components"],
    liveUrl: "https://bejewelled-dragon-8d6018.netlify.app/",
    sourceUrl: "https://github.com/mostafa-meerzad/todo-app.git",
    imgUrl: todoApp,
  },
  {
    name: "Age Calculator",
    techs: ["react", "scss", "react-hook-form", "gsap"],
    liveUrl: "https://654cd4a7ca6cbf3dfc9954ee--friendly-narwhal-772d56.netlify.app/",
    sourceUrl: "https://github.com/mostafa-meerzad/age-calculator.git",
    imgUrl: ageCalculator,
  },
  // {
  //   name: "ip address tracker",
  //   techs: ["react", "scss", "framer-motion"],
  //   liveUrl: "https://lovely-alfajores-9458cf.netlify.app/",
  //   sourceUrl: "https://github.com/mostafa-meerzad/ip-address-tracker.git",
  //   imgUrl: ipAddressTracker,
  // },
  {
    name: "Advice Generator",
    techs: ["react", "scss", "framer-motion"],
    liveUrl: "https://clinquant-tarsier-161c51.netlify.app/",
    sourceUrl: "https://github.com/mostafa-meerzad/advice-generator.git",
    imgUrl: adviceGenerator,
  },
  {
    name: "Rest Countries",
    techs: ["react", "tailwindcss", "framer-motion", "axios"],
    liveUrl: "https://bespoke-tarsier-7a35bf.netlify.app",
    sourceUrl: "https://github.com/mostafa-meerzad/rest-countries.git",
    imgUrl: restCountries,
  },
  {
    name: "multi-step form",
    techs: ["react", "react-hook-form", "scss", "framer-motion"],
    liveUrl: "https://65474dc917130a24e7ac7ab8--joyful-hummingbird-5544d6.netlify.app/",
    sourceUrl: "https://github.com/mostafa-meerzad/multi-step-form.git",
    imgUrl: multiStepForm,
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
