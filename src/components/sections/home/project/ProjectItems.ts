export interface ProjectDetail {
  label: string;
  content: string;
};

export interface Project {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  details: ProjectDetail[];
  buttonText: string;
  buttonHref: string;
  imagePosition: 'left' | 'right';
};

export const projects: Project[] = [
  {
    image: {
      src: '/home/projects-camp.webp',
      alt: 'プログラミング教育プラットフォームのスクリーンショット',
    },
    title: 'プログラミング教育プラットフォーム運営',
    details: [
      {
        label: '成果',
        content: '月額1980円の教育プラットフォームの利用アクティブ数115人/月',
      },
    ],
    buttonText: 'プラットフォームを見る',
    buttonHref: '#',
    imagePosition: 'right',
  },
  {
    image: {
      src: '/home/projects-portfolio.webp',
      alt: 'モダンWebサイト開発のポートフォリオ画像',
    },
    title: 'モダンWebサイト開発/Webアプリ開発',
    details: [
      {
        label: '使用技術',
        content: 'React/Next.js/Supabase/Prisma/TailwindCSS',
      },
      {
        label: '成果',
        content: 'コーポレートサイト構築/物販自動販売アプリの作成',
      },
    ],
    buttonText: '事業内容を見る',
    buttonHref: '#',
    imagePosition: 'left',
  },
  {
    image: {
      src: '/home/projects-youtube.webp',
      alt: 'プログラミング教育YouTubeチャンネルのサムネイル',
    },
    title: 'プログラミング教育YouTube',
    details: [
      {
        label: 'チャンネル登録者数',
        content: '40,000人突破',
      },
      {
        label: '内容',
        content: 'React, Next.js, TypeScriptなどを中心に最新技術の解説',
      },
    ],
    buttonText: 'YouTubeチャンネルを見る',
    buttonHref: '#',
    imagePosition: 'right',
  },
];
