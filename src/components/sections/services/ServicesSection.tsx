import { Reason, ServiceCardProps } from "./serviceItems";

interface ServiceCardThemeProps extends ServiceCardProps {
  theme: 'primary' | 'secondary';
}

export const ServiceCard = ({ title, description, theme }: ServiceCardThemeProps) => (
  <div className={`flex flex-col items-start pl-6 gap-2 md:gap-4 border-l-[1px] ${
    theme === 'primary' ? 'border-primary-700' : 'border-secondary-700'
  } md:max-w-[560px] flex-1`}>
    <div className="flex flex-col items-start gap-2">
      <div className="flex flex-row items-start gap-2.5">
        <h3 className={`font-notoSansJP font-bold text-xl leading-[30px] flex items-center tracking-wider ${
          theme === 'primary' ? 'text-primary-700' : 'text-secondary-700'
        }`}>
          {title}
        </h3>
      </div>
    </div>
    <p className={`font-notoSansJP font-medium text-base leading-[26px] tracking-wider ${
      theme === 'primary' ? 'text-primary-950' : 'text-secondary-950'
    } min-w-[303px] md:min-w-fit whitespace-pre-line`}>
      {description}
    </p>
  </div>
);

export const ReasonCard = ({ number, title, description }: Reason) => (
  <article className="flex flex-col justify-center items-start sm:items-center md:items-start gap-3 md:max-w-[360px] flex-1">
    <p className="font-jost italic font-bold text-[32px] md:text-5xl leading-[32px] md:leading-[48px] flex items-center tracking-wider text-primary-300">
      {number}
    </p>
    <div className="flex flex-col items-start sm:items-center md:items-start gap-3">
      <h3 className="font-notoSansJP font-bold text-lg md:text-xl leading-[27px] md:leading-[30px] flex items-center md:items-start lg:items-center tracking-wider text-primary-950 md:min-h-[60px] lg:min-h-fit">
        {title}
      </h3>
      <p className="font-notoSansJP font-medium text-base leading-[26px] flex items-center tracking-wider text-primary-950">
        {description}
      </p>
    </div>
  </article>
);
