import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center py-10 xl:py-6 md:px-6.67 w-full">
      <div className="max-w-[1248px] w-full px-6">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-0 w-full">
          <div className="flex flex-col gap-4 xl:gap-6 font-notoSansJP text-primary-950">
            <h1 className="font-bold text-[22px] sm:text-[40px] leading-[36px] sm:leading-[65px] tracking-wider lg:max-w-[554px]">
              最新技術と教育の融合で、
              <br className="block lg:hidden xl:block" />
              あなたのWeb開発をサポート
            </h1>
            <p className="font-medium text-base sm:text-lg leading-[26px] sm:leading-[29px] tracking-wider lg:max-w-[513px]">
              豊富なWeb開発経験を持つ現役フルスタックエンジニアが、
                <br className="hidden sm:block lg:hidden" />
              皆様のスキルアップや事業成長を支援します。
            </p>
          </div>

          <div>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/home/hero-responsive.webp"
              />
              <Image
                src="/home/hero.webp"
                width={600}
                height={500}
                sizes="(max-width: 640px) 100vw, 600px"
                alt="hero image"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;