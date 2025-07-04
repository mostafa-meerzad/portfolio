import { Mail } from "lucide-react";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

type ProjectsType = { title: string; href: string; description: string };
const projects: ProjectsType[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

type AboutType = { title: string; description: string };
const about: AboutType[] = [
  {
    title: "bio",
    description:
      " Passionate dev crafting clean full-stack apps with modern tools.",
  },
  {
    title: "learning",
    description: " Focused on mastering core software engineering concepts.",
  },
  {
    title: "location",
    description: "Based in Kabul, Afghanistan.",
  },
];

export type ContactsType = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
};

const contacts: ContactsType[] = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
    value: "mostafameerzad@gmail.com",
    href: "",
  },
  {
    icon: <FaWhatsapp />,
    label: "Phone",
    value: "+93 790 306378",
    href: "",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/mostafameerzad",
    href: "https://github.com/mostafa-meerzad",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/mostafa-meerzad",
    href: "https://www.linkedin.com/in/mostafa-meerzad-a753371b7/",
  },
];

export { about, projects, contacts };
