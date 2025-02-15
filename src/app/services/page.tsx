import Contact from '@/components/layouts/Contact/Contact';
import { reasons, serviceItems } from '@/components/sections/services/serviceItems';
import { ReasonCard, ServiceCard } from '@/components/sections/services/ServicesSection';
import React from 'react';

const Services = () => {
  return (
    <main>
      <div className="flex flex-col justify-center items-center pt-10 md:pt-16 pb-16 md:pb-24 w-full md:px-6.67">
        <div className="flex flex-col items-start px-6 max-w-[1248px] w-full">
          <div className="flex flex-col items-start gap-6 md:gap-10 w-full">
            <div className="flex flex-col justify-center items-start gap-6 w-full">
              <div className="flex flex-col items-start">
                <span className="font-jost font-medium text-lg leading-[27px] flex items-center tracking-wider text-primary-500">
                  Services
                </span>
                <h2 className="font-notoSansJP font-medium text-2xl leading-[36px] flex items-center tracking-wider text-primary-950">
                  事業内容
                </h2>
              </div>
            </div>

            <div className="flex flex-col items-center gap-14 md:gap-24 w-full">
              <div className="flex flex-col items-start gap-12 w-full">
                {serviceItems.map((serviceItem) => (
                  <section
                    key={serviceItem.title}
                    className="flex flex-col items-start gap-5 md:gap-6 w-full"
                  >
                    <h2 className={`font-notoSansJP font-bold text-xl leading-[32px] flex items-center tracking-wider text-${serviceItem.theme}-950`}>
                      {serviceItem.title}
                    </h2>
                    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-20 w-full">
                      {serviceItem.cards.map((card) => (
                        <ServiceCard
                          key={card.title}
                          title={card.title}
                          description={card.description}
                          theme={serviceItem.theme}
                        />
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <section className="flex flex-col justify-center items-center gap-6 md:gap-10 w-full rounded-[2px]">
                <div className="font-notoSansJP font-medium text-xl md:text-2xl leading-[32px] md:leading-[39px] flex flex-col items-center text-center tracking-wider text-primary-950">
                  <h2>
                    <span className="font-jost">ShinCode_Camp</span>が<br className="block md:hidden"/>選ばれる理由
                  </h2>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-6 w-full">
                  {reasons.map((reason) => (
                    <ReasonCard key={reason.number} {...reason} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </main>
  )
};

export default Services;
