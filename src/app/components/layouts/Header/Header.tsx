import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header className="bg-secondary-100 w-full h-[80px] flex items-center px-0 md:px-24">
      <div className="px-6 w-full h-full">
        <div className="border-b-2 border-solid border-white font-jost flex justify-between items-center h-full">
          <div className="font-medium text-primary-950 leading-6 text-left">
            <Link href="/">ShinCode_Camp</Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-6 px-6 h-6">
              <li className="flex py-[5px] gap-1">
                <Link href="#" className="font-jost font-medium text-sm leading-none tracking-wider text-left text-primary-950 duration-300 ease-out hover:opacity-60">ABOUT</Link>
              </li>
              <li className="flex py-[5px] gap-1">
                <Link href="#" className="font-jost font-medium text-sm leading-none tracking-wider text-left text-primary-950 duration-300 ease-out hover:opacity-60">SERVICES</Link>
              </li>
              <li className="flex py-[5px] gap-1">
              <Link href="#" className="font-jost font-medium text-sm leading-none tracking-wider text-left text-primary-950 duration-300 ease-out hover:opacity-60">CONTACT</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <nav>
              <ul className="flex gap-0 md:gap-2.5">
                <li className="w-9 h-9 p-2 flex items-center justify-center text-primary-950 hover:opacity-60">
                  <Link href="#" >
                    <Image
                      src="/header/x-icon.svg"
                      width={20}
                      height={20}
                      alt="x_link"
                    />
                  </Link>
                </li>
                <li className="w-9 h-9 p-2 flex items-center justify-center text-primary-950 hover:opacity-60">
                  <Image
                    src="/header/youtube-icon.svg"
                    width={20}
                    height={20}
                    alt="youtube_link"
                  />
                </li>
                <li className="w-9 h-9 p-2 flex items-center justify-center text-primary-950 hover:opacity-60">
                  <Image
                    src="/header/github-icon.svg"
                    width={20}
                    height={20}
                    alt="github_link"
                  />
                </li>
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