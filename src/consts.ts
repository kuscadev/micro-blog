import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "kusca.dev",
  DESCRIPTION: "Frontend Web Developer",
  EMAIL: "oguzhankusca@outlook.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Yazılımın birçok alanına ilgi duyan ve kendini bu alanlarda geliştirmek isteyen bir adamın blogu.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Şimdiye kadar yazdığım tüm yazılara buradan erişebilirsin.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "Öğrenme sürecimin en değerli parçası olan projelere buradan erişebilirsin.",
};

export const SOCIALS: Socials = [
  
  {
    NAME: "GitHub",
    HREF: "https://github.com/kuscadev",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/oguzhankusca/",
  },
  {
    NAME: "Bluesky",
    HREF: "https://bsky.app/profile/kuscadev.bsky.social"
  }
];
