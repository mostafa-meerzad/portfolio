import { StaticImageData } from "next/image";
import chatty from "../assets/chatty.png";
import gameHub from "../assets/game-hub.png";
import issueTracker from "../assets/issue-tracker.png";
import nike from "../assets/nike.png";
import promptopia from "../assets/promptopia.png";
import spaceTourism from "../assets/space-tourism.png";
import urlShortener from "../assets/url-shortener.jpg";

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
    name: "Chatty",
    description:
      "Chatty is a fully functional real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js), combined with Socket.io for real-time communication. This project was developed during my internship at Coding Samurai, focused on delivering a responsive, scalable, and secure messaging platform.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Axios", "MySQL", "Zod"],

    github: "https://github.com/mostafa-meerzad/realtime-chat-app.git",
    preview: "https://realtime-chat-app-r0wc.onrender.com/",
    img: chatty,
  },
  {
    name: "Space Tourism",
    description:
      "A sleek, multi-page space tourism website built with Next.js 13 App Router, Tailwind CSS, and TypeScript. This project showcases a modern frontend architecture, dynamic routing, responsive layouts, and clean UI inspired by the original Frontend Mentor challenge. ",
    technologies: ["Next.js", "Tailwindcss", "Framer Motion"],
    github: "https://github.com/mostafa-meerzad/space-tourism-next.js.git",
    preview: "https://space-tourism-mocha-three.vercel.app/",
    img: spaceTourism,
  },

  {
    name: "Chatty",
    description:
      "Chatty is a fully functional real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js), combined with Socket.io for real-time communication. This project was developed during my internship at Coding Samurai, focused on delivering a responsive, scalable, and secure messaging platform.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Axios", "MySQL", "Zod"],

    github: "https://github.com/mostafa-meerzad/realtime-chat-app.git",
    preview: "https://realtime-chat-app-r0wc.onrender.com/",
    img: chatty,
  },

  {
    name: "Issue Tracker",
    description:
      "A full-featured Issue Tracking System built with Next.js 14, TypeScript, Prisma, and MySQL. Designed for developers and teams to manage bugs, tasks, and feature requests with ease — complete with filtering, role-based assignment, validation, and interactive charts.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Axios", "MySQL", "Zod"],

    github: "https://github.com/mostafa-meerzad/issue-tracker.git",
    preview: "https://issue-tracker-two-smoky.vercel.app/",
    img: issueTracker,
  },
  {
    name: "Nike",
    description:
      "A clean, responsive Nike-themed landing page built with React and Tailwind CSS. This project was created as part of my journey to master modern CSS utility-first design using Tailwind, inspired by a tutorial by JavaScript Mastery.",
    technologies: ["React.js", "Tailwindcss", "Vite"],
    github: "https://github.com/mostafa-meerzad/nike.git",
    preview: "https://serene-biscotti-6c2764.netlify.app/",
    img: nike,
  },
  {
    name: "URL Shortener",
    description:
      "A feature-rich URL shortener application built with the MERN stack. Users can shorten long URLs, manage them through CRUD operations, and even add custom aliases. Authenticated users enjoy advanced features, while guests can still shorten links effortlessly.",
    technologies: ["Node.js", "Typescript", "React.js", "MongoDB", "Axios"],
    github: "https://github.com/mostafa-meerzad/url-shortener.git",
    preview: "https://github.com/mostafa-meerzad/url-shortener.git",
    img: urlShortener,
  },
];

export { projects };
