import { StaticImageData } from "next/image";

import gameHubMobile from "../assets/game-hub-mobile.webp";
import promptopiaMobile from "../assets/promptopia-mobile.webp";
import spaceTourismMobile from "../assets/space-tourism-mobile.webp";
import urlShortenerMobile from "../assets/urlshortener-mobile.webp";

import movieFlexDesktop from "../assets/movieflex-home-screen.png";
import gameHubDesktop from "../assets/game-hub-desktop.webp";
import posSystemDesktop from "../assets/pos-system-desktop.webp";
import promptopiaDesktop from "../assets/promptopia-desktop.webp";
import shereadsDesktop from "../assets/shereads-desktop.webp";
import spaceTourismDesktop from "../assets/space-tourism-desktop.webp";
import urlShortenerDesktop from "../assets/urlshortener-desktop.webp";

import img1 from "../assets/pos-desktop-main.webp";
import img2 from "../assets/pos-desktop-login.webp";
import img3 from "../assets/pos-desktop-reports.webp";

export type ProjectType = {
  name: string;
  description: string;
  desktopImg: StaticImageData;
  mobileImg: StaticImageData;
  technologies: string[];
  github?: string | null;
  preview?: string | null;
  type?: string;
};

export type ProductionType = Omit<ProjectType, "preview"> & {
  badges: string[];
  isPublic: boolean;
  subtitle: string;
  preview?: { href: string; title: string };
  label?: string;
};

export type TopProjectType = {
  title: string;
  subtitle: string;
  desc: string;
  techs: string[];
  live: { href: string; title: string };
  repo: { href: string; title: string };
};

const productionProjects: ProductionType[] = [
  {
    name: "POS System",
    subtitle: "My role: Full-stack · Backend-heavy",
    badges: [" Production", "Webistan.cloud", "Backend focus"],
    description:
      "Custom point-of-sale platform built for a local pet supplies business. Manages sales, inventory, customers, suppliers, deliveries, and multi-branch operations. Currently live across 3 branches with full management control.",
    technologies: [
      "Next.js",
      "MySQL",
      "Prisma",
      "Zustand",
      "ShadCN",
      "Tailwind",
      "Framer Motion",
    ],
    isPublic: false,
    label: "Internal app · not publicly accessible",
    desktopImg: posSystemDesktop,
    mobileImg: posSystemDesktop,
  },
  {
    name: "SheReads",
    subtitle: " My role: Full frontend · Admin panel",
    badges: [" Production", "Webistan.cloud", "Frontend focus"],
    description:
      "Online reading platform serving users globally. Features book discovery, preference-based recommendations, search and filtering, and a full admin panel for content and user management.",
    technologies: [
      "Next.js",
      "MySQL",
      "Prisma",
      "ShadCN",
      "Tailwind",
      "Framer Motion",
    ],
    label: "shereadsapp.com",
    preview: { href: "https://shereadsapp.com", title: "shereads.com" },
    isPublic: true,

    desktopImg: shereadsDesktop,
    mobileImg: shereadsDesktop,
  },
];

const personalProjects: ProjectType[] = [
  {
    type: "01 · Full Stack",
    name: "Promptopia",
    description:
      "AI prompt sharing platform. Users create, manage, and discover high-quality prompts. Full auth, CRUD, and a responsive prompt explorer — built with the PERN stack.",
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
    type: "02 · Full Stack",
    name: "Game Hub",
    description:
      "Video game discovery platform with search, genre and platform filtering. Built with React 18, TypeScript, and React Query — focused on fast UI and clean state management.",
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
    type: "03 · Mobile App · React Native",
    name: "Movie Flex",
    description:
      "MovieFlex is a modern React Native movie discovery app built with Expo. Users can explore trending movies, search for titles, view detailed movie information, watch trailers, save movies for later, and receive personalized movie suggestions.",
    technologies: [
      "React Native",
      "Expo",
      "NativeWind",
      "Axios",
      "TMDB API",
      "Custom Backend",
    ],

    github: "https://github.com/mostafa-mz-code/movie-flex",
    preview:
      "https://www.linkedin.com/posts/mostafa-meerzad-a753371b7_reactnative-expo-javascript-ugcPost-7461812493418393600-uhGY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJqvDkBDeSRqTEnAva7Pvf1fuVpkZC4AEE",
    desktopImg: movieFlexDesktop,
    mobileImg: movieFlexDesktop,
  },
  // {
  //   type: "03 · Full Stack · Real-time",
  //   name: "Chatty",
  //   description:
  //     "Real-time chat app with the MERN stack and Socket.io. Auth, scalable messaging, and responsive UI. Built during Coding Samurai internship — focused on performance and security.",
  //   technologies: [
  //     "Node.js",
  //     "React.js",
  //     "MongoDB",
  //     "Socket.io",
  //     "Express.js",
  //     "axios",
  //     "Tailwindcss",
  //   ],

  //   github: "https://github.com/mostafa-meerzad/realtime-chat-app.git",
  //   preview: "https://realtime-chat-app-r0wc.onrender.com/",
  //   desktopImg: chattyDesktop,
  //   mobileImg: chattyMobile,
  // },
  {
    type: "04 · Frontend · Landing page",
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
    type: "05 · Full Stack · MERN",
    name: "Shortly",
    description:
      "A URL shortener application built with the MERN stack. Users can shorten long URLs, manage them through CRUD operations, and even add custom aliases. Authenticated users enjoy advanced features, while guests can still shorten links effortlessly.",
    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "JWT",
      "Axios",
    ],
    github: "https://github.com/mostafa-meerzad/url-shortener.git",
    preview: "https://url-shortener-1-09s5.onrender.com/",
    desktopImg: urlShortenerDesktop,
    mobileImg: urlShortenerMobile,
  },
];

const posProjectImages = [img1, img2, img3];

const topProjects: TopProjectType[] = [
  {
    title: "SheReads",
    desc: "Online reading platform with book recommendations, search, filter, and full admin panel. Live worldwide.",
    techs: ["Next.js", "TypeScript", "Tailwind"],
    subtitle: "01 · Professional",
    repo: { href: "", title: "" },
    live: { href: "https://shereadsapp.com", title: "shereadsapp.com" },
  },
  {
    title: "Chatty",
    desc: "Real-time MERN chat app with Socket.io. Auth, scalable messaging, and responsive UI.",
    techs: ["MERN", "Socket.io", "JWT"],
    subtitle: "02 · Personal",
    repo: {
      href: "https://github.com/mostafa-meerzad/realtime-chat-app.git",
      title: "View GitHub",
    },
    live: {
      href: "https://realtime-chat-app-r0wc.onrender.com/",
      title: "Live Demo",
    },
  },
  {
    title: "Promptopia",
    desc: "Full-stack AI prompt sharing app. Create, manage, and discover high-quality prompts.",
    techs: ["Next.js", "PostgreSQL", "Prisma"],
    subtitle: "03 · Professional",
    repo: {
      href: "https://github.com/mostafa-meerzad/promptopia.git",
      title: "View GitHub",
    },
    live: {
      href: "https://promptopia-black-beta.vercel.app/",
      title: "Live Demo",
    },
  },
];

export { personalProjects, productionProjects, posProjectImages, topProjects };
