import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import LinkButton from '@/components/ui/link-button';
import { Project } from './ProjectItems';

interface ProjectCardProps {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { image, title, details, buttonText, buttonHref, imagePosition } = project;
  const marginBottom = index === 0 ? 'md:mb-[50px]' : 'md:mb-[52px]';
  const gap = index === 0 ? '' : 'gap-4 md:gap-5';

  return (
    <article className="flex flex-col md:flex-row w-full relative">
      {imagePosition === 'left' && <div className="hidden md:block w-[343px]" />}
      <div className={`
        md:absolute md:bottom-0 md:w-[44%] lg:w-[40%]
        ${imagePosition === 'left' ? 'md:left-0' : 'md:right-0'} 
      `}>
        <Image
          src={image.src}
          width={480}
          height={270}
          alt={image.alt}
          className="w-full object-cover bg-secondary-300 shadow-social-link"
          priority
          sizes="(max-width: 640px) 100vw, 600px"
        />
      </div>
      <div className={clsx(
        'flex flex-col justify-center items-start',
        'py-10 px-6 md:py-12',
        'gap-4 md:gap-8',
        'w-full bg-white',
        marginBottom,
        imagePosition === 'left' ? [
          'md:pl-36 lg:pl-[195px]',
          'max-w-[857px]'
        ] : [
          'md:px-12',
          'max-w-[848px]',
          'md:w-[70.67%]'
        ]
      )}>
        <h3 className="font-notoSansJP font-bold text-lg md:text-2xl leading-[29px] md:leading-[39px] flex items-center tracking-wider text-primary-950">
          {title}
        </h3>
        <div className="flex">
          <div className="flex flex-col items-start gap-3 md:gap-8">
            <div className={clsx(
              'flex flex-col items-start',
              gap,
            )}>
              {details.map((detail) =>(
                <div key={detail.label} className="flex flex-col items-start gap-1 w-full">
                  <div className="flex justify-center items-center py-[1px] px-3 bg-secondary-700 rounded-[20px]">
                    <p className="font-notoSansJP font-medium text-[10px] md:text-xs leading-[15px] md:leading-[18px] flex items-center tracking-wider text-white">
                      {detail.label}
                    </p>
                  </div>
                  <p className="font-notoSansJP font-medium text-sm md:text-lg leading-[21px] md:leading-[27px] flex items-center tracking-wider text-primary-950 break-all">
                    {detail.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center md:py-1">
              <LinkButton
                href={buttonHref}
                text={buttonText}
                variant="underline"
              />
            </div>
          </div>
          {imagePosition === 'right' && <div className="hidden md:block w-40" />}
        </div>
      </div>
    </article>
  )
};

export default ProjectCard;
