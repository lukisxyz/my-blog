import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Fahmi Lukistriya",
  description:
    "a Web Developer from Indonesia with a year of experience building web apps.",
  href: "https://lukisxyz.vercel.app",
  author: "Fahmi Lukistriya.",
  locale: "id-ID",
};

export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: "/blog",
    label: "Blog",
  },
  projects: {
    path: "/projects",
    label: "Projects",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    href: "mailto:fahmilukis04@gmail.com",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/lukisxyz",
  },
  twitter: {
    label: "X (formerly Twitter)",
    href: "https://twitter.com/zerokiya",
  },
};
