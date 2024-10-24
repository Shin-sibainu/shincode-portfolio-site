interface IconSize {
  width: number;
  height: number;
}

interface SocialLinkType {
  icon: string;
  name: string;
  description: string;
  href: string;
  iconSize: IconSize;
}

interface NavLinkType {
  name: string;
  href: string;
}

export const socialLinks: SocialLinkType[] = [
  {
    icon: "/footer/x-icon.svg",
    name: "@Shin_Engineer",
    description: "公式Xをフォローすると最新情報を受け取ることができます。",
    href: "https://x.com/Shin_Engineer",
    iconSize: { width: 32, height: 29 },
  },
  {
    icon: "/footer/youtube-icon.svg",
    name: "@programming_tutorial_youtube",
    description: "Udemyのような中身の濃いプログラミング動画を定期的に配信しています。",
    href: "https://www.youtube.com/@programming_tutorial_youtube",
    iconSize: { width: 40, height: 40 },
  },
  {
    icon: "/footer/github-icon.svg",
    name: "@Shin-sibainu",
    description: "動画で解説したソースコードはGitHubで公開しています。",
    href: "https://github.com/Shin-sibainu",
    iconSize: { width: 36, height: 35 },
  }
];

export const navLinks: NavLinkType[] = [
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" }
];