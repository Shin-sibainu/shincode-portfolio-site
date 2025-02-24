import React from 'react';
import { Skill } from './skillItems';
import Image from 'next/image';

const SkillCard = ({ skill }: { skill: Skill}) => {
  const minHeight = !['Postgresql', 'CMS'].includes(skill.title);

  return (
    <div className={`${minHeight ? 'min-h-[138px]' : ''} border-l-[1px] border-primary-700`}>
      <div className="flex flex-col items-start pl-6 gap-1 max-w-[360px]">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            {skill.icons.map((icon) => (
              <Image
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                width={32}
                height={32}
                aria-hidden="true"
                className="flex items-center justify-center h-8 w-8"
              />
            ))}
          </div>
          <div className="flex flex-col pb-1">
            <p className="font-notoSansJP font-bold text-xs leading-[18px] flex items-center tracking-wider text-primary-700">
              {skill.category}
            </p>
            <h3 className="font-jost font-medium text-xl leading-[30px] flex items-center tracking-wider text-primary-950">
              {skill.title}
            </h3>
          </div>
        </div>
        <p className="font-notoSansJP font-medium text-sm leading-[21px] flex items-center tracking-wider text-primary-950">
          {skill.description}
        </p>
      </div>
    </div>
  )
};

export default SkillCard;
