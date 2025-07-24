import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import { IconType } from "react-icons";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { RiWhatsappFill } from "react-icons/ri";


type SocialMediaType = {
  Img: IconType;
  href: string;
  hover: string;
  opts: { target: string; rel: string; ariaLabel: string; };
  big?: boolean;
};
const socialMedia: SocialMediaType[] = [
  {
    Img: FaLinkedin,
    href: "https://www.linkedin.com/in/mostafa-meerzad-a753371b7/",
    hover: "Linkedin",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "linkedIn",
    },
  },
  {
    Img: FaGithub,
    href: "https://github.com/mostafa-meerzad",
    hover: "Github",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "github",
    },
  },
  {
    Img: GrInstagram,
    href: "https://www.instagram.com/mostafameerzad/",
    hover: "Instagram",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "instagram",
    },
  },
  {
    Img: FaFacebookF,
    href: "https://www.facebook.com/mostafa.meerzad.5",
    hover: "Facebook",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "facebook",
    },
  },
  {
    Img: RiWhatsappFill,
    href: "https://wa.me/93790306378?text=Hi%20Mostafa%2C%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect%21",
    hover: "Say Hi on Whatsapp",
    opts: {
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Chat with me on Whatsapp",
    },
    big: true,
  },
  {
    Img: BiLogoGmail,
    href: "mailto:mostafameerzad@gmail.com?subject=👋%20Let's%20Talk%20About%20a%20Project",
    hover: "Send me an Email",
    opts: {
      target: "_self",
      rel: "",
      ariaLabel: "Send me an email",
    },
    big: true,
  },
];



export {
  socialMedia
};

