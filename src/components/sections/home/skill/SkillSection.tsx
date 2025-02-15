import React from 'react';
import SkillCard from './SkillCard';
import { skills } from './skillItems';

const SkillSection = () => {
  return (
    <section className="flex flex-col justify-center items-center pt-10 md:pt-16 pb-16 md:pb-24 w-full md:px-6.67">
      <div className="flex flex-col items-start px-6 max-w-[1248px] w-full">
        <div className="flex flex-col items-start gap-10 w-full">
          <div className="flex flex-col justify-center items-start gap-6 w-full">
            <div className="flex flex-col items-start">
              <p className="font-jost font-medium text-lg leading-[27px] flex items-center tracking-wider text-primary-500">
                Skills
              </p>
              <h2 className="font-notoSansJP font-medium text-2xl leading-[36px] flex items-center tracking-wider text-primary-950">
                使用技術紹介
              </h2>
            </div>
            <p>
              常に最新技術のトレンドをキャッチアップし、プロジェクトに最適な技術を選択・適用しています。<br />
              主な採用技術の一例です。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full">
            {skills.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default SkillSection;
