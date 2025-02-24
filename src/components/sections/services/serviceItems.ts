export interface ServiceCardProps {
  title: string;
  description: string;
};

export interface ServiceItems {
  title: string;
  cards: ServiceCardProps[];
  theme: 'primary' | 'secondary';
};

export interface Reason {
  number: string;
  title: string;
  description: string;
};

export const serviceItems: ServiceItems[] = [
  {
    title: 'プログラミング教育サービス',
    theme: 'secondary',
    cards: [
      {
        title: 'オンライン学習',
        description: 'React, Next.js, TypeScript等の豊富な技術の基礎から応用まで幅広い教材を揃えています。\n受講者は、Discordサーバー内で講師に気軽に質問できます。'
      },
      {
        title: '個別メンタリング',
        description: '経験レベルに合わせた個別指導を行います。\n指導内容やご要望に応じて、テキストチャットでのコミュニケーションからZoom面談まで、柔軟な対応が可能です。'
      }
    ]
  },
  {
    title: 'Web開発サービス',
    theme: 'primary',
    cards: [
      {
        title: 'モダンWebサイト開発',
        description: '企業イメージを高める洗練されたデザインと充実した機能実装を行います。Three.jsを使用した3Dモデルの導入も可能です。\nSPA/SSG/SSRを適切に導入し、高速なサイトを開発します。'
      },
      {
        title: 'Webアプリケーション開発',
        description: 'ECサイト、チャットアプリケーション、生成AI系アプリなど多種多様なWebアプリケーション開発を行います。\nSaaS、ツールの選定や設計から実装まで行います。'
      }
    ]
  }
];

export const reasons: Reason[] = [
  {
    number: '01',
    title: '最新技術を駆使したサービス',
    description: 'トレンド技術を用いて、高品質な教育と開発サービスを提供しています。これによって、受講者は実際に現場で活用される技術を学ぶことが可能になります。'
  },
  {
    number: '02',
    title: 'パーソナライズされたサポート',
    description: '個別メンタリングやカスタマイズ対応により、ご要望に応じたサービスを提供します。経験レベルや目標に合わせて柔軟に対応し、最適なサポートを実現します。'
  },
  {
    number: '03',
    title: 'フルスタックの対応力',
    description: '設計から実装まで、一貫して対応するフルスタックの対応力を持っています。迅速かつ高品質なプロダクトを提供するために、アジャイル開発手法を採用しています。'
  }
];
