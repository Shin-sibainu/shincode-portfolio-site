import LinkButton from '@/components/ui/link-button';
import React from 'react';

const MessageSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-0 md:px-6.67">
      <div className="px-6 max-w-[1248px] w-full">
        <div className="flex flex-col justify-center items-center py-10 sm:py-16 px-6 sm:px-12 gap-6 sm:gap-8 w-full sm:shadow-hero-message bg-white">
          <h2 className="font-jost font-medium text-lg leading-[27px] max-w-[900px] text-center tracking-wider text-primary-500">
            Welcome to Our Tech World
          </h2>
          <p className="font-notoSansJP font-medium text-base leading-[32px] max-w-[800px] sm:text-center tracking-wider text-primary-950">
            こんにちは、ShinCode_Camp代表のShinと申します。<br />
            Web開発経験を持つフルスタックエンジニアであり、<br className="hidden sm:block"/>
            同時にプログラミング教育者でもあります。<br />
            React、Next.js、TypeScriptなどの最新技術に精通し、<br className="hidden sm:block"/>
            これらを活用した効果的なWeb開発とプログラミング教育を提供しています。
          </p>
          <div className="flex justify-center items-center w-full">
            <LinkButton
              href="#"
              text="私たちについて"
              variant="default"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MessageSection;