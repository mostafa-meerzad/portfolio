import { StaticImageData } from "next/image";

import gameHubMobile from "../assets/game-hub-mobile.webp";
import promptopiaMobile from "../assets/promptopia-mobile.webp";
import spaceTourismMobile from "../assets/space-tourism-mobile.webp";
import urlShortenerMobile from "../assets/urlshortener-mobile.webp";
import nikeMobile from "../assets/nike-mobile.webp";
import nikeDesktop from "../assets/nike-desktop.webp";

import movieFlexDesktop from "../assets/movieflex-home-screen.png";
import gameHubDesktop from "../assets/game-hub-desktop.webp";
import posSystemDesktop from "../assets/pos-system-desktop.webp";
import promptopiaDesktop from "../assets/promptopia-desktop.webp";
import shereadsDesktop from "../assets/shereads-desktop.webp";
import spaceTourismDesktop from "../assets/space-tourism-desktop.webp";
import urlShortenerDesktop from "../assets/urlshortener-desktop.webp";

// TODO(mostafa): export two Chatty screenshots into assets/ and fix these
// filenames — the Chatty entry below won't build until they exist.
import chattyDesktop from "../assets/chatty-desktop.webp";
import chattyMobile from "../assets/chatty-mobile.webp";

import img1 from "../assets/pos-desktop-main.webp";
import img2 from "../assets/pos-desktop-login.webp";
import img3 from "../assets/pos-desktop-reports.webp";
import img4 from "../assets/fixr-1.png";
import img5 from "../assets/fixr-2.png";
import img6 from "../assets/fixr-3.png";
import img7 from "../assets/fixr-4.png";
import img8 from "../assets/fixr.png";

export type ProjectType = {
  name: string;
  description: string;
  desktopImg: StaticImageData;
  mobileImg: StaticImageData;
  technologies: string[];
  github?: string | null;
  preview?: string | null;
  type?: string;
  /** e.g. "Tutorial · JS Mastery" — rendered as the small footnote on tutorial cards */
  source?: string;
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
      "Custom point-of-sale platform built for a local pet supplies business. Manages sales, inventory, customers, suppliers, deliveries, and multi-branch operations — with offline support (IndexedDB, sync on reconnect) for unstable connections. Currently live across 3 branches with full management control.",
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

const flagshipProjects: ProductionType[] = [
  {
    name: "Fixr",
    subtitle: "My role: Everything — design, backend, admin, mobile",
    badges: ["Personal · AI-first · Solo-built", "Pre-Launch"],
    description:
      "Reverse-bidding home services marketplace for Kabul. Homeowners post jobs, verified experts bid using credits, and zone-aware matching connects the two. NestJS + Prisma API, Next.js admin panel, and a React Native (Expo) mobile app with OTP auth, push notifications, and real-time chat — on a custom design system.",
    technologies: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Next.js",
      "React Native",
      "Expo",
    ],
    isPublic: false,
    label: "Pre-launch · showcase repo on GitHub",
    preview: {
      href: "https://github.com/mostafa-meerzad/fixr",
      title: "View on GitHub",
    },
    desktopImg: img8, // chat-with-bid-card — the money shot
    mobileImg: img4,
  },
];

