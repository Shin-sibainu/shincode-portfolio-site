import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { navLinks, socialLinks } from './hooterLinks';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full pt-12 pb-8 px-24 bg-white">
      <div className="flex flex-col w-full max-w-[1248px] px-6 gap-8">
        <section aria-label="social links" className="grid grid-cols-3 gap-[2%] w-full">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center p-6 gap-5 max-w-[380px] border border-secondary-300"
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

        <div className="flex justify-between items-center pt-8 border-t border-secondary-300 w-full">
          <Link href="/" className="font-jost font-medium text-base leading-6 text-primary-950">
            ShinCode_Camp
          </Link>
          <nav aria-label="footer navigation">
            <ul className="flex py-[5px]  gap-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-jost font-medium text-sm leading-[14px] tracking-wider text-primary-950"
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