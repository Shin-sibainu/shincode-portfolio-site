import React from 'react';
import { Feature } from './featureItems';

export default function FeaturesContent({ title, description }: Feature) {
  return (
    <article className="grid grid-cols-[32px_1fr] gap-4">
      <span className="border-t border-primary-900 w-8 mt-[16px] lg:mt-[21px]"></span>
      <div className="flex flex-col justify-center gap-1 md:gap-[7px] font-notoSansJP tracking-wider text-primary-950">
        <h3 className="font-bold text-xl sm:text-2xl leading-[30px] sm:leading-[36px]">
          {title}
        </h3>
        <p className="font-medium text-base sm:text-lg leading-[26px] sm:leading-[29px]">
          {description}
        </p>
      </div>
    </article>
  );
};
