export interface Feature {
  title: string;
  description: string;
}

export interface FeaturesSectionProps {
  features: Feature[];
}

export const homeFeatures = [
  {
    title: "高度な技術力",
    description: "常に最新のWeb技術をキャッチアップし、実践しています。"
  },
  {
    title: "分かりやすい教育",
    description: "複雑な概念を初心者にも理解しやすく説明する能力があります。"
  },
  {
    title: "クライアントニーズへの対応",
    description: "個人学習者から企業まで、多様なニーズに合わせたソリューションを提供します。"
  }
];

export const aboutFeatures = [
  {
    title: "技術力と教育力の融合",
    description: "高度な開発スキルと分かりやすい指導力を兼ね備えています。"
  },
  {
    title: "最新技術への精通",
    description: "React, Next.js, TypeScriptなど、最新のWeb技術を常にキャッチアップ。"
  },
  {
    title: "実績に基づく信頼性",
    description: "多数の個人学習者とクライアントからの高い評価。"
  }
];
