interface headerNavType {
  title: string;
  href: string;
  icon?: string;
};

export const pageLinks: headerNavType[] = [
  { title: "ABOUT", href: "#" },
  { title: "SERVICES", href: "#" },
  { title: "CONTACT", href: "#" },
];

export const snsLinks: headerNavType[] = [
  { title: "x", icon: "/header/x-icon.svg", href: "#" },
  { title: "youtube", icon: "/header/youtube-icon.svg", href: "#" },
  { title: "github", icon: "/header/github-icon.svg", href: "#" },
];