interface HeaderLinkType {
  title: string;
  href: string;
  icon?: string;
};

export const pageLinks: HeaderLinkType[] = [
  { title: "ABOUT", href: "/about" },
  { title: "SERVICES", href: "/services" },
  { title: "CONTACT", href: "/contact" },
];

export const snsLinks: HeaderLinkType[] = [
  { 
    title: "x",
    icon: "/header/x-icon.svg",
    href: "https://x.com/Shin_Engineer"
  },
  { 
    title: "youtube",
    icon: "/header/youtube-icon.svg",
    href: "https://www.youtube.com/@programming_tutorial_youtube"
  },
  {
    title: "github",
    icon: "/header/github-icon.svg",
    href: "https://github.com/Shin-sibainu"
  },
];