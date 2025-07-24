import { Mail } from "lucide-react";
import { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export type ContactsType = {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
};

const contacts: ContactsType[] = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
    value: "mostafameerzad@gmail.com",
    href: "mailto:mostafameerzad@gmail.com?subject=👋%20Let's%20Talk%20About%20a%20Project",
  },
  {
    icon: <FaWhatsapp />,
    label: "Phone",
    value: "+93 790 306378",
    href: "https://wa.me/93790306378",
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

export { contacts };
