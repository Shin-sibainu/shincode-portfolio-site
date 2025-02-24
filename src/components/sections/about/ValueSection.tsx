import React from 'react';
import { values } from './valueItems';

const ValueSection = () => {
  return (
    <section className="flex flex-col justify-center items-center pt-10 md:pt-16 pb-16 md:pb-24 w-full md:px-6.67">
      <div className="flex flex-col px-6 max-w-[1248px] w-full">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col justify-center w-full">
            <div className="flex flex-col">
              <span className="font-jost font-medium text-lg leading-[27px] flex items-center tracking-wider text-primary-500">
                Values
              </span>
              <h2 className="font-notoSansJP font-medium text-2xl leading-[36px] flex items-center tracking-wider text-primary-950">
                私たちの価値観
              </h2>
            </div>
          </div>

          <div className="flex flex-col w-full border-t-[1px] border-primary-500">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-row lg:flex-wrap lg:items-center content-start py-4 lg:py-6 gap-4 lg:gap-9 w-full border-b-[1px] border-primary-500"
              >
                <div className="flex flex-col min-w-[48px] lg:min-w-[72px]">
                  <span
                    className="font-jost italic font-bold text-4xl lg:text-[52px] leading-[36px] lg:leading-[52px] flex items-center tracking-wider text-primary-300"
                  >
                    {value.number}
                  </span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-1 lg:gap-12">
                  <h3
                    className="font-notoSansJP font-bold text-2xl lg:text-[28px] leading-[36px] lg:leading-[42px] flex items-center tracking-wider text-primary-950"
                  >
                    {value.title}
                  </h3>
                  <p
                    className="font-notoSansJP font-medium text-base lg:text-lg leading-[26px] lg:leading-[29px] flex items-center tracking-wider text-primary-950"
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default ValueSection;
