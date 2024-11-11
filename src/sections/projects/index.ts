export * from "./projects";

import { images } from "@/images";
import { StaticImageData } from "next/image";
import { Cards } from "./views/card";

export const ProjectsViews = {
  Cards,
};
export interface IconsProps {
  title: string;
  link: string;
  src: StaticImageData;
  alt: string;
}

export interface ProjectsProps {
  title: string;
  description: string;
  image: string;
  imageHovered: string;
  icons: IconsProps[];
}

export const projects: ProjectsProps[] = [
  {
    title: "E-commerce Store",
    description:
      "A fully functional and responsive e-commerce website using React, TypeScript, and NextJs. The site includes features such as profile management, order history, lists, list filters, favorites, a shopping cart, and purchase transactions.",
    image: images.Store.src,
    imageHovered: images.MarketGIF.src,
    icons: [
      {
        title: "GitHub",
        link: "https://github.com/BrunoFAC/storeWithNextJs",
        src: images.GithubIcon,
        alt: "github",
      },
      {
        title: "E-commerce Store",
        link: "https://dummy-store-fake-api.netlify.app/",
        src: images.StoreIconDarkMode,
        alt: "E-commerce Store",
      },
    ],
  },
];
