import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { navLinks, socialLinks } from './hooterLinks';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full pt-10 md:pt-12 pb-6 md:pb-8 px-0 md:px-6.67 bg-white">
      <div className="flex flex-col w-full max-w-[1248px] px-6 md:gap-8 gap-6">
        <section aria-label="social links" className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full justify-items-center md:gap-[2%]">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center py-4 px-6 md:p-2 lg:p-6 gap-5 md:gap-2 lg:gap-5 w-full max-w-[380px] border border-secondary-300 transition-all duration-300 ease-out hover:shadow-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${link.name} page`}
            >
              <figure className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <Image
                  src={link.icon}
                  width={link.iconSize.width}
                  height={link.iconSize.height}
                  alt={`${link.name} icon`}
                  className="w-auto h-auto"
                />
              </figure>
              <div className="flex flex-col gap-2 break-all break-words">
                <h3 className="font-notoSansJP font-bold text-base leading-6 text-primary-950">
                  {link.name}
                </h3>
                <p className="font-notoSansJP font-medium text-sm leading-[21px] text-primary-950">
                  {link.description}
                </p>
              </div>
            </Link>
          ))}
        </section>

        <div className="flex flex-col md:flex-row justify-between items-center md:pt-8 md:border-t md:border-secondary-300 w-full">
          <Link href="/" className="font-jost font-medium text-base leading-6 text-primary-950 hidden md:block">
            ShinCode_Camp
          </Link>
          <nav aria-label="footer navigation" className="hidden md:block">
            <ul className="flex py-[5px] gap-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-jost font-medium text-sm leading-[14px] tracking-wider text-primary-950 duration-300 ease-out hover:opacity-60"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <small className="font-jost font-medium text-xs leading-[18px] text-secondary-700">
            @ ShinCode_Camp
          </small>
        </div>
      </div>
    </footer>
  )
};

export default Footer;