const personalProjects: ProjectType[] = [
  {
    type: "01 · Mobile App · React Native",
    name: "Movie Flex",
    description:
      "MovieFlex is a modern React Native movie discovery app built with Expo. Users can explore trending movies, search for titles, view detailed movie information, watch trailers, save movies for later, and receive personalized movie suggestions.",
    technologies: [
      "React Native",
      "Expo",
      "NativeWind",
      "Axios",
      "TMDB API",
      // TODO(mostafa): name the backend ("Node.js API"? "NestJS"?) or leave it out
      "Custom Backend",
    ],
    github: "https://github.com/mostafa-meerzad/movie-flex",
    // NOTE: this is a demo video on LinkedIn, not a live app — make sure the
    // button label reads "Watch Demo", not "Live Demo"
    preview:
      "https://www.linkedin.com/posts/mostafa-meerzad-a753371b7_reactnative-expo-javascript-ugcPost-7461812493418393600-uhGY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJqvDkBDeSRqTEnAva7Pvf1fuVpkZC4AEE",
    desktopImg: movieFlexDesktop,
    mobileImg: movieFlexDesktop,
  },
  {
    type: "02 · Full Stack · Internship Build",
    name: "Chatty",
    description:
      "Real-time chat app built during the Coding Samurai internship. Socket.io messaging, JWT auth, online presence, and a responsive UI.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "JWT",
    ],
    github: "https://github.com/mostafa-meerzad/realtime-chat-app.git",
    // NOTE: Render free tier — cold starts can take ~1 min. Consider a
    // "(may take a moment to wake)" hint next to the demo button.
    preview: "https://realtime-chat-app-r0wc.onrender.com/",
    desktopImg: chattyDesktop,
    mobileImg: chattyMobile,
  },

  {
    type: "03 · Full Stack · MERN Custom Build",
    name: "Shortly",
    description:
      "A URL shortener built with the MERN stack — CRUD, custom aliases, JWT auth for registered users, guest shortening for everyone else.",
    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "JWT",
      "Axios",
    ],
    github: "https://github.com/mostafa-meerzad/url-shortener.git",
    // NOTE: Render free tier — cold starts can take ~1 min. Consider a
    // "(may take a moment to wake)" hint next to the demo button.
    preview: "https://url-shortener-1-09s5.onrender.com/",
    desktopImg: urlShortenerDesktop,
    mobileImg: urlShortenerMobile,
  },
];

// Learning-era builds — rendered under "Tutorial Projects".
// Merge with the existing Nike Landing Page entry wherever that one lives.
const tutorialProjects: ProjectType[] = [
  {
    type: "Full Stack",
    name: "Promptopia",
    source: "Tutorial · JavaScript Mastery",
    description:
      "AI prompt sharing platform — auth, CRUD, and a responsive prompt explorer. Built as a deep-dive into the Next.js App Router and Prisma.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
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
    type: "Frontend",
    name: "Game Hub",
    source: "Tutorial · Code with Mosh",
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
    type: "Frontend · Landing page",
    name: "Space Tourism",
    source: "Frontend Mentor challenge",
    description:
      "A sleek, multi-page space tourism website built with Next.js 13 App Router, Tailwind CSS, and TypeScript — dynamic routing, responsive layouts, and clean UI.",
    technologies: ["Next.js", "Tailwindcss", "Framer Motion"],
    github: "https://github.com/mostafa-meerzad/space-tourism-next.js.git",
    preview: "https://space-tourism-mocha-three.vercel.app/",
    desktopImg: spaceTourismDesktop,
    mobileImg: spaceTourismMobile,
  },
  {
    type: "Frontend · Landing page",
    name: "Nike Landing Page",
    source: "JS Mastery tutorial",
    description:
      "A clean, responsive Nike-themed landing page built with React and Tailwind CSS.",
    technologies: ["React.js", "Tailwindcss", "Vite"],
    github: "https://github.com/mostafa-meerzad/nike.git",
    preview: "https://serene-biscotti-6c2764.netlify.app/",
    desktopImg: nikeDesktop,
    mobileImg: nikeMobile,
  },
];

const posProjectImages = [img1, img2, img3];
const fixrProjectImages = [img4, img5, img6, img7];

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
    desc: "Real-time chat app with Socket.io — auth, live messaging, and online presence.",
    techs: ["MERN", "Socket.io", "JWT"],
    subtitle: "02 · Internship Build",
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
    subtitle: "03 · Course Build",
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

export {
  personalProjects,
  productionProjects,
  tutorialProjects,
  posProjectImages,
  fixrProjectImages,
  topProjects,
  flagshipProjects,
};
