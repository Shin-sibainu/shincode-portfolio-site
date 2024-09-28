import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import { pageLinks, snsLinks } from './headerNav';

const Header = () => {
  return (
    <header className="bg-secondary-100 w-full h-[80px] flex items-center px-0 md:px-6.67 fixed z-50">
      <div className="px-6 w-full h-full text-primary-950">
        <div className="border-b-2 border-solid border-white font-jost flex justify-between items-center h-full">
          <div className="font-medium leading-6 text-left">
            <Link href="/">ShinCode_Camp</Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-6 px-6 h-6">
              {pageLinks.map((pageLink) => (
                <li key={pageLink.title} className="flex py-[5px] gap-1">
                  <Link
                    href={pageLink.href}
                    className="font-jost font-medium text-sm leading-none tracking-wider text-left duration-300 ease-out hover:opacity-60"
                  >
                    {pageLink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center">
            <nav>
              <ul className="flex gap-0 md:gap-2.5">
                {snsLinks.map((snsLink) => (
                  <li key={snsLink.title} className="w-9 h-9 p-2 flex items-center justify-center hover:opacity-60">
                    <Link href={snsLink.href}>
                      <Image
                        src={snsLink.icon!}
                        width={20}
                        height={20}
                        alt={`${snsLink.title}_link`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="md:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;