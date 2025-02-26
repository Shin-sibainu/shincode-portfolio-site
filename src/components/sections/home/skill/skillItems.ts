export interface Skill {
  icons: { src: string; alt: string }[];
  category: string;
  title: string;
  description: string;
};

export const skills: Skill[] = [
  {
    icons: [
      { src: "/home/skillsIcon/react.svg", alt: "React" },
      { src: "/home/skillsIcon/nextjs.svg", alt: "Next.js" }
    ],
    category: "フロンドエンド",
    title: "React & Next.js",
    description: "SPAとSSRを組み合わせた高速で SEO フレンドリーなWebアプリケーション開発"
  },
  {
    icons: [
      { src: "/home/skillsIcon/typescript.svg", alt: "TypeScript" },
    ],
    category: "フロンドエンド",
    title: "TypeScript",
    description: "型安全性を確保し、バグを未然に防ぐ堅牢なコード開発"
  },
  {
    icons: [
      { src: "/home/skillsIcon/tailwindcss.svg", alt: "TailwindCSS" },
    ],
    category: "フロンドエンド",
    title: "Tailwind CSS",
    description: "効率的かつカスタマイズ性の高いスタイリング"
  },
  {
    icons: [
      { src: "/home/skillsIcon/nextjs.svg", alt: "NextJS" },
    ],
    category: "バックエンド",
    title: "Next.js API Route",
    description: "軽量なアプリの場合はNext.js API Routeを利用"
  },
  {
    icons: [
      { src: "/home/skillsIcon/hono.svg", alt: "Hono" },
    ],
    category: "バックエンド",
    title: "Hono",
    description: "高速で動くJavascriptベースAPI"
  },
  {
    icons: [
      { src: "/home/skillsIcon/supabase.svg", alt: "Supabase" },
    ],
    category: "バックエンド",
    title: "Supabase",
    description: "認証からDB管理までをまとめて管理するBaasの利用"
  },
  {
    icons: [
      { src: "/home/skillsIcon/postgresql.svg", alt: "Postgresql" },
    ],
    category: "データベース",
    title: "Postgresql",
    description: "Supabaseに導入されているDBをそのまま利用"
  },
  {
    icons: [
      { src: "/home/skillsIcon/cms.svg", alt: "CMS" },
    ],
    category: "データベース",
    title: "CMS",
    description: "ブログコンテンツ等はMicroCMS等を利用"
  },
];
