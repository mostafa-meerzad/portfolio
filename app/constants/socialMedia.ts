import { FaGithub, FaLinkedin } from "react-icons/fa";

import { IconType } from "react-icons";
import { BiLogoGmail } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";

type SocialMediaType = {
  Img: IconType;
  href: string;
  link: string;
  label: string;
  opts: { target: string; rel: string; ariaLabel: string };
  diff?: boolean;
  btnLabel: string;
};

type FooterSocialMediaType = {
  href: string;
  label: string;
  opts: { target: string; rel: string; ariaLabel: string };
};

const socialMedia: SocialMediaType[] = [
  {
    Img: FaLinkedin,
    href: "https://www.linkedin.com/in/mostafa-meerzad-a753371b7/",
    link: "linkedin.com/in/mostafa-meerzad",
    btnLabel: "connect",
    label: "Linkedin",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "linkedIn",
    },
  },
  {
    Img: FaGithub,
    href: "https://github.com/mostafa-meerzad",
    link: "github.com/mostafa-meerzad · 160+ repos",
    btnLabel: "view",
    label: "GitHub · Archive",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "github",
    },
    diff: true,
  },
  {
    Img: FaGithub,
    href: "https://github.com/mostafa-meerzad",
    link: "github.com/mostafa-meerzad",
    btnLabel: "view",
    label: "GitHub · Active",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "github",
    },
    diff: true,
  },
  {
    Img: RiWhatsappFill,
    href: "https://wa.me/93790306378?text=Hi%20Mostafa%2C%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect%21",
    link: "Faster way to reach me.",
    btnLabel: "Message",
    label: "Whatsapp",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Chat with me on Whatsapp",
    },
  },
  {
    Img: BiLogoGmail,
    href: "mailto:mostafameerzad@gmail.com?subject=👋%20Let's%20Talk%20About%20a%20Project",
    link: "mostafameerzad@gmail.com",
    btnLabel: "Mail",
    label: "Email",
    opts: {
      target: "_self",
      rel: "",
      ariaLabel: "Send me an email",
    },
  },
];

const footerSocialMedia: FooterSocialMediaType[] = [
  {
    href: "https://www.linkedin.com/in/mostafa-meerzad-a753371b7/",

    label: "Linkedin",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "linkedIn",
    },
  },

  {
    href: "https://github.com/mostafa-meerzad",
    label: "GitHub ",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "github",
    },
  },
  {
    href: "https://wa.me/93790306378?text=Hi%20Mostafa%2C%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect%21",

    label: "Whatsapp",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Chat with me on Whatsapp",
    },
  },
  {
    href: "mailto:mostafameerzad@gmail.com?subject=👋%20Let's%20Talk%20About%20a%20Project",

    label: "Email",
    opts: {
      target: "_self",
      rel: "",
      ariaLabel: "Send me an email",
    },
  },
];

export { socialMedia, footerSocialMedia };
