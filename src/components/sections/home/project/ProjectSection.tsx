import React from 'react';
import ProjectCard from './ProjectCards';
import { projects } from './ProjectItems';

const ProjectSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-10 md:py-16 w-full md:px-6.67">
      <div className="flex flex-col items-center px-6 max-w-[1248px] w-full">
        <div className="flex flex-col items-start gap-8 md:gap-12 w-full">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col items-center">
              <p className="font-jost font-medium text-lg leading-[27px] flex items-center tracking-wider text-primary-500">
                Projects
              </p>
              <h2 className="font-notoSansJP font-medium text-2xl leading-[36px] flex items-center tracking-wider text-primary-950">
                実績紹介
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-start gap-8 md:gap-[54px] w-full">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default ProjectSection;