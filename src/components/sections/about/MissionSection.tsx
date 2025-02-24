import React from 'react';

interface BorderProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const BorderDecoration = ({ position }: BorderProps) => {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0'
  };

  return (
    <div className={`absolute ${positionClasses[position]}`}>
      <div className={`absolute ${positionClasses[position]} w-[100px] md:w-[200px] h-[2px] bg-primary-500`} />
      <div className={`absolute ${positionClasses[position]} w-[2px] h-[100px] bg-primary-500`} />
    </div>
  );
};

const MissionSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 md:py-14 w-full md:px-6.67">
      <div className="flex flex-col items-start px-6 max-w-[1248px] w-full">
        <div className="w-full relative py-[2px]">
          <BorderDecoration position="top-left" />
          <BorderDecoration position="top-right" />
          <BorderDecoration position="bottom-left" />
          <BorderDecoration position="bottom-right" />

          <div className="flex flex-col items-center pt-[50px] pb-20 px-6 md:px-0 gap-2 w-full">
            <p className="font-jost font-medium text-xl leading-[30px] flex text-center tracking-wider text-primary-500">Mission</p>
            <h2 className="font-notoSansJP font-bold text-xl md:text-[28px] leading-[33px] md:leading-[46px] flex items-center text-center tracking-wider text-primary-950">
            「最新技術で実現する、効果的なプログラミング教育とWeb開発」を通じて、<br/>
            個人のスキルアップと企業の成長を支援します。
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
};

export default MissionSection;
