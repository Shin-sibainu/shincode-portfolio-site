import MissionSection from '@/components/sections/about/MissionSection';
import ValueSection from '@/components/sections/about/ValueSection';
import { aboutFeatures } from '@/components/sections/shared/features/featureItems';
import FeatureSection from '@/components/sections/shared/features/FeatureSection';
import React from 'react';

const About = () => {
  return (
    <main>
      <MissionSection />
      <FeatureSection features={aboutFeatures} isAboutPage={true} />
      <ValueSection />
    </main>
  )
};

export default About;