import React from 'react';
import { Feature } from './featureItems';
import FeaturesContent from './FeatureContents';

interface FeatureSectionProps {
  features: Feature[];
  isAboutPage?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ features, isAboutPage = false }) => {
  return (
    <section className={`flex flex-col items-center justify-center px-0 md:px-6.67 py-10 ${
      isAboutPage ? 'lg:py-10' : 'lg:py-16'
    }`}>
      <div className="max-w-[1248px] w-full px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between w-full gap-5 lg:gap-0">
          <div className="lg:max-w-[440px] w-full">
            <div className="flex flex-col tracking-wider">
              <span className="font-jost font-medium text-lg leading-[27px]  text-primary-500">
                Features
              </span>
              <h2 className="font-notoSansJP font-medium text-2xl leading-[36px] text-primary-950">
                私たちの強み
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:max-w-[760px] w-full">
          {features.map((feature, title) => (
              <FeaturesContent
                key={title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default FeatureSection;