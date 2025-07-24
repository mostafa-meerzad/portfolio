import { StaticImageData } from "next/image";
import chattyMobile from "../assets/chatty-mobile.webp";
import gameHubMobile from "../assets/game-hub-mobile.webp";
import issueTrackerMobile from "../assets/issue-tracker-mobile.webp";
import nikeMobile from "../assets/nike-mobile.webp";
import promptopiaMobile from "../assets/promptopia-mobile.webp";
import spaceTourismMobile from "../assets/space-tourism-mobile.webp";
import urlShortenerMobile from "../assets/urlshortener-mobile.webp";

import chattyDesktop from "../assets/chatty-desktop.webp";
import gameHubDesktop from "../assets/game-hub-desktop.webp";
import issueTrackerDesktop from "../assets/issue-tracker-desktop.webp";
import nikeDesktop from "../assets/nike-desktop.webp";
import promptopiaDesktop from "../assets/promptopia-desktop.webp";
import spaceTourismDesktop from "../assets/space-tourism-desktop.webp";
import urlShortenerDesktop from "../assets/urlshortener-desktop.webp";

type ProjectType = {
  name: string;
  description: string;
  desktopImg: StaticImageData;
  mobileImg: StaticImageData;
  technologies: string[];
  github: string;
  preview: string;
};
const projects: ProjectType[] = [
  {
    name: "Promptopia",
    description:
      "Promptopia is a full-stack AI prompt sharing application where users can create, manage, and explore high-quality AI prompts. Built with the latest web technologies, it offers a smooth and responsive experience for prompt creators and explorers alike.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Axios",
      "PostgreSQL",
      "Radix UI",
      "Zod",
      "Tailwindcss",
    ],
    github: "https://github.com/mostafa-meerzad/promptopia.git",
    preview: "https://promptopia-black-beta.vercel.app",
    desktopImg: promptopiaDesktop,
    mobileImg: promptopiaMobile,
  },
  {
    name: "Game Hub",
    description:
      "A responsive and interactive video game discovery platform built with React 18 and TypeScript. Users can explore, search, and filter games by genre and platform — all powered by modern UI and state management libraries.",
    technologies: [
      "React.js",
      "TypeScript",
      "Radix UI",
      "React Query",
      "Zustand",
      "Tailwindcss",
    ],
    github: "https://github.com/mostafa-meerzad/game-hub.git",
    preview: "https://game-hub-psi-khaki.vercel.app/",
    desktopImg: gameHubDesktop,
    mobileImg: gameHubMobile,
  },
  {
    name: "Chatty",
    description:
      "Chatty is a fully functional real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js), combined with Socket.io for real-time communication. This project was developed during my internship at Coding Samurai, focused on delivering a responsive, scalable, and secure messaging platform.",
    technologies: [
      "Node.js",
      "React.js",
      "MongoDB",
      "Socket.io",
      "Express.js",
      "axios",
      "Tailwindcss",
    ],

    github: "https://github.com/mostafa-meerzad/realtime-chat-app.git",
    preview: "https://realtime-chat-app-r0wc.onrender.com/",
    desktopImg: chattyDesktop,
    mobileImg: chattyMobile,
  },
  {
    name: "Space Tourism",
    description:
      "A sleek, multi-page space tourism website built with Next.js 13 App Router, Tailwind CSS, and TypeScript. This project showcases a modern frontend architecture, dynamic routing, responsive layouts, and clean UI inspired by the original Frontend Mentor challenge. ",
    technologies: ["Next.js", "Tailwindcss", "Framer Motion"],
    github: "https://github.com/mostafa-meerzad/space-tourism-next.js.git",
    preview: "https://space-tourism-mocha-three.vercel.app/",
    desktopImg: spaceTourismDesktop,
    mobileImg: spaceTourismMobile,
  },

  {
    name: "Issue Tracker",
    description:
      "A full-featured Issue Tracking System built with Next.js 14, TypeScript, Prisma, and MySQL. Designed for developers and teams to manage bugs, tasks, and feature requests with ease — complete with filtering, role-based assignment, validation, and interactive charts.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Axios",
      "MySQL",
      "Zod",
      "Tailwindcss",
      "Chakra UI",
    ],

    github: "https://github.com/mostafa-meerzad/issue-tracker.git",
    preview: "https://issue-tracker-two-smoky.vercel.app/",
    desktopImg: issueTrackerDesktop,
    mobileImg: issueTrackerMobile,
  },
  {
    name: "Nike",
    description:
      "A clean, responsive Nike-themed landing page built with React and Tailwind CSS. This project was created as part of my journey to master modern CSS utility-first design using Tailwind, inspired by a tutorial by JavaScript Mastery.",
    technologies: ["React.js", "Tailwindcss", "Vite"],
    github: "https://github.com/mostafa-meerzad/nike.git",
    preview: "https://serene-biscotti-6c2764.netlify.app/",
    desktopImg: nikeDesktop,
    mobileImg: nikeMobile,
  },
  {
    name: "URL Shortener",
    description:
      "A feature-rich URL shortener application built with the MERN stack. Users can shorten long URLs, manage them through CRUD operations, and even add custom aliases. Authenticated users enjoy advanced features, while guests can still shorten links effortlessly.",
    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "JWT",
      "Axios",
    ],
    github: "https://github.com/mostafa-meerzad/url-shortener.git",
    preview: "https://github.com/mostafa-meerzad/url-shortener.git",
    desktopImg: urlShortenerDesktop,
    mobileImg: urlShortenerMobile,
  },
];

export { projects };
